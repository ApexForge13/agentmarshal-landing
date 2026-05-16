const HORIZONS = [
  {
    label: 'Near-term',
    title: 'Make it easy to adopt.',
    items: [
      'Python and TypeScript SDKs with first-class policy decorators',
      'Webhooks for verdicts, escalations, and audit-log events',
      'Vertical templates: roofing, HVAC, professional services',
    ],
  },
  {
    label: 'Medium-term',
    title: 'Make the audit trail unimpeachable.',
    items: [
      'Tamper-evident audit log with hash-chained entries',
      'Compliance exports (SOC 2 evidence, EU AI Act records)',
      'Policy simulation: replay historical traffic against new rules',
    ],
  },
  {
    label: 'Longer-term',
    title: 'Make it the default layer.',
    items: [
      'Self-hosted enterprise distribution',
      'Native integrations: LangGraph, CrewAI, Anthropic Agent SDK',
      'Federated learning for cross-fleet injection signatures',
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="section-pad section-rule">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Roadmap</span>
          <h2>Where this goes next.</h2>
          <p className="sub">The v0.1 surface is intentionally small. Each horizon below has a working spike behind it; ship dates depend on which design partner signs first.</p>
        </div>
        <div className="roadmap-grid">
          {HORIZONS.map((h) => (
            <div key={h.label} className="roadmap-col">
              <div className="horizon"><span className="bar" /> {h.label}</div>
              <h3>{h.title}</h3>
              <ul>
                {h.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
