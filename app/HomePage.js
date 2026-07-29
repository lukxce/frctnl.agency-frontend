"use client";

import AvatarInfo from "./components/AvatarInfo";
import ClientsLogosCarousel from "./components/ClientsLogosCarousel";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import HeroCard from "./components/HeroCard";
import JournalList from "./components/JournalList";
import LinkCard from "./components/LinkCard";
import MotionTitleBlock from "./components/MotionTitleBlock";
import ScrollReveal from "./components/ScrollReveal";
import ServiceItem from "./components/ServiceItem";
import StepProcess from "./components/StepProcess";
import Subscribe from "./components/Subscribe";
import {
  IconBrand,
  IconMotion,
  IconProduct,
  IconStrategy,
  IconWeb,
} from "./components/serviceIcons";
import styles from "./page.module.css";

const services = [
  {
    key: "growth-strategy-gtm",
    title: "Growth Strategy & GTM Direction",
    description:
      "The seat itself. We make the calls on positioning, priorities, and where growth comes from.",
    Icon: IconStrategy,
  },
  {
    key: "paid-media",
    title: "Paid Media",
    description:
      "Our sharpest tool. We launch and scale paid search and social, structured around revenue.",
    Icon: IconProduct,
  },
  {
    key: "conversion-funnel-optimization",
    title: "Conversion & Funnel Optimization",
    description:
      "We own the path from first touch to customer, so more demand turns into revenue.",
    Icon: IconWeb,
  },
  {
    key: "systems-enablement",
    title: "Systems & Enablement",
    description:
      "We build the growth machine so it keeps running, with us or your first in-house hire.",
    Icon: IconMotion,
  },
  {
    key: "advisory-consulting",
    title: "Advisory & Consulting",
    description:
      "The lighter version. Operator-level direction and audits when you don’t need the full seat.",
    Icon: IconBrand,
  },
];

export default function HomePage({ articles = [], showcases = [] }) {
  return (
    <div className={styles.page}>
      <main className={styles.main} data-article-count={articles.length}>
        <HeroCard
          primaryCtaHref="/contact"
          secondaryCtaHref="/#how-we-work"
        />
        <ScrollReveal>
          <ClientsLogosCarousel title="Worked with teams at" />
        </ScrollReveal>

        <MotionTitleBlock
          title="Numbers, not promises"
          subtitle="A snapshot of what we’ve owned and moved."
          subtitleWidth={270}
          subtitleWidthMobile={200}
          className={styles.titleContainer}
          marginTop={10}
        />

        <div className={styles.cardColumn}>
          {showcases.map((card) => (
            <LinkCard
              key={card.id ?? card.title}
              href={card.href}
              backgroundSrc={card.backgroundSrc}
              backgroundAlt={card.backgroundAlt}
              thumbSrc={card.thumbSrc}
              thumbAlt={card.thumbAlt}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>

        <div id="what-we-do" style={{ scrollMarginTop: "20px" }}>
          <MotionTitleBlock
            title="What we own"
            subtitle="We don't take a brief and hand back deliverables. We take the seat and own the function."
            className={styles.titleContainer}
            subtitleWidth={260}
            widthMobile={200}
          />

          <div className={styles.servicesList}>
            {services.map(({ key, title, description, Icon }, index) => (
              <ScrollReveal key={key} delay={index * 0.08}>
                <ServiceItem
                  icon={<Icon />}
                  title={title}
                  description={description}
                  initialOpen={index === 0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div id="how-we-work" style={{ scrollMarginTop: "20px" }}>
          <ScrollReveal>
            <StepProcess />
          </ScrollReveal>
        </div>

        {/* <MotionTitleBlock
          title="My toolkit, your advantage"
          subtitle="See how my expertise with these tools drives better results."
          className={styles.titleContainer}
        />

        <ScrollReveal>
          <ToolsList />
        </ScrollReveal>

        <ScrollReveal>
          <Years />
          <div className={styles.journeyContainer}>
            <h2 className={styles.journeyTitleTitle}>My journey through design</h2>
            <p className={styles.journeyTitleSubtitle}>
              Explore the milestones and experiences that have shaped my career,
              year by year.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <DesignJourneyTable />
        </ScrollReveal> */}

        {/* <MotionTitleBlock
          title="Trusted by our clients"
          subtitle="<b>What clients say</b> <br> about working with us."
          hasImage={true}
          width={520}
          className={styles.titleContainer}
        />

        <PhoneInHand /> */}

        {/* <MotionTitleBlock
          title="Flexible plans for every need"
          subtitle="Whether you’re starting fresh or need a complete overhaul, choose the plan that fits your project."
          width={425}
          subtitleWidth={350}
          widthMobile={300}
          subtitleWidthMobile={350}
          className={styles.titleContainer}
        />

        <ScrollReveal>
          <PricingPlans />
        </ScrollReveal> */}

        <div id="faq">
          <ScrollReveal>
            <Faq />
          </ScrollReveal>
        </div>

        {/* <CtaWithImageBackground /> */}

        <MotionTitleBlock
          width={500}
          title="Journal"
          subtitle="Notes on go-to-market, scaling growth, and what we learn owning the seat inside early-stage startups."
          subtitleWidth={310}
          subtitleWidthMobile={300}
          marginTop={80}
          className={styles.titleContainer}
        />

        <JournalList
          items={articles.map((a) => ({
            slug: a.slug,
            title: a.title,
            publishedAt: a.publishedAt,
            imageUrl: a.coverUrl,
          }))}
        />

        <MotionTitleBlock
          title="Insights from inside growing startups"
          subtitle="GTM breakdowns, experiments, and lessons from actually owning growth at this stage."
          width={600}
          subtitleWidth={425}
          subtitleWidthMobile={350}
          className={styles.titleContainer}
        />

        <ScrollReveal>
          <ClientsLogosCarousel />
        </ScrollReveal>

        <ScrollReveal>
          <Subscribe />
        </ScrollReveal>

        <ScrollReveal style={{ scrollMarginTop: "0px" }}>
          <AvatarInfo />
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
    </div>
  );
}
