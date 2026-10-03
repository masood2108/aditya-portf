import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroScene from "./HeroScene";

const whatsappUrl =
  "https://wa.me/917878122585?text=Hi%20Aditya%2C%20I%27d%20like%20to%20work%20with%20you.";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
        .from(
          ".hero-line",
          {
            yPercent: 105,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-bottom",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        );

      gsap.to(".hero-glow", {
        x: 80,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-grid", {
        backgroundPosition: "80px 80px",
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orb", {
        scale: 1.12,
        opacity: 0.8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#070707] text-white"
    >
      {/* Background grid */}
      <div
        className="
          hero-grid
          pointer-events-none
          absolute
          inset-0
          opacity-[0.14]
          [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Main purple atmosphere */}
      <div
        className="
          hero-glow
          pointer-events-none
          absolute
          right-[5%]
          top-[22%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-600/[0.075]
          blur-[150px]
        "
      />

      {/* Blue atmosphere */}
      <div
        className="
          hero-orb
          pointer-events-none
          absolute
          right-[38%]
          top-[8%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-indigo-500/[0.055]
          blur-[120px]
        "
      />

      {/* Pink atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          right-[3%]
          bottom-[8%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-fuchsia-500/[0.035]
          blur-[110px]
        "
      />

      {/* Left atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-220px]
          top-[35%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-white/[0.025]
          blur-[150px]
        "
      />

      {/* Diagonal light */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[14%]
          h-px
          w-[85%]
          rotate-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          bottom-[18%]
          h-px
          w-[75%]
          rotate-[12deg]
          bg-gradient-to-r
          from-transparent
          via-violet-300/[0.06]
          to-transparent
        "
      />

      {/* Vertical light */}
      <div
        className="
          pointer-events-none
          absolute
          right-[24%]
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-white/[0.025]
          to-transparent
        "
      />

      {/* 3D Scene */}
      <HeroScene />

      {/* 3D atmosphere overlay */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-[68%]
          bg-[radial-gradient(circle_at_55%_48%,rgba(124,92,255,0.08),transparent_38%)]
        "
      />

      {/* Vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_32%,rgba(0,0,0,0.5)_100%)]
        "
      />

      {/* Bottom shadow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[35%]
          w-full
          bg-gradient-to-t
          from-[#070707]
          via-[#070707]/40
          to-transparent
        "
      />

      {/* Grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-screen
          [background-image:radial-gradient(rgba(255,255,255,0.7)_0.5px,transparent_0.5px)]
          [background-size:4px_4px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-between px-5 pb-7 pt-28 md:px-8 lg:px-12">
        {/* Top */}
        <div className="flex items-start justify-between">
          <p className="hero-meta font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Graphic Designer
          </p>

          <p className="hero-meta hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 md:block">
            Mumbai / India
          </p>
        </div>

        {/* Main */}
        <div className="relative w-full">
          <div className="max-w-[650px] md:max-w-[58%]">
            <div className="overflow-hidden">
              <h1 className="hero-line font-display text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                VISUAL
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-line whitespace-nowrap font-serif text-[clamp(4rem,10vw,9.5rem)] italic leading-[0.9] tracking-[-0.06em] text-white/80">
                designer.
              </h1>
            </div>

            <div className="mt-8 flex items-end gap-8 sm:mt-10">
              <p className="hero-copy max-w-sm text-sm leading-6 text-white/40">
                Emotion-driven visuals, creative direction and design made to
                leave a mark.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta group relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-center text-[10px] font-medium uppercase tracking-wider text-black transition-transform duration-500 hover:scale-110 sm:h-24 sm:w-24"
              >
                Let&apos;s
                <br />
                Talk

                <ArrowUpRight
                  size={13}
                  className="absolute -right-1 -top-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="hero-bottom flex items-end justify-between">
          <span className="font-mono text-[10px] text-white/25">
            SCROLL TO EXPLORE
          </span>

          <ArrowDown
            size={15}
            className="animate-bounce text-white/35"
            strokeWidth={1}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;