import { useState, type ReactNode } from "react";
import {
  CircleDot,
  FolderClosed,
  Handshake,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal, TiltStage } from "@/components/motion";
import { ContactForm } from "@/components/contact-form";
import { ProjectDialog } from "@/components/project-dialog";
import { QrMark } from "@/components/qr-mark";
import {
  audience,
  audienceNotes,
  engagement,
  funnel,
  identityBars,
  mosaic,
  nextSteps,
  personas,
  pillars,
  projects,
  roadmap,
  site,
  stack,
  type Project,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const nextIcons = [Handshake, FolderClosed, SlidersHorizontal, CircleDot];

export function SiteGrid() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="poster-grid grid grid-cols-1 gap-3 pt-3 md:grid-cols-2 lg:grid-cols-12">
        <OverviewCard />
        <StrategyCard />
        <MiddleCard onOpen={setActive} />
        <IdentityCard />
        <ProjectsCard onOpen={setActive} />
        <EngagementCard />
        <AudienceCard />
        <PillarsCard />
        <RoadmapCard />
        <PersonasCard />
        <FunnelCard />
        <StackCard />
        <NextCard />
        <ContactCard />
      </div>
      <ProjectDialog
        project={active}
        open={Boolean(active)}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      />
    </>
  );
}

function Wine({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <TiltStage className="h-full" tone="wine">
        <section id={id} className="card-3d h-full bg-wine-card p-5 text-cream md:p-6">
          {children}
        </section>
      </TiltStage>
    </Reveal>
  );
}

function Paper({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <TiltStage className="h-full" tone="paper">
        <section id={id} className="card-3d h-full bg-paper p-5 text-ink md:p-6">
          {children}
        </section>
      </TiltStage>
    </Reveal>
  );
}

function Kicker({
  children,
  light,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-display text-2xl tracking-wide md:text-3xl",
        light ? "text-cream" : "text-wine",
      )}
    >
      {children}
    </h2>
  );
}

function OverviewCard() {
  return (
    <Wine id="overview" className="lg:col-span-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(148px,0.32fr)_1fr]">
        <div className="grid grid-cols-4 gap-1 lg:grid-cols-2">
          {mosaic.slice(0, 8).map((shot, i) => (
            <img
              key={`${shot.src}-${i}`}
              src={shot.src}
              alt=""
              className="aspect-square h-full w-full object-cover lift-media"
              style={{ objectPosition: shot.pos }}
            />
          ))}
        </div>
        <div>
          <Kicker light>BRAND OVERVIEW</Kicker>
          <p className="mt-3 font-display text-xs tracking-[0.2em] text-cream/70">
            ABOUT {site.nickname.toUpperCase()}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/85">{site.intro}</p>
          <p className="mt-4 font-display text-xs tracking-[0.2em] text-cream/70">
            BUSINESS GOALS
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-cream/85">
            <li>Xây sản phẩm số hiện đại, trực quan, thân thiện.</li>
            <li>Đưa AI local vào công việc hàng ngày — PDF, DOCX, chat.</li>
            <li>Giữ thẩm mỹ editorial: type, ảnh, khoảng trắng.</li>
          </ul>
        </div>
      </div>
    </Wine>
  );
}

function StrategyCard() {
  return (
    <Paper className="lg:col-span-5">
      <div className="grid gap-4 sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr]">
        <div className="grid grid-cols-2 gap-1">
          <img src="/images/hands.jpg" alt="" className="h-full w-full object-cover" />
          <img
            src="/images/hero.jpg"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div>
          <Kicker>CURRENT STRATEGY</Kicker>
          <p className="mt-3 font-display text-xs tracking-[0.2em] text-wine">
            CONTENT
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">
            Tập trung vào web editorial và trợ lý AI chạy trên máy Windows. Mỗi
            dự án phải nhìn được, dùng được, kể được câu chuyện.
          </p>
          <p className="mt-3 font-display text-xs tracking-[0.2em] text-wine">
            ENGAGEMENT
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">
            Prototype sớm, vòng lặp ngắn, ưu tiên giao diện thật thay vì tài liệu
            dài. Local AI để giữ dữ liệu ở máy cá nhân.
          </p>
        </div>
      </div>
    </Paper>
  );
}

function MiddleCard({ onOpen }: { onOpen: (p: Project) => void }) {
  const current = projects.filter((p) => p.id === "datai" || p.id === "portfolio");
  return (
    <Wine className="lg:col-span-3">
      <div className="grid grid-cols-2 gap-1">
        <img src="/images/ai.jpg" alt="" className="aspect-[3/4] w-full object-cover" />
        <img
          src="/images/product.jpg"
          alt=""
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
      <Kicker light>
        <span className="mt-4 block">MIDDLE OF THE FUNNEL</span>
      </Kicker>
      <p className="mt-2 font-display text-xs tracking-[0.2em] text-cream/70">
        NOW BUILDING
      </p>
      <ul className="mt-2 space-y-2">
        {current.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => onOpen(p)}
              className="text-left text-sm text-cream/90 underline-offset-4 hover:underline"
            >
              {p.name} — {p.subtitle}
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-display text-xs tracking-[0.2em] text-cream/70">
        CONTENT GOALS
      </p>
      <p className="mt-1 text-sm leading-relaxed text-cream/80">
        Demo local AI, portfolio live, và hệ thống ký túc xá PTIT.
      </p>
    </Wine>
  );
}

function IdentityCard() {
  return (
    <Paper className="lg:col-span-4">
      <div className="grid grid-cols-4 gap-1">
        {mosaic.slice(0, 4).map((shot, i) => (
          <img
            key={`id-${i}`}
            src={shot.src}
            alt=""
            className="aspect-square w-full object-cover lift-media"
            style={{ objectPosition: shot.pos }}
          />
        ))}
      </div>
      <Kicker>
        <span className="mt-4 block">BRAND IDENTITY</span>
      </Kicker>
      <p className="mt-3 font-display text-xs tracking-[0.2em] text-wine">SLOGAN</p>
      <p className="mt-1 text-sm italic text-ink/80">{site.slogan}</p>
      <p className="mt-3 font-display text-xs tracking-[0.2em] text-wine">USP</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/75">{site.usp}</p>
      <ul className="mt-4 space-y-2">
        {identityBars.map((bar) => (
          <li key={bar.label}>
            <div className="mb-1 flex justify-between font-display text-xs tracking-[0.16em] text-wine">
              <span>{bar.label.toUpperCase()}</span>
              <span>{bar.value}</span>
            </div>
            <div className="bar-track h-2 bg-line">
              <div
                className="bar-fill h-2 bg-wine"
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Paper>
  );
}

function ProjectsCard({ onOpen }: { onOpen: (p: Project) => void }) {
  const featured = projects.slice(0, 3);
  return (
    <Wine id="projects" className="lg:col-span-5">
      <Kicker light>MAJOR PROJECTS</Kicker>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {featured.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onOpen(p)}
            className="group text-left"
          >
            <img
              src={p.image}
              alt={p.name}
              className="aspect-square w-full object-cover lift-media transition-transform duration-200 ease-out group-hover:scale-[1.03]"
              style={{ objectPosition: p.imagePos }}
            />
            <p className="mt-2 font-display text-xs tracking-[0.16em] text-cream">
              {p.name.toUpperCase()}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {featured.map((p) => (
          <div key={`${p.id}-copy`}>
            <p className="font-display text-sm tracking-wide text-cream">{p.name}</p>
            <p className="text-xs text-cream/65">{p.subtitle}</p>
            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-cream/80">
              {p.stack.slice(0, 4).map((s) => (
                <li key={s}>· {s}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onOpen(p)}
              className="mt-2 font-display text-xs tracking-[0.16em] text-cream underline-offset-4 hover:underline"
            >
              XEM CHI TIẾT
            </button>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-cream/15 pt-4">
        <p className="font-display text-xs tracking-[0.2em] text-cream/70">
          ALSO IN STUDIO
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {projects.slice(3).map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onOpen(p)}
              className="border border-cream/25 px-3 py-2 font-display text-xs tracking-[0.14em] text-cream transition-colors duration-150 hover:bg-cream hover:text-wine"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </Wine>
  );
}

function EngagementCard() {
  return (
    <Paper className="lg:col-span-3">
      <Kicker>ENGAGEMENT STRATEGY</Kicker>
      <ul className="mt-4 space-y-4">
        {engagement.map((item) => (
          <li key={item.title} className="step-3d border border-line p-3">
            <p className="font-display text-sm tracking-wide text-wine">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.text}</p>
          </li>
        ))}
      </ul>
      <img
        src="/images/hands.jpg"
        alt=""
        className="mt-4 h-28 w-full object-cover"
      />
    </Paper>
  );
}

function AudienceCard() {
  return (
    <Wine className="lg:col-span-4">
      <Kicker light>TARGET AUDIENCE</Kicker>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[120px_1fr]">
        <div className="grid gap-1">
          <img src="/images/hero.jpg" alt="" className="aspect-[3/4] object-cover object-top" />
          <img src="/images/campus.jpg" alt="" className="aspect-square object-cover" />
        </div>
        <dl className="space-y-1.5 text-sm">
          <Row k="Age" v={audience.age} />
          <Row k="Gender" v={audience.gender} />
          <Row k="Location" v={audience.location} />
          <Row k="School" v={audience.school} />
          <Row k="Mindset" v={audience.mindset} />
          <Row k="Education" v={audience.education} />
          <Row k="Occupation" v={audience.occupation} />
        </dl>
      </div>
      <ul className="mt-4 space-y-2 border-t border-cream/15 pt-4 text-sm leading-relaxed text-cream/85">
        {audienceNotes.map((note) => (
          <li key={note}>· {note}</li>
        ))}
      </ul>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <img src="/images/workspace.jpg" alt="" className="h-24 w-full object-cover" />
        <div className="bg-wine-deep/50 p-3">
          <p className="font-display text-xs tracking-[0.16em] text-cream/70">
            POSITIONING
          </p>
          <p className="mt-1 text-xs leading-relaxed text-cream/85">
            Sinh viên PTIT làm web & AI local — luxury editorial, không template.
          </p>
        </div>
      </div>
    </Wine>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-2">
      <dt className="font-display text-xs tracking-[0.14em] text-cream/60">{k}</dt>
      <dd className="text-cream/90">{v}</dd>
    </div>
  );
}

function PillarsCard() {
  return (
    <Paper className="lg:col-span-5">
      <Kicker>KEY CONTENT</Kicker>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {pillars.map((p) => (
          <figure key={p.title}>
            <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover lift-media" />
            <figcaption className="mt-2">
              <p className="font-display text-sm tracking-wide text-wine">{p.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/70">{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 font-display text-xs tracking-[0.28em] text-wine">PILLARS</p>
    </Paper>
  );
}

function RoadmapCard() {
  return (
    <Wine className="lg:col-span-3">
      <div className="grid grid-cols-2 gap-1">
        <img src="/images/hands.jpg" alt="" className="aspect-[3/4] object-cover" />
        <img src="/images/product.jpg" alt="" className="aspect-[3/4] object-cover" />
      </div>
      <Kicker light>
        <span className="mt-4 block">KPIs & GOALS ROADMAP</span>
      </Kicker>
      <ol className="mt-3 space-y-3">
        {roadmap.map((item) => (
          <li key={item.title}>
            <p className="font-display text-xs tracking-[0.2em] text-cream/60">
              {item.kicker}
            </p>
            <p className="font-display text-sm tracking-wide text-cream">{item.title}</p>
            <p className="text-xs leading-relaxed text-cream/75">{item.text}</p>
          </li>
        ))}
      </ol>
    </Wine>
  );
}

function PersonasCard() {
  return (
    <Paper className="lg:col-span-4">
      <Kicker>CUSTOMER PERSONAS</Kicker>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {personas.map((p) => (
          <figure key={p.name}>
            <img
              src={p.image}
              alt={p.name}
              className="aspect-[3/4] w-full object-cover lift-media"
              style={{ objectPosition: p.pos }}
            />
            <figcaption className="mt-2">
              <p className="font-display text-xs tracking-[0.14em] text-wine">{p.name}</p>
              <p className="text-xs text-muted">{p.role}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/70">{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Paper>
  );
}

function FunnelCard() {
  return (
    <Wine className="lg:col-span-5">
      <Kicker light>MARKETING FUNNEL</Kicker>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {funnel.map((step) => (
          <li key={step.stage} className="step-3d border border-cream/20 p-3">
            <p className="font-display text-xs tracking-[0.18em] text-cream/60">
              {step.stage}
            </p>
            <p className="mt-1 font-display text-lg tracking-wide text-cream">
              {step.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-cream/80">{step.text}</p>
          </li>
        ))}
      </ol>
    </Wine>
  );
}

function StackCard() {
  return (
    <Paper id="skills" className="lg:col-span-3">
      <Kicker>TECH STACK</Kicker>
      <div className="mt-4 grid gap-3">
        {Object.entries(stack).map(([group, items]) => (
          <div key={group}>
            <p className="font-display text-xs tracking-[0.2em] text-wine">
              {group.toUpperCase()}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink/75">{items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Paper>
  );
}

function NextCard() {
  return (
    <Paper id="next" className="lg:col-span-12">
      <Kicker>WHAT'S NEXT</Kicker>
      <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
        {nextSteps.map((step, i) => {
          const Icon = nextIcons[i];
          return (
            <li key={step.n} className="text-center">
              <span className="icon-3d mx-auto flex size-20 items-center justify-center rounded-full border border-wine text-wine">
                <Icon className="size-7" strokeWidth={1.5} />
              </span>
              <p className="mt-4 font-display text-base tracking-wide text-wine md:text-lg">
                {step.title}
              </p>
              <p className="mx-auto mt-1 max-w-[16rem] text-sm leading-relaxed text-ink/70">
                {step.text}
              </p>
            </li>
          );
        })}
      </ol>
    </Paper>
  );
}

function ContactCard() {
  return (
    <Wine id="contact" className="lg:col-span-12">
      <div className="grid gap-6 md:grid-cols-2">
        <QrMark />
        <div>
          <Kicker light>CONTACT</Kicker>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            {site.fullName} · {site.location} · quê {site.hometown}.
          </p>
          <p className="mt-1 text-sm text-cream/70">{site.school}</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Wine>
  );
}
