import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import allVideos from "../data/allVideos";

const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function WorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* HEADER */}
      <section className="px-5 pb-16 pt-32 md:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between border-b border-white/10 pb-7">
            <div>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                Selected Work
              </p>

              <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.8] tracking-[-0.08em]">
                WORK
                <span className="font-serif italic text-white/25">.</span>
              </h1>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-wider text-white/20 md:block">
              {String(allVideos.length).padStart(2, "0")} Works
            </span>
          </div>
        </div>
      </section>

      {/* WORK GRID */}
      <section className="px-5 pb-28 md:px-8 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-x-7 gap-y-20 md:grid-cols-2">
            {allVideos.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.08,
                }}
                className="group block"
              >
                {/* MEDIA */}
                <div className="relative aspect-video overflow-hidden bg-[#111]">
                  {project.video ? (
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
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}

                  {/* HOVER OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                  {/* NUMBER */}
                  <span className="absolute left-5 top-5 z-10 font-mono text-[9px] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* ARROW */}
                  <span className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                {/* INFO */}
                <div className="mt-5 flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                  <div>
                    <h2 className="text-xl tracking-[-0.03em] md:text-2xl">
                      {project.title}
                    </h2>

                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                      {project.category}
                    </p>
                  </div>

                  <span className="pt-1 font-mono text-[9px] uppercase tracking-wider text-white/25 transition-colors duration-300 group-hover:text-white/70">
                    View
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
            Have a project?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex items-center justify-between border-b border-white/10 pb-6"
          >
            <span className="text-3xl tracking-[-0.05em] text-white/70 transition-colors duration-300 group-hover:text-white md:text-5xl">
              Let&apos;s create something.
            </span>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default WorkPage;