const REAL = [
  'Policy engine (role · spend · intent)',
  'Append-only SQLite audit log',
  'Lobster Trap integration',
  'REST API endpoint',
  'Reviewer dashboard (verdicts + reasons)',
];

const SIM = [
  '5 agent personas (dispatch, estimator, support, finance, ops)',
  'Phoenix-roofing customer/vendor fixtures',
  'Scripted tool-call timeline',
];

export default function RealVsSim() {
  return (
    <section className="section-pad section-rule">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Honest scoping</span>
          <h2>What&rsquo;s real, what&rsquo;s simulated.</h2>
          <p className="sub">The governance layer is production-grade. The agents driving the demo are scenario fixtures — built to exercise the layer, not to ship.</p>
        </div>
        <div className="real-grid">
          <div className="real-col real">
            <h3><span className="checkmark" /> Real and production-grade</h3>
            <ul>
              {REAL.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div className="real-col sim">
            <h3><span className="checkmark" /> Simulated for the demo</h3>
            <ul>
              {SIM.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
        <p className="real-note">
          The point of the demo isn&rsquo;t the agents — it&rsquo;s the <em>verdict</em> on what the agents try to do. Simulating the fleet keeps the surface area tight enough to make the policy behavior unambiguous; the engine itself, the audit log, and the Lobster Trap integration are the same code that would run against a live fleet.
        </p>
      </div>
    </section>
  );
}
