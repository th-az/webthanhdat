import { useState, type FormEvent } from "react";
import { submitContactMessage } from "@/lib/admin";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitContactMessage({
        data: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      });
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Không gửi được lời nhắn. Vui lòng thử lại.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-line-strong/40 bg-wine-deep/40 p-5">
        <p className="font-display text-xl tracking-wide text-cream">Đã nhận lời nhắn.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          Cảm ơn bạn. Lời nhắn đã được gửi thành công và sẽ được phản hồi sớm.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex min-h-11 items-center bg-cream px-4 font-display tracking-[0.18em] text-wine transition-transform duration-150 ease-out active:scale-[0.96]"
          onClick={() => setSent(false)}
        >
          GỬI THÊM
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      {error && (
        <div role="alert" className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
          {error}
        </div>
      )}
      <label className="block">
        <span className="font-display text-xs tracking-[0.2em] text-cream/70">
          HỌ TÊN
        </span>
        <input
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 min-h-11 w-full border border-cream/20 bg-wine-deep/50 px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50"
          placeholder="Tên của bạn"
        />
      </label>
      <label className="block">
        <span className="font-display text-xs tracking-[0.2em] text-cream/70">
          EMAIL
        </span>
        <input
          required
          type="email"
          maxLength={320}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 min-h-11 w-full border border-cream/20 bg-wine-deep/50 px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50"
          placeholder="you@email.com"
        />
      </label>
      <label className="block">
        <span className="font-display text-xs tracking-[0.2em] text-cream/70">
          LỜI NHẮN
        </span>
        <textarea
          required
          maxLength={5000}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border border-cream/20 bg-wine-deep/50 px-3 py-2 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50"
          placeholder="Ý tưởng, brief, hoặc lời chào."
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex min-h-11 w-full items-center justify-center bg-cream px-4 font-display tracking-[0.22em] text-wine transition-transform duration-150 ease-out hover:bg-paper active:scale-[0.96] disabled:cursor-wait disabled:opacity-60"
      >
        {sending ? "ĐANG GỬI…" : "GỬI LỜI NHẮN"}
      </button>
    </form>
  );
}
