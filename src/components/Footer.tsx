const GITHUB_URL = 'https://github.com/ApexForge13/agentmarshal';
const DOCS_URL = 'https://github.com/ApexForge13/agentmarshal#readme';
const LICENSE_URL = 'https://github.com/ApexForge13/agentmarshal/blob/main/LICENSE';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <a className="brand" href="#top">
            <span className="brand-mark">M</span>
            <span>AgentMarshal</span>
          </a>
          <div className="foot-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">GitHub</a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer noopener">Docs</a>
            <a href={LICENSE_URL} target="_blank" rel="noreferrer noopener">License</a>
          </div>
          <div className="foot-right">© {year} AgentMarshal</div>
        </div>
        <div className="foot-sub">Built for TechEx 2026 · Veea Track.</div>
      </div>
    </footer>
  );
}
