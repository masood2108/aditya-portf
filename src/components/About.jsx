import { motion } from "framer-motion";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremiere,
} from "react-icons/tb";

const tools = [
  {
    name: "After Effects",
    short: "AE",
    icon: TbBrandAdobeAfterEffect,
  },
  {
    name: "Illustrator",
    short: "AI",
    icon: TbBrandAdobeIllustrator,
  },
  {
    name: "Photoshop",
    short: "PS",
    icon: TbBrandAdobePhotoshop,
  },
  {
    name: "Premiere Pro",
    short: "PR",
    icon: TbBrandAdobePremiere,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between gap-6 border-b border-white/10 pb-6"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
            About
            </p>

            <h2 className="font-['Instrument_Serif'] text-5xl leading-none md:text-7xl">
              Behind the work.
            </h2>
          </div>

          <span className="hidden font-mono text-xs text-white/30 md:block">
            MUMBAI / INDIA
          </span>
        </motion.div>

        {/* MAIN */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-3xl text-xl leading-relaxed text-white/70 md:text-2xl">
              Creative designer focused on emotion-driven visuals and
              storytelling through design.
            </p>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              I create impactful creatives and emotional posts that connect
              with people, spark feelings, and make brands more memorable.
              Always exploring new ideas and turning concepts into visuals that
              stand out.
            </p>

            {/* EXPERIENCE */}
            <div className="mt-14 border-t border-white/10 pt-6">
              <div className="grid gap-6 md:grid-cols-[180px_1fr]">

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/30">
                    Experience
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Vedancy
                      </h3>

                      <p className="mt-1 text-sm text-white/45">
                        Video Editor
                      </p>
                    </div>

                    <p className="font-mono text-xs text-white/30">
                      NOV 2025 — PRESENT
                    </p>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    Mumbai, India
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6 flex items-center justify-between">

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                Tools
              </p>

              <span className="font-mono text-xs text-white/20">
                04
              </span>

            </div>

            <div className="border-t border-white/10">

              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <motion.div
                    key={tool.name}
                    variants={item}
                    className="group flex items-center justify-between border-b border-white/10 py-5 transition-all duration-300 hover:px-3"
                  >
                    <div className="flex items-center gap-4">

                      {/* ICON */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                        <Icon className="text-2xl text-white/70 transition-colors duration-300 group-hover:text-white" />
                      </div>

                      {/* NAME */}
                      <div>
                        <p className="text-sm font-medium text-white">
                          {tool.name}
                        </p>

                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/25">
                          {tool.short}
                        </p>
                      </div>

                    </div>

                    {/* SHORT */}
                    <span className="font-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-white/50">
                      {tool.short}
                    </span>

                  </motion.div>
                );
              })}

            </div>
          </motion.div>
        </div>

        {/* FOOTER CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25">
            Design / Motion 
          </p>

          <a
            href="https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            Start a conversation →
          </a>
        </motion.div>

      </div>
    </section>
  );
}