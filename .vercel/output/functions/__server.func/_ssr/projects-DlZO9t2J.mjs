import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { T as ArrowRight, _ as Funnel, o as Sparkles } from "../_libs/lucide-react.mjs";
import { h as roadmap, m as projects, n as SiteLayout, o as cn, r as TiltStage, t as Reveal } from "./site-layout-h5ct0S2e.mjs";
import { t as PageHeader } from "./page-header-D6kHPkWj.mjs";
import { t as ProjectDialog } from "./project-dialog-BbB1Yffm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DlZO9t2J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [activeProject, setActiveProject] = (0, import_react.useState)(null);
	const filteredProjects = projects.filter((p) => {
		if (filter === "all") return true;
		return p.category === filter;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "DỰ ÁN TIÊU BIỂU",
			script: "Selected Works",
			subtitle: "Tuyển tập các sản phẩm web hiện đại và ứng dụng Local AI được xây dựng với tư duy tinh gọn và thẩm mỹ cao.",
			kicker: "PORTFOLIO · SẢN PHẨM · THỰC TẾ"
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-cream/20 bg-wine-card px-4 py-3 text-cream md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-display text-xs tracking-[0.2em] text-cream/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LỌC THEO PHÂN LOẠI:" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFilter("all"),
								className: cn("px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors", filter === "all" ? "bg-cream text-wine font-bold" : "border border-cream/30 text-cream hover:bg-cream/10"),
								children: [
									"TẤT CẢ (",
									projects.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setFilter("ai"),
								className: cn("px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors", filter === "ai" ? "bg-cream text-wine font-bold" : "border border-cream/30 text-cream hover:bg-cream/10"),
								children: "LOCAL AI (1)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setFilter("web"),
								className: cn("px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors", filter === "web" ? "bg-cream text-wine font-bold" : "border border-cream/30 text-cream hover:bg-cream/10"),
								children: "WEB CRAFT (3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setFilter("business"),
								className: cn("px-3 py-1 font-display text-xs tracking-[0.16em] transition-colors", filter === "business" ? "bg-cream text-wine font-bold" : "border border-cream/30 text-cream hover:bg-cream/10"),
								children: "BUSINESS (1)"
							})
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filteredProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
							className: "h-full",
							tone: "paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-3d flex h-full flex-col justify-between overflow-hidden bg-paper text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] overflow-hidden bg-wine-deep/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.image,
											alt: p.name,
											className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
											style: { objectPosition: p.imagePos }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 bg-wine px-2.5 py-1 font-display text-[10px] tracking-[0.2em] text-cream uppercase",
											children: p.status
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 right-3 bg-paper/90 px-2.5 py-1 font-display text-[10px] tracking-[0.16em] text-wine uppercase shadow-sm",
											children: p.subtitle
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 md:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl font-bold tracking-wide text-wine",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-ink/75 line-clamp-3",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-[11px] tracking-[0.2em] text-wine/80 font-bold mb-2",
												children: "STACK CÔNG NGHỆ:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: p.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "border border-line bg-wine/5 px-2 py-0.5 font-display text-[11px] tracking-wide text-wine",
													children: tech
												}, tech))
											})]
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-line bg-wine/5 p-4 flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActiveProject(p),
										className: "font-display text-xs tracking-[0.16em] text-wine hover:underline",
										children: "XEM NHANH"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/projects/$projectId",
										params: { projectId: p.id },
										className: "inline-flex items-center gap-1.5 bg-wine px-3 py-1.5 font-display text-xs tracking-[0.16em] text-cream hover:bg-wine-deep transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHI TIẾT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								})]
							})
						})
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
					tone: "wine",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "card-3d bg-wine-card p-6 text-cream md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "KẾ HOẠCH & LỘ TRÌNH" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-bold tracking-wide text-cream md:text-3xl",
								children: "KPIs & GOALS ROADMAP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-cream/75 max-w-xl",
								children: "Kế hoạch phát triển các mốc quan trọng trong năm 2026 của Thành Đạt"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-3",
								children: roadmap.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative border border-cream/20 bg-wine/30 p-5 rounded transition-transform duration-200 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-bold tracking-[0.2em] text-cream/60",
											children: item.kicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-2 font-display text-xl font-bold text-cream",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-relaxed text-cream/80",
											children: item.text
										})
									]
								}, item.title))
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-cream/20 bg-wine p-6 text-center text-cream md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold tracking-wide",
							children: "BẠN ĐANG CÓ MỘT Ý TƯỞNG CẦN XÂY DỰNG?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-md text-sm text-cream/80",
							children: "Hãy trao đổi ngắn để cùng nhau biến ý tưởng thành website hoặc giải pháp AI thực tế."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 border border-cream bg-cream px-6 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-wine hover:bg-cream/90 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIÊN HỆ HỢP TÁC NGAY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDialog, {
			project: activeProject,
			open: Boolean(activeProject),
			onOpenChange: (open) => {
				if (!open) setActiveProject(null);
			}
		})]
	});
}
//#endregion
export { ProjectsPage as component };
