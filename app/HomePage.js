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
    key: "paid-media",
    title: "Paid Media",
    description:
      "We plan, launch, and scale paid media across search and paid social. Campaigns are structured for clarity, tracked properly, and optimized continuously. No channel chasing, no random tests, just focused execution designed to compound over time.",
    Icon: IconProduct,
  },
  {
    key: "conversion-funnel-optimization",
    title: "Conversion & Funnel Optimization",
    description:
      "Paid traffic only works when the funnel works. We audit and improve every step, from ad click to conversion. Messaging, layouts, forms, and flows are optimized to reduce friction, improve conversion rates, and lower acquisition costs.",
    Icon: IconWeb,
  },
  {
    key: "marketing-strategy-direction",
    title: "Marketing Strategy & Direction",
    description:
      "We help teams decide what to focus on, and what not to. From channel strategy to budget allocation and testing roadmaps, we bring structure to marketing decisions so execution is aligned with business goals.",
    Icon: IconStrategy,
  },
  {
    key: "team-setup-enablement",
    title: "Team Setup & Enablement",
    description:
      "As an extended team, we help hire, onboard, and enable internal marketers when it’s time to scale. That includes processes, playbooks, and hands-on support so paid media doesn’t break as the company grows.",
    Icon: IconMotion,
  },
  {
    key: "advisory-consulting",
    title: "Advisory & Consulting",
    description:
      "For teams that need direction, validation, or a reset. We review accounts, funnels, and strategy, help unblock decisions, and give clear next steps. Best suited for founders or teams that need experienced perspective, not another agency.",
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
          headlineLines={[
            "Paid media for startups that need results, not noise.",
          ]}
        />
        <ScrollReveal>
          <ClientsLogosCarousel title="Worked with teams at" />
        </ScrollReveal>

        <MotionTitleBlock
          title="Results"
          subtitle="Performance over promises. Here’s a snapshot of work we’ve done."
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
            title="What we do"
            subtitle="We take ownership of paid growth, from strategy to execution."
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
          subtitle="Thoughts on paid media, growth, and what we’re learning along the way."
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
          subtitle="Notes, experiments, and lessons from teams actually running paid media and growth."
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
