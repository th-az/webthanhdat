import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      at: new Date().toISOString(),
    };
    if (!payload.name || !payload.email || !payload.message) return;
    const prev = JSON.parse(localStorage.getItem("td-notes") || "[]") as unknown[];
    localStorage.setItem("td-notes", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  if (sent) {
    return (
      <div className="border border-line-strong/40 bg-wine-deep/40 p-5">
        <p className="font-display text-xl tracking-wide text-cream">Đã nhận lời nhắn.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          Cảm ơn bạn. Đạt sẽ phản hồi khi có kênh liên hệ công khai. Bạn cũng có thể
          ghi domain {site.domain} để theo dõi bản live.
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
      <label className="block">
        <span className="font-display text-xs tracking-[0.2em] text-cream/70">
          HỌ TÊN
        </span>
        <input
          required
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
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full border border-cream/20 bg-wine-deep/50 px-3 py-2 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50"
          placeholder="Ý tưởng, brief, hoặc lời chào."
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center bg-cream px-4 font-display tracking-[0.22em] text-wine transition-transform duration-150 ease-out hover:bg-paper active:scale-[0.96]"
      >
        GỬI LỜI NHẮN
      </button>
    </form>
  );
}
