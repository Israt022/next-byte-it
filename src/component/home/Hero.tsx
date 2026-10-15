
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
    ArrowUpRight,
    Code2,
    Smartphone,
    Cloud,
    Bot,
} from "lucide-react";
import VantaBackground from "@/component/shared/VantaBackground";

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "Fast, responsive websites and scalable web applications.",
        icon: Code2,
    },
    {
        number: "02",
        title: "Mobile Applications",
        description: "Intuitive mobile experiences built for everyday use.",
        icon: Smartphone,
    },
    {
        number: "03",
        title: "Cloud & DevOps",
        description: "Reliable infrastructure, automation, and deployment.",
        icon: Cloud,
    },
    {
        number: "04",
        title: "AI Solutions",
        description: "Practical AI-powered tools and intelligent automation.",
        icon: Bot,
    },
];

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-white pb-16 pt-28 dark:bg-slate-950">
            <VantaBackground />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-5 sm:px-8">
                {/* Hero Content */}
                <motion.div
                    initial={reduce ? false : { opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto w-full max-w-5xl text-center"
                >
                    {/* Eyebrow */}
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-cyan-300/50 sm:w-16" />

                        <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
                            Digital Innovation Agency
                        </p>

                        <span className="h-px w-10 bg-cyan-300/50 sm:w-16" />
                    </div>
                    {/* Heading */}
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                        We Transform Ideas Into
                        <span className="mt-2 block text-cyan-300">
                            Powerful Digital Solutions.
                        </span>
                    </h1>
                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                        We build digital products that move your business forward.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-7 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-cyan-300/20"
                        >
                            Start a Project
                            <ArrowUpRight
                                size={20}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>

                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/5 hover:text-cyan-300"
                        >
                            Explore Our Work
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                    {/* Services */}
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-5">
                        {[
                            { title: "Web Development", icon: Code2 },
                            { title: "Mobile Apps", icon: Smartphone },
                            { title: "Cloud Solutions", icon: Cloud },
                            { title: "AI Solutions", icon: Bot },
                        ].map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div key={service.title} className="flex items-center gap-7">
                                    <div className="group flex items-center gap-2.5 text-slate-300 transition-colors duration-300 hover:text-cyan-300">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.6}
                                            className="text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-sm font-medium sm:text-base">
                                            {service.title}
                                        </span>
                                    </div>

                                    {index < 3 && (
                                        <span className="hidden h-5 w-px bg-white/15 sm:block" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
