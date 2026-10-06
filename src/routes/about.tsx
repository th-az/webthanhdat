import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap, MapPin, Sparkles, User } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import {
  audience,
  audienceNotes,
  identityBars,
  mosaic,
  personas,
  site,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout
      header={
        <PageHeader
          title="GIỚI THIỆU"
          script="About Me"
          subtitle="Sinh viên Quản trị kinh doanh tại PTIT, theo đuổi lập trình web hiện đại và phát triển các sản phẩm AI local."
          kicker="BẢN THÂN · TƯ DUY · ĐỊNH VỊ"
        />
      }
    >
      <div className="space-y-4">
        {/* Story & Biography Section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Main Story Card */}
          <div className="lg:col-span-8">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="paper">
                <section className="card-3d h-full bg-paper p-6 text-ink md:p-8">
                  <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine">
                    <Sparkles className="size-4" />
                    <span>CÂU CHUYỆN & HÀNH TRÌNH</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-wine md:text-4xl">
                    Kết hợp tư duy kinh doanh với kỹ thuật công nghệ
                  </h2>

                  <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
                    <p>
                      Xin chào, mình là <strong className="text-wine font-semibold">{site.fullName}</strong> ({site.nickname}). Hiện mình đang là sinh viên theo học ngành <strong>{site.major}</strong> tại <strong>{site.school}</strong>.
                    </p>
                    <p>
                      Khác với lối mòn lý thuyết kinh doanh thuần túy, mình tin rằng trong kỷ nguyên số, một ý tưởng kinh doanh hay chỉ thực sự có giá trị khi nó được hiện thực hóa thành sản phẩm cụ thể. Vì vậy, mình chủ động tự học và rèn luyện kỹ năng <strong>lập trình web hiện đại</strong> và <strong>ứng dụng trí tuệ nhân tạo (AI)</strong> vào thực tế.
                    </p>
                    <p>
                      Mỗi website mình tạo ra không chỉ là những dòng mã khô khan hay giao diện thông thường, mà được định hình theo phong cách <strong>Luxury Editorial</strong> — chú trọng typography, bố cục phân bổ không gian và trải nghiệm thị giác tinh tế như một ấn phẩm tạp chí cao cấp.
                    </p>
                    <p>
                      Đồng thời, mình tập trung vào hướng đi <strong>Local AI</strong> — đưa các mô hình ngôn ngữ lớn (LLM) chạy trực tiếp trên máy tính cá nhân để phân tích tài liệu và hỗ trợ công việc mà không làm lộ dữ liệu riêng tư ra ngoài đám mây.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4">
                    <div>
                      <p className="font-display text-2xl font-bold text-wine">2026</p>
                      <p className="text-xs text-ink/65 uppercase tracking-wider">Mục tiêu phát triển</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-wine">05+</p>
                      <p className="text-xs text-ink/65 uppercase tracking-wider">Dự án hoàn thành</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-wine">100%</p>
                      <p className="text-xs text-ink/65 uppercase tracking-wider">Local & Bảo mật AI</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-wine">Editorial</p>
                      <p className="text-xs text-ink/65 uppercase tracking-wider">Phong cách thiết kế</p>
                    </div>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>

          {/* Quick Profile & Info */}
          <div className="lg:col-span-4">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="wine">
                <section className="card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8">
                  <div>
                    <p className="font-display text-xs tracking-[0.25em] text-cream/70">
                      PROFILE SNAPSHOT
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-cream">
                      {site.fullName}
                    </h3>
                    <p className="text-xs text-cream/75 mt-0.5">{site.title}</p>

                    <dl className="mt-6 space-y-3 text-sm">
                      <div className="flex items-center gap-2 border-b border-cream/15 pb-2">
                        <User className="size-4 text-cream/70 shrink-0" />
                        <dt className="text-cream/65 font-display text-xs tracking-wider">ĐỘ TUỔI:</dt>
                        <dd className="ml-auto text-cream">{audience.age} · {audience.gender}</dd>
                      </div>
                      <div className="flex items-center gap-2 border-b border-cream/15 pb-2">
                        <MapPin className="size-4 text-cream/70 shrink-0" />
                        <dt className="text-cream/65 font-display text-xs tracking-wider">NƠI Ở:</dt>
                        <dd className="ml-auto text-cream">{audience.location}</dd>
                      </div>
                      <div className="flex items-center gap-2 border-b border-cream/15 pb-2">
                        <GraduationCap className="size-4 text-cream/70 shrink-0" />
                        <dt className="text-cream/65 font-display text-xs tracking-wider">TRƯỜNG:</dt>
                        <dd className="ml-auto text-cream text-right text-xs">{site.school}</dd>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <dt className="text-cream/65 font-display text-xs tracking-wider">CHUYÊN NGÀNH:</dt>
                        <dd className="ml-auto text-cream text-right text-xs">{site.major}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-8 border-t border-cream/20 pt-4">
                    <p className="font-display text-xs tracking-[0.2em] text-cream/70">
                      TRIẾT LÝ LÀM VIỆC
                    </p>
                    <p className="mt-1 text-sm italic text-cream/90">
                      "{site.slogan}"
                    </p>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>
        </div>

        {/* Identity Bars & Principles */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Identity Bars */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="paper">
                <section className="card-3d h-full bg-paper p-6 text-ink md:p-8">
                  <h3 className="font-display text-2xl font-bold tracking-wide text-wine">
                    NĂNG LỰC & ĐỊNH HƯỚNG
                  </h3>
                  <p className="mt-2 text-sm text-ink/75">
                    {site.usp}
                  </p>

                  <ul className="mt-6 space-y-4">
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

                  <div className="mt-6 rounded bg-wine/5 p-4 border border-line">
                    <p className="font-display text-xs tracking-[0.2em] text-wine font-bold">
                      CHIẾN LƯỢC NỘI DUNG
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/75">
                      Tập trung phát triển sản phẩm web có tính thẩm mỹ cao cùng hệ thống AI chạy máy cục bộ. Mỗi dự án đều phải kể được câu chuyện và mang lại giá trị thực tế.
                    </p>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>

          {/* Key Principles & Audience Notes */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="wine">
                <section className="card-3d h-full bg-wine-card p-6 text-cream md:p-8">
                  <h3 className="font-display text-2xl font-bold tracking-wide text-cream">
                    NGUYÊN TẮC THỰC HIỆN
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">
                    Những giá trị cốt lõi dẫn dắt mọi quyết định thiết kế và lập trình
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {audienceNotes.map((note, index) => (
                      <div
                        key={index}
                        className="rounded border border-cream/20 bg-wine/30 p-4 transition-transform duration-200 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-5 text-cream shrink-0 mt-0.5" />
                          <p className="text-sm leading-relaxed text-cream/90">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-cream/15 pt-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-display text-xs tracking-[0.2em] text-cream/70">
                          TƯ DUY KINH DOANH
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-cream/85">
                          Xác định người dùng là ai, bài toán gì cần giải, và chỉ số thành công trước khi gõ code.
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-[0.2em] text-cream/70">
                          TƯ DUY SẢN PHẨM
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-cream/85">
                          Prototype nhanh, thẩm mỹ cao cấp, trải nghiệm trực quan và khả năng mở rộng lâu dài.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>
        </div>

        {/* 4 Personas Section */}
        <Reveal>
          <TiltStage tone="paper">
            <section className="card-3d bg-paper p-6 text-ink md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-line pb-4">
                <div>
                  <p className="font-display text-xs tracking-[0.25em] text-wine">
                    MULTI-DISCIPLINARY
                  </p>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-wine">
                    4 GÓC NHÌN ĐẶC TRƯNG
                  </h3>
                </div>
                <p className="text-xs text-ink/65 max-w-sm">
                  Sự hòa quyện giữa các vai trò khác nhau tạo nên phong cách độc đáo của Thành Đạt
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {personas.map((p) => (
                  <div
                    key={p.name}
                    className="group overflow-hidden border border-line bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-line/20">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ objectPosition: p.pos }}
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-display text-base font-bold tracking-wider text-wine">
                        {p.name.toUpperCase()}
                      </p>
                      <p className="text-xs font-medium text-muted">{p.role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-ink/75">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>

        {/* Photo Mosaic Gallery */}
        <Reveal>
          <TiltStage tone="wine">
            <section className="card-3d bg-wine-card p-6 text-cream md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-display text-xs tracking-[0.25em] text-cream/70">
                    EDITORIAL GALLERY
                  </p>
                  <h3 className="font-display text-2xl font-bold tracking-wide text-cream">
                    HÌNH ẢNH & PHONG CÁCH
                  </h3>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border border-cream/40 bg-cream/10 px-4 py-2 font-display text-xs tracking-[0.2em] text-cream hover:bg-cream hover:text-wine transition-colors"
                >
                  <span>XEM CÁC DỰ ÁN</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3">
                {mosaic.map((shot, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-wine-deep">
                    <img
                      src={shot.src}
                      alt={`Gallery item ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{ objectPosition: shot.pos }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </TiltStage>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
