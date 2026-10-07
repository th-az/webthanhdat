import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowLeft,
  Check,
  ChevronRight,
  Eye,
  EyeOff,
  ImagePlus,
  LayoutDashboard,
  LoaderCircle,
  Mail,
  MessageSquare,
  Pencil,
  Plus,
  Search,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";
import {
  getAdminSignInAvailability,
  getAdminDashboard,
  saveAdminProject,
  setAdminProjectPublished,
  updateContactMessage,
} from "@/lib/admin";
import type { ContactMessage, ManagedProject } from "@/lib/admin.server";
import type { Project } from "@/lib/site";

export const Route = createFileRoute("/admin")({ component: AdminPage });

type Section = "overview" | "projects" | "messages";
type Dashboard = {
  authorized: boolean;
  projects: ManagedProject[];
  messages: ContactMessage[];
};

const blankProject = (): Project => ({
  id: `project-${crypto.randomUUID()}`,
  name: "",
  subtitle: "",
  description: "",
  stack: [],
  demo: "",
  github: "",
  status: "Mới",
  image: "",
  imagePos: "center",
  video: "",
  category: "web",
  features: [],
});
const noProjects: ManagedProject[] = [];
const noMessages: ContactMessage[] = [];

function errorText(error: unknown) {
  return error instanceof Error ? error.message : "Đã có lỗi xảy ra.";
}

async function imageAsWebp(file: File) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Vui lòng chọn một tệp ảnh.");
  }
  if (file.size > 12 * 1024 * 1024) {
    throw new Error("Ảnh tải lên không được vượt quá 12 MB.");
  }
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1440 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    throw new Error("Trình duyệt không thể xử lý ảnh này.");
  }
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const result = canvas.toDataURL("image/webp", 0.82);
  if (result.length > 1_500_000) {
    throw new Error("Ảnh sau khi tối ưu vẫn quá lớn. Hãy chọn ảnh nhẹ hơn.");
  }
  return result;
}

function AdminPage() {
  const { user, isPending } = useCurrentUserState();
  const userId = user?.id ?? null;
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [localAdminBypass, setLocalAdminBypass] = useState<boolean | null>(null);
  const [section, setSection] = useState<Section>("overview");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [editor, setEditor] = useState<Project | null>(null);
  const [saving, setSaving] = useState(false);

  async function refreshDashboard() {
    setError("");
    const data = await getAdminDashboard();
    setDashboard(data);
  }

  useEffect(() => {
    let active = true;
    getAdminSignInAvailability()
      .then(({ localAdminBypass: allowed }) => {
        if (active) setLocalAdminBypass(allowed);
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(errorText(cause));
          setLocalAdminBypass(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (localAdminBypass === null || (!localAdminBypass && isPending)) return;
    if (!userId && !localAdminBypass) {
      setLoading(false);
      return;
    }
    let active = true;
    setLoading(true);
    getAdminDashboard()
      .then((data) => {
        if (active) setDashboard(data);
      })
      .catch((cause: unknown) => {
        if (active) setError(errorText(cause));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [userId, isPending, localAdminBypass]);

  const projects = dashboard?.projects ?? noProjects;
  const messages = dashboard?.messages ?? noMessages;
  const visibleProjects = useMemo(
    () =>
      projects.filter((item) =>
        `${item.project.name} ${item.project.subtitle}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [projects, query],
  );
  const visibleMessages = useMemo(
    () =>
      messages.filter((item) =>
        `${item.name} ${item.email} ${item.message}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [messages, query],
  );

  async function saveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editor) return;
    if (!editor.image) {
      setError("Hãy nhập đường dẫn ảnh hoặc tải ảnh đại diện lên.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const normalized = {
        ...editor,
        stack: editor.stack.map((item) => item.trim()).filter(Boolean),
        features: editor.features.map((item) => item.trim()).filter(Boolean),
      };
      await saveAdminProject({ data: normalized });
      await refreshDashboard();
      setEditor(null);
    } catch (cause) {
      setError(errorText(cause));
    } finally {
      setSaving(false);
    }
  }

  async function togglePublished(item: ManagedProject) {
    setError("");
    try {
      await setAdminProjectPublished({
        data: {
          project: item.project,
          isPublished: !item.isPublished,
        },
      });
      await refreshDashboard();
    } catch (cause) {
      setError(errorText(cause));
    }
  }

  async function updateMessage(
    message: ContactMessage,
    state: "read" | "unread" | "archive" | "restore",
  ) {
    setError("");
    try {
      await updateContactMessage({ data: { id: message.id, state } });
      await refreshDashboard();
    } catch (cause) {
      setError(errorText(cause));
    }
  }

  if (localAdminBypass === null || (!localAdminBypass && isPending) || loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-wine px-4 text-cream">
        <div className="flex items-center gap-3 text-sm">
          <LoaderCircle className="size-5 animate-spin" />
          Đang xác thực quyền truy cập…
        </div>
      </main>
    );
  }

  if (!user && !localAdminBypass) {
    return (
      <main className="grid min-h-screen place-items-center bg-wine px-4 py-10 text-cream">
        <section className="w-full max-w-md border border-cream/15 bg-wine-card p-7 text-center shadow-card sm:p-10">
          <ShieldCheck className="mx-auto size-9" />
          <p className="mt-5 font-display text-xs tracking-[0.24em] text-cream/65">KHU VỰC RIÊNG</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Đăng nhập admin</h1>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            Đăng nhập bằng tài khoản quản trị để quản lý nội dung và đọc tin nhắn.
          </p>
          <Link
            to="/login"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-cream px-5 font-display text-sm font-bold tracking-wider text-wine transition-colors hover:bg-paper"
          >
            ĐĂNG NHẬP AN TOÀN <ChevronRight className="size-4" />
          </Link>
          <Link
            to="/"
            className="mt-5 inline-flex min-h-11 items-center text-sm text-cream/70 hover:text-cream"
          >
            <ArrowLeft className="mr-2 size-4" /> Về trang chủ
          </Link>
        </section>
      </main>
    );
  }

  if (dashboard?.authorized === false) {
    return (
      <main className="grid min-h-screen place-items-center bg-wine px-4 py-10 text-cream">
        <section className="w-full max-w-lg border border-cream/15 bg-wine-card p-7 text-center shadow-card sm:p-10">
          <ShieldCheck className="mx-auto size-9" />
          <h1 className="mt-5 font-display text-3xl font-bold">Không có quyền truy cập</h1>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            Tài khoản này không nằm trong danh sách quản trị. Hãy đăng nhập bằng dat206kd@gmail.com.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex min-h-11 items-center gap-2 border border-cream/30 px-4 text-sm text-cream hover:bg-cream/10"
          >
            <ArrowLeft className="size-4" /> Về trang chủ
          </Link>
        </section>
      </main>
    );
  }

  if (error && !dashboard) {
    return (
      <main className="grid min-h-screen place-items-center bg-wine px-4 py-10 text-cream">
        <section className="w-full max-w-lg border border-cream/15 bg-wine-card p-7 text-center shadow-card">
          <h1 className="font-display text-3xl font-bold">Chưa tải được dữ liệu</h1>
          <p role="alert" className="mt-3 text-sm leading-relaxed text-cream/75">
            {error}
          </p>
          <button
            type="button"
            onClick={() => {
              setLoading(true);
              void refreshDashboard()
                .catch((cause: unknown) => setError(errorText(cause)))
                .finally(() => setLoading(false));
            }}
            className="mt-6 min-h-11 bg-cream px-5 font-display text-xs font-bold tracking-wider text-wine hover:bg-paper"
          >
            THỬ LẠI
          </button>
        </section>
      </main>
    );
  }

  const unread = messages.filter((message) => !message.isRead && !message.isArchived).length;

  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto grid min-h-screen max-w-[1500px] lg:grid-cols-[248px_minmax(0,1fr)]">
        <aside className="flex flex-col border-b border-cream/15 bg-wine px-5 py-5 text-cream lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <Link to="/" className="font-display text-lg font-bold tracking-[0.17em] text-cream">
            <span className="inline-flex size-9 items-center justify-center border border-cream/25 text-xs tracking-normal">
              TD
            </span>
            <span className="ml-3 inline-block align-middle">
              THÀNH ĐẠT
              <span className="mt-1 block text-[10px] font-medium tracking-[0.25em] text-cream/55">
                ADMIN STUDIO
              </span>
            </span>
          </Link>
          <nav className="mt-7 grid grid-cols-3 gap-2 lg:grid-cols-1" aria-label="Quản trị">
            <NavButton
              active={section === "overview"}
              onClick={() => {
                setSection("overview");
                setQuery("");
              }}
            >
              <LayoutDashboard className="size-4" /> Tổng quan
            </NavButton>
            <NavButton
              active={section === "projects"}
              onClick={() => {
                setSection("projects");
                setQuery("");
              }}
            >
              <ImagePlus className="size-4" /> Sản phẩm
            </NavButton>
            <NavButton
              active={section === "messages"}
              onClick={() => {
                setSection("messages");
                setQuery("");
              }}
            >
              <MessageSquare className="size-4" />
              <span className="flex-1 text-left">Tin nhắn</span>
              {unread > 0 && (
                <span className="grid size-5 place-items-center bg-wine text-[10px] text-cream">
                  {unread}
                </span>
              )}
            </NavButton>
          </nav>
          <div className="mt-auto hidden border-t border-cream/15 pt-5 lg:block">
            <p className="font-display text-[10px] tracking-[0.18em] text-cream/50">
              ĐANG ĐĂNG NHẬP
            </p>
            <p className="mt-2 truncate text-xs text-cream/80">
              {localAdminBypass
                ? "Local development"
                : (user?.primaryEmail ?? "Tài khoản đã xác thực")}
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-cream/75 hover:text-cream"
            >
              <ArrowLeft className="size-4" /> Xem website
            </Link>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-20 flex min-h-[76px] flex-wrap items-center justify-between gap-3 border-b border-line bg-paper/95 px-4 py-4 backdrop-blur-sm sm:px-8">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-muted">TRANG QUẢN TRỊ</p>
              <h1 className="mt-1 font-display text-2xl font-bold text-wine">
                {section === "overview"
                  ? "Tổng quan"
                  : section === "projects"
                    ? "Sản phẩm & dự án"
                    : "Hộp thư liên hệ"}
              </h1>
            </div>
            <Link
              to="/"
              className="inline-flex min-h-11 items-center gap-2 border border-line px-3 text-sm text-wine transition-colors hover:border-wine"
            >
              <Eye className="size-4" /> <span className="hidden sm:inline">Xem website</span>
            </Link>
            <UserButton />
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-8 sm:py-8">
            {error && (
              <div
                role="alert"
                className="flex items-start justify-between gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
              >
                <span>{error}</span>
                <button
                  type="button"
                  className="grid size-7 shrink-0 place-items-center"
                  aria-label="Đóng thông báo lỗi"
                  onClick={() => setError("")}
                >
                  <X className="size-4" />
                </button>
              </div>
            )}

            {section === "overview" && (
              <Overview
                projectCount={projects.filter((item) => item.isPublished).length}
                messageCount={messages.length}
                unreadCount={unread}
                onProjects={() => setSection("projects")}
                onMessages={() => setSection("messages")}
                messages={messages.filter((message) => !message.isArchived).slice(0, 4)}
              />
            )}

            {section === "projects" && (
              <section className="space-y-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="max-w-xl text-sm leading-relaxed text-muted">
                      Thêm hoặc cập nhật dự án hiển thị trên website. Ảnh có thể tải trực tiếp;
                      video dùng đường dẫn MP4 hoặc liên kết video công khai.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditor(blankProject())}
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-wine px-4 font-display text-xs font-bold tracking-[0.14em] text-cream transition-colors hover:bg-wine-deep"
                  >
                    <Plus className="size-4" /> THÊM SẢN PHẨM
                  </button>
                </div>
                <SearchField value={query} onChange={setQuery} placeholder="Tìm sản phẩm…" />
                {visibleProjects.length === 0 ? (
                  <EmptyState
                    title="Không tìm thấy sản phẩm"
                    description="Thử từ khóa khác hoặc thêm sản phẩm mới."
                  />
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((item) => (
                      <article
                        key={item.project.id}
                        className="overflow-hidden border border-line bg-paper shadow-card"
                      >
                        <div className="relative aspect-[16/9] bg-wine-deep/10">
                          <img
                            src={item.project.image}
                            alt={item.project.name}
                            className="h-full w-full object-cover"
                          />
                          <span
                            className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] font-bold tracking-wider ${item.isPublished ? "bg-wine text-cream" : "bg-ink/75 text-cream"}`}
                          >
                            {item.isPublished ? "ĐANG HIỂN THỊ" : "ĐÃ ẨN"}
                          </span>
                        </div>
                        <div className="space-y-3 p-4">
                          <div>
                            <h2 className="font-display text-xl font-bold text-wine">
                              {item.project.name}
                            </h2>
                            <p className="mt-0.5 text-xs text-muted">{item.project.subtitle}</p>
                          </div>
                          <p className="line-clamp-2 min-h-10 text-sm leading-relaxed text-ink/70">
                            {item.project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 border-t border-line pt-3">
                            <button
                              type="button"
                              onClick={() => setEditor({ ...item.project })}
                              className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                            >
                              <Pencil className="size-3.5" /> Sửa
                            </button>
                            <button
                              type="button"
                              onClick={() => void togglePublished(item)}
                              className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                            >
                              {item.isPublished ? (
                                <EyeOff className="size-3.5" />
                              ) : (
                                <Eye className="size-3.5" />
                              )}
                              {item.isPublished ? "Ẩn khỏi website" : "Đăng lại"}
                            </button>
                            {item.project.video && (
                              <a
                                href={item.project.video}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                              >
                                <Eye className="size-3.5" /> Video
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )}

            {section === "messages" && (
              <section className="space-y-5">
                <div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted">
                    Tin nhắn gửi từ biểu mẫu liên hệ trên website sẽ xuất hiện tại đây.
                  </p>
                </div>
                <SearchField
                  value={query}
                  onChange={setQuery}
                  placeholder="Tìm tên, email hoặc nội dung…"
                />
                {visibleMessages.length === 0 ? (
                  <EmptyState
                    title="Hộp thư đang trống"
                    description="Khi có người gửi lời nhắn qua trang liên hệ, bạn sẽ thấy nội dung tại đây."
                  />
                ) : (
                  <div className="space-y-3">
                    {visibleMessages.map((message) => (
                      <article
                        key={message.id}
                        className={`border bg-paper p-4 shadow-card sm:p-5 ${message.isRead ? "border-line" : "border-wine/40"}`}
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="font-display text-lg font-bold text-wine">
                                {message.name}
                              </h2>
                              {!message.isRead && (
                                <span className="bg-wine px-2 py-0.5 text-[9px] font-bold tracking-wider text-cream">
                                  MỚI
                                </span>
                              )}
                              {message.isArchived && (
                                <span className="bg-line px-2 py-0.5 text-[9px] font-bold tracking-wider text-ink/70">
                                  ĐÃ LƯU TRỮ
                                </span>
                              )}
                            </div>
                            <a
                              href={`mailto:${message.email}`}
                              className="mt-1 inline-flex min-h-8 items-center gap-1.5 text-sm text-wine underline underline-offset-2"
                            >
                              <Mail className="size-3.5" /> {message.email}
                            </a>
                            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">
                              {message.message}
                            </p>
                          </div>
                          <time className="shrink-0 text-xs text-muted">
                            {new Date(message.createdAt).toLocaleString("vi-VN")}
                          </time>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-3">
                          <button
                            type="button"
                            onClick={() =>
                              void updateMessage(message, message.isRead ? "unread" : "read")
                            }
                            className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                          >
                            <Check className="size-3.5" />{" "}
                            {message.isRead ? "Đánh dấu chưa đọc" : "Đánh dấu đã đọc"}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              void updateMessage(
                                message,
                                message.isArchived ? "restore" : "archive",
                              )
                            }
                            className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                          >
                            <Archive className="size-3.5" />{" "}
                            {message.isArchived ? "Khôi phục" : "Lưu trữ"}
                          </button>
                          <a
                            href={`mailto:${message.email}?subject=${encodeURIComponent("Phản hồi lời nhắn")}`}
                            className="inline-flex min-h-10 items-center gap-1.5 px-2 text-xs font-semibold text-wine hover:bg-wine/5"
                          >
                            <Send className="size-3.5" /> Trả lời email
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      {editor && (
        <ProjectEditor
          project={editor}
          saving={saving}
          error={error}
          onClose={() => setEditor(null)}
          onChange={setEditor}
          onSave={saveProject}
          onClearError={() => setError("")}
        />
      )}
    </main>
  );
}

function NavButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-11 items-center gap-2 px-3 text-left text-xs font-semibold transition-colors sm:text-sm lg:w-full ${
        active ? "bg-cream text-wine" : "text-cream/70 hover:bg-cream/10 hover:text-cream"
      }`}
    >
      {children}
    </button>
  );
}

function SearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex min-h-11 max-w-xl items-center gap-2 border border-line bg-paper px-3 text-muted focus-within:border-wine">
      <Search className="size-4 shrink-0" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/75"
      />
    </label>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  onClick,
}: {
  icon: typeof ImagePlus;
  label: string;
  value: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-line bg-paper p-5 text-left shadow-card transition-transform hover:-translate-y-0.5 sm:p-6"
    >
      <span className="grid size-10 place-items-center bg-wine/5 text-wine">
        <Icon className="size-5" />
      </span>
      <span className="mt-5 block font-display text-3xl font-bold text-wine">{value}</span>
      <span className="mt-1 flex items-center justify-between gap-2 text-sm text-muted">
        {label} <ChevronRight className="size-4 text-wine" />
      </span>
    </button>
  );
}

function Overview({
  projectCount,
  messageCount,
  unreadCount,
  onProjects,
  onMessages,
  messages,
}: {
  projectCount: number;
  messageCount: number;
  unreadCount: number;
  onProjects: () => void;
  onMessages: () => void;
  messages: ContactMessage[];
}) {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden border border-wine bg-wine p-5 text-cream shadow-card sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 size-64 rounded-full border border-cream/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-6 size-44 rounded-full border border-cream/10"
        />
        <p className="relative font-display text-xs tracking-[0.2em] text-cream/60">
          BẢNG ĐIỀU KHIỂN
        </p>
        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-cream">
              Chào mừng trở lại
            </h2>
            <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-cream/75">
              Quản lý nội dung portfolio và theo dõi tin nhắn mới trong cùng một nơi.
            </p>
          </div>
          <span className="relative inline-flex items-center gap-2 text-xs font-semibold text-cream/85">
            <span className="size-2 rounded-full bg-cream" /> Phiên quản trị an toàn
          </span>
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={ImagePlus}
          label="Sản phẩm đang hiển thị"
          value={projectCount}
          onClick={onProjects}
        />
        <StatCard
          icon={MessageSquare}
          label="Tổng lời nhắn"
          value={messageCount}
          onClick={onMessages}
        />
        <StatCard icon={Mail} label="Chưa đọc" value={unreadCount} onClick={onMessages} />
      </div>
      <section className="border border-line bg-paper shadow-card">
        <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
          <div>
            <p className="font-display text-xs tracking-[0.2em] text-muted">HỘP THƯ</p>
            <h2 className="mt-1 font-display text-xl font-bold text-wine">Lời nhắn gần đây</h2>
          </div>
          <button
            type="button"
            onClick={onMessages}
            className="inline-flex min-h-10 items-center gap-1 text-xs font-semibold text-wine hover:underline"
          >
            Xem tất cả <ChevronRight className="size-4" />
          </button>
        </div>
        {messages.length === 0 ? (
          <p className="px-5 py-8 text-sm text-muted sm:px-6">Chưa có lời nhắn mới.</p>
        ) : (
          <ul className="divide-y divide-line">
            {messages.map((message) => (
              <li
                key={message.id}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-wine">
                    {message.name} <span className="font-normal text-muted">· {message.email}</span>
                  </p>
                  <p className="mt-1 line-clamp-1 text-sm text-ink/70">{message.message}</p>
                </div>
                <time className="shrink-0 text-xs text-muted">
                  {new Date(message.createdAt).toLocaleDateString("vi-VN")}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="grid min-h-56 place-items-center border border-dashed border-line bg-paper px-6 py-10 text-center">
      <div>
        <MessageSquare className="mx-auto size-7 text-muted/70" />
        <h2 className="mt-3 font-display text-xl font-bold text-wine">{title}</h2>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

function ProjectEditor({
  project,
  saving,
  error,
  onClose,
  onChange,
  onSave,
  onClearError,
}: {
  project: Project;
  saving: boolean;
  error: string;
  onClose: () => void;
  onChange: (project: Project) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  onClearError: () => void;
}) {
  const [imageBusy, setImageBusy] = useState(false);
  const [imageError, setImageError] = useState("");

  function update<K extends keyof Project>(key: K, value: Project[K]) {
    onChange({ ...project, [key]: value });
  }

  async function chooseImage(file?: File) {
    if (!file) return;
    setImageBusy(true);
    setImageError("");
    try {
      update("image", await imageAsWebp(file));
    } catch (cause) {
      setImageError(errorText(cause));
    } finally {
      setImageBusy(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-wine-deep/75 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-editor-title"
        className="max-h-[94vh] w-full max-w-3xl overflow-y-auto bg-paper text-ink shadow-card"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper px-5 py-4 sm:px-7">
          <div>
            <p className="font-display text-[10px] tracking-[0.22em] text-muted">
              QUẢN LÝ NỘI DUNG
            </p>
            <h2
              id="project-editor-title"
              className="mt-1 font-display text-2xl font-bold text-wine"
            >
              {project.name ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="grid size-11 place-items-center text-wine hover:bg-wine/5"
          >
            <X className="size-5" />
          </button>
        </header>

        <form onSubmit={onSave} className="space-y-5 p-5 sm:p-7">
          {(error || imageError) && (
            <div
              role="alert"
              className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
            >
              {imageError || error}
              <button
                type="button"
                className="ml-3 underline"
                onClick={() => {
                  setImageError("");
                  onClearError();
                }}
              >
                Đóng
              </button>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Tên sản phẩm">
              <input
                required
                maxLength={120}
                value={project.name}
                onChange={(event) => update("name", event.target.value)}
                className={inputClass}
                placeholder="Ví dụ: ĐạtAI"
              />
            </Field>
            <Field label="Tiêu đề phụ">
              <input
                required
                maxLength={160}
                value={project.subtitle}
                onChange={(event) => update("subtitle", event.target.value)}
                className={inputClass}
                placeholder="Local AI Assistant"
              />
            </Field>
            <Field label="Trạng thái">
              <input
                required
                maxLength={60}
                value={project.status}
                onChange={(event) => update("status", event.target.value)}
                className={inputClass}
                placeholder="Đang phát triển"
              />
            </Field>
            <Field label="Danh mục">
              <select
                value={project.category}
                onChange={(event) => update("category", event.target.value as Project["category"])}
                className={inputClass}
              >
                <option value="web">Website / sản phẩm</option>
                <option value="ai">AI</option>
                <option value="business">Kinh doanh</option>
              </select>
            </Field>
          </div>

          <Field label="Mô tả">
            <textarea
              required
              maxLength={3000}
              rows={4}
              value={project.description}
              onChange={(event) => update("description", event.target.value)}
              className={`${inputClass} py-3`}
              placeholder="Giới thiệu ngắn về sản phẩm…"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Công nghệ (ngăn cách bằng dấu phẩy)">
              <input
                value={project.stack.join(", ")}
                onChange={(event) =>
                  update(
                    "stack",
                    event.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  )
                }
                className={inputClass}
                placeholder="React, TypeScript, Tailwind"
              />
            </Field>
            <Field label="Tính năng nổi bật (mỗi dòng một ý)">
              <textarea
                rows={2}
                value={project.features.join("\n")}
                onChange={(event) =>
                  update(
                    "features",
                    event.target.value
                      .split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  )
                }
                className={`${inputClass} py-3`}
                placeholder="Mô tả các điểm nổi bật"
              />
            </Field>
            <Field label="Đường dẫn demo">
              <input
                value={project.demo}
                onChange={(event) => update("demo", event.target.value)}
                className={inputClass}
                placeholder="https://…"
              />
            </Field>
            <Field label="GitHub">
              <input
                value={project.github}
                onChange={(event) => update("github", event.target.value)}
                className={inputClass}
                placeholder="https://github.com/…"
              />
            </Field>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="space-y-4">
              <Field label="Ảnh đại diện (đường dẫn ảnh)">
                <input
                  required={!project.image.startsWith("data:image/")}
                  value={project.image.startsWith("data:image/") ? "" : project.image}
                  onChange={(event) => update("image", event.target.value)}
                  className={inputClass}
                  placeholder="https://…/anh-san-pham.jpg"
                />
              </Field>
              <label className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 border border-dashed border-wine/35 px-4 text-sm font-semibold text-wine transition-colors hover:bg-wine/5">
                {imageBusy ? (
                  <LoaderCircle className="size-4 animate-spin" />
                ) : (
                  <ImagePlus className="size-4" />
                )}
                {imageBusy ? "Đang tối ưu ảnh…" : "Tải ảnh từ thiết bị"}
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) => {
                    void chooseImage(event.target.files?.[0]);
                    event.currentTarget.value = "";
                  }}
                />
              </label>
              {project.image.startsWith("data:image/") && (
                <p className="text-xs text-muted">
                  Đang dùng ảnh đã tải lên. Nhập URL ở trên để thay bằng ảnh khác.
                </p>
              )}
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-line bg-wine/5">
              {project.image ? (
                <img
                  src={project.image}
                  alt="Xem trước ảnh sản phẩm"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center text-center text-xs text-muted">
                  <span>
                    <ImagePlus className="mx-auto mb-2 size-6" />
                    Xem trước ảnh
                  </span>
                </div>
              )}
            </div>
          </div>

          <Field label="Video giới thiệu (URL MP4 hoặc liên kết công khai)">
            <input
              value={project.video ?? ""}
              onChange={(event) => update("video", event.target.value)}
              className={inputClass}
              placeholder="https://…/video.mp4 hoặc YouTube/Vimeo"
            />
          </Field>

          <footer className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="min-h-11 border border-line px-5 text-sm font-semibold text-ink/70 hover:bg-wine/5"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={saving || imageBusy}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-wine px-6 font-display text-xs font-bold tracking-[0.15em] text-cream transition-colors hover:bg-wine-deep disabled:cursor-wait disabled:opacity-60"
            >
              {saving ? (
                <LoaderCircle className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              {saving ? "ĐANG LƯU…" : "LƯU SẢN PHẨM"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

const inputClass =
  "mt-1.5 min-h-11 w-full border border-line bg-paper px-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-wine";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-xs font-semibold tracking-wide text-ink/80">
      {label}
      {children}
    </label>
  );
}
