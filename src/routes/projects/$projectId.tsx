import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, FolderGit2, Layers, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <SiteLayout>
        <div className="py-20 text-center bg-paper p-8 text-ink">
          <h1 className="font-display text-4xl text-wine font-bold">Dự án không tồn tại</h1>
          <p className="mt-2 text-sm text-ink/70">Không tìm thấy thông tin dự án theo đường dẫn này.</p>
          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-wine px-4 py-2 font-display text-xs tracking-wider text-cream"
            >
              <ArrowLeft className="size-4" />
              <span>QUAY LẠI DANH SÁCH DỰ ÁN</span>
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <SiteLayout>
      <div className="space-y-6">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-cream/20 bg-wine-card px-4 py-3 text-cream md:px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-cream hover:underline"
          >
            <ArrowLeft className="size-4" />
            <span>QUAY LẠI TẤT CẢ DỰ ÁN</span>
          </Link>

          <span className="font-display text-xs tracking-[0.2em] text-cream/70 uppercase">
            {project.status} · {project.subtitle}
          </span>
        </div>

        {/* Project Header Banner & Main Details */}
        <Reveal>
          <TiltStage tone="paper">
            <article className="card-3d overflow-hidden bg-paper text-ink">
              {/* Media image */}
              <div className="relative aspect-[21/9] max-h-[460px] w-full overflow-hidden bg-wine-deep">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: project.imagePos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream md:bottom-8 md:left-8">
                  <span className="bg-wine px-3 py-1 font-display text-xs tracking-[0.2em] text-cream uppercase">
                    {project.status}
                  </span>
                  <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl drop-shadow-md">
                    {project.name}
                  </h1>
                  <p className="mt-1 font-display text-sm tracking-[0.2em] text-cream/90 md:text-base">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Information body */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  {/* Left Column: Description & Features */}
                  <div className="space-y-6 lg:col-span-8">
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-wide text-wine">
                        TỔNG QUAN DỰ ÁN
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-ink/80 md:text-lg">
                        {project.description}
                      </p>
                    </div>

                    {(project as any).features && (
                      <div className="border-t border-line pt-6">
                        <h3 className="font-display text-xl font-bold tracking-wide text-wine flex items-center gap-2">
                          <Sparkles className="size-5" />
                          <span>TÍNH NĂNG NỔI BẬT & ĐIỂM NHẤN</span>
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {((project as any).features as string[]).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                              <CheckCircle2 className="size-5 text-wine shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Meta Info, Stack, Demo */}
                  <div className="space-y-6 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line lg:pl-8 pt-6 lg:pt-0">
                    <div>
                      <p className="font-display text-xs tracking-[0.25em] text-wine font-bold">
                        CÔNG NGHỆ ÁP DỤNG
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-line bg-wine/5 px-2.5 py-1 font-display text-xs tracking-wide text-wine"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-line pt-4 space-y-3 text-sm">
                      <div>
                        <dt className="font-display text-xs tracking-[0.2em] text-wine font-bold">
                          TRẠNG THÁI
                        </dt>
                        <dd className="mt-1 text-ink/80 font-medium">{project.status}</dd>
                      </div>

                      <div>
                        <dt className="font-display text-xs tracking-[0.2em] text-wine font-bold">
                          TRẢI NGHIỆM DEMO
                        </dt>
                        <dd className="mt-1 text-ink/80">{project.demo}</dd>
                      </div>

                      <div>
                        <dt className="font-display text-xs tracking-[0.2em] text-wine font-bold">
                          MÃ NGUỒN GITHUB
                        </dt>
                        <dd className="mt-1 text-ink/80">{project.github}</dd>
                      </div>
                    </div>

                    <div className="border-t border-line pt-4">
                      <Link
                        to="/contact"
                        className="flex w-full items-center justify-center gap-2 bg-wine px-4 py-2.5 font-display text-xs tracking-[0.2em] text-cream hover:bg-wine-deep transition-colors"
                      >
                        <span>TRAO ĐỔI VỀ DỰ ÁN NÀY</span>
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </TiltStage>
        </Reveal>

        {/* Other Projects Section */}
        <Reveal>
          <TiltStage tone="wine">
            <section className="card-3d bg-wine-card p-6 text-cream md:p-8">
              <h3 className="font-display text-2xl font-bold tracking-wide text-cream">
                CÁC DỰ ÁN KHÁC CỦA THÀNH ĐẠT
              </h3>
              <p className="mt-1 text-xs text-cream/70">
                Tiếp tục khám phá các sản phẩm khác trong portfolio
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {otherProjects.map((op) => (
                  <Link
                    key={op.id}
                    to="/projects/$projectId"
                    params={{ projectId: op.id }}
                    className="group border border-cream/20 bg-wine/30 p-4 transition-transform duration-200 hover:-translate-y-1 block"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-wine-deep">
                      <img
                        src={op.image}
                        alt={op.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ objectPosition: op.imagePos }}
                      />
                    </div>
                    <p className="mt-3 font-display text-base font-bold text-cream group-hover:underline">
                      {op.name}
                    </p>
                    <p className="text-xs text-cream/70 line-clamp-1">{op.subtitle}</p>
                  </Link>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
