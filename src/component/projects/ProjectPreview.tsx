"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectPreview({
  project,
}: {
  project: Project;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 grid place-items-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/20" />
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/20" />
      <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full border border-white/15" />

      {project.mobile ? (
        <div className="relative h-[82%] aspect-[9/18] rounded-[1.5rem] border-[5px] border-slate-900 bg-white p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-slate-300" />

          <div className="rounded-lg bg-violet-100 p-3">
            <div className="h-2 w-2/3 rounded bg-violet-300" />
            <div className="mt-2 h-2 w-1/2 rounded bg-violet-200" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg bg-indigo-100" />
            <div className="h-12 rounded-lg bg-cyan-100" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-2 rounded bg-slate-100" />
            <div className="h-2 w-4/5 rounded bg-slate-100" />
            <div className="h-2 w-3/5 rounded bg-slate-100" />
          </div>

          <div className="mt-4 h-8 rounded-lg bg-violet-500" />
        </div>
      ) : (
        <div className="relative w-[82%] overflow-hidden rounded-xl border border-white/60 bg-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex h-8 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <div className="ml-3 h-3 w-1/2 rounded bg-slate-200" />
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="h-3 w-1/4 rounded bg-slate-300" />
              <div className="h-5 w-14 rounded-full bg-indigo-100" />
            </div>

            <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] items-center gap-4">
              <div>
                <div className="h-3 w-full rounded bg-slate-300" />
                <div className="mt-2 h-3 w-4/5 rounded bg-slate-200" />
                <div className="mt-4 h-6 w-20 rounded-md bg-indigo-500" />
              </div>

              <div className="grid aspect-square place-items-center rounded-lg bg-gradient-to-br from-indigo-100 to-cyan-100">
                <div className="h-12 w-12 rounded-xl border-2 border-white bg-white/70 shadow-md" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-8 rounded-md bg-slate-100" />
              <div className="h-8 rounded-md bg-slate-100" />
              <div className="h-8 rounded-md bg-slate-100" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}