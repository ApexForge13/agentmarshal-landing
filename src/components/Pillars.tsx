import { useEffect, useState } from 'react';
import { IconGithub, IconStar, IconExternal } from './Icons';

const GITHUB_URL = 'https://github.com/ApexForge13/agentmarshal';
const GITHUB_API = 'https://api.github.com/repos/ApexForge13/agentmarshal';
const LT_URL = 'https://github.com/coal/lobstertrap';
const VEEA_URL = 'https://veea.com';

export default function Pillars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(GITHUB_API, { headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => { /* silently omit */ });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="section-pad section-rule" id="open-source">
      <div className="wrap">
        <div className="grid-2">
          <article className="pillar veea">
            <div className="label">Built on</div>
            <h3>Veea&rsquo;s Lobster Trap.</h3>
            <p>
              Lobster Trap is the inspection runtime — the layer that sees every tool call before it touches the world. AgentMarshal sits on top of it, turning raw inspection signal into policy verdicts that operators can actually act on. Without LT, this layer has nothing to grade.
            </p>
            <div className="pillar-foot">
              <a href={VEEA_URL} target="_blank" rel="noreferrer noopener">veea.com <IconExternal size={11} /></a>
              <a href={LT_URL} target="_blank" rel="noreferrer noopener">coal/lobstertrap <IconExternal size={11} /></a>
            </div>
          </article>

          <article className="pillar">
            <div className="label">Open source · MIT</div>
            <h3>Production-grade and yours to fork.</h3>
            <p>
              Every line of the policy engine, audit log, and dashboard is public. Run it locally, embed it in your stack, or extend it for a vertical we haven&rsquo;t scoped yet. Pull requests and design-partner conversations are both open.
            </p>
            <div className="pillar-foot">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                <IconGithub size={14} /> ApexForge13/agentmarshal
              </a>
              {stars !== null && stars >= 10 && (
                <span className="star-badge">
                  <IconStar size={11} className="star" /> {stars.toLocaleString()}
                </span>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
