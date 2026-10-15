import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import Reveal from "@/component/shared/Reveal";
import about from '../../../public/images/about.avif'
const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section label */}
        <Reveal>
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-600 dark:bg-cyan-300" />
            <span className="text-xs font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
              A LITTLE ABOUT ME
            </span>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: Image-led visual */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-cyan-500/50" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={about}
                  alt="Developer working at a desk"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                {/* Bottom image caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    Curious by nature
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Always building.
                    <br />
                    Always learning.
                  </h3>
                </div>
              </div>

              {/* Floating experience note */}
              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/5 sm:-right-5 sm:px-5 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20">
                <div className="grid h-10 w-10 place-items-center bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Full-stack journey
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Learning through building
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-cyan-500/50" />
            </div>
          </Reveal>

          {/* Right: Personal introduction */}
          <Reveal delay={0.12}>
            <div className="pt-2 lg:pt-0">
              <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                Hello, I&apos;m Israt Jahan Era.
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                I turn ideas into
                <span className="text-cyan-700 dark:text-cyan-300">
                  {" "}things people can use.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
                I&apos;m a web developer passionate about creating
                responsive, accessible, and thoughtful digital experiences.
                I enjoy turning ideas into practical applications with
                clean interfaces and reliable functionality.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                My journey spans frontend development and backend
                fundamentals. I&apos;m continuously learning, experimenting
                with modern technologies, and improving my skills by
                building projects that solve real problems.
              </p>

              {/* Personal approach */}
              <div className="mt-8 border-l-2 border-cyan-500 pl-5">
                <p className="text-lg font-medium leading-7 text-slate-800 dark:text-slate-200">
                  Good development is more than writing code.
                  It&apos;s about understanding people and solving problems.
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  TECHNOLOGIES I WORK WITH
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                    >
                      <span className="mr-2 text-cyan-600 dark:text-cyan-300">
                        /
                      </span>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  Explore my work
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                >
                  Let&apos;s connect
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}