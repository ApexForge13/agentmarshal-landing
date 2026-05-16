type Verdict = 'allow' | 'escalate' | 'block';

type Row = {
  time: string;
  agent: string;
  verdict: Verdict;
  msg: string;
};

const ROWS: Row[] = [
  { time: '14:42:11', agent: 'voice_scheduling', verdict: 'allow',    msg: 'Booked appointment · Hendricks · Thu 2:00pm' },
  { time: '14:18:36', agent: 'quoting',          verdict: 'allow',    msg: 'Sent $7,650 quote to Olsen residence · 44% margin' },
  { time: '13:54:09', agent: 'quoting',          verdict: 'escalate', msg: '$11,200 quote · below_margin_floor · awaiting review' },
  { time: '13:31:22', agent: 'comms',            verdict: 'block',    msg: 'Vendor payment redirect · prompt_injection_detected' },
  { time: '13:07:54', agent: 'claims',           verdict: 'allow',    msg: 'Replied to adjuster Mitchell · State Farm 2024-0987' },
  { time: '12:39:18', agent: 'follow_up',        verdict: 'allow',    msg: 'Re-engaged 3 cold leads · seasonal-check template' },
];

const VerdictPill = ({ v }: { v: Verdict }) => {
  if (v === 'allow') return (
    <span className="pill pill-allow"><span className="pdot" />ALLOW</span>
  );
  if (v === 'escalate') return (
    <span className="pill pill-escalate"><span className="pdot" />ESC</span>
  );
  return (
    <span className="pill pill-block"><span className="pdot" />BLOCK</span>
  );
};

export default function HeroDiagram() {
  return (
    <div className="hero-card" role="img" aria-label="Live activity feed of agent decisions">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--allow)', boxShadow: '0 0 6px rgba(16,185,129,0.6)' }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--ink-3)' }}>LIVE · POLICY DECISIONS</span>
        </div>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-5)', letterSpacing: '0.08em' }}>llama3.2:1b</span>
      </div>
      {ROWS.map((r, i) => (
        <div key={i} className="hc-row">
          <span className="hc-time">{r.time}</span>
          <span className="hc-agent">{r.agent}</span>
          <VerdictPill v={r.verdict} />
          <span className="hc-msg">{r.msg}</span>
        </div>
      ))}
    </div>
  );
}
