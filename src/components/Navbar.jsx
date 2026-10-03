import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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

  const scrollToSection = (id) => {
    closeMenu();

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Aditya Java home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-medium transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              AJ
            </span>

            <span className="hidden text-xs font-medium tracking-[0.14em] sm:block">
              ADITYA JAVA
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Full Work Page */}
            <Link
              to="/work"
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              Work
            </Link>

            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              About
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="font-mono text-[11px] uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              Contact
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-all duration-500 md:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-end px-6 pb-10">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Navigation
          </p>

          <div className="flex flex-col">
            {/* Work Page */}
            <Link
              to="/work"
              onClick={closeMenu}
              className="flex items-center gap-5 border-t border-white/10 py-5"
            >
              <span className="font-mono text-[10px] text-white/30">
                01
              </span>

              <span className="text-4xl tracking-[-0.04em]">
                Work
              </span>

              <ArrowUpRight
                size={18}
                className="ml-auto text-white/30"
              />
            </Link>

            {/* About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-5 border-t border-white/10 py-5 text-left"
            >
              <span className="font-mono text-[10px] text-white/30">
                02
              </span>

              <span className="text-4xl tracking-[-0.04em]">
                About
              </span>
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-5 border-t border-white/10 py-5 text-left"
            >
              <span className="font-mono text-[10px] text-white/30">
                03
              </span>

              <span className="text-4xl tracking-[-0.04em]">
                Contact
              </span>
            </button>
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