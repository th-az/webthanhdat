import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as site } from "./site-layout-h5ct0S2e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-D6kHPkWj.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, script, subtitle, kicker = `${site.name} · PORTFOLIO` }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-b border-line bg-paper px-4 py-8 text-ink md:px-8 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-display text-xs tracking-[0.25em] text-wine/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:underline",
						children: "TRANG CHỦ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-wine",
						children: title
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.28em] text-wine uppercase",
						children: kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-bold tracking-tight text-wine sm:text-5xl md:text-6xl",
							children: title
						}), script ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-script absolute -top-4 left-44 text-script leading-none text-wine/40 sm:left-64 md:left-80 pointer-events-none",
							children: script
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg",
						children: subtitle
					})
				]
			})]
		})
	});
}
//#endregion
export { PageHeader as t };
