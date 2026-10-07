import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Filter, FolderGit2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ProjectDialog } from "@/components/project-dialog";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import { listPublishedProjects } from "@/lib/admin";
import { roadmap, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  loader: () => listPublishedProjects(),
  component: ProjectsPage,
});

type Category = "all" | "ai" | "web" | "business";

function ProjectsPage() {
  const projects = Route.useLoaderData();
  const [filter, setFilter] = useState<Category>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });
  const categoryCounts = {
    ai: projects.filter((project) => project.category === "ai").length,
    web: projects.filter((project) => project.category === "web").length,
    business: projects.filter((project) => project.category === "business").length,
  };

  return (
    <SiteLayout
      header={
        <PageHeader
          title="DỰ ÁN TIÊU BIỂU"
          script="Selected Works"
          subtitle="Tuyển tập các sản phẩm web hiện đại và ứng dụng Local AI được xây dựng với tư duy tinh gọn và thẩm mỹ cao."
          kicker="PORTFOLIO · SẢN PHẨM · THỰC TẾ"
        />
      }
    >
      <div className="space-y-6">
        {/* Category Filters Bar */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream/20 bg-wine-card px-4 py-3 text-cream md:px-6">
            <div className="flex items-center gap-2 font-display text-xs tracking-[0.2em] text-cream/70">
              <Filter className="size-4" />
              <span>LỌC THEO PHÂN LOẠI:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={cn(
                  "px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors",
                  filter === "all"
                    ? "bg-cream text-wine font-bold"
                    : "border border-cream/30 text-cream hover:bg-cream/10",
                )}
              >
                TẤT CẢ ({projects.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("ai")}
                className={cn(
                  "px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors",
                  filter === "ai"
                    ? "bg-cream text-wine font-bold"
                    : "border border-cream/30 text-cream hover:bg-cream/10",
                )}
              >
                LOCAL AI ({categoryCounts.ai})
              </button>
              <button
                type="button"
                onClick={() => setFilter("web")}
                className={cn(
                  "px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors",
                  filter === "web"
                    ? "bg-cream text-wine font-bold"
                    : "border border-cream/30 text-cream hover:bg-cream/10",
                )}
              >
                WEB CRAFT ({categoryCounts.web})
              </button>
              <button
                type="button"
                onClick={() => setFilter("business")}
                className={cn(
                  "px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors",
                  filter === "business"
                    ? "bg-cream text-wine font-bold"
                    : "border border-cream/30 text-cream hover:bg-cream/10",
                )}
              >
                BUSINESS ({categoryCounts.business})
              </button>
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <Reveal key={p.id} className="h-full">
              <TiltStage className="h-full" tone="paper">
                <article className="card-3d flex h-full flex-col justify-between overflow-hidden bg-paper text-ink">
                  <div>
                    {/* Project Image & Badge */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-wine-deep/10">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        style={{ objectPosition: p.imagePos }}
                      />
                      <span className="absolute top-3 left-3 bg-wine px-2.5 py-1 font-display text-[10px] tracking-[0.2em] text-cream uppercase">
                        {p.status}
                      </span>
                      <span className="absolute top-3 right-3 bg-paper/90 px-2.5 py-1 font-display text-[10px] tracking-[0.16em] text-wine uppercase shadow-sm">
                        {p.subtitle}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-display text-2xl font-bold tracking-wide text-wine">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75 line-clamp-3">
                        {p.description}
                      </p>

                      <div className="mt-4">
                        <p className="font-display text-[11px] tracking-[0.2em] text-wine/80 font-bold mb-2">
                          STACK CÔNG NGHỆ:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className="border border-line bg-wine/5 px-2 py-0.5 font-display text-[11px] tracking-wide text-wine"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="border-t border-line bg-wine/5 p-4 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      className="font-display text-xs tracking-[0.16em] text-wine hover:underline"
                    >
                      XEM NHANH
                    </button>

                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: p.id }}
                      className="inline-flex items-center gap-1.5 bg-wine px-3 py-1.5 font-display text-xs tracking-[0.16em] text-cream hover:bg-wine-deep transition-colors"
                    >
                      <span>CHI TIẾT</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </TiltStage>
            </Reveal>
          ))}
        </div>

        {/* Roadmap Section */}
        <Reveal>
          <TiltStage tone="wine">
            <section className="card-3d bg-wine-card p-6 text-cream md:p-8">
              <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70">
                <Sparkles className="size-4" />
                <span>KẾ HOẠCH & LỘ TRÌNH</span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-cream md:text-3xl">
                KPIs & GOALS ROADMAP
              </h3>
              <p className="mt-1 text-sm text-cream/75 max-w-xl">
                Kế hoạch phát triển các mốc quan trọng trong năm 2026 của Thành Đạt
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {roadmap.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative border border-cream/20 bg-wine/30 p-5 rounded transition-transform duration-200 hover:-translate-y-1"
                  >
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-cream/60">
                      {item.kicker}
                    </span>
                    <h4 className="mt-2 font-display text-xl font-bold text-cream">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-cream/80">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* Next project CTA */}
        <Reveal>
          <div className="border border-cream/20 bg-wine p-6 text-center text-cream md:p-8">
            <h3 className="font-display text-2xl font-bold tracking-wide">
              BẠN ĐANG CÓ MỘT Ý TƯỞNG CẦN XÂY DỰNG?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/80">
              Hãy trao đổi ngắn để cùng nhau biến ý tưởng thành website hoặc giải pháp AI thực tế.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-cream bg-cream px-6 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-wine hover:bg-cream/90 transition-colors"
              >
                <span>LIÊN HỆ HỢP TÁC NGAY</span>
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
