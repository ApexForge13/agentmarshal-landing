import HeroDiagram from './HeroDiagram';
import { IconArrowRight, IconGithub } from './Icons';

const GITHUB_URL = 'https://github.com/ApexForge13/agentmarshal';
const DEMO_URL = 'https://demo.agentmarshal.dev';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="hero-eyebrow">
              <span className="dot" />
              v0.1.0 · running in production at a Phoenix roofing pilot
            </span>
            <h1>Compliance and governance for autonomous AI agent fleets.</h1>
            <p className="subhead">
              A policy and audit layer that sits on top of <span className="veea">Veea&rsquo;s Lobster Trap</span> inspection runtime — enforcing scope, spend ceilings, and injection defense for agents handling credentials, corporate cards, and customer contracts.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noreferrer noopener">
                Try the Demo <IconArrowRight size={14} />
              </a>
              <a className="btn btn-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                <IconGithub size={15} /> View on GitHub
              </a>
            </div>
            <blockquote className="pullquote">
              &ldquo;Lobster Trap is the inspection floor. AgentMarshal is the policy ceiling.&rdquo;
            </blockquote>
          </div>
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}
