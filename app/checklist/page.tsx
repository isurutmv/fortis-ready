import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Audit Readiness Checklist",
  description:
    "Free printable Audit Readiness Checklist for EVM/Solidity teams: access control, proxies, oracles, reentrancy, tests, docs, and footguns.",
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-4 break-inside-avoid rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900/50 print:border-zinc-300 print:bg-white">
    <h2 className="mb-2 border-b border-zinc-200 pb-2 text-sm font-semibold dark:border-white/10 print:border-zinc-300">
      {title}
    </h2>
    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200 print:text-black">
      {children}
    </div>
  </section>
);

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <span className="mt-1 h-4 w-4 rounded border border-zinc-400 dark:border-white/20 print:border-black"></span>
    <span>{children}</span>
  </div>
);

export default function ChecklistPage() {
  return (
    <div className="py-8">
      <Container>
        <header className="mb-6 flex items-center justify-between print:hidden">
          <Link href="/" className="text-sm text-zinc-600 hover:underline">
            ← Offer
          </Link>
          <button
            onClick={() => window.print()}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Print
          </button>
        </header>
        <div className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 print:hidden">
          Free · Printable · Not an audit
        </div>
        <h1 className="text-2xl font-bold tracking-tight print:text-[18pt]">
          Audit Readiness Checklist
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300 print:text-black">
          Use this before you book (or while you wait for) a formal audit.
          Check what you can verify today. Unchecked items are homework — not a
          reason to skip a real audit when capital is at risk.
        </p>

        <div className="mt-6 columns-1 print:text-black md:columns-2">
          <Section title="1. Access control">
            <Item>
              Every privileged function has an explicit modifier / role check
              (not only “assumed” caller).
            </Item>
            <Item>
              Owner / admin / role holders are documented; default admin is not
              a hot EOA you use daily.
            </Item>
            <Item>
              Critical actions (upgrade, pause, mint, sweep) require multi-sig
              or timelock where appropriate.
            </Item>
            <Item>
              No public or incorrectly permissioned <code>initialize</code>,{" "}
              <code>set*</code>, or rescue functions.
            </Item>
            <Item>Renounce / transfer ownership paths are intentional and tested.</Item>
          </Section>

          <Section title="2. Upgradeability & proxies">
            <Item>
              If upgradeable: proxy pattern named (UUPS / Transparent / Beacon)
              and justified in docs.
            </Item>
            <Item>
              Initializer is protected; implementation cannot be initialized by
              an attacker.
            </Item>
            <Item>
              Storage layout / gaps reviewed for upgrade collisions; no packing
              surprises across versions.
            </Item>
            <Item>
              Upgrade authority and process documented (who, delay, emergency
              path).
            </Item>
            <Item>
              If <em>not</em> upgradeable: immutability is explicit — no
              accidental proxy or <code>delegatecall</code> surface.
            </Item>
          </Section>

          <Section title="3. Oracle & external assumptions">
            <Item>Price / data sources listed; staleness, decimals, and failure modes documented.</Item>
            <Item>Spot price alone is not used for critical valuation without acknowledging manipulation risk.</Item>
            <Item>External calls (DEX, bridges, registries) have return-value checks and failure handling.</Item>
            <Item>Assumptions about token behavior (fee-on-transfer, rebasing, ERC777 hooks) are written down.</Item>
          </Section>

          <Section title="4. Reentrancy & CEI">
            <Item>Checks-Effects-Interactions followed on value-moving paths; state updated before external calls.</Item>
            <Item>ReentrancyGuard (or equivalent) on functions that need it — and you know why.</Item>
            <Item>Cross-function and cross-contract reentrancy considered.</Item>
            <Item>ETH / ERC20 receive hooks and callbacks (e.g. ERC777, flash loans) accounted for.</Item>
          </Section>

          <Section title="5. Authorization & signatures">
            <Item>msg.sender vs tx.origin: no reliance on tx.origin for auth.</Item>
            <Item>Permit / EIP-712: domain separator, nonce, deadline, and chainId handled correctly.</Item>
            <Item>Signature replay across contracts / chains considered.</Item>
            <Item>Pull-over-push for token transfers where users could grief or brick accounting.</Item>
          </Section>

          <Section title="6. Tests & Foundry coverage">
            <Item>Unit tests for happy path and auth failures, edge amounts, and pause/upgrade paths.</Item>
            <Item>Target: meaningful branch coverage on critical modules (aim ≥80% on core paths; 100% on auth).</Item>
            <Item>Invariant / fuzz tests on accounting invariants (shares, balances, solvency).</Item>
            <Item>Fork tests against Base (or target chain) for integrations you depend on.</Item>
            <Item>
              <code>forge test</code> / CI green on the commit you will hand to
              auditors.
            </Item>
          </Section>

          <Section title="7. Documentation for auditors">
            <Item>README: system overview, trust model, privileged roles, external dependencies.</Item>
            <Item>Scope list: in-scope contracts, out-of-scope, known issues, deferred items.</Item>
            <Item>NatSpec on public/external interfaces; non-obvious invariants documented.</Item>
            <Item>Deploy / upgrade scripts and expected addresses documented.</Item>
            <Item>Prior reviews, bug bounty notes, or design changes since last review attached.</Item>
          </Section>

          <Section title="8. Common footguns">
            <Item>Unchecked external call return values; silent failures on ERC20 <code>transfer</code>/<code>approve</code>.</Item>
            <Item>Integer / rounding that favors the protocol against users (or vice versa) without docs.</Item>
            <Item>Unsafe <code>delegatecall</code>, arbitrary <code>call</code> targets, or user-controlled calldata to sensitive callees.</Item>
            <Item>Front-running / sandwich surfaces on sensitive state changes (if relevant to your product).</Item>
            <Item>Centralization risks labeled honestly (single admin, upgrade key, pause).</Item>
            <Item>Compiler version pinned; known optimizer / version caveats reviewed.</Item>
          </Section>
        </div>

        <div className="mt-6 rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm dark:border-blue-300/20 dark:bg-blue-950/20 print:border-zinc-300 print:bg-white">
          <h2 className="font-semibold">Want a second set of eyes before the audit invoice?</h2>
          <p className="mt-1 text-zinc-700 dark:text-zinc-200">
            Fortis Ready’s {siteConfig.sku1.name} (${siteConfig.sku1.priceUsd} / {siteConfig.sku1.altPrice},{" "}
            {siteConfig.sku1.turnaround}) is a fixed-scope engineering pass — explicitly not a formal audit. Ideal when you
            have {siteConfig.sku1.scope} and an audit window inside ~8 weeks.
          </p>
          <Link
            className="mt-3 inline-flex rounded-md bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700 print:hidden"
            href="/#intake"
          >
            Start intake →
          </Link>
          <p className="mt-2 print:hidden">
            Or email <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.9em] dark:bg-white/10">{siteConfig.email}</code>
          </p>
        </div>

        <p className="mt-6 border-t border-zinc-200 pt-4 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400 print:border-zinc-300 print:text-black">
          <strong>Not a formal security audit.</strong> This checklist is educational. Completing it does not mean your
          contracts are safe. Fortis Ready provides readiness feedback only — no guarantees, certifications, or custody.
          Smart contract deployment can result in total loss of funds. © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </div>
  );
}

