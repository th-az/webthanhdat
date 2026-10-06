import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { enableJsMotion } from "@/components/motion";
import { SiteNav } from "@/components/site-nav";
import { nav, site } from "@/lib/site";

interface SiteLayoutProps {
  children: ReactNode;
  header?: ReactNode;
}

export function SiteLayout({ children, header }: SiteLayoutProps) {
  useEffect(() => {
    enableJsMotion();
  }, []);

  return (
    <div className="scene min-h-screen bg-wine px-2 py-2 md:px-3 md:py-3 text-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 focus:text-wine font-display"
      >
        Bỏ qua điều hướng
      </a>

      <div className="mx-auto max-w-[1440px]">
        <div className="preserve-3d overflow-hidden rounded-sm bg-paper shadow-card">
          <SiteNav />
          {header}
        </div>

        <main id="main-content" className="pt-3">
          {children}
        </main>

        <footer className="mt-8 border-t border-cream/20 pt-8 pb-6">
          <div className="grid gap-8 md:grid-cols-4 md:items-start">
            <div className="md:col-span-2">
              <p className="font-display text-2xl tracking-[0.2em] text-cream">
                {site.name}
              </p>
              <p className="mt-2 text-sm text-cream/70 max-w-md leading-relaxed">
                {site.intro}
              </p>
              <p className="mt-4 font-display text-xs tracking-[0.2em] text-cream/60">
                {site.slogan}
              </p>
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.25em] text-cream/60 mb-3">
                ĐIỀU HƯỚNG
              </p>
              <ul className="space-y-2 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-cream/80 hover:text-cream transition-colors font-display tracking-[0.16em]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs tracking-[0.25em] text-cream/60 mb-3">
                THÔNG TIN
              </p>
              <p className="text-sm text-cream/80">
                {site.fullName}
              </p>
              <p className="text-xs text-cream/70 mt-1">
                {site.school}
              </p>
              <p className="text-xs text-cream/70 mt-1">
                {site.location} · Quê {site.hometown}
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-block border border-cream/40 bg-cream/10 px-3 py-1.5 font-display text-xs tracking-[0.18em] text-cream hover:bg-cream hover:text-wine transition-colors"
                >
                  GỬI LỜI NHẮN
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-cream/10 pt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream/60">
            <p>
              © {new Date().getFullYear()} {site.fullName}. All rights reserved.
            </p>
            <p className="font-display tracking-[0.2em]">
              {site.domain.toUpperCase()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
