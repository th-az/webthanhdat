import { _ as site, n as Reveal, r as TiltStage, t as SiteLayout } from "./site-layout-h5ct0S2e.js";
import { t as PageHeader } from "./page-header-D6kHPkWj.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Facebook, Github, Globe, GraduationCap, Instagram, MapPin, MessageSquare, Sparkles } from "lucide-react";
//#region src/components/contact-form.tsx
function ContactForm() {
	const [sent, setSent] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	function onSubmit(e) {
		e.preventDefault();
		const payload = {
			name: name.trim(),
			email: email.trim(),
			message: message.trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (!payload.name || !payload.email || !payload.message) return;
		const prev = JSON.parse(localStorage.getItem("td-notes") || "[]");
		localStorage.setItem("td-notes", JSON.stringify([payload, ...prev].slice(0, 20)));
		setSent(true);
		setName("");
		setEmail("");
		setMessage("");
	}
	if (sent) return /* @__PURE__ */ jsxs("div", {
		className: "border border-line-strong/40 bg-wine-deep/40 p-5",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "font-display text-xl tracking-wide text-cream",
				children: "Đã nhận lời nhắn."
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-2 text-sm leading-relaxed text-cream/75",
				children: [
					"Cảm ơn bạn. Đạt sẽ phản hồi khi có kênh liên hệ công khai. Bạn cũng có thể ghi domain ",
					site.domain,
					" để theo dõi bản live."
				]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "mt-4 inline-flex min-h-11 items-center bg-cream px-4 font-display tracking-[0.18em] text-wine transition-transform duration-150 ease-out active:scale-[0.96]",
				onClick: () => setSent(false),
				children: "GỬI THÊM"
			})
		]
	});
	return /* @__PURE__ */ jsxs("form", {
		className: "space-y-3",
		onSubmit,
		children: [
			/* @__PURE__ */ jsxs("label", {
				className: "block",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-xs tracking-[0.2em] text-cream/70",
					children: "HỌ TÊN"
				}), /* @__PURE__ */ jsx("input", {
					required: true,
					value: name,
					onChange: (e) => setName(e.target.value),
					className: "mt-1 min-h-11 w-full border border-cream/20 bg-wine-deep/50 px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50",
					placeholder: "Tên của bạn"
				})]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "block",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-xs tracking-[0.2em] text-cream/70",
					children: "EMAIL"
				}), /* @__PURE__ */ jsx("input", {
					required: true,
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					className: "mt-1 min-h-11 w-full border border-cream/20 bg-wine-deep/50 px-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50",
					placeholder: "you@email.com"
				})]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "block",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-xs tracking-[0.2em] text-cream/70",
					children: "LỜI NHẮN"
				}), /* @__PURE__ */ jsx("textarea", {
					required: true,
					rows: 4,
					value: message,
					onChange: (e) => setMessage(e.target.value),
					className: "mt-1 w-full border border-cream/20 bg-wine-deep/50 px-3 py-2 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-cream/50",
					placeholder: "Ý tưởng, brief, hoặc lời chào."
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "inline-flex min-h-11 w-full items-center justify-center bg-cream px-4 font-display tracking-[0.22em] text-wine transition-transform duration-150 ease-out hover:bg-paper active:scale-[0.96]",
				children: "GỬI LỜI NHẮN"
			})
		]
	});
}
//#endregion
//#region src/components/qr-mark.tsx
/** Editorial QR-style mark. The live URL sits under it so it stays useful. */
function QrMark() {
	const cells = QR_PATTERN;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center gap-4",
		children: [
			/* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 29 29",
				className: "aspect-square w-full max-w-[280px] bg-paper text-ink",
				role: "img",
				"aria-label": `Mã liên kết tới ${site.domain}`,
				children: cells.map((row, y) => row.map((on, x) => on ? /* @__PURE__ */ jsx("rect", {
					x,
					y,
					width: 1,
					height: 1,
					fill: "currentColor"
				}, `${x}-${y}`) : null))
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-center font-display text-xs tracking-[0.2em] text-cream/80",
				children: "SCAN TO VIEW LIVE SITE"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-center font-display text-sm tracking-[0.18em] text-cream",
				children: site.domain.toUpperCase()
			})
		]
	});
}
function finder(size, x0, y0, grid) {
	for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
		const edge = x === 0 || y === 0 || x === size - 1 || y === size - 1;
		const inner = x >= 2 && x <= size - 3 && y >= 2 && y <= size - 3;
		grid[y0 + y][x0 + x] = edge || inner ? 1 : 0;
	}
}
function buildPattern() {
	const n = 29;
	const grid = Array.from({ length: n }, () => Array(n).fill(0));
	finder(7, 1, 1, grid);
	finder(7, 21, 1, grid);
	finder(7, 1, 21, grid);
	const seed = "thanhdat2806.id.vn-portfolio";
	for (let y = 1; y < 28; y++) for (let x = 1; x < 28; x++) {
		if (grid[y][x]) continue;
		if (x < 9 && y < 9 || x > 19 && y < 9 || x < 9 && y > 19) continue;
		const i = y * n + x;
		const c = seed.charCodeAt(i % 28);
		grid[y][x] = (c + x * 3 + y * 5) % 4 === 0 ? 0 : 1;
	}
	return grid;
}
var QR_PATTERN = buildPattern();
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
var socials = [
	{
		href: "https://github.com",
		label: "GitHub",
		handle: "github.com",
		Icon: Github,
		desc: "Xem các mã nguồn và dự án public"
	},
	{
		href: "https://www.facebook.com",
		label: "Facebook",
		handle: "facebook.com",
		Icon: Facebook,
		desc: "Kết nối và trao đổi tin nhắn trực tiếp"
	},
	{
		href: "https://www.instagram.com",
		label: "Instagram",
		handle: "instagram.com",
		Icon: Instagram,
		desc: "Hình ảnh và phong cách đời thường"
	},
	{
		href: `https://${site.domain}`,
		label: "Website",
		handle: site.domain,
		Icon: Globe,
		desc: "Trang portfolio chính thức"
	}
];
function ContactPage() {
	return /* @__PURE__ */ jsx(SiteLayout, {
		header: /* @__PURE__ */ jsx(PageHeader, {
			title: "LIÊN HỆ HỢP TÁC",
			script: "Get in Touch",
			subtitle: "Hãy gửi lời nhắn nếu bạn có một dự án thú vị, một ý tưởng cần phát triển hoặc muốn kết nối học hỏi.",
			kicker: "KẾT NỐI · THẢO LUẬN · ĐỒNG HÀNH"
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ jsx(Reveal, {
						className: "h-full",
						children: /* @__PURE__ */ jsx(TiltStage, {
							className: "h-full",
							tone: "paper",
							children: /* @__PURE__ */ jsxs("section", {
								className: "card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine",
										children: [/* @__PURE__ */ jsx(MessageSquare, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "GỬI LỜI NHẮN TRỰC TIẾP" })]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "mt-2 font-display text-3xl font-bold tracking-tight text-wine md:text-4xl",
										children: "Bắt đầu cuộc trò chuyện"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-ink/75",
										children: "Điền thông tin vào form dưới đây, mình sẽ phản hồi lại bạn trong thời gian sớm nhất có thể."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-6",
										children: /* @__PURE__ */ jsx(ContactForm, {})
									})
								] }), /* @__PURE__ */ jsx("div", {
									className: "mt-8 border-t border-line pt-4 text-xs text-ink/65",
									children: /* @__PURE__ */ jsx("span", { children: "Mọi thông tin gửi qua biểu mẫu đều được bảo mật tuyệt đối." })
								})]
							})
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsx(Reveal, {
						className: "h-full",
						children: /* @__PURE__ */ jsx(TiltStage, {
							className: "h-full",
							tone: "wine",
							children: /* @__PURE__ */ jsxs("section", {
								className: "card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-display text-xs tracking-[0.25em] text-cream/70",
										children: "THÔNG TIN LIÊN LẠC"
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-2 font-display text-3xl font-bold text-cream",
										children: site.fullName
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-cream/80",
										children: site.title
									}),
									/* @__PURE__ */ jsxs("dl", {
										className: "mt-6 space-y-3.5 text-sm",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3 border-b border-cream/15 pb-2.5",
												children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4 text-cream/70 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
													className: "text-xs text-cream/65 font-display tracking-wider",
													children: "ĐỊA BÀN HOẠT ĐỘNG"
												}), /* @__PURE__ */ jsxs("dd", {
													className: "text-cream",
													children: [
														site.location,
														" · Quê ",
														site.hometown
													]
												})] })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3 border-b border-cream/15 pb-2.5",
												children: [/* @__PURE__ */ jsx(GraduationCap, { className: "size-4 text-cream/70 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [
													/* @__PURE__ */ jsx("dt", {
														className: "text-xs text-cream/65 font-display tracking-wider",
														children: "HỌC TẬP"
													}),
													/* @__PURE__ */ jsx("dd", {
														className: "text-cream text-xs leading-relaxed",
														children: site.school
													}),
													/* @__PURE__ */ jsxs("dd", {
														className: "text-cream/75 text-[11px]",
														children: ["Chuyên ngành: ", site.major]
													})
												] })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3 border-b border-cream/15 pb-2.5",
												children: [/* @__PURE__ */ jsx(Globe, { className: "size-4 text-cream/70 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
													className: "text-xs text-cream/65 font-display tracking-wider",
													children: "WEBSITE"
												}), /* @__PURE__ */ jsx("dd", {
													className: "text-cream font-mono text-xs",
													children: site.domain
												})] })]
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-6",
										children: /* @__PURE__ */ jsx(QrMark, {})
									})
								] }), /* @__PURE__ */ jsxs("div", {
									className: "mt-6 border-t border-cream/20 pt-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "font-display text-xs tracking-[0.2em] text-cream/70",
										children: "CHỮ KÝ ĐẶC TRƯNG"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 font-script text-3xl text-cream/90",
										children: site.fullName
									})]
								})]
							})
						})
					})
				})]
			}), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
				tone: "paper",
				children: /* @__PURE__ */ jsxs("section", {
					className: "card-3d bg-paper p-6 text-ink md:p-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "MẠNG XÃ HỘI & KÊNH KẾT NỐI" })]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 font-display text-2xl font-bold tracking-wide text-wine md:text-3xl",
							children: "CÁC KÊNH TRUYỀN THÔNG CÁ NHÂN"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: socials.map((social) => {
								const Icon = social.Icon;
								return /* @__PURE__ */ jsxs("a", {
									href: social.href,
									target: "_blank",
									rel: "noreferrer",
									className: "group border border-line p-4 transition-all duration-200 hover:-translate-y-1 hover:border-wine hover:shadow-md",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "flex size-10 items-center justify-center rounded bg-wine text-cream group-hover:bg-wine-deep transition-colors",
												children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
											}), /* @__PURE__ */ jsx("span", {
												className: "font-display text-xs tracking-wider text-wine font-bold group-hover:underline",
												children: "TRUY CẬP →"
											})]
										}),
										/* @__PURE__ */ jsx("h4", {
											className: "mt-3 font-display text-lg font-bold text-wine",
											children: social.label
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted font-mono",
											children: social.handle
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-xs text-ink/75 leading-relaxed",
											children: social.desc
										})
									]
								}, social.label);
							})
						})
					]
				})
			}) })]
		})
	});
}
//#endregion
export { ContactPage as component };
