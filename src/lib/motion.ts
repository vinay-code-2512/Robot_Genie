import type { Transition } from "framer-motion";

/** GPU-friendly scroll reveal: opacity + translateY */
export const hiddenReveal = { opacity: 0, y: 28 };
export const hiddenRevealUp = { opacity: 0, y: -22 };
export const visibleReveal = { opacity: 1, y: 0 };

/** Triggers slightly before entering viewport; fires once for perf */
export const viewportReveal = {
  once: true as const,
  margin: "-64px 0px -40px 0px",
  amount: 0.18,
};

/** Smooth ease-out; avoids heavy spring chains on scroll */
export const transitionReveal: Transition = {
  duration: 0.52,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionRevealShort: Transition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionTap: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 28,
};

export function staggerDelay(index: number, step = 0.08) {
  return index * step;
}
