"use client";

import Image from "next/image";
import { useState } from "react";
import frctnlLogo from "../assets/frctnl-logo.svg";
import styles from "./ContactForm.module.css";

export const MESSAGE_MAX_LENGTH = 4000;

/**
 * @param {{ onSubmit?: (data: { email: string; text: string }) => void }} props
 */
export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot: real users never see or fill this field, bots do.
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) return;

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: trimmedName,
            email: trimmedEmail,
            text: trimmedMessage,
            company,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      if (typeof onSubmit === "function") {
        onSubmit({ name: trimmedName, email: trimmedEmail, text: trimmedMessage });
      }
    } catch {
      setError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={styles.outer}
      aria-labelledby="contact-form-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="contact-form-title" className={styles.title}>
            Tell us about your business.
          </h2>
          <p className={styles.subtitle}>
            If it looks like a fit, we’ll follow up to explore working
            together.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Name"
            className={styles.field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="@ Email"
            className={styles.field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <textarea
            name="message"
            placeholder="Message"
            className={`${styles.field} ${styles.textarea}`.trim()}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            rows={5}
            maxLength={MESSAGE_MAX_LENGTH}
          />
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: 1,
              height: 1,
              opacity: 0,
            }}
          />
          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting}
          >
            Start the conversation
          </button>
        </form>

        {error ? <p className={styles.statusError}>{error}</p> : null}
        {success ? <p className={styles.statusSuccess}>Message sent.</p> : null}

        <footer className={styles.footer}>
          <p className={styles.chatLabel}>Not a fan of forms?</p>
          <p className={styles.phone}>
            <a className={styles.phoneLink} href="tel:+38641962522">
              (+386) 41 962 522
            </a>
          </p>
          <p className={styles.email}>
            <a className={styles.emailLink} href="mailto:hello@frctnl.agency">
              hello@frctnl.agency
            </a>
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </footer>
      </div>
      <div className={styles.createdBy}>
        <p className={styles.disclaimer}>Created by</p>
        <Image
          src={frctnlLogo}
          alt="Digitl"
          width={32}
          height={32}
          className={styles.logo}
        />
        <p className={styles.disclaimerBold}>Digitl</p>
      </div>
    </section>
  );
}
