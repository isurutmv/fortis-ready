import Link from "next/link";
import { Badge } from "./Badge";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Badge>Not a formal security audit</Badge>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Fortis Ready is a pre-audit engineering partner for serious EVM
          startups. Fixed-scope reviews. Honest findings. Zero custody. No
          theater.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#pricing"
            className="rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Focused Review — ${siteConfig.sku1.priceUsd}
          </Link>
          <Link
            href="/checklist"
            className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 font-semibold text-foreground hover:border-zinc-400 dark:border-white/15 dark:bg-transparent"
          >
            Free Audit Readiness Checklist
          </Link>
        </div>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          {siteConfig.sku1.turnaround} · {siteConfig.sku1.scope} · {siteConfig.sku1.altPrice}
        </p>
      </Container>
    </section>
  );
}

