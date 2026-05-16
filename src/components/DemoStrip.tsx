type Verdict = 'allow' | 'escalate' | 'block';

const DEMO_URL = 'https://demo.agentmarshal.dev';

type Scenario = {
  id: string;
  verdict: Verdict;
  agent: string;
  amount: string;
  declared: string;
  detected: string;
  ltNote: string;
  copy: string;
  meta: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: 'allow',
    verdict: 'allow',
    agent: 'dispatch-01',
    amount: '$1,840.00',
    declared: 'Issue supplier invoice · ABC Supply · roof-crew scope',
    detected: 'Issue supplier invoice · ABC Supply · roof-crew scope',
    ltNote: 'no anomalies · standard vendor · within envelope',
    copy: 'Routine supplier invoice. Declared intent and detected intent match. Vendor is on the approved list, dollar amount is under the per-call ceiling. Cleared without human review.',
    meta: 'SCENARIO 01 · ROUTINE',
  },
  {
    id: 'escalate',
    verdict: 'escalate',
    agent: 'estimator-02',
    amount: '$8,420.00',
    declared: 'Draft quote at standard margin floor (18%)',
    detected: 'Draft quote at margin 11% · 4837 N 32nd St',
    ltNote: 'margin floor breach · price below typical for 18-square asphalt',
    copy: 'Margin breach below the 18% floor. Policy engine pauses the quote and escalates with full context to the reviewer queue. Nothing reaches the customer until a human signs off.',
    meta: 'SCENARIO 02 · MARGIN BREACH',
  },
  {
    id: 'block',
    verdict: 'block',
    agent: 'finance-01',
    amount: '$24,500.00',
    declared: 'Process supplier invoice for ABC Supply',
    detected: 'Wire transfer to new beneficiary · "urgent · vendor change"',
    ltNote: 'BEC pattern · unknown bank routing · urgency framing',
    copy: 'Classic business-email-compromise attempt. Declared intent says invoice. Detected intent is a wire to a beneficiary that has never appeared in this fleet. Blocked at the policy layer; surfaced as an incident.',
    meta: 'SCENARIO 03 · BEC ATTACK',
  },
];

const VerdictPill = ({ v }: { v: Verdict }) => {
  const cls = v === 'allow' ? 'pill-allow' : v === 'escalate' ? 'pill-escalate' : 'pill-block';
  const label = v === 'allow' ? 'ALLOW' : v === 'escalate' ? 'ESCALATE' : 'BLOCK';
  return <span className={'pill ' + cls}><span className="pdot" />{label}</span>;
};

function MiniDashboard({ s }: { s: Scenario }) {
  const verdictColor =
    s.verdict === 'allow' ? 'var(--allow)' : s.verdict === 'escalate' ? 'var(--escalate)' : 'var(--block)';
  return (
    <div style={{ padding: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>{s.agent}</span>
        <VerdictPill v={s.verdict} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 7, background: 'rgba(255,255,255,0.012)' }}>
          <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-5)', letterSpacing: '0.14em', marginBottom: 4 }}>DECLARED INTENT</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>{s.declared}</div>
        </div>
        <div
          style={{
            padding: '10px 12px',
            border: `1px solid ${verdictColor}55`,
            borderRadius: 7,
            background: s.verdict === 'allow' ? 'rgba(16,185,129,0.04)' : s.verdict === 'escalate' ? 'rgba(245,158,11,0.04)' : 'rgba(239,68,68,0.04)',
          }}
        >
          <div className="mono" style={{ fontSize: 9.5, color: verdictColor, letterSpacing: '0.14em', marginBottom: 4 }}>DETECTED INTENT</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>{s.detected}</div>
        </div>
      </div>

      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed var(--line)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <span className="mono" style={{ fontSize: 9.5, color: 'var(--veea)', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>LT ▸</span>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', lineHeight: 1.45 }}>{s.ltNote}</span>
      </div>
    </div>
  );
}

export default function DemoStrip() {
  return (
    <section className="section-pad section-rule">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Live in the demo</span>
          <h2>Three scenarios you can run yourself.</h2>
          <p className="sub">Each card maps to a real path in the live demo. Click through to see the audit log entry, the full policy reasoning, and the captured Lobster Trap inspection.</p>
        </div>
        <div className="grid-3-demo">
          {SCENARIOS.map((s) => (
            <a key={s.id} className="demo-card" href={DEMO_URL} target="_blank" rel="noreferrer noopener">
              <div className="demo-shot">
                <MiniDashboard s={s} />
              </div>
              <div className="demo-body">
                <div className="demo-meta">
                  <span>{s.meta}</span>
                  <span className="demo-dollar">{s.amount}</span>
                </div>
                <p className="demo-copy">{s.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
