import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Layers, Sparkles, UserCheck } from "lucide-react";
import { ProjectDialog } from "@/components/project-dialog";
import { SiteHero } from "@/components/site-hero";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import {
  identityBars,
  mosaic,
  pillars,
  projects,
  roadmap,
  site,
  stack,
  type Project,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 3);

  return (
    <SiteLayout header={<SiteHero />}>
      <div className="space-y-6">
        {/* Section 1: Overview & Brand Identity */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Brand Overview */}
          <div className="lg:col-span-6">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="wine">
                <section className="card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8">
                  <div>
                    <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70">
                      <Sparkles className="size-4" />
                      <span>GIỚI THIỆU TỔNG QUAN</span>
                    </div>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cream md:text-4xl">
                      Xây dựng sản phẩm số với tư duy kinh doanh & công nghệ
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-cream/85">
                      {site.intro}
                    </p>
                    <p className="mt-3 text-xs italic text-cream/75">
                      "{site.slogan}"
                    </p>
                  </div>

                  <div className="mt-6 border-t border-cream/15 pt-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 bg-cream px-4 py-2 font-display text-xs tracking-[0.2em] font-bold text-wine transition-colors hover:bg-cream/90"
                    >
                      <span>TÌM HIỂU THÊM VỀ ĐẠT</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>

          {/* Identity & Core Metrics */}
          <div className="lg:col-span-6">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="paper">
                <section className="card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8">
                  <div>
                    <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine">
                      <UserCheck className="size-4" />
                      <span>ĐỊNH HƯỚNG NĂNG LỰC</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-wine">
                      THẾ MẠNH & ĐIỂM KHÁC BIỆT
                    </h3>
                    <p className="mt-2 text-sm text-ink/75">
                      {site.usp}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {identityBars.map((bar) => (
                        <li key={bar.label}>
                          <div className="mb-1 flex justify-between font-display text-xs tracking-[0.16em] text-wine">
                            <span className="font-bold">{bar.label.toUpperCase()}</span>
                            <span>{bar.value}%</span>
                          </div>
                          <div className="bar-track h-2 bg-line rounded-full">
                            <div
                              className="bar-fill h-2 bg-wine rounded-full"
                              style={{ width: `${bar.value}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-line pt-4">
                    <Link
                      to="/skills"
                      className="inline-flex items-center gap-2 font-display text-xs tracking-[0.18em] text-wine font-bold hover:underline"
                    >
                      <span>XEM TOÀN BỘ TECH STACK & QUY TRÌNH</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>
        </div>

        {/* Section 2: Featured Projects */}
        <Reveal>
          <TiltStage tone="paper">
            <section className="card-3d bg-paper p-6 text-ink md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-line pb-4">
                <div>
                  <p className="font-display text-xs tracking-[0.25em] text-wine">
                    FEATURED WORKS
                  </p>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-wine md:text-4xl">
                    DỰ ÁN TIÊU BIỂU
                  </h3>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-wine px-4 py-2 font-display text-xs tracking-[0.18em] text-cream hover:bg-wine-deep transition-colors"
                >
                  <span>XEM TẤT CẢ DỰ ÁN ({projects.length})</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((p) => (
                  <article
                    key={p.id}
                    className="flex flex-col justify-between border border-line bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-wine-deep">
                        {"video" in p && (p as { video?: string }).video ? (
                          <video
                            src={(p as { video: string }).video}
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={p.image}
                          />
                        ) : (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            style={{ objectPosition: p.imagePos }}
                          />
                        )}
                        <span className="absolute top-2 left-2 bg-wine px-2 py-0.5 font-display text-[10px] tracking-wider text-cream">
                          {p.status}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-xl font-bold text-wine">
                          {p.name}
                        </h4>
                        <p className="text-xs text-muted font-display tracking-wider">
                          {p.subtitle}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-ink/75 line-clamp-2">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-line/60 bg-wine/5 p-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-display text-xs tracking-wider text-wine hover:underline"
                      >
                        XEM NHANH
                      </button>
                      <Link
                        to="/projects/$projectId"
                        params={{ projectId: p.id }}
                        className="inline-flex items-center gap-1 font-display text-xs tracking-wider text-wine font-bold hover:underline"
                      >
                        <span>CHI TIẾT</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* Section 3: 3 Pillars Preview */}
        <Reveal>
          <TiltStage tone="wine">
            <section className="card-3d bg-wine-card p-6 text-cream md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-cream/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70">
                    <Layers className="size-4" />
                    <span>NỀN TẢNG</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wide text-cream md:text-3xl">
                    3 TRỤ CỘT CHUYÊN MÔN
                  </h3>
                </div>
                <Link
                  to="/skills"
                  className="font-display text-xs tracking-[0.2em] text-cream/80 hover:text-cream hover:underline"
                >
                  XEM QUY TRÌNH & KỸ NĂNG →
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="border border-cream/20 bg-wine/30 p-5 rounded"
                  >
                    <div className="aspect-[16/9] overflow-hidden rounded bg-wine-deep mb-3">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h4 className="font-display text-lg font-bold text-cream">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-cream/80">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* Section 4: Call to action to connect */}
        <Reveal>
          <div className="border border-cream/20 bg-paper p-8 text-center text-ink md:p-12 shadow-card">
            <h3 className="font-display text-3xl font-bold tracking-tight text-wine md:text-4xl">
              SẴN SÀNG CHO MỘT DỰ ÁN MỚI?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75 leading-relaxed">
              Bạn có thể xem chi tiết hồ sơ cá nhân, khám phá các dự án đã xây dựng hoặc gửi tin nhắn trao đổi trực tiếp với Thành Đạt.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="border border-wine bg-transparent px-5 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-wine hover:bg-wine/5 transition-colors"
              >
                XEM DỰ ÁN
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-wine bg-wine px-6 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-cream hover:bg-wine-deep transition-colors"
              >
                <span>LIÊN HỆ TRỰC TIẾP</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectDialog
        project={activeProject}
        open={Boolean(activeProject)}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      />
    </SiteLayout>
  );
}
