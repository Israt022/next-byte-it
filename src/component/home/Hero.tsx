"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/* ---------- Services (each one has its own code that gets typed) ---------- */

const services = [
  {
    label: "Web apps",
    blurb: "Fast, SEO-ready websites and platforms built on Next.js.",
    file: "web.ts",
    code: [
      "// web.ts",
      "const project = {",
      '  stack: ["Next.js", "AWS"],',
      "  sprints: 2, // weeks",
      "};",
      "",
      "await design(project);",
      "await build(project);",
      'await deploy("production");',
      "",
      "// Live. Ready for your users.",
    ],
  },
  {
    label: "Mobile apps",
    blurb: "iOS and Android apps from a single codebase.",
    file: "mobile.ts",
    code: [
      "// mobile.ts",
      "const app = {",
      '  platforms: ["iOS", "Android"],',
      '  framework: "Flutter",',
      "};",
      "",
      "await design(app);",
      "await build(app);",
      'await publish("app stores");',
      "",
      "// Shipped. In your users' pockets.",
    ],
  },
  {
    label: "Cloud & DevOps",
    blurb: "Secure infrastructure that deploys itself and scales with you.",
    file: "cloud.ts",
    code: [
      "// cloud.ts",
      "const infra = {",
      '  provider: "AWS",',
      "  regions: 2,",
      "};",
      "",
      "await provision(infra);",
      "await automate(infra);",
      'await monitor("24/7");',
      "",
      "// Stable. Scales when you do.",
    ],
  },
  {
    label: "AI solutions",
    blurb: "Chatbots and automation that take repeat work off your team.",
    file: "ai.ts",
    code: [
      "// ai.ts",
      "const assistant = {",
      '  task: "customer support",',
      '  channels: ["web", "chat"],',
      "};",
      "",
      "await train(assistant);",
      "await test(assistant);",
      'await launch("beta");',
      "",
      "// Smart. Works while you sleep.",
    ],
  },
];

/* ---------- Tiny syntax highlighter ---------- */

type Kind = "kw" | "str" | "fn" | "com" | "num" | "txt";
type Token = [string, Kind];

const colors: Record<Kind, string> = {
  kw: "text-indigo-300",
  str: "text-emerald-300",
  fn: "text-cyan-300",
  com: "text-slate-500",
  num: "text-amber-300",
  txt: "text-slate-200",
};

const rule =
  /(\/\/.*)|("[^"]*")|\b(const|await|async|return|import|from)\b|\b(\d+)\b|\b([a-zA-Z_]\w*)(?=\()/g;

function highlight(line: string): Token[] {
  const out: Token[] = [];
  let last = 0;
  for (const m of line.matchAll(rule)) {
    const i = m.index ?? 0;
    if (i > last) out.push([line.slice(last, i), "txt"]);
    const kind: Kind = m[1]
      ? "com"
      : m[2]
        ? "str"
        : m[3]
          ? "kw"
          : m[4]
            ? "num"
            : "fn";
    out.push([m[0], kind]);
    last = i + m[0].length;
  }
  if (last < line.length) out.push([line.slice(last), "txt"]);
  if (!out.length) out.push(["", "txt"]);
  return out;
}

const lineLength = (line: Token[]) => line.reduce((n, [t]) => n + t.length, 0);
const compiled = services.map((s) => s.code.map(highlight));
const totals = compiled.map((lines) =>
  lines.reduce((n, l) => n + lineLength(l) + 1, 0),
);

/* ---------- Animation helpers ---------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const glyphs = [
  { c: "</>", left: "6%", dur: 22, delay: 0, size: "text-2xl" },
  { c: "{ }", left: "18%", dur: 18, delay: 4, size: "text-xl" },
  { c: "01", left: "29%", dur: 25, delay: 9, size: "text-3xl" },
  { c: "=>", left: "41%", dur: 20, delay: 2, size: "text-xl" },
  { c: "&&", left: "52%", dur: 24, delay: 7, size: "text-2xl" },
  { c: "[ ]", left: "63%", dur: 19, delay: 11, size: "text-xl" },
  { c: "//", left: "74%", dur: 23, delay: 5, size: "text-2xl" },
  { c: "10", left: "84%", dur: 21, delay: 1, size: "text-3xl" },
  { c: "()", left: "93%", dur: 26, delay: 8, size: "text-xl" },
];

const uptimeBars = [40, 65, 50, 80, 60, 90, 70, 85, 95, 75, 88, 100];

/* ---------- Component ---------- */

const Hero = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(true); // click korle auto-switch bondho
  const started = useRef(false);

  const view = compiled[active];
  const total = totals[active];

  // typing + auto-switch to the next service
  useEffect(() => {
    if (reduce) {
      setCount(total);
      return;
    }
    if (count < total) {
      const delay = count === 0 ? (started.current ? 350 : 1100) : 28;
      const t = setTimeout(() => {
        started.current = true;
        setCount((c) => c + 1);
      }, delay);
      return () => clearTimeout(t);
    }
    if (auto) {
      const t = setTimeout(() => {
        setActive((a) => (a + 1) % services.length);
        setCount(0);
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [count, total, active, auto, reduce]);

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
    setCount(reduce ? totals[i] : 0);
  };

  // how much of each line is visible right now
  let left = count;
  const lines = view.map((line) => {
    const len = lineLength(line);
    const isStarted = left >= 0;
    const shown = Math.min(Math.max(left, 0), len);
    left -= len + 1;
    return { line, shown, isStarted };
  });
  const cursorAt = lines.reduce((last, l, i) => (l.isStarted ? i : last), 0);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-white pb-16 pt-28 dark:bg-slate-950">
      {/* ===== Animated background ===== */}

      {/* 1. moving grid */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(100,116,139,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.16)_1px,transparent_1px)] bg-[size:48px_48px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
        animate={
          reduce ? undefined : { backgroundPosition: ["0px 0px", "48px 48px"] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* 2. aurora glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl dark:bg-indigo-500/30"
        animate={
          reduce
            ? undefined
            : { x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-400/20"
        animate={
          reduce
            ? undefined
            : { x: [0, -100, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/20"
        animate={
          reduce ? undefined : { x: [0, -60, 80, 0], y: [0, 50, -40, 0] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3. code symbols floating up */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          {glyphs.map((g) => (
            <motion.span
              key={g.c}
              className={`absolute bottom-0 font-mono ${g.size} text-indigo-500/30 dark:text-cyan-300/25`}
              style={{ left: g.left }}
              initial={{ y: "10vh", opacity: 0 }}
              animate={{ y: "-110vh", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: g.dur,
                delay: g.delay,
                repeat: Infinity,
                ease: "linear",
                opacity: {
                  duration: g.dur,
                  delay: g.delay,
                  repeat: Infinity,
                  times: [0, 0.1, 0.85, 1],
                },
              }}
            >
              {g.c}
            </motion.span>
          ))}
        </div>
      )}

      {/* ===== Content ===== */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* ---------- Left ---------- */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            Software your business can grow on.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            NextByteIT designs and builds software for startups and growing
            companies. Pick a service to see how we work.
          </motion.p>

          {/* Service picker */}
          <motion.div variants={item} className="mt-8 max-w-md">
            <ul className="border-t border-slate-200 dark:border-white/10">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.label}>
                    <button
                      type="button"
                      onClick={() => select(i)}
                      aria-pressed={isActive}
                      className="group relative block w-full border-b border-slate-200 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10"
                    >
                      <span
                        className={`block font-display text-xl font-semibold transition-colors ${
                          isActive
                            ? "text-slate-900 dark:text-white"
                            : "text-slate-400 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300"
                        }`}
                      >
                        {s.label}
                      </span>

                      <span
                        className={`grid transition-all duration-300 ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block pt-1 text-sm text-slate-600 dark:text-slate-400">
                            {s.blurb}
                          </span>
                        </span>
                      </span>

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-px left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400"
                          style={{ width: `${(count / total) * 100}%` }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
            >
              Start a project
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-white/20 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              View our work
            </Link>
          </motion.div>
        </motion.div>

        {/* ---------- Right: live code window ---------- */}
        <motion.div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-indigo-500/20">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                {services[active].file}
              </span>
            </div>

            <pre className="h-[19rem] overflow-hidden whitespace-pre p-5 font-mono text-[13px] leading-6 sm:text-sm">
              {lines.map(({ line, shown, isStarted }, i) => {
                let budget = shown;
                return (
                  <div key={i} className="min-h-6">
                    {isStarted &&
                      line.map(([text, kind], j) => {
                        const visible = text.slice(0, Math.max(0, budget));
                        budget -= text.length;
                        return visible ? (
                          <span key={j} className={colors[kind]}>
                            {visible}
                          </span>
                        ) : null;
                      })}
                    {i === cursorAt && (
                      <span className="ml-px inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-cyan-300 motion-reduce:animate-none" />
                    )}
                  </div>
                );
              })}
            </pre>
          </div>

          {/* floating card: build status */}
          <motion.div
            className="absolute -right-2 -top-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-right-6 dark:border-white/10 dark:bg-slate-800"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={
              reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] }
            }
            transition={{
              opacity: { duration: 0.5, delay: 1.2 },
              scale: { duration: 0.5, delay: 1.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Build passed
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Deployed in 48s
              </p>
            </div>
          </motion.div>

          {/* floating card: uptime */}
          <motion.div
            className="absolute -bottom-7 -left-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-8 dark:border-white/10 dark:bg-slate-800"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={
              reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, 8, 0] }
            }
            transition={{
              opacity: { duration: 0.5, delay: 1.5 },
              scale: { duration: 0.5, delay: 1.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Uptime, last 30 days
            </p>
            <p className="mt-0.5 text-lg font-semibold text-slate-900 dark:text-white">
              99.99%
            </p>
            <div className="mt-2 flex h-6 items-end gap-1">
              {uptimeBars.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-1.5 rounded-sm bg-gradient-to-t from-indigo-500 to-cyan-400"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;