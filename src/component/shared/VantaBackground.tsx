"use client";

import { useEffect, useRef } from "react";

const LINE_RGB = "99, 102, 241"; // line color (indigo-500)  
const DOT_RGB = "165, 180, 252"; // dot color (indigo-300)   
const LINE_ALPHA = 0.2; // line-er max brightness (0 - 1), komale aro halka
const DOT_ALPHA = 0.5; // dot-er brightness (0 - 1)
const MAX_DIST = 150; // koto kache ashle duita dot line diye jukto hobe
const SPEED = 9; // pixel per second. Kom = aro slow
const DENSITY = 5000; // beshi hole dot kom, kom hole dot beshi

type Dot = { x: number; y: number; vx: number; vy: number; r: number };

export default function VantaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let raf = 0;
    let last = 0;
    let running = false;

    const seed = () => {
      const count = Math.min(
        110,
        Math.max(30, Math.round((w * h) / DENSITY)),
      );
      dots = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = SPEED * (0.5 + Math.random());
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 1 + Math.random() * 1.2,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST * MAX_DIST) {
            const t = 1 - Math.sqrt(d2) / MAX_DIST;
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${t * LINE_ALPHA})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${DOT_RGB}, ${DOT_ALPHA})`;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05); // frame drop hole jhatka khabe na
      last = now;

      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        if (d.x < 0) {
          d.x = 0;
          d.vx = Math.abs(d.vx);
        } else if (d.x > w) {
          d.x = w;
          d.vx = -Math.abs(d.vx);
        }
        if (d.y < 0) {
          d.y = 0;
          d.vy = Math.abs(d.vy);
        } else if (d.y > h) {
          d.y = h;
          d.vy = -Math.abs(d.vy);
        }
      }

      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(step);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const ow = w;
      const oh = h;
      w = parent.clientWidth;
      h = parent.clientHeight;
      if (!w || !h) return;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (dots.length === 0 || !ow || !oh) {
        seed();
      } else {
        // size bodlale dot gulo jhatka na diye proportionally soray
        for (const d of dots) {
          d.x *= w / ow;
          d.y *= h / oh;
        }
      }
      draw();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    // screen-er baire gele animation theme jay (battery bachay)
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibility.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}