import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Briefcase,
  CircleDot,
  Code2,
  FolderClosed,
  Handshake,
  Layout,
  Layers,
  SlidersHorizontal,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import { engagement, funnel, nextSteps, pillars, stack } from "@/lib/site";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

const nextIcons = [Handshake, FolderClosed, SlidersHorizontal, CircleDot];

const stackCategoryIcons: Record<string, any> = {
  development: Code2,
  ai: Brain,
  tools: Terminal,
  business: Briefcase,
};

const stackCategoryTitles: Record<string, string> = {
  development: "LẬP TRÌNH & PHÁT TRIỂN WEB",
  ai: "TRÍ TUỆ NHÂN TẠO & LOCAL AI",
  tools: "CÔNG CỤ & THIẾT KẾ UI/UX",
  business: "TƯ DUY KINH DOANH & PHÂN TÍCH",
};

function SkillsPage() {
  return (
    <SiteLayout
      header={
        <PageHeader
          title="KỸ NĂNG & NĂNG LỰC"
          script="Expertise"
          subtitle="Tổng hợp các kỹ năng công nghệ, công cụ chuyên sâu và phương pháp tiếp cận dự án của Thành Đạt."
          kicker="STACK · PHƯƠNG PHÁP · QUY TRÌNH"
        />
      }
    >
      <div className="space-y-6">
        {/* Tech Stack 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => {
            const Icon = stackCategoryIcons[group] || Code2;
            const title = stackCategoryTitles[group] || group.toUpperCase();
            return (
              <Reveal key={group} className="h-full">
                <TiltStage className="h-full" tone="paper">
                  <div className="card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8">
                    <div>
                      <div className="flex items-center gap-3 border-b border-line pb-4">
                        <span className="flex size-10 items-center justify-center rounded bg-wine/10 text-wine">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <p className="font-display text-xs tracking-[0.2em] text-wine uppercase">
                            PHÂN NHÓM CHUYÊN MÔN
                          </p>
                          <h3 className="font-display text-xl font-bold text-wine">
                            {title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {items.map((tech) => (
                          <span
                            key={tech}
                            className="border border-line bg-wine/5 px-3 py-1.5 font-display text-xs tracking-wider text-wine font-medium transition-colors hover:bg-wine hover:text-cream"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-3 text-xs text-ink/65">
                      <span>Được cập nhật liên tục theo xu hướng công nghệ 2026.</span>
                    </div>
                  </div>
                </TiltStage>
              </Reveal>
            );
          })}
        </div>

        {/* 3 Core Pillars */}
        <Reveal>
          <TiltStage tone="wine">
            <section className="card-3d bg-wine-card p-6 text-cream md:p-8">
              <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70">
                <Layers className="size-4" />
                <span>TRIẾT LÝ NỀN TẢNG</span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-cream md:text-3xl">
                3 TRỤ CỘT CHUYÊN MÔN
              </h3>
              <p className="mt-1 text-sm text-cream/75 max-w-xl">
                Điểm tựa giúp các sản phẩm đạt được sự cân bằng giữa thị giác, kỹ thuật và giá trị thực tế
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="overflow-hidden border border-cream/20 bg-wine/30 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-wine-deep">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-xl font-bold text-cream">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-cream/80">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* 4 Steps Funnel Process */}
        <Reveal>
          <TiltStage tone="paper">
            <section className="card-3d bg-paper p-6 text-ink md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-line pb-4">
                <div>
                  <p className="font-display text-xs tracking-[0.25em] text-wine">
                    METHODOLOGY
                  </p>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-wine">
                    QUY TRÌNH PHÁT TRIỂN 4 BƯỚC
                  </h3>
                </div>
                <p className="text-xs text-ink/65 max-w-sm">
                  Từ việc tiếp nhận ý tưởng sơ khởi đến khi ra mắt phiên bản hoàn thiện
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {funnel.map((step) => (
                  <div
                    key={step.stage}
                    className="border border-line bg-wine/5 p-5 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <p className="font-display text-xs tracking-[0.2em] text-wine/70 font-bold">
                      {step.stage}
                    </p>
                    <h4 className="mt-2 font-display text-xl font-bold text-wine">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink/75">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* Engagement Strategy & What's Next */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Engagement Card */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="wine">
                <section className="card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8">
                  <div>
                    <p className="font-display text-xs tracking-[0.25em] text-cream/70">
                      CÁCH THỨC LÀM VIỆC
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                      CHIẾN LƯỢC HỢP TÁC
                    </h3>

                    <ul className="mt-6 space-y-4">
                      {engagement.map((item) => (
                        <li
                          key={item.title}
                          className="border border-cream/20 bg-wine/40 p-4 rounded"
                        >
                          <h4 className="font-display text-lg font-bold text-cream">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-cream/80">
                            {item.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-cream/15 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border border-cream/30 bg-cream/10 px-4 py-2 font-display text-xs tracking-[0.2em] text-cream hover:bg-cream hover:text-wine transition-colors"
                    >
                      <span>BẮT ĐẦU DỰ ÁN NGAY</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>

          {/* What's Next 4 Steps Card */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="paper">
                <section className="card-3d h-full bg-paper p-6 text-ink md:p-8">
                  <p className="font-display text-xs tracking-[0.25em] text-wine">
                    GET STARTED
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-wine">
                    4 BƯỚC TRIỂN KHAI THỰC TẾ
                  </h3>
                  <p className="mt-1 text-xs text-ink/70">
                    Quy trình làm việc minh bạch, nhanh gọn và định kỳ báo cáo tiến độ
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {nextSteps.map((step, i) => {
                      const Icon = nextIcons[i] || CircleDot;
                      return (
                        <div key={step.n} className="border border-line p-4 rounded bg-white">
                          <span className="flex size-10 items-center justify-center rounded-full border border-wine text-wine mb-3">
                            <Icon className="size-5" />
                          </span>
                          <span className="font-display text-xs tracking-wider text-wine/60 font-bold">
                            BƯỚC {step.n}
                          </span>
                          <h4 className="font-display text-base font-bold text-wine">
                            {step.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-ink/70">
                            {step.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
