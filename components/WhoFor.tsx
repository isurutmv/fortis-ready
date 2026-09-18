import { Section } from "./Section";

export function WhoFor() {
  return (
    <Section id="who">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        Who this is for
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">Ideal fit</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>2–12 person teams building on EVM / Base</li>
            <li>Shipping Solidity, planning an audit within ~8 weeks</li>
            <li>Want honest scope — not a marketing “security badge”</li>
            <li>Prefer fixed price and clear deliverables</li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">Not a fit</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Need a formal audit letter or insurance-grade report</li>
            <li>Large multi-contract systems (&gt; ~300 nSLOC for SKU-1)</li>
            <li>Expecting custody, privileged keys, or production ops</li>
            <li>Looking for “guaranteed safe” language</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

