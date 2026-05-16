import { IconShieldCheck, IconBadgeDollar, IconShieldAlert } from './Icons';

export default function ThreeJobs() {
  return (
    <section className="section-pad section-rule">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Three jobs · one policy engine</span>
          <h2>What the policy layer actually does.</h2>
          <p className="sub">Every agent tool call is evaluated against a declared role, a spend envelope, and an injection signature. Three verdicts, one durable audit trail.</p>
        </div>
        <div className="grid-3">
          <article className="card allow">
            <span className="accent-bar" />
            <span className="icn"><IconShieldCheck size={18} /></span>
            <h3>Role &amp; scope enforcement</h3>
            <p>Each agent declares the tools, accounts, and customers it&rsquo;s allowed to touch. Anything outside that envelope — a dispatch agent issuing a refund, an estimator opening a payroll ledger — is denied before the call leaves the policy engine.</p>
          </article>
          <article className="card escalate">
            <span className="accent-bar" />
            <span className="icn"><IconBadgeDollar size={18} /></span>
            <h3>Spend governance</h3>
            <p>Per-agent and per-vendor dollar ceilings with margin floors. Routine invoices clear automatically; anything that breaches the ceiling or compresses margin below the floor escalates to a human reviewer with full context.</p>
          </article>
          <article className="card block">
            <span className="accent-bar" />
            <span className="icn"><IconShieldAlert size={18} /></span>
            <h3>Injection defense</h3>
            <p>Declared intent is captured at task start and compared against detected intent at every tool call. Prompts that try to redirect funds, exfiltrate records, or chain unauthorized actions are blocked and surfaced as incidents — not silent failures.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
