import { Section } from "./Section";

export function Process() {
  return (
    <Section id="how">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        How it works
      </h2>
      <ol className="mt-6 space-y-4">
        {[
          {
            title: "Intake",
            body:
              "Email the form fields below (repo link, scope, target audit window). We confirm fit and nSLOC.",
          },
          {
            title: "Pay & kickoff",
            body:
              "Send USDC on Base. You share a tagged commit / branch. No custody of keys or funds.",
          },
          {
            title: "Review (48–72h)",
            body:
              "We deliver a written readiness report: findings, severity, remediation order, handoff gaps.",
          },
          {
            title: "Clarify & next step",
            body:
              "One async Q&A on the report. Optionally continue into an Audit Prep Sprint or go straight to your auditor.",
          },
        ].map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

