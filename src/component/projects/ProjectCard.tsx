"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types/project";
import ProjectPreview from "./ProjectPreview";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.45,
        delay: reduce ? 0 : (index % 2) * 0.08,
        ease: "easeOut",
      }}
      className="min-w-0"
    >
      <Link
        href={project.href}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-slate-950"
      >
        {/* Preview */}
        <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
          <ProjectPreview project={project} />

          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {project.category}
          </span>

          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-950 dark:text-white">
            <ArrowUpRight size={19} />
          </span>
        </div>

        {/* Details */}
        <div className="flex items-start justify-between gap-4 pt-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 sm:text-xl dark:text-white dark:group-hover:text-cyan-300">
              {project.title}
            </h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
              {project.text}
            </p>
          </div>

          <span className="shrink-0 pt-1 font-mono text-xs text-slate-400 dark:text-slate-500">
            /{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}