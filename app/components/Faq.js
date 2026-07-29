"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useId, useState } from "react";
import {
  scrollRevealDistance,
  scrollRevealDuration,
  scrollRevealEase,
  scrollRevealStagger,
  scrollRevealStaggerDelay,
  scrollRevealViewport,
} from "../../lib/scrollReveal";
import styles from "./Faq.module.css";
import ScrollReveal from "./ScrollReveal";
import Title from "./Title";

const easeOut = [0.22, 1, 0.36, 1];

const faqListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: scrollRevealStagger,
      delayChildren: scrollRevealStaggerDelay,
    },
  },
};

const faqItemVariants = {
  hidden: { opacity: 0, y: scrollRevealDistance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: scrollRevealDuration, ease: scrollRevealEase },
  },
};

const FAQS = [
  {
    question: "What kind of startups do you work with?",
    answer:
      "Early- and growth-stage teams with traction that need senior growth leadership but aren’t ready to hire a full-time VP. We own a limited number of seats at a time.",
  },
  {
    question: "Are you an agency?",
    answer:
      "No. An agency takes a brief and hands back deliverables. We step into the growth seat, make the calls, and own the outcome, the way a senior in-house leader would.",
  },
  {
    question: "What exactly do you take over?",
    answer:
      "The whole go-to-market: positioning, channel strategy, paid, funnel, and roadmap. Paid is where we start, but we own the function, not one channel.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Usually 1 to 2 weeks. We take the seat and audit first, then scale, rather than pouring budget into a broken structure.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Monthly partnerships with a short initial commitment. No year-long lock-ins, and if the numbers don’t show a clean path to profit, we’ll tell you upfront.",
  },
];

function AskArrowIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Arrow</title>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusMinusIcon({ open, reduceMotion }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Toggle</title>
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{
          opacity: open ? 0 : 1,
          scaleY: open ? 0 : 1,
        }}
        style={{ transformOrigin: "center" }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut }
        }
      />
    </svg>
  );
}

function FaqItem({ question, answer, initialOpen }) {
  const [open, setOpen] = useState(initialOpen ?? false);
  const contentId = useId();
  const reduceMotion = useReducedMotion() === true;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.question}>{question}</span>
        <span className={styles.iconWrap}>
          <motion.span
            className={styles.iconInner}
            initial={false}
            animate={{ rotate: reduceMotion ? 0 : open ? 180 : 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut }
            }
          >
            <PlusMinusIcon open={open} reduceMotion={reduceMotion} />
          </motion.span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            className={styles.panel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={
              reduceMotion
                ? { duration: 0.2, ease: easeOut }
                : {
                    height: { duration: 0.35, ease: easeOut },
                    opacity: { duration: 0.25, ease: easeOut },
                  }
            }
            style={{ overflow: "hidden" }}
          >
            <div className={styles.panelInner}>
              <p className={styles.answer}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const reduceMotion = useReducedMotion() === true;

  const listContent = FAQS.map((item, index) => {
    const faqItem = (
      <FaqItem
        key={item.question}
        initialOpen={index === 0}
        question={item.question}
        answer={item.answer}
      />
    );

    return reduceMotion
      ? <li key={item.question} className={styles.listItem}>
          {faqItem}
        </li>
      : <motion.li
          key={item.question}
          className={styles.listItem}
          variants={faqItemVariants}
        >
          {faqItem}
        </motion.li>;
  });

  return (
    <section className={styles.root} aria-labelledby="faq-title">
      <ScrollReveal className={styles.titleContainer}>
        <Title
          title={
            <>
              Got questions?
              <br />
              We’ve got answers.
            </>
          }
          width={480}
        />
      </ScrollReveal>
      {reduceMotion
        ? <ul className={styles.list}>{listContent}</ul>
        : <motion.ul
            className={styles.list}
            variants={faqListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
          >
            {listContent}
          </motion.ul>}
      <ScrollReveal delay={0.24}>
        <div className={styles.rootInner}>
          <p className={styles.followUpText}>Still have questions?</p>
          <Link href="/#contact" className={styles.askLink}>
            <span>Ask us directly</span>
            <AskArrowIcon className={styles.askArrow} />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
