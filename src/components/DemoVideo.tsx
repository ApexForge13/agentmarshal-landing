import { IconPlay } from './Icons';

const VIDEO_URL = 'https://youtu.be/r06KiTgo7-Q';

function toEmbed(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return `https://www.youtube.com/embed/${v}`;
      if (u.pathname.startsWith('/embed/')) return url;
    }
    return url;
  } catch {
    return null;
  }
}

export default function DemoVideo() {
  const embed = toEmbed(VIDEO_URL);
  return (
    <section className="section-pad section-rule" id="demo">
      <div className="wrap">
        <div className="section-head">
          <span className="micro" style={{ display: 'block', marginBottom: 12 }}>Walkthrough</span>
          <h2>Three scenarios. Two minutes.</h2>
          <p className="sub">A routine invoice that clears, a margin breach that escalates, and a BEC pattern that gets blocked — all against the same Phoenix-roofing agent fleet.</p>
        </div>
        <div className="video-frame">
          {embed ? (
            <iframe
              src={embed}
              title="AgentMarshal walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <div className="play"><IconPlay size={22} /></div>
              <span>WALKTHROUGH · PENDING UPLOAD</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
