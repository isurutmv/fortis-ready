import { Section } from "./Section";

export function FAQ() {
  return (
    <Section id="faq">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">FAQ</h2>
      <div className="mt-4 space-y-3">
        {[
          {
            q: "Is this a security audit?",
            a: "No. It is a fixed-scope engineering readiness review. It does not replace a formal audit from a reputable firm when you need one.",
          },
          {
            q: "What if my contract is larger than ~300 nSLOC?",
            a: "SKU-1 is for a single tightly scoped surface. Larger or multi-contract systems fit SKU-2 (Audit Prep Sprint) or a custom quote.",
          },
          {
            q: "Do you take custody of keys or funds?",
            a: "Never. We review code you share (repo / commit). Zero custody is part of the mission.",
          },
          {
            q: "What do I get in the report?",
            a: "Severity-rated findings, remediation order, and notes on tests/docs for auditor handoff.",
          },
          {
            q: "How do I pay?",
            a: "USDC on Base to the address listed at intake confirmation.",
          },
          {
            q: "Can you guarantee my contracts are safe?",
            a: "No. No honest reviewer can. We help you reduce obvious and structural risk before audit and deployment — you own residual risk.",
          },
        ].map((item, idx) => (
          <details
            key={idx}
            className="rounded-lg border border-zinc-200 bg-white p-4 open:border-blue-300 dark:border-white/10 dark:bg-zinc-900/50"
          >
            <summary className="cursor-pointer font-semibold marker:hidden">
              {item.q}
            </summary>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

