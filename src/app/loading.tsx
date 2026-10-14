"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-6 dark:bg-slate-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/30 blur-3xl dark:bg-cyan-400/20"
        />
        <div className="absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-indigo-500/50" />
        <div className="absolute bottom-[25%] right-[18%] h-2 w-2 rounded-full bg-cyan-500/50" />
        <div className="absolute right-[28%] top-[22%] h-1 w-1 rounded-full bg-indigo-400/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated lantern */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-8 flex h-24 w-24 items-center justify-center"
        >
          {/* Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-indigo-300/50 border-t-indigo-600 dark:border-cyan-300/30 dark:border-t-cyan-400"
          />

          {/* Lantern glow */}
          <motion.div
            animate={{ opacity: [0.25, 0.6, 0.25], scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-12 w-12 rounded-full bg-indigo-400/30 blur-xl dark:bg-cyan-400/30"
          />

          {/* Lantern icon */}
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-12 w-12 text-indigo-600 dark:text-cyan-400"
            aria-hidden="true"
          >
            <path
              d="M26 10H38M32 10V16M23 16H41L46 25V45L40 52H24L18 45V25L23 16Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 27H46M18 43H46M25 52V56H39V52"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d="M32 22C26 28 27 35 32 39C37 35 38 28 32 22Z"
              fill="currentColor"
              animate={{ opacity: [0.55, 1, 0.55], scale: [0.9, 1.08, 0.9] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "32px 30px" }}
            />
          </svg>

          {/* Orbiting dot */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-5px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          </motion.div>
        </motion.div>

        {/* Brand */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-600 dark:text-cyan-400"
        >
          Please wait
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
        >
          Preparing your experience
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-indigo-600 dark:text-cyan-400"
          >
            ...
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400"
        >
          Getting everything ready for you. Just a moment.
        </motion.p>

        {/* Progress bar */}
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-indigo-600 dark:bg-cyan-400"
          />
        </div>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Loading · Please stay with us
        </p>
      </div>
    </main>
  );
}