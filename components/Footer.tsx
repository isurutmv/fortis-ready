import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 py-10 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
      <Container>
        <p className="font-semibold text-foreground">{siteConfig.name}</p>
        <p className="mt-1">
          Pre-audit engineering partner for serious EVM startups.
        </p>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed opacity-90">
          <strong className="text-amber-700 dark:text-amber-300">Not a formal security audit.</strong>{" "}
          Fortis Ready provides readiness feedback only. No guarantees,
          certifications, or custody. Deploying smart contracts can result in
          total loss of funds. You remain solely responsible for your code,
          deployments, and user funds.
        </p>
        <p className="mt-4 text-xs">
          Contact: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> · Payment:{" "}
          {siteConfig.payment.currency} on {siteConfig.payment.network}{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.85em] dark:bg-white/10">
            {siteConfig.payment.address}
          </code>
        </p>
        <p className="mt-6 text-xs opacity-75">© {new Date().getFullYear()} {siteConfig.name}</p>
      </Container>
    </footer>
  );
}

