import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-h5ct0S2e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "THÀNH ĐẠT",
	fullName: "Nguyễn Công Thành Đạt",
	nickname: "Đạt",
	title: "Web Developer & AI Project Builder",
	tagline: "WEB DEVELOPER · AI · CREATIVE",
	script: "Portfolio",
	domain: "thanhdat2806.id.vn",
	location: "Hà Nội",
	hometown: "Thái Bình",
	school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
	major: "Quản trị kinh doanh",
	intro: "Sinh viên ngành Quản trị kinh doanh tại Học viện Công nghệ Bưu chính Viễn thông (PTIT), yêu thích công nghệ, thiết kế website và ứng dụng AI vào các sản phẩm thực tế. Mình tập trung xây dựng những sản phẩm số có giao diện hiện đại, trực quan và thân thiện với người dùng. Bên cạnh đó, mình đang phát triển các dự án AI chạy local trên máy tính cá nhân.",
	slogan: "Digital Creator. Designed for making.",
	usp: "Kết hợp tư duy kinh doanh với web hiện đại và AI chạy local — ra sản phẩm đẹp, rõ ràng, dùng được ngay."
};
var nav = [
	{
		href: "/",
		label: "TRANG CHỦ"
	},
	{
		href: "/about",
		label: "GIỚI THIỆU"
	},
	{
		href: "/projects",
		label: "DỰ ÁN"
	},
	{
		href: "/skills",
		label: "KỸ NĂNG"
	},
	{
		href: "/contact",
		label: "LIÊN HỆ"
	}
];
var identityBars = [
	{
		label: "Web Craft",
		value: 90
	},
	{
		label: "Local AI",
		value: 82
	},
	{
		label: "UI / UX",
		value: 86
	},
	{
		label: "Business",
		value: 78
	}
];
var audience = {
	age: "20+",
	gender: "Nam",
	location: "Hà Nội · quê Thái Bình",
	school: "PTIT — Quản trị kinh doanh",
	mindset: "Thích sản phẩm đẹp, logic rõ, AI thực tế",
	education: "Sinh viên đại học, tự học web & AI",
	occupation: "Web Developer · AI Project Builder"
};
var audienceNotes = [
	"Xem website như mặt tiền của một ý tưởng — không chỉ là trang giới thiệu.",
	"Ưu tiên giao diện hiện đại, trực quan, thân thiện trước khi thêm tính năng.",
	"Đưa AI vào sản phẩm theo hướng chạy local, chủ động, không phụ thuộc đám mây.",
	"Kết hợp tư duy kinh doanh với kỹ thuật để ra quyết định rõ ràng."
];
var projects = [
	{
		id: "datai",
		name: "ĐạtAI",
		subtitle: "Local AI Assistant",
		description: "Trợ lý AI cá nhân chạy trực tiếp trên máy tính Windows, hỗ trợ trò chuyện với AI, đọc và phân tích tài liệu PDF/DOCX và tương tác thông qua giao diện web.",
		stack: [
			"Python",
			"Flask",
			"Ollama",
			"Qwen",
			"REST API",
			"HTML",
			"CSS",
			"JavaScript"
		],
		demo: "Localhost / chưa public",
		github: "Chưa public",
		status: "In build",
		image: "/images/project1.jpg",
		imagePos: "center",
		video: "/videos/intro1.mp4",
		category: "ai",
		features: [
			"Chạy 100% offline trên máy tính Windows cá nhân, đảm bảo bảo mật dữ liệu.",
			"Tích hợp mô hình ngôn ngữ lớn (Qwen qua Ollama) với khả năng phản hồi thông minh.",
			"Tự động đọc, phân tích và trích xuất nội dung từ tài liệu PDF và DOCX.",
			"Giao diện Web UI tối giản, trực quan, dễ sử dụng cho học tập và nghiên cứu."
		]
	},
	{
		id: "dorm",
		name: "Ký túc xá PTIT",
		subtitle: "Hệ thống quản lý",
		description: "Dự án xây dựng hệ thống hỗ trợ sinh viên đăng ký ký túc xá và giúp cán bộ quản trị quản lý phòng, sinh viên, đăng ký và thanh toán.",
		stack: [
			"HTML",
			"CSS",
			"JavaScript",
			"Database",
			"Web Development"
		],
		demo: "Chưa public",
		github: "Chưa public",
		status: "Prototype",
		image: "/images/project2.jpg",
		imagePos: "center",
		video: "/videos/intro2.mp4",
		category: "web",
		features: [
			"Giao diện đăng ký phòng trực tuyến dành riêng cho sinh viên PTIT.",
			"Bảng điều khiển quản trị viên quản lý danh sách phòng, sinh viên và giường trống.",
			"Theo dõi lịch sử đóng phí, tình trạng thanh toán và hợp đồng lưu trú.",
			"Báo cáo và thống kê tự động về tỷ lệ lấp đầy phòng theo kỳ học."
		]
	},
	{
		id: "portfolio",
		name: "THÀNH ĐẠT",
		subtitle: "Personal Portfolio",
		description: "Website portfolio cá nhân giới thiệu bản thân, kỹ năng và các dự án với phong cách Luxury Editorial hiện đại, tối giản và tập trung mạnh vào trải nghiệm thị giác.",
		stack: [
			"HTML",
			"CSS",
			"JavaScript",
			"Tailwind CSS",
			"Responsive Design",
			"TanStack"
		],
		demo: "thanhdat2806.id.vn",
		github: "Chưa public",
		status: "Live",
		image: "/images/project3.jpg",
		imagePos: "center",
		video: "/videos/intro3.mp4",
		category: "web",
		features: [
			"Phong cách Luxury Editorial với tông màu đỏ rượu (Wine) và kem (Cream) sang trọng.",
			"Hiệu ứng 3D Parallax và Tilt card tương tác mượt mà theo chuyển động chuột.",
			"Kiến trúc đa trang (Multi-page) tối ưu tốc độ tải và trải nghiệm người dùng.",
			"Hoàn toàn responsive trên mọi kích thước màn hình từ điện thoại đến desktop."
		]
	},
	{
		id: "showcase",
		name: "Product Showcase",
		subtitle: "Website giới thiệu sản phẩm",
		description: "Website giới thiệu sản phẩm theo phong cách editorial/luxury, tập trung vào hình ảnh, bố cục, typography và câu chuyện thương hiệu thay vì giá bán hoặc đánh giá.",
		stack: [
			"HTML",
			"CSS",
			"JavaScript",
			"Tailwind CSS",
			"UI/UX"
		],
		demo: "Chưa public",
		github: "Chưa public",
		status: "Concept",
		image: "/images/product.jpg",
		imagePos: "center",
		category: "web",
		features: [
			"Bố cục tạp chí thời trang cao cấp với typography có tỷ lệ và nhịp điệu hoàn hảo.",
			"Tập trung làm nổi bật câu chuyện thương hiệu và chi tiết thủ công của sản phẩm.",
			"Tối ưu hóa hình ảnh độ phân giải cao với hiệu ứng chuyển cảnh mượt mà.",
			"Trải nghiệm cuộn trang tạo cảm giác khám phá như đang đọc một ấn phẩm in ấn."
		]
	},
	{
		id: "tiktok",
		name: "TikTok Shop",
		subtitle: "Business Model",
		description: "Dự án học tập phân tích mô hình kinh doanh TikTok Shop và đề xuất các giải pháp cải thiện hoạt động thương mại điện tử.",
		stack: [
			"PowerPoint",
			"Canva",
			"Figma",
			"Business Model Analysis"
		],
		demo: "Dự án học tập",
		github: "—",
		status: "Study",
		image: "/images/workspace.jpg",
		imagePos: "center",
		category: "business",
		features: [
			"Phân tích hành trình khách hàng (Customer Journey) từ xem video đến hoàn tất đơn hàng.",
			"Đánh giá mô hình thu phí hoa hồng, vận hành logistics và chiến lược livestream bán hàng.",
			"Đề xuất các giải pháp tối ưu tỷ lệ chuyển đổi cho nhà bán hàng vừa và nhỏ.",
			"Tổng hợp bài học ứng dụng cho sinh viên ngành Quản trị kinh doanh PTIT."
		]
	}
];
var pillars = [
	{
		title: "Web Craft",
		text: "Giao diện editorial, typography có nhịp, layout chịu được nhìn lâu.",
		image: "/images/project3.jpg"
	},
	{
		title: "Local AI",
		text: "Trợ lý chạy trên máy thật, đọc PDF/DOCX, không đẩy dữ liệu ra ngoài.",
		image: "/images/project1.jpg"
	},
	{
		title: "Business Lens",
		text: "Mỗi sản phẩm đều trả lời được: ai dùng, vì sao dùng, bước tiếp theo là gì.",
		image: "/images/project2.jpg"
	}
];
var funnel = [
	{
		stage: "01  DISCOVERY",
		title: "Lắng nghe brief",
		text: "Làm rõ người dùng, mục tiêu và ràng buộc trước khi mở Figma hay editor."
	},
	{
		stage: "02  DIRECTION",
		title: "Định hình thẩm mỹ",
		text: "Chọn tone, type, layout — luxury editorial, tối giản, tập trung thị giác."
	},
	{
		stage: "03  BUILD",
		title: "Thiết kế & lập trình",
		text: "HTML, CSS, JS, Tailwind, Python/Flask khi cần AI hoặc logic thật."
	},
	{
		stage: "04  LAUNCH",
		title: "Ra mắt & tinh chỉnh",
		text: "Responsive, tương tác mượt, sẵn sàng demo hoặc đưa lên domain."
	}
];
var engagement = [{
	title: "Làm việc trực tiếp",
	text: "Trao đổi ngắn, ra quyết định nhanh. Ưu tiên prototype nhìn được hơn slide dài."
}, {
	title: "Vòng lặp ngắn",
	text: "Mỗi tuần một bản nhìn được: layout, tương tác, hoặc luồng AI local."
}];
var roadmap = [
	{
		kicker: "Q3",
		title: "ĐạtAI v1",
		text: "Chat local + đọc PDF/DOCX trên Windows, giao diện web gọn."
	},
	{
		kicker: "Q4",
		title: "KTX PTIT",
		text: "Hoàn thiện đăng ký phòng, quản trị và thanh toán."
	},
	{
		kicker: "2026",
		title: "Product work",
		text: "Website editorial cho thương hiệu nhỏ, tập trung câu chuyện."
	}
];
var stack = {
	development: [
		"HTML5",
		"CSS3",
		"JavaScript",
		"Tailwind CSS",
		"Responsive Web Design",
		"UI/UX Design",
		"Animation & Interaction",
		"Python",
		"Flask",
		"REST API"
	],
	ai: [
		"Generative AI",
		"Local AI",
		"Ollama",
		"Qwen",
		"AI Assistant",
		"AI Coding Tools",
		"Document AI",
		"PDF/DOCX Processing"
	],
	tools: [
		"VS Code",
		"Git / GitHub",
		"Figma",
		"Canva",
		"PowerPoint",
		"Antigravity",
		"Lovable"
	],
	business: [
		"Business Analysis",
		"E-commerce",
		"Business Model",
		"Project Planning",
		"Requirements Analysis"
	]
};
var personas = [
	{
		name: "The Builder",
		role: "Web Developer",
		text: "Tự tay dựng layout, tương tác và hệ thống nhìn được trên trình duyệt.",
		image: "/images/portrait1.jpg",
		pos: "center"
	},
	{
		name: "The Analyst",
		role: "Business Student",
		text: "Đọc mô hình, tách yêu cầu, biến ý tưởng thành phạm vi làm được.",
		image: "/images/portrait2.jpg",
		pos: "center"
	},
	{
		name: "The Tinkerer",
		role: "Local AI",
		text: "Chạy model trên máy cá nhân, xử lý tài liệu, không phụ thuộc cloud.",
		image: "/images/portrait3.jpg",
		pos: "top"
	},
	{
		name: "The Stylist",
		role: "Editorial UI",
		text: "Ưu tiên thị giác: type, khoảng trắng, ảnh, nhịp trang như tạp chí.",
		image: "/images/portrait4.jpg",
		pos: "top"
	}
];
var nextSteps = [
	{
		n: "01",
		title: "Introductory call",
		text: "Nói ngắn về ý tưởng, phạm vi, thẩm mỹ."
	},
	{
		n: "02",
		title: "Assets transfer",
		text: "Nhận brief, ảnh, nội dung, ràng buộc kỹ thuật."
	},
	{
		n: "03",
		title: "Optimize & build",
		text: "Thiết kế layout, code, gắn AI khi cần."
	},
	{
		n: "04",
		title: "Content & launch",
		text: "Tinh chỉnh chữ, ảnh, tương tác — rồi demo."
	}
];
var mosaic = [
	{
		src: "/images/portrait1.jpg",
		pos: "center"
	},
	{
		src: "/images/project1.jpg",
		pos: "center"
	},
	{
		src: "/images/portrait2.jpg",
		pos: "center"
	},
	{
		src: "/images/project2.jpg",
		pos: "center"
	},
	{
		src: "/images/portrait3.jpg",
		pos: "top"
	},
	{
		src: "/images/hero.jpg",
		pos: "center"
	},
	{
		src: "/images/portrait4.jpg",
		pos: "top"
	},
	{
		src: "/images/project3.jpg",
		pos: "center"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function usePrefersReducedMotion() {
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduce(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return reduce;
}
function enableJsMotion() {
	document.documentElement.classList.add("js-motion");
}
function Reveal({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		enableJsMotion();
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOn(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", on && "is-in", className),
		children
	});
}
function TiltStage({ children, className, intensity = 10, tone = "paper" }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = usePrefersReducedMotion();
	const [tilting, setTilting] = (0, import_react.useState)(false);
	function applyTilt(clientX, clientY) {
		if (reduce) return;
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (clientX - r.left) / r.width;
		const py = (clientY - r.top) / r.height;
		const ry = (px - .5) * intensity * 2;
		const rx = (.5 - py) * intensity * 2;
		el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
		el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
		el.style.setProperty("--px", px.toFixed(3));
		el.style.setProperty("--py", py.toFixed(3));
		if (!tilting) setTilting(true);
	}
	function onPointerMove(e) {
		if (e.pointerType === "touch") return;
		applyTilt(e.clientX, e.clientY);
	}
	function onMouseMove(e) {
		applyTilt(e.clientX, e.clientY);
	}
	function onPointerLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.setProperty("--rx", "0deg");
		el.style.setProperty("--ry", "0deg");
		el.style.setProperty("--px", "0.5");
		el.style.setProperty("--py", "0.5");
		setTilting(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("tilt-stage", tilting && "is-tilting", tone === "wine" && "tone-wine", className),
		onPointerMove,
		onMouseMove,
		onPointerLeave,
		onMouseLeave: onPointerLeave,
		children
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative border-b border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-lg tracking-[0.22em] text-wine md:text-xl font-bold transition-opacity hover:opacity-85",
					children: site.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Mục lục",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						activeProps: { className: "text-wine font-bold border-b-2 border-wine pb-0.5" },
						inactiveProps: { className: "text-wine/75 hover:text-wine hover:-translate-y-px" },
						className: "font-display text-sm tracking-[0.22em] transition-[color,transform] duration-150 ease-out py-1",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "border border-wine bg-wine px-4 py-1.5 font-display text-xs tracking-[0.18em] text-cream transition-colors duration-150 hover:bg-wine-deep",
						children: "LIÊN HỆ"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center text-wine md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Đóng menu" : "Mở menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: cn("grid overflow-hidden border-t border-line md:hidden", "transition-[grid-template-rows,opacity] duration-200 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "min-h-0 divide-y divide-line/60",
				"aria-label": "Mục lục di động",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.href,
					activeProps: { className: "text-wine font-bold bg-wine/5 pl-5" },
					inactiveProps: { className: "text-wine/80" },
					className: "flex min-h-11 items-center px-4 font-display tracking-[0.2em] transition-all",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href))
			})
		})]
	});
}
function SiteLayout({ children, header }) {
	(0, import_react.useEffect)(() => {
		enableJsMotion();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scene min-h-screen bg-wine px-2 py-2 md:px-3 md:py-3 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main-content",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 focus:text-wine font-display",
			children: "Bỏ qua điều hướng"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "preserve-3d overflow-hidden rounded-sm bg-paper shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), header]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main-content",
					className: "pt-3",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-8 border-t border-cream/20 pt-8 pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-4 md:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl tracking-[0.2em] text-cream",
										children: site.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-cream/70 max-w-md leading-relaxed",
										children: site.intro
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-xs tracking-[0.2em] text-cream/60",
										children: site.slogan
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs tracking-[0.25em] text-cream/60 mb-3",
								children: "ĐIỀU HƯỚNG"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm",
								children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.href,
									className: "text-cream/80 hover:text-cream transition-colors font-display tracking-[0.16em]",
									children: item.label
								}) }, item.href))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs tracking-[0.25em] text-cream/60 mb-3",
									children: "THÔNG TIN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-cream/80",
									children: site.fullName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-cream/70 mt-1",
									children: site.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-cream/70 mt-1",
									children: [
										site.location,
										" · Quê ",
										site.hometown
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "inline-block border border-cream/40 bg-cream/10 px-3 py-1.5 font-display text-xs tracking-[0.18em] text-cream hover:bg-cream hover:text-wine transition-colors",
										children: "GỬI LỜI NHẮN"
									})
								})
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-cream/10 pt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-cream/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							site.fullName,
							". All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display tracking-[0.2em]",
							children: site.domain.toUpperCase()
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { stack as _, audienceNotes as a, funnel as c, nextSteps as d, personas as f, site as g, roadmap as h, audience as i, identityBars as l, projects as m, SiteLayout as n, cn as o, pillars as p, TiltStage as r, engagement as s, Reveal as t, mosaic as u, usePrefersReducedMotion as v };
