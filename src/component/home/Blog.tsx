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
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "UI/UX Design",
    date: "Oct 02, 2026",
    title: "Designing Interfaces People Love to Use",
    excerpt:
      "Explore the principles behind intuitive interfaces, thoughtful interactions, and user-centered digital experiences.",
    readTime: "4 min read",
    href: "/blog/user-centered-design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Technology",
    date: "Sep 25, 2026",
    title: "Building Scalable Applications from Day One",
    excerpt:
      "Learn how clean architecture, maintainable code, and thoughtful technology choices help applications grow.",
    readTime: "7 min read",
    href: "/blog/scalable-applications",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
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
      className="scroll-mt-16 overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-cyan-600 dark:bg-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  From the Blog
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Thoughts, ideas
                <span className="text-cyan-700 dark:text-cyan-300">
                  {" "} &amp; insights.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                Notes on web development, interface design, and the
                lessons I learn while building digital products.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit shrink-0 items-center gap-2 border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-700 dark:border-white/20 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              All articles
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>

        {/* Blog Articles */}
        <div className="mt-10 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.href} delay={index * 0.1} className="h-full">
              <article className="group flex h-full flex-col">
                {/* Article Image */}
                <Link
                  href={post.href}
                  aria-label={`Read ${post.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />

                  <span className="absolute left-4 top-4 border border-white/30 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </Link>

                {/* Article Content */}
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 bg-cyan-600 dark:bg-cyan-300" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-4 dark:border-white/10">
                    <Link
                      href={post.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors hover:text-cyan-700 dark:text-slate-200 dark:hover:text-cyan-300"
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
          <div className="mt-14 flex flex-col gap-5 border-y border-slate-200 py-7 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Always learning, always building.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Explore more articles and practical development insights.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-cyan-700 pb-1 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900 dark:border-cyan-300 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              Explore the blog
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}