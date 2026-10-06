import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduce;
}

export function enableJsMotion() {
  document.documentElement.classList.add("js-motion");
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    enableJsMotion();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", on && "is-in", className)}>
      {children}
    </div>
  );
}

export function TiltStage({
  children,
  className,
  intensity = 10,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  tone?: "paper" | "wine";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [tilting, setTilting] = useState(false);

  function applyTilt(clientX: number, clientY: number) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (clientX - r.left) / r.width;
    const py = (clientY - r.top) / r.height;
    const ry = (px - 0.5) * intensity * 2;
    const rx = (0.5 - py) * intensity * 2;
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--px", px.toFixed(3));
    el.style.setProperty("--py", py.toFixed(3));
    if (!tilting) setTilting(true);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "touch") return;
    applyTilt(e.clientX, e.clientY);
  }

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
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

  return (
    <div
      ref={ref}
      className={cn("tilt-stage", tilting && "is-tilting", tone === "wine" && "tone-wine", className)}
      onPointerMove={onPointerMove}
      onMouseMove={onMouseMove}
      onPointerLeave={onPointerLeave}
      onMouseLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
