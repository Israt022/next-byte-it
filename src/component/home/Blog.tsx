import Image from "next/image";
import Link from "next/link";
import Reveal from "@/component/shared/Reveal";

const posts = [
  {
    category: "Web Development",
    date: "Oct 08, 2026",
    title: "Why Modern Businesses Are Moving to Next.js",
    excerpt:
      "Discover how modern rendering strategies, performance optimization, and a better developer experience can transform your web applications.",
    readTime: "6 min read",
    href: "/blog/modern-web-development",
    image: "/blog/nextjs.jpg",
    featured: true,
  },
  {
    category: "UI/UX Design",
    date: "Oct 02, 2026",
    title: "Designing Interfaces People Love to Use",
    excerpt:
      "Explore the principles behind intuitive interfaces, thoughtful interactions, and user-centered digital experiences.",
    readTime: "4 min read",
    href: "/blog/user-centered-design",
    image: "/blog/ui-ux.jpg",
    featured: false,
  },
  {
    category: "Technology",
    date: "Sep 25, 2026",
    title: "Building Scalable Applications from Day One",
    excerpt:
      "Learn how clean architecture, maintainable code, and thoughtful technology choices help applications grow.",
    readTime: "7 min read",
    href: "/blog/scalable-applications",
    image: "/blog/scalable-apps.jpg",
    featured: false,
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14M13 6l6 6-6 6" />
      )}
    </svg>
  );
}

export default function Blog() {
  return (
    <section
      id="blog"
      className="scroll-mt-16 overflow-hidden bg-slate-100 py-20 sm:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-cyan-300/20 dark:bg-slate-800 dark:text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-cyan-300" />
              Insights & Ideas
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Ideas that move
              <span className="text-indigo-600 dark:text-cyan-300">
                {" "}technology forward.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Practical insights, development tips, and fresh
              perspectives on building better digital products.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:bg-slate-800 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            Explore all articles
            <ArrowIcon />
          </Link>
        </Reveal>

        {/* Blog cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {posts.map((post, index) => (
            <Reveal key={post.href} delay={index * 0.12} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-800/60 dark:hover:border-cyan-300/40 dark:hover:shadow-none">
                {/* Image */}
                <Link
                  href={post.href}
                  aria-label={`Read ${post.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-slate-800"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm dark:border-white/10 dark:bg-slate-950/90 dark:text-cyan-300">
                    {post.category}
                  </span>

                  <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-cyan-300 dark:text-slate-950">
                    <ArrowIcon diagonal />
                  </span>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-cyan-300">
                    <Link href={post.href}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
                    <Link
                      href={post.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                    >
                      Read article
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-white/10 dark:bg-slate-800/40">
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                Stay curious. Keep building.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Explore more ideas, insights, and practical guides
                from our team.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Browse the blog
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
