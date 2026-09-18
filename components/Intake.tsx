import { Section } from "./Section";
import { siteConfig } from "@/lib/site-config";

export function Intake() {
  return (
    <Section id="intake" divider={false}>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Intake</h2>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
        This form is static — copy the fields into an email. We reply with fit,
        price confirmation, and payment details.
      </p>
      <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/50">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Your name / role", placeholder: "Alex Chen, Founding Engineer" },
            { label: "Project name & chain", placeholder: "Acme Vault — Base" },
            { label: "Repo / commit (or private share link)", placeholder: "github.com/org/repo @ abc1234" },
            { label: "Contract(s) in scope + approx. nSLOC", placeholder: "Vault.sol ~180 nSLOC" },
            { label: "Target audit window", placeholder: "~6 weeks" },
          ].map((f, i) => (
            <label key={i} className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-zinc-700 dark:text-zinc-200">{f.label}</span>
              <input
                className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
                placeholder={f.placeholder}
                readOnly
                aria-readonly="true"
              />
            </label>
          ))}
        </div>
        <div className="mt-4 rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-white/10 dark:bg-white/5">
          <strong className="text-foreground">How to submit:</strong>
          <div className="mt-1">
            Email the filled fields to{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            . Subject:{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[0.9em] dark:bg-zinc-800">
              Fortis Ready intake — [project]
            </code>
          </div>
          <a
            className="mt-3 inline-flex rounded-md bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
              "Fortis Ready intake"
            )}`}
          >
            Open email client
          </a>
        </div>
      </div>
    </Section>
  );
}

