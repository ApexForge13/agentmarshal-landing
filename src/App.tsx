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
            AgentMarshal gives you the receipt that proves what your agent knew when it decided.
          </h1>

          <p className="lp-subtagline">
            The governance and audit-evidence layer for AI agents on Bright Data.
          </p>

          <p className="lp-body">
            AgentMarshal governs what an autonomous AI agent is allowed to do, and on every
            decision emits a cryptographically signed, externally timestamped receipt
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
          <h2>Logs aren&rsquo;t evidence.</h2>
          <p className="lp-stat">When a regulator asks two years later.</p>
          <p className="lp-note">
            AI agents are making decisions that touch money, risk, and compliance
            &mdash; at machine speed. Most agent stacks produce logs. Reconstruction
            isn&rsquo;t proof. AgentMarshal makes silent control failure structurally
            impossible &mdash; because the receipts never stop coming.
          </p>
        </div>
      </section>

      <footer className="lp-foot">
        <div className="lp-col">AgentMarshal</div>
      </footer>
    </div>
  );
}
