import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactScene from "./ContactScene";

const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[650px] overflow-hidden border-t border-white/10 bg-[#080808] px-5 py-20 md:min-h-[700px] md:px-8 lg:px-12 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[15%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-violet-600/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,0.045),transparent_35%)]" />

      {/* 3D workspace */}
      <ContactScene />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          04 / Contact
        </p>

        <div className="max-w-[620px]">
          <h2 className="text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            LET&apos;S
            <br />
            <span className="font-serif italic text-white/60">
              MAKE
            </span>
            <br />
            SOMETHING.
          </h2>

          <p className="mt-7 max-w-sm text-sm leading-6 text-white/35">
            Have an idea, campaign or visual that needs shape?
            Let&apos;s build it.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="group relative mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-white text-center text-[9px] font-medium uppercase tracking-wider text-black md:h-24 md:w-24"
          >
            Start
            <br />
            a project

            <ArrowUpRight
              size={13}
              className="absolute -right-1 -top-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;