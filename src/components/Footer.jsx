const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-5 py-8 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="/"
            className="text-sm font-medium tracking-[0.08em]"
          >
            ADITYA JAVA
          </a>

          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
            Graphic Designer / Visual Storyteller
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-wider text-white/40">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>

          <a
            href="tel:+917878122585"
            className="transition-colors hover:text-white"
          >
            Phone
          </a>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1500px] border-t border-white/10 pt-5">
        <p className="font-mono text-[9px] uppercase tracking-wider text-white/20">
          © {year} Aditya Java
        </p>
      </div>
    </footer>
  );
}

export default Footer;