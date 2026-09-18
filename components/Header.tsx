import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-background/80 backdrop-blur dark:border-white/10">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
          <Link className="hover:text-foreground" href="#offer">
            Offer
          </Link>
          <Link className="hover:text-foreground" href="#pricing">
            Pricing
          </Link>
          <Link className="hover:text-foreground" href="#how">
            Process
          </Link>
          <Link className="hover:text-foreground" href="#faq">
            FAQ
          </Link>
          <Link className="hover:text-foreground" href="/checklist">
            Checklist
          </Link>
          <Link
            className="rounded-md bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700"
            href="#intake"
          >
            Start intake
          </Link>
        </nav>
        <Link
          href="/checklist"
          className="md:hidden rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Checklist
        </Link>
      </Container>
    </header>
  );
}

