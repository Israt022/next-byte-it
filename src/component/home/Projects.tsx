"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const reduce = useReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector<HTMLElement>("[data-project-card]");
    const gap = 20;
    const amount = card ? card.offsetWidth + gap : 320;

    slider.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="scroll-mt-16 overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-cyan-700 sm:text-sm dark:text-cyan-300">
              <span className="h-px w-8 bg-cyan-500" />
              SELECTED WORK
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Ideas brought
              <span className="text-cyan-600 dark:text-cyan-300">
                {" "}to life.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
              A selection of digital products built with thoughtful design,
              modern technologies, and a focus on real-world usability.
            </p>
          </div>

          <div className="flex items-center justify-between gap-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-500 hover:text-cyan-700 dark:border-white/20 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              Explore all projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Slider Controls */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => slide("left")}
                aria-label="Previous projects"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-slate-950"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => slide("right")}
                aria-label="Next projects"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-slate-950"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project Carousel */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-project-card
              className="w-[260px] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}