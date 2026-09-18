import { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-amber-400/40 bg-amber-50/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-300/30 dark:bg-amber-950/30 dark:text-amber-300 ${className}`}
    >
      {children}
    </span>
  );
}

