import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Briefcase, T as ArrowRight, a as Terminal, b as CodeXml, d as Layers, p as Handshake, s as SlidersHorizontal, v as FolderClosed, w as Brain, x as CircleDot } from "../_libs/lucide-react.mjs";
import { _ as stack, c as funnel, d as nextSteps, n as SiteLayout, p as pillars, r as TiltStage, s as engagement, t as Reveal } from "./site-layout-h5ct0S2e.mjs";
import { t as PageHeader } from "./page-header-D6kHPkWj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-DR4KCFBY.js
var import_jsx_runtime = require_jsx_runtime();
var nextIcons = [
	Handshake,
	FolderClosed,
	SlidersHorizontal,
	CircleDot
];
var stackCategoryIcons = {
	development: CodeXml,
	ai: Brain,
	tools: Terminal,
	business: Briefcase
};
var stackCategoryTitles = {
	development: "LẬP TRÌNH & PHÁT TRIỂN WEB",
	ai: "TRÍ TUỆ NHÂN TẠO & LOCAL AI",
	tools: "CÔNG CỤ & THIẾT KẾ UI/UX",
	business: "TƯ DUY KINH DOANH & PHÂN TÍCH"
};
function SkillsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "KỸ NĂNG & NĂNG LỰC",
			script: "Expertise",
			subtitle: "Tổng hợp các kỹ năng công nghệ, công cụ chuyên sâu và phương pháp tiếp cận dự án của Thành Đạt.",
			kicker: "STACK · PHƯƠNG PHÁP · QUY TRÌNH"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: Object.entries(stack).map(([group, items]) => {
						const Icon = stackCategoryIcons[group] || CodeXml;
						const title = stackCategoryTitles[group] || group.toUpperCase();
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 border-b border-line pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-10 items-center justify-center rounded bg-wine/10 text-wine",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xs tracking-[0.2em] text-wine uppercase",
											children: "PHÂN NHÓM CHUYÊN MÔN"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-bold text-wine",
											children: title
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: items.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "border border-line bg-wine/5 px-3 py-1.5 font-display text-xs tracking-wider text-wine font-medium transition-colors hover:bg-wine hover:text-cream",
											children: tech
										}, tech))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 border-t border-line/60 pt-3 text-xs text-ink/65",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Được cập nhật liên tục theo xu hướng công nghệ 2026." })
									})]
								})
							})
						}, group);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
					tone: "wine",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "card-3d bg-wine-card p-6 text-cream md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRIẾT LÝ NỀN TẢNG" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-bold tracking-wide text-cream md:text-3xl",
								children: "3 TRỤ CỘT CHUYÊN MÔN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cream/75 max-w-xl",
								children: "Điểm tựa giúp các sản phẩm đạt được sự cân bằng giữa thị giác, kỹ thuật và giá trị thực tế"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-3",
								children: pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden border border-cream/20 bg-wine/30 transition-transform duration-200 hover:-translate-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/10] overflow-hidden bg-wine-deep",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: pillar.image,
											alt: pillar.title,
											className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-xl font-bold text-cream",
											children: pillar.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-cream/80",
											children: pillar.text
										})]
									})]
								}, pillar.title))
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
					tone: "paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "card-3d bg-paper p-6 text-ink md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-line pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.25em] text-wine",
								children: "METHODOLOGY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl font-bold tracking-tight text-wine",
								children: "QUY TRÌNH PHÁT TRIỂN 4 BƯỚC"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ink/65 max-w-sm",
								children: "Từ việc tiếp nhận ý tưởng sơ khởi đến khi ra mắt phiên bản hoàn thiện"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: funnel.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line bg-wine/5 p-5 transition-transform duration-200 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xs tracking-[0.2em] text-wine/70 font-bold",
										children: step.stage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 font-display text-xl font-bold text-wine",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-ink/75",
										children: step.text
									})
								]
							}, step.stage))
						})]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
								className: "h-full",
								tone: "wine",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xs tracking-[0.25em] text-cream/70",
											children: "CÁCH THỨC LÀM VIỆC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-2xl font-bold text-cream",
											children: "CHIẾN LƯỢC HỢP TÁC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-4",
											children: engagement.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "border border-cream/20 bg-wine/40 p-4 rounded",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-display text-lg font-bold text-cream",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs leading-relaxed text-cream/80",
													children: item.text
												})]
											}, item.title))
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 border-t border-cream/15 pt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 border border-cream/30 bg-cream/10 px-4 py-2 font-display text-xs tracking-[0.2em] text-cream hover:bg-cream hover:text-wine transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BẮT ĐẦU DỰ ÁN NGAY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									})]
								})
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "card-3d h-full bg-paper p-6 text-ink md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xs tracking-[0.25em] text-wine",
											children: "GET STARTED"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-2xl font-bold text-wine",
											children: "4 BƯỚC TRIỂN KHAI THỰC TẾ"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-ink/70",
											children: "Quy trình làm việc minh bạch, nhanh gọn và định kỳ báo cáo tiến độ"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 grid grid-cols-2 gap-4",
											children: nextSteps.map((step, i) => {
												const Icon = nextIcons[i] || CircleDot;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "border border-line p-4 rounded bg-white",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "flex size-10 items-center justify-center rounded-full border border-wine text-wine mb-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-display text-xs tracking-wider text-wine/60 font-bold",
															children: ["BƯỚC ", step.n]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "font-display text-base font-bold text-wine",
															children: step.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs leading-relaxed text-ink/70",
															children: step.text
														})
													]
												}, step.n);
											})
										})
									]
								})
							})
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { SkillsPage as component };
