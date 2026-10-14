import Link from "next/link";

const BRAND = "NextByteIT";

const navigate = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];

const linkClass =
  "text-slate-600 transition-colors hover:text-indigo-600 focus-visible:text-indigo-600 focus-visible:outline-none dark:text-slate-400 dark:hover:text-cyan-300 dark:focus-visible:text-cyan-300";

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      {/* Background: soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.18),transparent_70%),radial-gradient(40%_40%_at_85%_100%,rgba(34,211,238,0.14),transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.28),transparent_70%),radial-gradient(40%_40%_at_85%_100%,rgba(34,211,238,0.20),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-50 -z-10 select-none whitespace-nowrap text-center text-[17vw] font-extrabold leading-none tracking-tighter text-transparent bg-gradient-to-b from-indigo-500/25 via-indigo-500/10 to-transparent bg-clip-text translate-y-[8%] dark:from-cyan-300/25 dark:via-indigo-400/10"
      >
        {BRAND}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 pb-24 pt-16 sm:grid-cols-3 sm:pb-40 sm:pt-20">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 font-mono text-xs font-bold text-white">
                {"</>"}
              </span>
              {BRAND}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Web, mobile and cloud software, designed and built for growing
              businesses.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Pages
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navigate.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Find us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-300/60 py-6 text-sm text-slate-600 sm:flex-row sm:items-center dark:border-white/10 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
            <Link href="/terms" className={linkClass}>
              Terms
            </Link>
            <a href="#" className={linkClass}>
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;