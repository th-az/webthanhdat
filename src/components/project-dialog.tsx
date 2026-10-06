import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-wine-deep/70 data-[state=open]:animate-[rise_250ms_ease-out]" />
        <Dialog.Content className="fixed inset-x-3 top-[8%] z-50 max-h-[84vh] overflow-y-auto bg-transparent text-ink outline-none md:inset-x-auto md:left-1/2 md:w-[min(720px,92vw)] md:-translate-x-1/2">
          {project ? (
            <div className="dialog-panel overflow-hidden bg-paper shadow-card">
              <div className="relative h-48 overflow-hidden md:h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: project.imagePos }}
                />
                <Dialog.Close
                  className="absolute right-3 top-3 inline-flex size-11 items-center justify-center bg-paper text-wine"
                  aria-label="Đóng"
                >
                  <X className="size-5" />
                </Dialog.Close>
              </div>
              <div className="space-y-4 p-5 md:p-8">
                <p className="font-display text-xs tracking-[0.28em] text-wine">
                  {project.status.toUpperCase()} · {project.subtitle.toUpperCase()}
                </p>
                <Dialog.Title className="font-display text-4xl tracking-wide text-wine md:text-5xl">
                  {project.name}
                </Dialog.Title>
                <Dialog.Description className="text-sm leading-relaxed text-ink/75 md:text-base">
                  {project.description}
                </Dialog.Description>
                <div>
                  <p className="font-display text-xs tracking-[0.22em] text-wine">
                    CÔNG NGHỆ
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-line px-3 py-1 font-display text-xs tracking-[0.14em] text-wine"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="grid gap-2 text-sm text-ink/80 sm:grid-cols-2">
                  <div>
                    <dt className="font-display tracking-[0.16em] text-wine">
                      DEMO
                    </dt>
                    <dd>{project.demo}</dd>
                  </div>
                  <div>
                    <dt className="font-display tracking-[0.16em] text-wine">
                      GITHUB
                    </dt>
                    <dd>{project.github}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
