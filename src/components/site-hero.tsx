import { useEffect, useRef, type MouseEvent, type PointerEvent } from "react";
import { Facebook, Github, Globe, Instagram } from "lucide-react";
import { usePrefersReducedMotion } from "@/components/motion";
import { site } from "@/lib/site";

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com", label: "Facebook", Icon: Facebook },
  { href: `https://${site.domain}`, label: "Website", Icon: Globe },
];

export function SiteHero() {
  const stageRef = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = stageRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el.style.setProperty("--sy", `${Math.min(window.scrollY, 420) * 0.14}px`);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType === "touch") return;
    applyHero(e.clientX, e.clientY);
  }

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    applyHero(e.clientX, e.clientY);
  }

  function applyHero(clientX: number, clientY: number) {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (clientX - r.left) / r.width - 0.5;
    const y = (clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
  }

  function onPointerLeave() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }

  return (
    <section
      id="top"
      ref={stageRef}
      className="hero-stage relative bg-paper text-ink"
      aria-labelledby="hero-title"
      onPointerMove={onPointerMove}
      onMouseMove={onMouseMove}
      onPointerLeave={onPointerLeave}
      onMouseLeave={onPointerLeave}
    >
      <div className="grid items-end gap-6 px-4 pb-6 pt-4 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-4 lg:gap-10">
        <div className="hero-copy relative z-10">
          <p className="rise font-display text-xl tracking-[0.18em] text-wine md:text-3xl lg:text-4xl">
            {site.name}
          </p>
          <h1
            id="hero-title"
            className="rise mt-1 font-display text-display leading-[0.82] tracking-wide text-wine"
            style={{ animationDelay: "60ms" }}
          >
            WEB
            <br />
            DEVELOPER
          </h1>
          <p
            className="rise font-script -mt-4 ml-16 text-script leading-none text-wine md:ml-28 md:-mt-6"
            style={{ animationDelay: "120ms" }}
          >
            {site.script}
          </p>
          <p
            className="rise mt-6 max-w-md font-display text-sm tracking-[0.22em] text-wine/70 md:text-base"
            style={{ animationDelay: "180ms" }}
          >
            {site.tagline}
          </p>
          <p
            className="rise mt-2 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base"
            style={{ animationDelay: "220ms" }}
          >
            {site.fullName} — {site.title}. {site.location} · {site.hometown}.
          </p>

          <div
            className="rise mt-8 flex items-center gap-3"
            style={{ animationDelay: "280ms" }}
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="btn-3d inline-flex size-11 items-center justify-center rounded-sm bg-wine text-cream hover:bg-wine-deep"
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-figure relative z-[1] mx-auto w-full max-w-md md:max-w-none">
          <div className="hero-float">
            <img
              src="/images/hero.jpg"
              alt="Editorial fashion portrait for the THÀNH ĐẠT brand"
              className="rise mx-auto h-[min(56vh,560px)] w-full object-contain object-bottom md:h-[min(64vh,640px)]"
              style={{ animationDelay: "140ms" }}
            />
          </div>
          <div className="hero-floor" aria-hidden="true" />
        </div>
      </div>

      <p className="relative z-10 px-4 pb-5 text-right font-display text-sm tracking-[0.28em] text-wine md:px-8">
        {site.domain.toUpperCase()}
      </p>
    </section>
  );
}
