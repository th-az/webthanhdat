import { _ as site, d as mosaic, n as Reveal, o as audience, p as personas, r as TiltStage, s as audienceNotes, t as SiteLayout, u as identityBars } from "./site-layout-h5ct0S2e.js";
import { t as PageHeader } from "./page-header-D6kHPkWj.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, GraduationCap, MapPin, Sparkles, User } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsx(SiteLayout, {
		header: /* @__PURE__ */ jsx(PageHeader, {
			title: "GIỚI THIỆU",
			script: "About Me",
			subtitle: "Sinh viên Quản trị kinh doanh tại PTIT, theo đuổi lập trình web hiện đại và phát triển các sản phẩm AI local.",
			kicker: "BẢN THÂN · TƯ DUY · ĐỊNH VỊ"
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ jsxs("section", {
									className: "card-3d h-full bg-paper p-6 text-ink md:p-8",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-4" }), /* @__PURE__ */ jsx("span", { children: "CÂU CHUYỆN & HÀNH TRÌNH" })]
										}),
										/* @__PURE__ */ jsx("h2", {
											className: "mt-2 font-display text-3xl font-bold tracking-tight text-wine md:text-4xl",
											children: "Kết hợp tư duy kinh doanh với kỹ thuật công nghệ"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-4 space-y-4 text-base leading-relaxed text-ink/80",
											children: [
												/* @__PURE__ */ jsxs("p", { children: [
													"Xin chào, mình là ",
													/* @__PURE__ */ jsx("strong", {
														className: "text-wine font-semibold",
														children: site.fullName
													}),
													" (",
													site.nickname,
													"). Hiện mình đang là sinh viên theo học ngành ",
													/* @__PURE__ */ jsx("strong", { children: site.major }),
													" tại ",
													/* @__PURE__ */ jsx("strong", { children: site.school }),
													"."
												] }),
												/* @__PURE__ */ jsxs("p", { children: [
													"Khác với lối mòn lý thuyết kinh doanh thuần túy, mình tin rằng trong kỷ nguyên số, một ý tưởng kinh doanh hay chỉ thực sự có giá trị khi nó được hiện thực hóa thành sản phẩm cụ thể. Vì vậy, mình chủ động tự học và rèn luyện kỹ năng ",
													/* @__PURE__ */ jsx("strong", { children: "lập trình web hiện đại" }),
													" và ",
													/* @__PURE__ */ jsx("strong", { children: "ứng dụng trí tuệ nhân tạo (AI)" }),
													" vào thực tế."
												] }),
												/* @__PURE__ */ jsxs("p", { children: [
													"Mỗi website mình tạo ra không chỉ là những dòng mã khô khan hay giao diện thông thường, mà được định hình theo phong cách ",
													/* @__PURE__ */ jsx("strong", { children: "Luxury Editorial" }),
													" — chú trọng typography, bố cục phân bổ không gian và trải nghiệm thị giác tinh tế như một ấn phẩm tạp chí cao cấp."
												] }),
												/* @__PURE__ */ jsxs("p", { children: [
													"Đồng thời, mình tập trung vào hướng đi ",
													/* @__PURE__ */ jsx("strong", { children: "Local AI" }),
													" — đưa các mô hình ngôn ngữ lớn (LLM) chạy trực tiếp trên máy tính cá nhân để phân tích tài liệu và hỗ trợ công việc mà không làm lộ dữ liệu riêng tư ra ngoài đám mây."
												] })
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4",
											children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-2xl font-bold text-wine",
													children: "2026"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-ink/65 uppercase tracking-wider",
													children: "Mục tiêu phát triển"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-2xl font-bold text-wine",
													children: "05+"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-ink/65 uppercase tracking-wider",
													children: "Dự án hoàn thành"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-2xl font-bold text-wine",
													children: "100%"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-ink/65 uppercase tracking-wider",
													children: "Local & Bảo mật AI"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-2xl font-bold text-wine",
													children: "Editorial"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs text-ink/65 uppercase tracking-wider",
													children: "Phong cách thiết kế"
												})] })
											]
										})
									]
								})
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-4",
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
											children: "PROFILE SNAPSHOT"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-2 font-display text-2xl font-bold tracking-wide text-cream",
											children: site.fullName
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-cream/75 mt-0.5",
											children: site.title
										}),
										/* @__PURE__ */ jsxs("dl", {
											className: "mt-6 space-y-3 text-sm",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 border-b border-cream/15 pb-2",
													children: [
														/* @__PURE__ */ jsx(User, { className: "size-4 text-cream/70 shrink-0" }),
														/* @__PURE__ */ jsx("dt", {
															className: "text-cream/65 font-display text-xs tracking-wider",
															children: "ĐỘ TUỔI:"
														}),
														/* @__PURE__ */ jsxs("dd", {
															className: "ml-auto text-cream",
															children: [
																audience.age,
																" · ",
																audience.gender
															]
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 border-b border-cream/15 pb-2",
													children: [
														/* @__PURE__ */ jsx(MapPin, { className: "size-4 text-cream/70 shrink-0" }),
														/* @__PURE__ */ jsx("dt", {
															className: "text-cream/65 font-display text-xs tracking-wider",
															children: "NƠI Ở:"
														}),
														/* @__PURE__ */ jsx("dd", {
															className: "ml-auto text-cream",
															children: audience.location
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 border-b border-cream/15 pb-2",
													children: [
														/* @__PURE__ */ jsx(GraduationCap, { className: "size-4 text-cream/70 shrink-0" }),
														/* @__PURE__ */ jsx("dt", {
															className: "text-cream/65 font-display text-xs tracking-wider",
															children: "TRƯỜNG:"
														}),
														/* @__PURE__ */ jsx("dd", {
															className: "ml-auto text-cream text-right text-xs",
															children: site.school
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 pt-1",
													children: [/* @__PURE__ */ jsx("dt", {
														className: "text-cream/65 font-display text-xs tracking-wider",
														children: "CHUYÊN NGÀNH:"
													}), /* @__PURE__ */ jsx("dd", {
														className: "ml-auto text-cream text-right text-xs",
														children: site.major
													})]
												})
											]
										})
									] }), /* @__PURE__ */ jsxs("div", {
										className: "mt-8 border-t border-cream/20 pt-4",
										children: [/* @__PURE__ */ jsx("p", {
											className: "font-display text-xs tracking-[0.2em] text-cream/70",
											children: "TRIẾT LÝ LÀM VIỆC"
										}), /* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-sm italic text-cream/90",
											children: [
												"\"",
												site.slogan,
												"\""
											]
										})]
									})]
								})
							})
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "paper",
								children: /* @__PURE__ */ jsxs("section", {
									className: "card-3d h-full bg-paper p-6 text-ink md:p-8",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-display text-2xl font-bold tracking-wide text-wine",
											children: "NĂNG LỰC & ĐỊNH HƯỚNG"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-sm text-ink/75",
											children: site.usp
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "mt-6 space-y-4",
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
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-6 rounded bg-wine/5 p-4 border border-line",
											children: [/* @__PURE__ */ jsx("p", {
												className: "font-display text-xs tracking-[0.2em] text-wine font-bold",
												children: "CHIẾN LƯỢC NỘI DUNG"
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-1 text-xs leading-relaxed text-ink/75",
												children: "Tập trung phát triển sản phẩm web có tính thẩm mỹ cao cùng hệ thống AI chạy máy cục bộ. Mỗi dự án đều phải kể được câu chuyện và mang lại giá trị thực tế."
											})]
										})
									]
								})
							})
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ jsx(Reveal, {
							className: "h-full",
							children: /* @__PURE__ */ jsx(TiltStage, {
								className: "h-full",
								tone: "wine",
								children: /* @__PURE__ */ jsxs("section", {
									className: "card-3d h-full bg-wine-card p-6 text-cream md:p-8",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-display text-2xl font-bold tracking-wide text-cream",
											children: "NGUYÊN TẮC THỰC HIỆN"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm text-cream/70",
											children: "Những giá trị cốt lõi dẫn dắt mọi quyết định thiết kế và lập trình"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-6 grid gap-3 sm:grid-cols-2",
											children: audienceNotes.map((note, index) => /* @__PURE__ */ jsx("div", {
												className: "rounded border border-cream/20 bg-wine/30 p-4 transition-transform duration-200 hover:-translate-y-1",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-start gap-2.5",
													children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-cream shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("p", {
														className: "text-sm leading-relaxed text-cream/90",
														children: note
													})]
												})
											}, index))
										}),
										/* @__PURE__ */ jsx("div", {
											className: "mt-6 border-t border-cream/15 pt-5",
											children: /* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-2 gap-4",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-xs tracking-[0.2em] text-cream/70",
													children: "TƯ DUY KINH DOANH"
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-1 text-xs leading-relaxed text-cream/85",
													children: "Xác định người dùng là ai, bài toán gì cần giải, và chỉ số thành công trước khi gõ code."
												})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: "font-display text-xs tracking-[0.2em] text-cream/70",
													children: "TƯ DUY SẢN PHẨM"
												}), /* @__PURE__ */ jsx("p", {
													className: "mt-1 text-xs leading-relaxed text-cream/85",
													children: "Prototype nhanh, thẩm mỹ cao cấp, trải nghiệm trực quan và khả năng mở rộng lâu dài."
												})] })]
											})
										})
									]
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
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-line pb-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xs tracking-[0.25em] text-wine",
								children: "MULTI-DISCIPLINARY"
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-3xl font-bold tracking-tight text-wine",
								children: "4 GÓC NHÌN ĐẶC TRƯNG"
							})] }), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-ink/65 max-w-sm",
								children: "Sự hòa quyện giữa các vai trò khác nhau tạo nên phong cách độc đáo của Thành Đạt"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: personas.map((p) => /* @__PURE__ */ jsxs("div", {
								className: "group overflow-hidden border border-line bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/3] overflow-hidden bg-line/20",
									children: /* @__PURE__ */ jsx("img", {
										src: p.image,
										alt: p.name,
										className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
										style: { objectPosition: p.pos }
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-display text-base font-bold tracking-wider text-wine",
											children: p.name.toUpperCase()
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs font-medium text-muted",
											children: p.role
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-xs leading-relaxed text-ink/75",
											children: p.text
										})
									]
								})]
							}, p.name))
						})]
					})
				}) }),
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltStage, {
					tone: "wine",
					children: /* @__PURE__ */ jsxs("section", {
						className: "card-3d bg-wine-card p-6 text-cream md:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xs tracking-[0.25em] text-cream/70",
								children: "EDITORIAL GALLERY"
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl font-bold tracking-wide text-cream",
								children: "HÌNH ẢNH & PHONG CÁCH"
							})] }), /* @__PURE__ */ jsxs(Link, {
								to: "/projects",
								className: "inline-flex items-center gap-2 border border-cream/40 bg-cream/10 px-4 py-2 font-display text-xs tracking-[0.2em] text-cream hover:bg-cream hover:text-wine transition-colors",
								children: [/* @__PURE__ */ jsx("span", { children: "XEM CÁC DỰ ÁN" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3",
							children: mosaic.map((shot, i) => /* @__PURE__ */ jsx("div", {
								className: "aspect-square overflow-hidden bg-wine-deep",
								children: /* @__PURE__ */ jsx("img", {
									src: shot.src,
									alt: `Gallery item ${i + 1}`,
									className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
									style: { objectPosition: shot.pos }
								})
							}, i))
						})]
					})
				}) })
			]
		})
	});
}
//#endregion
export { AboutPage as component };
