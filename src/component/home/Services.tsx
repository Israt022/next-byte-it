
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Fast, secure websites, web apps and dashboards built with modern frameworks like Next.js and React.",
    href: "/services/web-development",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="m9 14-2 2 2 2" />
        <path d="m15 14 2 2-2 2" />
      </Icon>
    ),
  },
  {
    number: "02",
    title: "Mobile App Development",
    text: "Intuitive mobile experiences designed for modern devices and everyday use.",
    href: "/services/mobile-apps",
    icon: (
      <Icon>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </Icon>
    ),
  },
  {
    number: "03",
    title: "UI/UX Design",
    text: "Thoughtful interfaces and user-focused experiences, from wireframes to polished designs.",
    href: "/services/ui-ux-design",
    icon: (
      <Icon>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </Icon>
    ),
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    text: "Reliable infrastructure, automated deployment and scalable cloud solutions.",
    href: "/services/cloud-devops",
    icon: (
      <Icon>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </Icon>
    ),
  },
  {
    number: "05",
    title: "AI & Automation",
    text: "Practical AI-powered tools and automated workflows that simplify everyday work.",
    href: "/services/ai-solutions",
    icon: (
      <Icon>
        <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
        <path d="m19 15 .7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7Z" />
      </Icon>
    ),
  },
  {
    number: "06",
    title: "Support & Maintenance",
    text: "Ongoing updates, bug fixes and maintenance to keep your digital products running smoothly.",
    href: "/services/support-maintenance",
    icon: (
      <Icon>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-16 bg-slate-100 py-14 sm:py-16 lg:py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-9 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-cyan-700 dark:text-cyan-300 sm:text-sm">
              <span className="h-px w-8 bg-cyan-500" />
              WHAT WE DO
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Technology built{" "}
              <span className="text-cyan-600 dark:text-cyan-300">
                around your vision.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 md:pb-1 dark:text-slate-400">
            From the first idea to the final launch, we create digital
            solutions that help businesses move forward.
          </p>
        </motion.div>

        {/* Compact Service Grid */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.li
              key={service.number}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : (index % 3) * 0.08,
                ease: "easeOut",
              }}
              className="min-w-0"
            >
              <Link
                href={service.href}
                className="group flex h-full min-h-[220px] flex-col rounded-xl border border-slate-200 bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-slate-900/5 sm:min-h-[225px] sm:p-5 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-cyan-300/40 dark:hover:shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-300 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950">
                    {service.icon}
                  </span>

                  <span className="font-mono text-xs text-slate-400 transition-colors group-hover:text-cyan-600 dark:text-slate-600 dark:group-hover:text-cyan-300">
                    / {service.number}
                  </span>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {service.text}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200/80 pt-3 dark:border-white/10">
                    <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-cyan-700 sm:text-sm dark:text-slate-300 dark:group-hover:text-cyan-300">
                      Explore service
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                    />
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Compact Contact Link */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-6 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-200/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/[0.03]"
        >
          <p className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <Sparkles
              size={17}
              className="shrink-0 text-cyan-600 dark:text-cyan-300"
            />
            Have a project in mind? Let&apos;s talk.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-white"
          >
            Discuss Your Project
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
