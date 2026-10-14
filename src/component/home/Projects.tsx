import Image from "next/image";
import Link from "next/link";
import Reveal from "@/component/shared/Reveal";

//  Data (homepage-e maximum 4 ta project) 

type Project = {
  title: string;
  text: string;
  category: string;
  href: string;
  mobile?: boolean; // shows a phone mock instead of a browser mock
  gradient: string; // placeholder background, used until a screenshot is added
  image?: string; // e.g. "/projects/shopwave.jpg" (file goes in /public/projects)
};

const projects: Project[] = [
  {
    title: "Shopwave",
    text: "E-commerce platform with real-time inventory and secure checkout.",
    category: "Web development",
    href: "/projects/shopwave",
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    title: "FitTrack",
    text: "Workout and nutrition tracking app for iOS and Android.",
    category: "Mobile app",
    href: "/projects/fittrack",
    mobile: true,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "LogiTrack",
    text: "Cloud system that tracks vehicles and deliveries in real time.",
    category: "Cloud & DevOps",
    href: "/projects/logitrack",
    gradient: "from-slate-700 to-indigo-600",
  },
  {
    title: "HelpBot",
    text: "AI assistant that answers customer questions around the clock.",
    category: "AI & automation",
    href: "/projects/helpbot",
    gradient: "from-fuchsia-500 to-indigo-500",
  },
].slice(0, 4);

// Thumbnail: real screenshot, or a clean placeholder 

const Thumb = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 44vw, 78vw"
        className="object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${project.gradient}`}
    >
      {project.mobile ? (
        <div className="aspect-[9/18] h-[80%] rounded-2xl border-4 border-white/70 bg-white/15 p-2 shadow-xl">
          <div className="h-1.5 w-1/2 rounded bg-white/70" />
          <div className="mt-2 space-y-1">
            <div className="h-1 rounded bg-white/50" />
            <div className="h-1 w-5/6 rounded bg-white/50" />
          </div>
          <div className="mt-2.5 h-10 rounded-md bg-white/30" />
          <div className="mt-1.5 h-10 rounded-md bg-white/30" />
        </div>
      ) : (
        <div className="w-3/4 rounded-lg bg-white/90 p-2.5 shadow-xl">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>
          <div className="mt-2.5 h-2 w-1/2 rounded bg-slate-300" />
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 rounded bg-slate-200" />
            <div className="h-1.5 w-5/6 rounded bg-slate-200" />
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            <div className="h-8 rounded bg-slate-200" />
            <div className="h-8 rounded bg-slate-200" />
            <div className="h-8 rounded bg-slate-200" />
          </div>
        </div>
      )}
    </div>
  );
};

// section

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-white py-20 sm:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading: left aligned, link on the right */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Selected work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              A few recent projects we&apos;ve designed, built and launched for
              our clients.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit shrink-0 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-white/20 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-slate-950"
          >
            View all projects
          </Link>
        </Reveal>

        {/* One row: 4 across on desktop, swipeable row on smaller screens */}
        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-auto"
            >
              <Reveal delay={i * 0.1}>
                <Link href={p.href} className="group block focus-visible:outline-none">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200 group-focus-visible:ring-2 group-focus-visible:ring-indigo-500 dark:ring-white/10">
                    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                      <Thumb project={p} />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-cyan-300">
                    {p.category}
                  </p>
                  <h3 className="mt-1 flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {p.title}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-300"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.text}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;