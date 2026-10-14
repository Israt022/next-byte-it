"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/component/shared/Reveal";

const contactDetails = [
  {
    label: "Email us",
    value: "hello@next.it.com",
    href: "mailto:hello@yourcompany.com",
    icon: "email",
  },
  {
    label: "Call us",
    value: "+880 1234-567890",
    href: "tel:+8801234567890",
    icon: "phone",
  },
  {
    label: "Our location",
    value: "Bangladesh",
    href: null,
    icon: "location",
  },
] as const;

const ContactIcon = ({ name }: { name: string }) => {
  const paths: Record<string, React.ReactNode> = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-300 dark:focus:ring-cyan-300/10";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Project inquiry from ${data.get("name")}`
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n` +
        `Service: ${data.get("service")}\n\n` +
        `Message:\n${data.get("message")}`
    );

    // Opens the visitor's configured email application.
    // Replace this with a backend/email API for direct delivery.
    window.location.href =
      `mailto:hello@yourcompany.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-white py-20 sm:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-cyan-300/20 dark:bg-slate-900 dark:text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-cyan-300" />
            Contact us
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let&apos;s build something
            <span className="text-indigo-600 dark:text-cyan-300">
              {" "}great together.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
            Have a project in mind or looking for the right
            technology partner? Tell us about your idea.
            We&apos;d love to hear from you.
          </p>
        </Reveal>

        {/* Contact content */}
        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left panel */}
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9 dark:border-white/10 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-300">
                Get in touch
              </p>

              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Have a challenge?
                <br />
                We&apos;re here to help.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Share your goals with us. Whether you need a
                website, a web application, or technical support,
                let&apos;s explore the right solution together.
              </p>

              <div className="mt-9 space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-indigo-600 dark:border-white/10 dark:bg-slate-800 dark:text-cyan-300">
                      <ContactIcon name={item.icon} />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-block break-all text-sm font-semibold text-slate-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-cyan-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Prefer email?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Send us your project requirements and we can
                  take it from there.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right panel: form */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 dark:border-white/10 dark:bg-slate-900 dark:shadow-none">
              <div className="mb-7">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Fill in the details below to get started.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      minLength={2}
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    What do you need help with?
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Web development">
                      Web development
                    </option>
                    <option value="Mobile app development">
                      Mobile app development
                    </option>
                    <option value="UI/UX design">UI/UX design</option>
                    <option value="Cloud & DevOps">
                      Cloud & DevOps
                    </option>
                    <option value="AI & automation">
                      AI & automation
                    </option>
                    <option value="Support & maintenance">
                      Support & maintenance
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Project details
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    minLength={10}
                    required
                    placeholder="Tell us about your project, goals, or requirements..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-slate-900"
                >
                  Send inquiry

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M22 2 11 13" />
                    <path d="m22 2-7 20-4-9-9-4Z" />
                  </svg>
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="text-sm leading-6 text-slate-600 dark:text-slate-400"
                  >
                    Your email application should open with your
                    message prepared. Please send the email to
                    complete your inquiry.
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Your project details will be used to respond
                  to your inquiry.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
