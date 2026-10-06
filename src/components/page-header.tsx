import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

interface PageHeaderProps {
  title: string;
  script?: string;
  subtitle: string;
  kicker?: string;
}

export function PageHeader({
  title,
  script,
  subtitle,
  kicker = `${site.name} · PORTFOLIO`,
}: PageHeaderProps) {
  return (
    <section className="relative border-b border-line bg-paper px-4 py-8 text-ink md:px-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine/80">
          <Link to="/" className="hover:underline">
            TRANG CHỦ
          </Link>
          <span>/</span>
          <span className="text-wine">{title}</span>
        </div>

        <div className="mt-4">
          <p className="font-display text-xs tracking-[0.28em] text-wine uppercase">
            {kicker}
          </p>
          <div className="relative mt-1">
            <h1 className="font-display text-4xl font-bold tracking-tight text-wine sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {script ? (
              <span className="font-script absolute -top-4 left-44 text-script leading-none text-wine/40 sm:left-64 md:left-80 pointer-events-none">
                {script}
              </span>
            ) : null}
          </div>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
