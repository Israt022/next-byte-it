
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/component/shared/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const sectionHref = (href: string) =>
    pathname === "/" ? href : `/${href}`;

  const isActive = (href: string) =>
    pathname === "/" && activeHash === href;

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Reusable Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={sectionHref(link.href)}
                onClick={() => setActiveHash(link.href)}
                aria-current={isActive(link.href) ? "location" : undefined}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive(link.href)
                    ? "text-indigo-600 dark:text-cyan-300"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform duration-300 ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href={sectionHref("#contact")}
            className="group inline-flex items-center gap-2 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center text-slate-900 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden dark:text-white dark:hover:text-cyan-300"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 border-t border-slate-200/70 px-4 pb-5 pt-3 dark:border-white/10 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={sectionHref(link.href)}
                  onClick={() => {
                    setActiveHash(link.href);
                    closeMenu();
                  }}
                  aria-current={isActive(link.href) ? "location" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`block border-l-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "border-indigo-500 bg-indigo-50/70 text-indigo-700 dark:border-cyan-300 dark:bg-white/5 dark:text-cyan-300"
                      : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100/70 dark:text-slate-200 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-3">
              <Link
                href={sectionHref("#contact")}
                onClick={closeMenu}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center gap-2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
              >
                Start a project
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
