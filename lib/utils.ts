/** Merge class names — lightweight alternative to clsx for Tailwind */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
