import Link from "next/link";
import Reveal from "@/component/shared/Reveal";

/* ---------- About section data ---------- */

const strengths = [
  {
    number: "01",
    title: "Thoughtful engineering",
    description:
      "We build reliable, maintainable software with a focus on performance, security, and long-term growth.",
  },
  {
    number: "02",
    title: "User-first experiences",
    description:
      "Every interface is designed to feel intuitive, accessible, and effortless across devices.",
  },
  {
    number: "03",
    title: "Built to scale",
    description:
      "We choose modern technologies and flexible architectures that adapt as your business evolves.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

/* ---------- Component ---------- */

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 overflow-hidden bg-slate-100 py-20 sm:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-cyan-300/20 dark:bg-slate-800 dark:text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-cyan-300" />
            About our company
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Turning ideas into
            <span className="text-indigo-600 dark:text-cyan-300">
              {" "}digital solutions.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            We combine thoughtful design, modern technology, and
            practical engineering to create digital products that
            solve real problems and help businesses move forward.
          </p>
        </Reveal>

        {/* Main content */}
        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Left: company story */}
          <Reveal>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-indigo-300 dark:border-cyan-300/50" />

              <div className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 dark:border-white/10 dark:bg-slate-800/60 dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-cyan-300/10 dark:text-cyan-300">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="13" rx="2" />
                      <path d="M8 21h8M12 17v4M8 10l2.5 2.5L15 8" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      Beyond the code
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      Strategy. Design. Development.
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />

                <h3 className="font-display text-2xl font-bold leading-snug text-slate-900 sm:text-3xl dark:text-white">
                  Technology should make business simpler,
                  not more complicated.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                  From responsive websites to full-stack web
                  applications, we focus on building solutions
                  that are useful, dependable, and easy to maintain.
                  Our approach brings design and development
                  together to deliver a better digital experience.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-indigo-300 dark:border-cyan-300/50" />
            </div>
          </Reveal>

          {/* Right: company strengths */}
          <div className="space-y-5">
            {strengths.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.12}>
                <article className="group flex gap-5 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg sm:p-6 dark:border-white/10 dark:bg-slate-800/40 dark:hover:border-cyan-300/40 dark:hover:shadow-none">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-display text-sm font-bold text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-300 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* CTA */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="#services"
                  className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-slate-900"
                >
                  Explore our services

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
