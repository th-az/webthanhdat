import { c as engagement, f as nextSteps, l as funnel, m as pillars, n as Reveal, r as TiltStage, t as SiteLayout, v as stack } from "./site-layout-h5ct0S2e.js";
import { t as PageHeader } from "./page-header-D6kHPkWj.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Brain, Briefcase, CircleDot, Code2, FolderClosed, Handshake, Layers, SlidersHorizontal, Terminal } from "lucide-react";
//#region src/routes/skills.tsx?tsr-split=component
var nextIcons = [
	Handshake,
	FolderClosed,
	SlidersHorizontal,
	CircleDot
];
var stackCategoryIcons = {
	development: Code2,
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
	return /* @__PURE__ */ jsx(SiteLayout, {
		header: /* @__PURE__ */ jsx(PageHeader, {
			title: "KỸ NĂNG & NĂNG LỰC",
			script: "Expertise",
			subtitle: "Tổng hợp các kỹ năng công nghệ, công cụ chuyên sâu và phương pháp tiếp cận dự án của Thành Đạt.",
			kicker: "STACK · PHƯƠNG PHÁP · QUY TRÌNH"
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2",
					children: Object.entries(stack).map(([group, items]) => {
						const Icon = stackCategoryIcons[group] || Code2;
						const title = stackCategoryTitles[group] || group.toUpperCase();
						return /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ jsxs("div", {
									className: "card-3d flex h-full flex-col justify-between bg-paper p-6 text-ink md:p-8",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 border-b border-line pb-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex size-10 items-center justify-center rounded bg-wine/10 text-wine",
											children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "font-display text-xs tracking-[0.2em] text-wine uppercase",
											children: "PHÂN NHÓM CHUYÊN MÔN"
										}), /* @__PURE__ */ jsx("h3", {
											className: "font-display text-xl font-bold text-wine",
											children: title
										})] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: items.map((tech) => /* @__PURE__ */ jsx("span", {
											className: "border border-line bg-wine/5 px-3 py-1.5 font-display text-xs tracking-wider text-wine font-medium transition-colors hover:bg-wine hover:text-cream",
											children: tech
										}, tech))
									})] }), /* @__PURE__ */ jsx("div", {
										className: "mt-6 border-t border-line/60 pt-3 text-xs text-ink/65",
										children: /* @__PURE__ */ jsx("span", { children: "Được cập nhật liên tục theo xu hướng công nghệ 2026." })
									})]
								})
							})
						}, group);
					})
				}),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
					tone: "wine",
					children: /* @__PURE__ */ jsxs("section", {
						className: "card-3d bg-wine-card p-6 text-cream md:p-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70",
								children: [/* @__PURE__ */ jsx(Layers, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "TRIẾT LÝ NỀN TẢNG" })]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-1 font-display text-2xl font-bold tracking-wide text-cream md:text-3xl",
								children: "3 TRỤ CỘT CHUYÊN MÔN"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-cream/75 max-w-xl",
								children: "Điểm tựa giúp các sản phẩm đạt được sự cân bằng giữa thị giác, kỹ thuật và giá trị thực tế"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 grid grid-cols-1 gap-6 md:grid-cols-3",
								children: pillars.map((pillar) => /* @__PURE__ */ jsxs("div", {
									className: "overflow-hidden border border-cream/20 bg-wine/30 transition-transform duration-200 hover:-translate-y-1",
									children: [/* @__PURE__ */ jsx("div", {
										className: "aspect-[16/10] overflow-hidden bg-wine-deep",
										children: /* @__PURE__ */ jsx("img", {
											src: pillar.image,
											alt: pillar.title,
											className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "p-5",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "font-display text-xl font-bold text-cream",
											children: pillar.title
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-2 text-sm leading-relaxed text-cream/80",
											children: pillar.text
										})]
									})]
								}, pillar.title))
							})
						]
					})
				}) }),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
					tone: "paper",
					children: /* @__PURE__ */ jsxs("section", {
						className: "card-3d bg-paper p-6 text-ink md:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-line pb-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xs tracking-[0.25em] text-wine",
								children: "METHODOLOGY"
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-3xl font-bold tracking-tight text-wine",
								children: "QUY TRÌNH PHÁT TRIỂN 4 BƯỚC"
							})] }), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-ink/65 max-w-sm",
								children: "Từ việc tiếp nhận ý tưởng sơ khởi đến khi ra mắt phiên bản hoàn thiện"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: funnel.map((step) => /* @__PURE__ */ jsxs("div", {
								className: "border border-line bg-wine/5 p-5 transition-transform duration-200 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-display text-xs tracking-[0.2em] text-wine/70 font-bold",
										children: step.stage
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "mt-2 font-display text-xl font-bold text-wine",
										children: step.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-xs leading-relaxed text-ink/75",
										children: step.text
									})
								]
							}, step.stage))
						})]
					})
				}) }),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsx("div", {
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
											children: "CÁCH THỨC LÀM VIỆC"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-1 font-display text-2xl font-bold text-cream",
											children: "CHIẾN LƯỢC HỢP TÁC"
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "mt-6 space-y-4",
											children: engagement.map((item) => /* @__PURE__ */ jsxs("li", {
												className: "border border-cream/20 bg-wine/40 p-4 rounded",
												children: [/* @__PURE__ */ jsx("h4", {
													className: "font-display text-lg font-bold text-cream",
													children: item.title
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-1 text-xs leading-relaxed text-cream/80",
													children: item.text
												})]
											}, item.title))
										})
									] }), /* @__PURE__ */ jsx("div", {
										className: "mt-6 border-t border-cream/15 pt-4",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 border border-cream/30 bg-cream/10 px-4 py-2 font-display text-xs tracking-[0.2em] text-cream hover:bg-cream hover:text-wine transition-colors",
											children: [/* @__PURE__ */ jsx("span", { children: "BẮT ĐẦU DỰ ÁN NGAY" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
										})
									})]
								})
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ jsxs("section", {
									className: "card-3d h-full bg-paper p-6 text-ink md:p-8",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-display text-xs tracking-[0.25em] text-wine",
											children: "GET STARTED"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-1 font-display text-2xl font-bold text-wine",
											children: "4 BƯỚC TRIỂN KHAI THỰC TẾ"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-xs text-ink/70",
											children: "Quy trình làm việc minh bạch, nhanh gọn và định kỳ báo cáo tiến độ"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-6 grid grid-cols-2 gap-4",
											children: nextSteps.map((step, i) => {
												const Icon = nextIcons[i] || CircleDot;
												return /* @__PURE__ */ jsxs("div", {
													className: "border border-line p-4 rounded bg-white",
													children: [
														/* @__PURE__ */ jsx("span", {
															className: "flex size-10 items-center justify-center rounded-full border border-wine text-wine mb-3",
															children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
														}),
														/* @__PURE__ */ jsxs("span", {
															className: "font-display text-xs tracking-wider text-wine/60 font-bold",
															children: ["BƯỚC ", step.n]
														}),
														/* @__PURE__ */ jsx("h4", {
															className: "font-display text-base font-bold text-wine",
															children: step.title
														}),
														/* @__PURE__ */ jsx("p", {
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
