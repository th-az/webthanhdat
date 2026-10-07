import { y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { E as ArrowLeft, S as CircleCheck, T as ArrowRight, o as Sparkles } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-CI-AeGjY.mjs";
import { m as projects, n as SiteLayout, r as TiltStage, t as Reveal } from "./_ssr/site-layout-h5ct0S2e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_projectId-ktKOMbux.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailPage() {
	const { projectId } = Route.useParams();
	const project = projects.find((p) => p.id === projectId);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-20 text-center bg-paper p-8 text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-wine font-bold",
				children: "Dự án không tồn tại"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ink/70",
				children: "Không tìm thấy thông tin dự án theo đường dẫn này."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "inline-flex items-center gap-2 bg-wine px-4 py-2 font-display text-xs tracking-wider text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QUAY LẠI DANH SÁCH DỰ ÁN" })]
				})
			})
		]
	}) });
	const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-cream/20 bg-wine-card px-4 py-3 text-cream md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-cream hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QUAY LẠI TẤT CẢ DỰ ÁN" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-xs tracking-[0.2em] text-cream/70 uppercase",
					children: [
						project.status,
						" · ",
						project.subtitle
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
				tone: "paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-3d overflow-hidden bg-paper text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[21/9] max-h-[460px] w-full overflow-hidden bg-wine-deep",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.name,
								className: "h-full w-full object-cover",
								style: { objectPosition: project.imagePos }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 text-cream md:bottom-8 md:left-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-wine px-3 py-1 font-display text-xs tracking-[0.2em] text-cream uppercase",
										children: project.status
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl drop-shadow-md",
										children: project.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-sm tracking-[0.2em] text-cream/90 md:text-base",
										children: project.subtitle
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 md:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-8 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6 lg:col-span-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-bold tracking-wide text-wine",
									children: "TỔNG QUAN DỰ ÁN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base leading-relaxed text-ink/80 md:text-lg",
									children: project.description
								})] }), project.features && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-line pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-xl font-bold tracking-wide text-wine flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TÍNH NĂNG NỔI BẬT & ĐIỂM NHẤN" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-3",
										children: project.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm leading-relaxed text-ink/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-wine shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
										}, idx))
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line lg:pl-8 pt-6 lg:pt-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xs tracking-[0.25em] text-wine font-bold",
										children: "CÔNG NGHỆ ÁP DỤNG"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: project.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "border border-line bg-wine/5 px-2.5 py-1 font-display text-xs tracking-wide text-wine",
											children: tech
										}, tech))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-line pt-4 space-y-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-display text-xs tracking-[0.2em] text-wine font-bold",
												children: "TRẠNG THÁI"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 text-ink/80 font-medium",
												children: project.status
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-display text-xs tracking-[0.2em] text-wine font-bold",
												children: "TRẢI NGHIỆM DEMO"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 text-ink/80",
												children: project.demo
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-display text-xs tracking-[0.2em] text-wine font-bold",
												children: "MÃ NGUỒN GITHUB"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 text-ink/80",
												children: project.github
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-line pt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "flex w-full items-center justify-center gap-2 bg-wine px-4 py-2.5 font-display text-xs tracking-[0.2em] text-cream hover:bg-wine-deep transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRAO ĐỔI VỀ DỰ ÁN NÀY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									})
								]
							})]
						})
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltStage, {
				tone: "wine",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "card-3d bg-wine-card p-6 text-cream md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold tracking-wide text-cream",
							children: "CÁC DỰ ÁN KHÁC CỦA THÀNH ĐẠT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-cream/70",
							children: "Tiếp tục khám phá các sản phẩm khác trong portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",
							children: otherProjects.map((op) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects/$projectId",
								params: { projectId: op.id },
								className: "group border border-cream/20 bg-wine/30 p-4 transition-transform duration-200 hover:-translate-y-1 block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/10] overflow-hidden bg-wine-deep",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: op.image,
											alt: op.name,
											className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
											style: { objectPosition: op.imagePos }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-base font-bold text-cream group-hover:underline",
										children: op.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-cream/70 line-clamp-1",
										children: op.subtitle
									})
								]
							}, op.id))
						})
					]
				})
			}) })
		]
	}) });
}
//#endregion
export { ProjectDetailPage as component };
