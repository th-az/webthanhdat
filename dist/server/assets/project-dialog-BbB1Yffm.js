import { jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
//#region src/components/project-dialog.tsx
function ProjectDialog({ project, open, onOpenChange }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [/* @__PURE__ */ jsx(Dialog.Overlay, { className: "fixed inset-0 z-50 bg-wine-deep/70 data-[state=open]:animate-[rise_250ms_ease-out]" }), /* @__PURE__ */ jsx(Dialog.Content, {
			className: "fixed inset-x-3 top-[8%] z-50 max-h-[84vh] overflow-y-auto bg-transparent text-ink outline-none md:inset-x-auto md:left-1/2 md:w-[min(720px,92vw)] md:-translate-x-1/2",
			children: project ? /* @__PURE__ */ jsxs("div", {
				className: "dialog-panel overflow-hidden bg-paper shadow-card",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-48 overflow-hidden md:h-64",
					children: [/* @__PURE__ */ jsx("img", {
						src: project.image,
						alt: project.name,
						className: "h-full w-full object-cover",
						style: { objectPosition: project.imagePos }
					}), /* @__PURE__ */ jsx(Dialog.Close, {
						className: "absolute right-3 top-3 inline-flex size-11 items-center justify-center bg-paper text-wine",
						"aria-label": "Đóng",
						children: /* @__PURE__ */ jsx(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 p-5 md:p-8",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "font-display text-xs tracking-[0.28em] text-wine",
							children: [
								project.status.toUpperCase(),
								" · ",
								project.subtitle.toUpperCase()
							]
						}),
						/* @__PURE__ */ jsx(Dialog.Title, {
							className: "font-display text-4xl tracking-wide text-wine md:text-5xl",
							children: project.name
						}),
						/* @__PURE__ */ jsx(Dialog.Description, {
							className: "text-sm leading-relaxed text-ink/75 md:text-base",
							children: project.description
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-xs tracking-[0.22em] text-wine",
							children: "CÔNG NGHỆ"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-2 flex flex-wrap gap-2",
							children: project.stack.map((item) => /* @__PURE__ */ jsx("li", {
								className: "border border-line px-3 py-1 font-display text-xs tracking-[0.14em] text-wine",
								children: item
							}, item))
						})] }),
						/* @__PURE__ */ jsxs("dl", {
							className: "grid gap-2 text-sm text-ink/80 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
								className: "font-display tracking-[0.16em] text-wine",
								children: "DEMO"
							}), /* @__PURE__ */ jsx("dd", { children: project.demo })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
								className: "font-display tracking-[0.16em] text-wine",
								children: "GITHUB"
							}), /* @__PURE__ */ jsx("dd", { children: project.github })] })]
						})
					]
				})]
			}) : null
		})] })
	});
}
//#endregion
export { ProjectDialog as t };
