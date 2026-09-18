import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  className = "",
  children,
  divider = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${divider ? "border-b border-zinc-200/60 dark:border-white/10" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

