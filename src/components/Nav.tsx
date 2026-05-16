import { useEffect, useState } from 'react';
import { IconArrowRight, IconGithub } from './Icons';

const GITHUB_URL = 'https://github.com/ApexForge13/agentmarshal';
const DEMO_URL = 'https://demo.agentmarshal.dev';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">M</span>
          <span>AgentMarshal</span>
        </a>
        <div className="nav-right">
          <a className="nav-link" href="#architecture">Architecture</a>
          <a className="nav-link" href="#demo">Demo</a>
          <a className="nav-link" href="#open-source">Open source</a>
          <a className="gh-link" href={GITHUB_URL} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <IconGithub size={17} />
          </a>
          <a className="nav-cta" href={DEMO_URL} target="_blank" rel="noreferrer noopener">
            Live Demo <IconArrowRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
