const T_MONO = { fontFamily: 'var(--mono)' };
const T_SERIF = { fontFamily: 'var(--serif)' };
const T_SANS = { fontFamily: 'var(--sans)' };

function ArchSvg() {
  return (
    <svg
      viewBox="0 0 940 380"
      width="100%"
      role="img"
      aria-label="Tool-call flow: Agent through Lobster Trap inspection into the AgentMarshal policy engine, branching to ALLOW, ESCALATE, or DENY verdicts, with every outcome written to the SQLite audit log."
    >
      <defs>
        <marker id="am-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" style={{ fill: 'var(--ink-4)' }} />
        </marker>
        <marker id="am-arrow-allow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" style={{ fill: 'var(--allow)', opacity: 0.85 }} />
        </marker>
        <marker id="am-arrow-esc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" style={{ fill: 'var(--escalate)', opacity: 0.85 }} />
        </marker>
        <marker id="am-arrow-block" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" style={{ fill: 'var(--block)', opacity: 0.85 }} />
        </marker>
      </defs>

      {/* Agent */}
      <g>
        <rect x="20" y="158" width="120" height="64" rx="8" style={{ fill: 'var(--bg-2)', stroke: 'var(--line-2)', strokeWidth: 1 }} />
        <text x="80" y="184" textAnchor="middle" fontSize="10" letterSpacing="0.16em" style={{ ...T_MONO, fill: 'var(--ink-4)' }}>AGENT</text>
        <text x="80" y="204" textAnchor="middle" fontSize="12" style={{ ...T_MONO, fill: 'var(--ink-1)' }}>dispatch-01</text>
      </g>

      {/* Agent → LT */}
      <line x1="140" y1="190" x2="200" y2="190" style={{ stroke: 'var(--ink-4)', strokeWidth: 1.2 }} markerEnd="url(#am-arrow)" />
      <text x="170" y="180" textAnchor="middle" fontSize="9.5" letterSpacing="0.08em" style={{ ...T_MONO, fill: 'var(--ink-5)' }}>tool-call</text>

      {/* Lobster Trap */}
      <g>
        <rect x="206" y="148" width="148" height="84" rx="9" style={{ fill: 'rgba(249,115,22,0.05)', stroke: 'rgba(249,115,22,0.55)', strokeWidth: 1 }} />
        <text x="280" y="172" textAnchor="middle" fontSize="10" letterSpacing="0.16em" style={{ ...T_MONO, fill: 'var(--veea)' }}>VEEA · LT</text>
        <text x="280" y="195" textAnchor="middle" fontSize="14" style={{ ...T_SERIF, fill: 'var(--ink-1)' }}>Lobster Trap</text>
        <text x="280" y="214" textAnchor="middle" fontSize="11" style={{ ...T_SANS, fill: 'var(--ink-3)' }}>inspection runtime</text>
      </g>

      {/* LT → Policy */}
      <line x1="354" y1="190" x2="400" y2="190" style={{ stroke: 'var(--ink-4)', strokeWidth: 1.2 }} markerEnd="url(#am-arrow)" />

      {/* Policy Engine */}
      <g>
        <rect x="406" y="120" width="200" height="140" rx="10" style={{ fill: 'var(--bg-2)', stroke: 'var(--line-2)', strokeWidth: 1 }} />
        <text x="506" y="148" textAnchor="middle" fontSize="10" letterSpacing="0.16em" style={{ ...T_MONO, fill: 'var(--ink-3)' }}>AGENTMARSHAL</text>
        <text x="506" y="174" textAnchor="middle" fontSize="17" style={{ ...T_SERIF, fill: 'var(--ink-1)' }}>Policy engine</text>
        <line x1="432" y1="192" x2="580" y2="192" style={{ stroke: 'var(--line)' }} />
        <text x="506" y="214" textAnchor="middle" fontSize="10.5" letterSpacing="0.08em" style={{ ...T_MONO, fill: 'var(--ink-4)' }}>role · spend · intent</text>
        <text x="506" y="234" textAnchor="middle" fontSize="10.5" letterSpacing="0.08em" style={{ ...T_MONO, fill: 'var(--ink-4)' }}>→ verdict + reason</text>
      </g>

      {/* Verdict branches from (606, 190) → verdict pills */}
      <path d="M 606 190 C 636 190, 636 70, 666 70" style={{ stroke: 'var(--allow)', strokeWidth: 1.4, fill: 'none', opacity: 0.75 }} markerEnd="url(#am-arrow-allow)" />
      <path d="M 606 190 L 666 190" style={{ stroke: 'var(--escalate)', strokeWidth: 1.4, opacity: 0.75 }} markerEnd="url(#am-arrow-esc)" />
      <path d="M 606 190 C 636 190, 636 310, 666 310" style={{ stroke: 'var(--block)', strokeWidth: 1.4, fill: 'none', opacity: 0.75 }} markerEnd="url(#am-arrow-block)" />

      {/* ALLOW */}
      <g>
        <rect x="672" y="48" width="120" height="44" rx="6" style={{ fill: 'rgba(16,185,129,0.06)', stroke: 'rgba(16,185,129,0.5)', strokeWidth: 1 }} />
        <circle cx="688" cy="70" r="3.5" style={{ fill: 'var(--allow)' }} />
        <text x="702" y="74" fontSize="11" letterSpacing="0.14em" fontWeight="600" style={{ ...T_MONO, fill: 'var(--allow)' }}>ALLOW</text>
      </g>

      {/* ESCALATE */}
      <g>
        <rect x="672" y="168" width="120" height="44" rx="6" style={{ fill: 'rgba(245,158,11,0.06)', stroke: 'rgba(245,158,11,0.5)', strokeWidth: 1 }} />
        <circle cx="688" cy="190" r="3.5" style={{ fill: 'var(--escalate)' }} />
        <text x="702" y="194" fontSize="11" letterSpacing="0.14em" fontWeight="600" style={{ ...T_MONO, fill: 'var(--escalate)' }}>ESCALATE</text>
      </g>

      {/* DENY */}
      <g>
        <rect x="672" y="288" width="120" height="44" rx="6" style={{ fill: 'rgba(239,68,68,0.06)', stroke: 'rgba(239,68,68,0.5)', strokeWidth: 1 }} />
        <circle cx="688" cy="310" r="3.5" style={{ fill: 'var(--block)' }} />
        <text x="702" y="314" fontSize="11" letterSpacing="0.14em" fontWeight="600" style={{ ...T_MONO, fill: 'var(--block)' }}>DENY</text>
      </g>

      {/* Verdicts → Audit log converging at (820, 190) */}
      <path d="M 792 70 C 810 70, 810 190, 820 190" style={{ stroke: 'var(--ink-5)', strokeWidth: 1, fill: 'none', opacity: 0.7 }} />
      <path d="M 792 190 L 820 190" style={{ stroke: 'var(--ink-5)', strokeWidth: 1, opacity: 0.7 }} />
      <path d="M 792 310 C 810 310, 810 190, 820 190" style={{ stroke: 'var(--ink-5)', strokeWidth: 1, fill: 'none', opacity: 0.7 }} />

      {/* Audit Log */}
      <g>
        <rect x="820" y="148" width="104" height="84" rx="9" style={{ fill: 'var(--bg-2)', stroke: 'var(--line-2)', strokeWidth: 1 }} />
        <text x="872" y="172" textAnchor="middle" fontSize="10" letterSpacing="0.16em" style={{ ...T_MONO, fill: 'var(--ink-4)' }}>SQLite</text>
        <text x="872" y="195" textAnchor="middle" fontSize="13" style={{ ...T_SERIF, fill: 'var(--ink-1)' }}>Audit log</text>
        <text x="872" y="214" textAnchor="middle" fontSize="10.5" style={{ ...T_MONO, fill: 'var(--ink-4)' }} letterSpacing="0.06em">append-only</text>
      </g>
    </svg>
  );
}

export default function Architecture() {
  return (
    <section className="section-pad section-rule" id="architecture">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Defense in depth</span>
          <h2>How a tool call survives the gauntlet.</h2>
          <p className="sub">Lobster Trap inspects the call before it touches the world. AgentMarshal grades the inspection against policy. Every verdict — allow, escalate, or deny — is written to an append-only audit log.</p>
        </div>
        <div className="arch-wrap">
          <div className="arch">
            <span className="corner-tick ct-tl">FLOW · TOOL-CALL</span>
            <span className="corner-tick ct-tr">v0.1.0</span>
            <span className="corner-tick ct-bl">→ persisted</span>
            <ArchSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
