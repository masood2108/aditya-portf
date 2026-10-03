const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function CTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-12 lg:py-40">
      <div className="border-t border-black/15 pt-8">
        <p className="mb-8 text-xs uppercase tracking-[0.16em] text-black/40">
          Start a project
        </p>

        <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
          Have something
          <br />
          in mind?
        </h2>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 flex w-fit items-center gap-4 rounded-full bg-black px-7 py-4 text-sm text-white"
        >
          Let&apos;s create it

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

export default CTA;