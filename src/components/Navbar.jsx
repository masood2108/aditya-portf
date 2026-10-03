import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Aditya Java home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-medium transition-colors group-hover:bg-white group-hover:text-black">
              AJ
            </span>

            <span className="hidden text-xs font-medium tracking-[0.14em] sm:block">
              ADITYA JAVA
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              Contact
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-500 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-end px-6 pb-10">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Navigation
          </p>

          <div className="flex flex-col">
            {[
              ["01", "Work", "#work"],
              ["02", "About", "#about"],
              ["03", "Contact", "#contact"],
            ].map(([number, label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-5 border-t border-white/10 py-5"
              >
                <span className="font-mono text-[10px] text-white/30">
                  {number}
                </span>

                <span className="text-4xl tracking-[-0.04em]">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-between rounded-full bg-white px-6 py-4 text-sm text-black"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;