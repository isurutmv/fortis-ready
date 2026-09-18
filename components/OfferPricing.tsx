import { siteConfig } from "@/lib/site-config";
import { Section } from "./Section";

export function OfferPricing() {
  return (
    <Section id="offer">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        SKU-1: {siteConfig.sku1.name}
      </h2>
      <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-300">
        A fixed-scope engineering review of one contract (or a tightly bounded
        surface) so you know what to fix before you write a big audit check.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">Included</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Manual review of scoped Solidity ({siteConfig.sku1.scope})</li>
            <li>Findings with severity + remediation order</li>
            <li>Notes on tests, docs, and auditor handoff gaps</li>
            <li>Written report within {siteConfig.sku1.turnaround} of kickoff</li>
            <li>One async clarification pass on the report</li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">Excluded</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Formal security audit or attestation</li>
            <li>Economic / MEV / oracle-manipulation modeling at depth</li>
            <li>Gas optimization campaigns</li>
            <li>Writing production code or managing keys</li>
            <li>Any guarantee the contract is “safe”</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-blue-300/50 bg-blue-50/60 p-5 text-sm dark:border-blue-300/20 dark:bg-blue-950/20">
        <strong className="text-amber-700 dark:text-amber-300">
          Disclaimer — Not a formal security audit.
        </strong>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Fortis Ready provides engineering readiness feedback only. This
          service does not constitute a security audit, penetration test,
          certification, or warranty. Deploying smart contracts involves risk of
          total loss. You remain solely responsible for your code, deployments,
          and user funds.
        </p>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Pricing</h2>
      <div className="mt-4 rounded-xl border border-blue-600 bg-white p-6 shadow-sm dark:border-blue-500 dark:bg-zinc-900/50">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/5">
            SKU-1
          </span>
          <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/5">
            {siteConfig.sku1.turnaround}
          </span>
          <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/5">
            1 contract
          </span>
        </div>
        <div className="mt-2 text-4xl font-bold">
          ${siteConfig.sku1.priceUsd}{" "}
          <small className="align-middle text-base font-medium text-zinc-600 dark:text-zinc-300">
            or {siteConfig.sku1.altPrice}
          </small>
        </div>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          <strong>SKU-2 — {siteConfig.sku2.name}:</strong>{" "}
          {siteConfig.sku2.priceRange} for broader prep (multi-file scope, test
          plan coaching, auditor handoff package). Scoped after a short call.
        </p>
        <a
          className="mt-4 inline-flex rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
          href="#intake"
        >
          Request intake
        </a>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Payment: {siteConfig.payment.currency} on {siteConfig.payment.network} →{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.9em] dark:bg-white/10">
            {siteConfig.payment.address}
          </code>
        </p>
      </div>
    </Section>
  );
}

