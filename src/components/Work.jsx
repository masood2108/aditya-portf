import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Work() {
  const infiniteProjects = [...projects, ...projects];

  return (
    <section
      id="work"
      className="overflow-hidden bg-[#0a0a0a] py-28 text-white md:py-40"
    >
      {/* Header */}
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              My Works
            </p>

            <h2 className="text-4xl tracking-[-0.05em] md:text-6xl">
              Things I&apos;ve made.
            </h2>
          </div>

          <Link
            to="/work"
            className="group hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white md:flex"
          >
            View all work

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Auto scrolling track */}
      <div className="work-scroll-container">
        <div className="work-track flex w-max gap-5 px-5 md:px-8 lg:px-12">
          {infiniteProjects.map((project, index) => (
            <motion.article
              key={`${project.id}-${index}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="group w-[72vw] max-w-[420px] shrink-0 md:w-[360px] lg:w-[400px]"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-[#151515]">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

                  <div className="pointer-events-none absolute bottom-5 left-5">
                    <span className="rounded-full bg-black/70 px-4 py-2 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl tracking-[-0.03em]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/35">
                      {project.category}
                    </p>
                  </div>

                  <span className="font-mono text-[10px] text-white/30">
                    {String((index % projects.length) + 1).padStart(2, "0")}
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile + desktop CTA */}
      <div className="mx-auto mt-14 max-w-[1500px] px-5 md:px-8 lg:px-12">
        <Link
          to="/work"
          className="group flex items-center justify-between border-t border-white/10 pt-6"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Portfolio
            </p>

            <p className="mt-2 text-xl tracking-[-0.03em] text-white/70 transition-colors group-hover:text-white md:text-2xl">
              View all projects
            </p>
          </div>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Work;