import { createFileRoute } from "@tanstack/react-router";
import {
  Facebook,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  User,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { QrMark } from "@/components/qr-mark";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, TiltStage } from "@/components/motion";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const socials = [
  {
    href: "https://github.com",
    label: "GitHub",
    handle: "github.com",
    Icon: Github,
    desc: "Xem các mã nguồn và dự án public",
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    handle: "facebook.com",
    Icon: Facebook,
    desc: "Kết nối và trao đổi tin nhắn trực tiếp",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    handle: "instagram.com",
    Icon: Instagram,
    desc: "Hình ảnh và phong cách đời thường",
  },
  {
    href: `https://${site.domain}`,
    label: "Website",
    handle: site.domain,
    Icon: Globe,
    desc: "Trang portfolio chính thức",
  },
];

function ContactPage() {
  return (
    <SiteLayout
      header={
        <PageHeader
          title="LIÊN HỆ HỢP TÁC"
          script="Get in Touch"
          subtitle="Hãy gửi lời nhắn nếu bạn có một dự án thú vị, một ý tưởng cần phát triển hoặc muốn kết nối học hỏi."
          kicker="KẾT NỐI · THẢO LUẬN · ĐỒNG HÀNH"
        />
      }
    >
      <div className="space-y-6">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Contact Form Card */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="paper">
                <section className="card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8">
                  <div>
                    <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine">
                      <MessageSquare className="size-4" />
                      <span>GỬI LỜI NHẮN TRỰC TIẾP</span>
                    </div>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-wine md:text-4xl">
                      Bắt đầu cuộc trò chuyện
                    </h2>
                    <p className="mt-2 text-sm text-ink/75">
                      Điền thông tin vào form dưới đây, mình sẽ phản hồi lại bạn trong thời gian sớm nhất có thể.
                    </p>

                    <div className="mt-6">
                      <ContactForm />
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line pt-4 text-xs text-ink/65">
                    <span>Thông tin chỉ dùng để phản hồi và chỉ quản trị viên được phép truy cập.</span>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>

          {/* Right: Info Card & QR Code */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <TiltStage className="h-full" tone="wine">
                <section className="card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8">
                  <div>
                    <p className="font-display text-xs tracking-[0.25em] text-cream/70">
                      THÔNG TIN LIÊN LẠC
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold text-cream">
                      {site.fullName}
                    </h3>
                    <p className="text-xs text-cream/80">{site.title}</p>

                    <dl className="mt-6 space-y-3.5 text-sm">
                      <div className="flex items-start gap-3 border-b border-cream/15 pb-2.5">
                        <MapPin className="size-4 text-cream/70 shrink-0 mt-0.5" />
                        <div>
                          <dt className="text-xs text-cream/65 font-display tracking-wider">ĐỊA BÀN HOẠT ĐỘNG</dt>
                          <dd className="text-cream">{site.location} · Quê {site.hometown}</dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 border-b border-cream/15 pb-2.5">
                        <GraduationCap className="size-4 text-cream/70 shrink-0 mt-0.5" />
                        <div>
                          <dt className="text-xs text-cream/65 font-display tracking-wider">HỌC TẬP</dt>
                          <dd className="text-cream text-xs leading-relaxed">{site.school}</dd>
                          <dd className="text-cream/75 text-[11px]">Chuyên ngành: {site.major}</dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 border-b border-cream/15 pb-2.5">
                        <Globe className="size-4 text-cream/70 shrink-0 mt-0.5" />
                        <div>
                          <dt className="text-xs text-cream/65 font-display tracking-wider">WEBSITE</dt>
                          <dd className="text-cream font-mono text-xs">{site.domain}</dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-6">
                      <QrMark />
                    </div>
                  </div>

                  <div className="mt-6 border-t border-cream/20 pt-4">
                    <p className="font-display text-xs tracking-[0.2em] text-cream/70">
                      CHỮ KÝ ĐẶC TRƯNG
                    </p>
                    <p className="mt-1 font-script text-3xl text-cream/90">
                      {site.fullName}
                    </p>
                  </div>
                </section>
              </TiltStage>
            </Reveal>
          </div>
        </div>

        {/* Social Channels 4 Cards Grid */}
        <Reveal>
          <TiltStage tone="paper">
            <section className="card-3d bg-paper p-6 text-ink md:p-8">
              <div className="flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine">
                <Sparkles className="size-4" />
                <span>MẠNG XÃ HỘI & KÊNH KẾT NỐI</span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-wide text-wine md:text-3xl">
                CÁC KÊNH TRUYỀN THÔNG CÁ NHÂN
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {socials.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group border border-line p-4 transition-all duration-200 hover:-translate-y-1 hover:border-wine hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded bg-wine text-cream group-hover:bg-wine-deep transition-colors">
                          <Icon className="size-5" />
                        </span>
                        <span className="font-display text-xs tracking-wider text-wine font-bold group-hover:underline">
                          TRUY CẬP →
                        </span>
                      </div>
                      <h4 className="mt-3 font-display text-lg font-bold text-wine">
                        {social.label}
                      </h4>
                      <p className="text-xs text-muted font-mono">{social.handle}</p>
                      <p className="mt-2 text-xs text-ink/75 leading-relaxed">
                        {social.desc}
                      </p>
                    </a>
                  );
                })}
              </div>
            </section>
          </TiltStage>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
