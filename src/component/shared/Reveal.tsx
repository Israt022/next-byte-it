"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** seconds to wait before the animation starts (use for staggering) */
  delay?: number;
  /** how far (px) the content travels upward while fading in */
  y?: number;
};

/**
 * Wrap any block in <Reveal> and it fades + slides up smoothly
 * the first time it scrolls into view.
 */
const Reveal = ({ children, className, delay = 0, y = 28 }: RevealProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;