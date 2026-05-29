const DEMO_URL = 'https://demo.agentmarshal.dev/receipts';
const REPO_URL = 'https://github.com/ApexForge13/agentmarshal';
const VIDEO_URL = 'https://youtu.be/r06KiTgo7-Q';

export default function App() {
  return (
    <div className="lp">
      <section className="lp-hero">
        <div className="lp-col">
          <div className="lp-wordmark">AgentMarshal</div>

          <h1 className="lp-tagline">
            Verdict gives you a verdict. AgentMarshal gives you the receipt that proves it.
          </h1>

          <p className="lp-subtagline">
            The governance and audit-evidence layer for AI agents on Bright Data.
          </p>

          <p className="lp-body">
            AgentMarshal governs what an autonomous AI agent is allowed to do, and on every
            decision emits a cryptographically signed, externally timestamped Compliance Receipt
            that anyone can verify without trusting AgentMarshal at all. Every action and every
            refusal becomes evidence.
          </p>

          <p className="lp-spec">
            Ed25519 over RFC 8785 canonical form. RFC 3161 timestamp from FreeTSA.
            Hash-chained to the previous record on the same agent.
          </p>

          <div className="lp-links">
            <a className="lp-btn lp-btn-primary" href={DEMO_URL}>
              See the demo <span className="arr">&rarr;</span>
            </a>
            <a className="lp-btn lp-btn-ghost" href={REPO_URL} target="_blank" rel="noreferrer">
              Code on GitHub
            </a>
            <a className="lp-btn lp-btn-ghost" href={VIDEO_URL} target="_blank" rel="noreferrer">
              Watch the video
            </a>
          </div>
        </div>
      </section>

      <section className="lp-why">
        <div className="lp-col">
          <h2>Why this matters</h2>
          <p className="lp-stat">
            $1.1M settlement<span className="sep">&middot;</span>481 violations
            <span className="sep">&middot;</span>8 months of silent failure
          </p>
          <p className="lp-note">
            OFAC v. TradeStation Securities (March 17, 2026). Their sanctions screening worked.
            Their geo-blocking didn&rsquo;t, and nobody knew. AgentMarshal makes that gap
            structurally impossible &mdash; because the receipts never stop coming.
          </p>
        </div>
      </section>

      <footer className="lp-foot">
        <div className="lp-col">AgentMarshal</div>
      </footer>
    </div>
  );
}
