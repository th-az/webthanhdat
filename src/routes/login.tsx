import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CircleAlert,
  LockKeyhole,
} from "lucide-react";
import { SIGN_IN_PROVIDERS, signIn } from "@/lib/auth/client";
import { getAdminSignInAvailability } from "@/lib/admin";

export const Route = createFileRoute("/login")({
  loader: () => getAdminSignInAvailability(),
  component: AdminLogin,
});

function AdminLogin() {
  const { available, localAddress } = Route.useLoaderData();
  const [error, setError] = useState("");
  const [busyProvider, setBusyProvider] = useState("");

  async function startSignIn(providerId: string) {
    setBusyProvider(providerId);
    setError("");
    try {
      await signIn(providerId, { callbackURL: "/admin" });
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Không thể bắt đầu đăng nhập. Vui lòng thử lại.",
      );
      setBusyProvider("");
    }
  }

  return (
    <main className="min-h-screen bg-wine p-3 text-cream sm:grid sm:place-items-center sm:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] w-full max-w-6xl overflow-hidden border border-cream/15 bg-wine-deep shadow-card sm:min-h-[min(720px,calc(100vh-64px))] sm:grid-cols-[1.05fr_0.95fr]">
        <section className="flex flex-col justify-between bg-wine px-6 py-7 sm:px-10 sm:py-10 lg:px-14">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-3 font-display text-sm font-bold tracking-[0.2em] text-cream"
          >
            <span className="grid size-10 place-items-center border border-cream/25">
              TD
            </span>
            THÀNH ĐẠT
          </Link>

          <div className="my-12 max-w-md sm:my-0">
            <p className="font-display text-xs tracking-[0.24em] text-cream/60">
              KHÔNG GIAN QUẢN TRỊ
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
              Mọi thứ
              <br />
              bắt đầu từ
              <br />
              <span className="font-script text-cream">studio.</span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/75 sm:text-base">
              Quản lý dự án, hình ảnh và những cuộc trò chuyện từ website của bạn.
            </p>
          </div>

          <p className="font-display text-[10px] tracking-[0.22em] text-cream/50">
            DIGITAL CREATOR · HÀ NỘI
          </p>
        </section>

        <section className="flex items-center bg-cream px-6 py-10 text-ink sm:px-10 lg:px-14">
          <div className="mx-auto w-full max-w-sm">
            <div className="flex size-11 items-center justify-center border border-line bg-paper text-wine">
              <LockKeyhole className="size-5" />
            </div>
            <p className="mt-8 font-display text-[10px] font-semibold tracking-[0.22em] text-muted">
              KHU VỰC RIÊNG TƯ
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-wine sm:text-4xl">
              Đăng nhập quản trị
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Chỉ tài khoản này được cấp quyền truy cập:
            </p>
            <p className="mt-2 border-l-2 border-wine pl-3 text-sm font-semibold text-wine">
              dat206kd@gmail.com
            </p>

            {!available ? (
              <div role="status" className="mt-7 border border-line bg-paper p-4">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-wine" />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Đăng nhập chưa khả dụng tại địa chỉ này
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {localAddress
                        ? "Đăng nhập Google cần được cấu hình callback cho địa chỉ website đang dùng."
                        : "Tên miền hiện tại chưa được đăng ký làm địa chỉ callback cho đăng nhập Google."}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      Hãy mở bản preview chính thức của ứng dụng hoặc dùng tên miền đã cấu hình đăng nhập.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-7 space-y-3">
                {SIGN_IN_PROVIDERS.map((provider) => (
                  <button
                    key={provider.providerId}
                    type="button"
                    disabled={Boolean(busyProvider)}
                    onClick={() => void startSignIn(provider.providerId)}
                    className="flex min-h-12 w-full items-center justify-between border border-line bg-paper px-4 text-sm font-semibold text-ink transition-colors hover:border-wine hover:text-wine disabled:cursor-wait disabled:opacity-60"
                  >
                    <span>Tiếp tục với {provider.label}</span>
                    {busyProvider === provider.providerId ? (
                      <span className="size-4 animate-spin rounded-full border-2 border-wine/30 border-t-wine" />
                    ) : (
                      <ArrowUpRight className="size-4" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {error && (
              <p role="alert" className="mt-4 border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
                {error}
              </p>
            )}

            <Link
              to="/"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-wine"
            >
              <ArrowLeft className="size-4" />
              Trở về trang chủ
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
