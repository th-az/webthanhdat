import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-dialog-BbB1Yffm.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDialog({ project, open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-wine-deep/70 data-[state=open]:animate-[rise_250ms_ease-out]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "fixed inset-x-3 top-[8%] z-50 max-h-[84vh] overflow-y-auto bg-transparent text-ink outline-none md:inset-x-auto md:left-1/2 md:w-[min(720px,92vw)] md:-translate-x-1/2",
			children: project ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dialog-panel overflow-hidden bg-paper shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-48 overflow-hidden md:h-64",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: project.name,
						className: "h-full w-full object-cover",
						style: { objectPosition: project.imagePos }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "absolute right-3 top-3 inline-flex size-11 items-center justify-center bg-paper text-wine",
						"aria-label": "Đóng",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xs tracking-[0.28em] text-wine",
							children: [
								project.status.toUpperCase(),
								" · ",
								project.subtitle.toUpperCase()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-4xl tracking-wide text-wine md:text-5xl",
							children: project.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-sm leading-relaxed text-ink/75 md:text-base",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.22em] text-wine",
							children: "CÔNG NGHỆ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-2",
							children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border border-line px-3 py-1 font-display text-xs tracking-[0.14em] text-wine",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-2 text-sm text-ink/80 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display tracking-[0.16em] text-wine",
								children: "DEMO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.demo })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display tracking-[0.16em] text-wine",
								children: "GITHUB"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.github })] })]
						})
					]
				})]
			}) : null
		})] })
	});
}
//#endregion
export { ProjectDialog as t };
