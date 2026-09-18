import { Section } from "./Section";

export function Problem() {
  return (
    <Section id="problem">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        The expensive mistake
      </h2>
      <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-300">
        Teams book a $20k–$80k audit, then burn weeks and budget on findings
        that a focused readiness pass would have caught earlier — missing tests,
        unclear scope, broken access control, upgrade patterns nobody documented.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">What audits are for</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Deep, formal review by a firm you trust — when capital and users are
            on the line. That process deserves clean code, clear docs, and a
            defined surface.
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="font-semibold">What readiness is for</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Catch the obvious and structural issues first. Ship tested, scoped,
            documented contracts so your auditor starts on real risk — not
            homework.
          </p>
        </div>
      </div>
    </Section>
  );
}

