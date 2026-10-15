import Link from "next/link";
import Logo from "./Logo";

const BRAND = "NextByteIT";

const navigate = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];

const linkClass =
  "group inline-flex items-center gap-2 text-[15px] text-slate-600 transition-colors duration-200 hover:text-indigo-600 focus-visible:text-indigo-600 focus-visible:outline-none dark:text-slate-400 dark:hover:text-cyan-300 dark:focus-visible:text-cyan-300";

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.18),transparent_70%),radial-gradient(40%_40%_at_85%_100%,rgba(34,211,238,0.14),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.28),transparent_70%),radial-gradient(40%_40%_at_85%_100%,rgba(34,211,238,0.20),transparent_70%)]"
      />

      {/* Background Wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-50 -z-10 translate-y-[8%] select-none whitespace-nowrap bg-gradient-to-b from-indigo-500/25 via-indigo-500/10 to-transparent bg-clip-text text-center text-[17vw] font-extrabold leading-none tracking-tighter text-transparent dark:from-cyan-300/25 dark:via-indigo-400/10"
      >
        {BRAND}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-24 pt-16 sm:grid-cols-3 sm:gap-x-12 sm:pb-40 sm:pt-20 lg:gap-x-20">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-1">
            <Logo />

            <p className="mt-5 max-w-xs text-[15px] leading-7 text-slate-600 dark:text-slate-400">
              We design and build thoughtful digital experiences, from modern
              websites to scalable software solutions.
            </p>

            <Link
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 border-b border-indigo-500/40 pb-1 text-sm font-semibold text-slate-900 transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-cyan-300/40 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              Let&apos;s work together
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-4">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-indigo-500 transition-all duration-200 group-hover:w-3 dark:bg-cyan-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Connect
            </h3>

            <ul className="mt-5 space-y-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {social.label}

                    <span
                      aria-hidden="true"
                      className="text-xs opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-slate-300/60 py-6 text-sm text-slate-600 sm:flex-row sm:items-center dark:border-white/10 dark:text-slate-400">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>

            <Link href="/terms" className={linkClass}>
              Terms
            </Link>

            <a href="#top" className={linkClass}>
              Back to top
              <span aria-hidden="true" className="text-xs">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;