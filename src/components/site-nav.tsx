import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-line bg-paper">
      <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5">
        <Link
          to="/"
          className="font-display text-lg tracking-[0.22em] text-wine md:text-xl font-bold transition-opacity hover:opacity-85"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Mục lục">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{
                className: "text-wine font-bold border-b-2 border-wine pb-0.5",
              }}
              inactiveProps={{
                className: "text-wine/75 hover:text-wine hover:-translate-y-px",
              }}
              className="font-display text-sm tracking-[0.22em] transition-[color,transform] duration-150 ease-out py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="border border-wine bg-wine px-4 py-1.5 font-display text-xs tracking-[0.18em] text-cream transition-colors duration-150 hover:bg-wine-deep"
          >
            LIÊN HỆ
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-wine md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-line md:hidden",
          "transition-[grid-template-rows,opacity] duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="min-h-0 divide-y divide-line/60" aria-label="Mục lục di động">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{
                className: "text-wine font-bold bg-wine/5 pl-5",
              }}
              inactiveProps={{
                className: "text-wine/80",
              }}
              className="flex min-h-11 items-center px-4 font-display tracking-[0.2em] transition-all"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
