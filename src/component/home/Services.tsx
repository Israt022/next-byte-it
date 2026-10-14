import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "../shared/Reveal";

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
    title: "Web development",
    text: "Fast, secure websites, web apps and dashboards built with modern frameworks like Next.js and React.",
    href: "/services/web-development",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </Icon>
    ),
  },
  {
    title: "Mobile app development",
    text: "Native-quality iOS and Android apps, built from a single codebase and ready for the app stores.",
    href: "/services/mobile-apps",
    icon: (
      <Icon>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </Icon>
    ),
  },
  {
    title: "UI/UX design",
    text: "Clear, user-friendly interfaces, from first wireframes to a complete design system.",
    href: "/services/ui-ux-design",
    icon: (
      <Icon>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </Icon>
    ),
  },
  {
    title: "Cloud & DevOps",
    text: "Secure cloud infrastructure with automated deployment, monitoring and scaling.",
    href: "/services/cloud-devops",
    icon: (
      <Icon>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </Icon>
    ),
  },
  {
    title: "AI & automation",
    text: "Chatbots, workflow automation and data tools that save your team hours every week.",
    href: "/services/ai-solutions",
    icon: (
      <Icon>
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
        <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7Z" />
      </Icon>
    ),
  },
  {
    title: "Support & maintenance",
    text: "Regular updates, bug fixes and monitoring after launch, so your software keeps running smoothly.",
    href: "/services/support-maintenance",
    icon: (
      <Icon>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </Icon>
    ),
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-slate-100 py-20 sm:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Our services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            End-to-end IT and software solutions for startups and growing
            businesses.
          </p>
        </Reveal>

        {/* Grid */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 0.1} className="h-full">
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none dark:hover:border-cyan-300/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-cyan-300 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-900">
                    {s.icon}
                  </span>

                  <h3 className="mt-6 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-cyan-300">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;