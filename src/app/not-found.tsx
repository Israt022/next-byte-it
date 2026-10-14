"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-white px-4 py-20 dark:bg-slate-950">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/70 dark:border-cyan-300/10" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/50 dark:border-cyan-300/10" />

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/60 blur-3xl dark:bg-cyan-300/10" />

        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-20 dark:opacity-[0.08]" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-2xl text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-50 dark:bg-cyan-300" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-cyan-300" />
          </span>
          Error 404 · Page not found
        </motion.div>

        {/* Animated 404 */}
        <div className="relative mt-8 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="select-none font-display text-[clamp(8rem,28vw,17rem)] font-black leading-none tracking-[-0.09em] text-slate-200 dark:text-slate-800"
            aria-label="404"
          >
            404
          </motion.h1>

          {/* Floating code symbol */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[12%] top-[12%] grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-indigo-600 shadow-lg shadow-indigo-100/50 sm:left-[20%] sm:h-14 sm:w-14 dark:border-white/10 dark:bg-slate-900 dark:text-cyan-300 dark:shadow-none"
            aria-hidden="true"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8 8-4 4 4 4" />
              <path d="m16 8 4 4-4 4" />
              <path d="m14 4-4 16" />
            </svg>
          </motion.div>

          {/* Floating search icon */}
          <motion.div
            animate={{ y: [0, 9, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[12%] bottom-[10%] grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-indigo-600 shadow-lg shadow-indigo-100/50 sm:right-[20%] sm:h-14 sm:w-14 dark:border-white/10 dark:bg-slate-900 dark:text-cyan-300 dark:shadow-none"
            aria-hidden="true"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
              <path d="M8 11h6M11 8v6" />
            </svg>
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="-mt-2 sm:-mt-5"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Looks like you&apos;re lost in space.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            The page you&apos;re looking for may have moved,
            been removed, or never existed. Let&apos;s get you
            back on the right track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto dark:bg-cyan-300 dark:text-slate-950 dark:shadow-none dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-slate-950"
          >
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
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v11h14V9M9 20v-6h6v6" />
            </svg>
            Back to homepage
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:w-auto dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
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
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Go back
          </button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-xs tracking-wide text-slate-500 dark:text-slate-500"
        >
          LOST A ROUTE? &nbsp; LET&apos;S FIND A BETTER ONE.
        </motion.p>
      </motion.div>
    </main>
  );
}
