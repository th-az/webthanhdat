import { _ as site, h as projects, i as usePrefersReducedMotion, m as pillars, n as Reveal, r as TiltStage, t as SiteLayout, u as identityBars } from "./site-layout-h5ct0S2e.js";
import { t as ProjectDialog } from "./project-dialog-BbB1Yffm.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Facebook, Github, Globe, Instagram, Layers, Sparkles, UserCheck } from "lucide-react";
//#region src/components/site-hero.tsx
var socials = [
	{
		href: "https://github.com",
		label: "GitHub",
		Icon: Github
	},
	{
		href: "https://www.instagram.com",
		label: "Instagram",
		Icon: Instagram
	},
	{
		href: "https://www.facebook.com",
		label: "Facebook",
		Icon: Facebook
	},
	{
		href: `https://${site.domain}`,
		label: "Website",
		Icon: Globe
	}
];
function SiteHero() {
	const stageRef = useRef(null);
	const reduce = usePrefersReducedMotion();
	useEffect(() => {
		if (reduce) return;
		const el = stageRef.current;
		if (!el) return;
		let ticking = false;
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				el.style.setProperty("--sy", `${Math.min(window.scrollY, 420) * .14}px`);
				ticking = false;
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [reduce]);
	function onPointerMove(e) {
		if (reduce || e.pointerType === "touch") return;
		applyHero(e.clientX, e.clientY);
	}
	function onMouseMove(e) {
		if (reduce) return;
		applyHero(e.clientX, e.clientY);
	}
	function applyHero(clientX, clientY) {
		const el = stageRef.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (clientX - r.left) / r.width - .5;
		const y = (clientY - r.top) / r.height - .5;
		el.style.setProperty("--mx", x.toFixed(3));
		el.style.setProperty("--my", y.toFixed(3));
	}
	function onPointerLeave() {
		const el = stageRef.current;
		if (!el) return;
		el.style.setProperty("--mx", "0");
		el.style.setProperty("--my", "0");
	}
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		ref: stageRef,
		className: "hero-stage relative bg-paper text-ink",
		"aria-labelledby": "hero-title",
		onPointerMove,
		onMouseMove,
		onPointerLeave,
		onMouseLeave: onPointerLeave,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid items-end gap-6 px-4 pb-6 pt-4 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-4 lg:gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "hero-copy relative z-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "rise font-display text-xl tracking-[0.18em] text-wine md:text-3xl lg:text-4xl",
						children: site.name
					}),
					/* @__PURE__ */ jsxs("h1", {
						id: "hero-title",
						className: "rise mt-1 font-display text-display leading-[0.82] tracking-wide text-wine",
						style: { animationDelay: "60ms" },
						children: [
							"WEB",
							/* @__PURE__ */ jsx("br", {}),
							"DEVELOPER"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rise font-script -mt-4 ml-16 text-script leading-none text-wine md:ml-28 md:-mt-6",
						style: { animationDelay: "120ms" },
						children: site.script
					}),
					/* @__PURE__ */ jsx("p", {
						className: "rise mt-6 max-w-md font-display text-sm tracking-[0.22em] text-wine/70 md:text-base",
						style: { animationDelay: "180ms" },
						children: site.tagline
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "rise mt-2 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base",
						style: { animationDelay: "220ms" },
						children: [
							site.fullName,
							" — ",
							site.title,
							". ",
							site.location,
							" · ",
							site.hometown,
							"."
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rise mt-8 flex items-center gap-3",
						style: { animationDelay: "280ms" },
						children: socials.map(({ href, label, Icon }) => /* @__PURE__ */ jsx("a", {
							href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": label,
							className: "btn-3d inline-flex size-11 items-center justify-center rounded-sm bg-wine text-cream hover:bg-wine-deep",
							children: /* @__PURE__ */ jsx(Icon, {
								className: "size-4",
								strokeWidth: 1.75
							})
						}, label))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "hero-figure relative z-[1] mx-auto w-full max-w-md md:max-w-none",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hero-float",
					children: /* @__PURE__ */ jsx("img", {
						src: "/images/hero.jpg",
						alt: "Editorial fashion portrait for the THÀNH ĐẠT brand",
						className: "rise mx-auto h-[min(56vh,560px)] w-full object-contain object-bottom md:h-[min(64vh,640px)]",
						style: { animationDelay: "140ms" }
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "hero-floor",
					"aria-hidden": "true"
				})]
			})]
		}), /* @__PURE__ */ jsx("p", {
			className: "relative z-10 px-4 pb-5 text-right font-display text-sm tracking-[0.28em] text-wine md:px-8",
			children: site.domain.toUpperCase()
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const [activeProject, setActiveProject] = useState(null);
	const featuredProjects = projects.slice(0, 3);
	return /* @__PURE__ */ jsxs(SiteLayout, {
		header: /* @__PURE__ */ jsx(SiteHero, {}),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "wine",
								children: /* @__PURE__ */ jsxs("section", {
									className: "card-3d flex h-full flex-col justify-between bg-wine-card p-6 text-cream md:p-8",
									children: [/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "GIỚI THIỆU TỔNG QUAN" })]
										}),
										/* @__PURE__ */ jsx("h2", {
											className: "mt-2 font-display text-3xl font-bold tracking-tight text-cream md:text-4xl",
											children: "Xây dựng sản phẩm số với tư duy kinh doanh & công nghệ"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-4 text-sm leading-relaxed text-cream/85",
											children: site.intro
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "mt-3 text-xs italic text-cream/75",
											children: [
												"\"",
												site.slogan,
												"\""
											]
										})
									] }), /* @__PURE__ */ jsx("div", {
										className: "mt-6 border-t border-cream/15 pt-4",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/about",
											className: "inline-flex items-center gap-2 bg-cream px-4 py-2 font-display text-xs tracking-[0.2em] font-bold text-wine transition-colors hover:bg-cream/90",
											children: [/* @__PURE__ */ jsx("span", { children: "TÌM HIỂU THÊM VỀ ĐẠT" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
										})
									})]
								})
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-6",
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
											children: [/* @__PURE__ */ jsx(UserCheck, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "ĐỊNH HƯỚNG NĂNG LỰC" })]
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-2 font-display text-2xl font-bold text-wine",
											children: "THẾ MẠNH & ĐIỂM KHÁC BIỆT"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-sm text-ink/75",
											children: site.usp
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "mt-5 space-y-3",
											children: identityBars.map((bar) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("div", {
												className: "mb-1 flex justify-between font-display text-xs tracking-[0.16em] text-wine",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-bold",
													children: bar.label.toUpperCase()
												}), /* @__PURE__ */ jsxs("span", { children: [bar.value, "%"] })]
											}), /* @__PURE__ */ jsx("div", {
												className: "bar-track h-2 bg-line rounded-full",
												children: /* @__PURE__ */ jsx("div", {
													className: "bar-fill h-2 bg-wine rounded-full",
													style: { width: `${bar.value}%` }
												})
											})] }, bar.label))
										})
									] }), /* @__PURE__ */ jsx("div", {
										className: "mt-6 border-t border-line pt-4",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/skills",
											className: "inline-flex items-center gap-2 font-display text-xs tracking-[0.18em] text-wine font-bold hover:underline",
											children: [/* @__PURE__ */ jsx("span", { children: "XEM TOÀN BỘ TECH STACK & QUY TRÌNH" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
										})
									})]
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
					tone: "paper",
					children: /* @__PURE__ */ jsxs("section", {
						className: "card-3d bg-paper p-6 text-ink md:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-line pb-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xs tracking-[0.25em] text-wine",
								children: "FEATURED WORKS"
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-3xl font-bold tracking-tight text-wine md:text-4xl",
								children: "DỰ ÁN TIÊU BIỂU"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/projects",
								className: "inline-flex items-center gap-2 bg-wine px-4 py-2 font-display text-xs tracking-[0.18em] text-cream hover:bg-wine-deep transition-colors",
								children: [/* @__PURE__ */ jsxs("span", { children: [
									"XEM TẤT CẢ DỰ ÁN (",
									projects.length,
									")"
								] }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: featuredProjects.map((p) => /* @__PURE__ */ jsxs("article", {
								className: "flex flex-col justify-between border border-line bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "relative aspect-[16/10] overflow-hidden bg-wine-deep",
									children: ["video" in p && p.video ? /* @__PURE__ */ jsx("video", {
										src: p.video,
										className: "h-full w-full object-cover",
										autoPlay: true,
										muted: true,
										loop: true,
										playsInline: true,
										poster: p.image
									}) : /* @__PURE__ */ jsx("img", {
										src: p.image,
										alt: p.name,
										className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
										style: { objectPosition: p.imagePos }
									}), /* @__PURE__ */ jsx("span", {
										className: "absolute top-2 left-2 bg-wine px-2 py-0.5 font-display text-[10px] tracking-wider text-cream",
										children: p.status
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4",
									children: [
										/* @__PURE__ */ jsx("h4", {
											className: "font-display text-xl font-bold text-wine",
											children: p.name
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted font-display tracking-wider",
											children: p.subtitle
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-xs leading-relaxed text-ink/75 line-clamp-2",
											children: p.description
										})
									]
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "border-t border-line/60 bg-wine/5 p-3 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setActiveProject(p),
										className: "font-display text-xs tracking-wider text-wine hover:underline",
										children: "XEM NHANH"
									}), /* @__PURE__ */ jsxs(Link, {
										to: "/projects/$projectId",
										params: { projectId: p.id },
										className: "inline-flex items-center gap-1 font-display text-xs tracking-wider text-wine font-bold hover:underline",
										children: [/* @__PURE__ */ jsx("span", { children: "CHI TIẾT" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3" })]
									})]
								})]
							}, p.id))
						})]
					})
				}) }),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
					tone: "wine",
					children: /* @__PURE__ */ jsxs("section", {
						className: "card-3d bg-wine-card p-6 text-cream md:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-cream/15 pb-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-cream/70",
								children: [/* @__PURE__ */ jsx(Layers, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "NỀN TẢNG" })]
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl font-bold tracking-wide text-cream md:text-3xl",
								children: "3 TRỤ CỘT CHUYÊN MÔN"
							})] }), /* @__PURE__ */ jsx(Link, {
								to: "/skills",
								className: "font-display text-xs tracking-[0.2em] text-cream/80 hover:text-cream hover:underline",
								children: "XEM QUY TRÌNH & KỸ NĂNG →"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-3",
							children: pillars.map((pillar) => /* @__PURE__ */ jsxs("div", {
								className: "border border-cream/20 bg-wine/30 p-5 rounded",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "aspect-[16/9] overflow-hidden rounded bg-wine-deep mb-3",
										children: /* @__PURE__ */ jsx("img", {
											src: pillar.image,
											alt: pillar.title,
											className: "h-full w-full object-cover"
										})
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "font-display text-lg font-bold text-cream",
										children: pillar.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs leading-relaxed text-cream/80",
										children: pillar.text
									})
								]
							}, pillar.title))
						})]
					})
				}) }),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
					className: "border border-cream/20 bg-paper p-8 text-center text-ink md:p-12 shadow-card",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-3xl font-bold tracking-tight text-wine md:text-4xl",
							children: "SẴN SÀNG CHO MỘT DỰ ÁN MỚI?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-3 max-w-lg text-sm text-ink/75 leading-relaxed",
							children: "Bạn có thể xem chi tiết hồ sơ cá nhân, khám phá các dự án đã xây dựng hoặc gửi tin nhắn trao đổi trực tiếp với Thành Đạt."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/projects",
								className: "border border-wine bg-transparent px-5 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-wine hover:bg-wine/5 transition-colors",
								children: "XEM DỰ ÁN"
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 border border-wine bg-wine px-6 py-2.5 font-display text-xs font-bold tracking-[0.2em] text-cream hover:bg-wine-deep transition-colors",
								children: [/* @__PURE__ */ jsx("span", { children: "LIÊN HỆ TRỰC TIẾP" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							})]
						})
					]
				}) })
			]
		}), /* @__PURE__ */ jsx(ProjectDialog, {
			project: activeProject,
			open: Boolean(activeProject),
			onOpenChange: (open) => {
				if (!open) setActiveProject(null);
			}
		})]
	});
}
//#endregion
export { Home as component };
