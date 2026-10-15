
import Link from "next/link";

type LogoProps = {
  className?: string;
  showText?: boolean;
  href?: string;
};

export default function Logo({
  className = "",
  showText = true,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="NextByteIT home"
      className={`group inline-flex w-fit items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white ${className}`}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-sm shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M13 11L7 18L13 25"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 11L29 18L23 25"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 9L15 27"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute right-1 top-1 h-1.5 w-1.5 bg-white/90" />
      </span>

      {showText && (
        <span>
          NextByte<span className="font-medium text-cyan-600 dark:text-cyan-300">IT</span>
        </span>
      )}
    </Link>
  );
}
