/**
 * Decorative, brand-matched SVG scene per service — sits softly in the
 * corner of a service card to add visual interest without stock imagery.
 * Self-contained (inline gradients + CSS animation utilities), no assets.
 */
interface ServiceVisualProps {
  name: string;
  className?: string;
}

export default function ServiceVisual({ name, className = '' }: ServiceVisualProps) {
  const common = {
    viewBox: '0 0 220 140',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    'aria-hidden': true,
  } as const;

  switch (name) {
    // ─── Business Websites — globe + orbiting nodes ───
    case 'globe':
    case 'website-development':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sv-globe" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#9BA2EC" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <g stroke="url(#sv-globe)" strokeWidth="1.5">
            <circle cx="150" cy="70" r="44" />
            <ellipse cx="150" cy="70" rx="19" ry="44" />
            <ellipse cx="150" cy="70" rx="44" ry="19" />
            <line x1="106" y1="70" x2="194" y2="70" />
            <circle cx="150" cy="70" r="60" strokeDasharray="2 7" opacity="0.5" />
          </g>
          <g fill="url(#sv-globe)">
            <circle cx="150" cy="10" r="3.5" className="animate-node" />
            <circle cx="210" cy="70" r="3.5" className="animate-node" style={{ animationDelay: '-0.8s' }} />
            <circle cx="150" cy="130" r="3.5" className="animate-node" style={{ animationDelay: '-1.6s' }} />
          </g>
        </svg>
      );

    // ─── Mobile Apps — stacked phone frames with floating UI ───
    case 'mobile':
    case 'mobile-apps':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sv-mobile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#9BA2EC" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          <g stroke="url(#sv-mobile)" strokeWidth="1.5">
            <rect x="112" y="30" width="48" height="92" rx="9" opacity="0.5" transform="rotate(-8 136 76)" />
            <rect x="150" y="24" width="50" height="96" rx="9" />
            <line x1="167" y1="32" x2="183" y2="32" strokeLinecap="round" />
          </g>
          <g stroke="url(#sv-mobile)" strokeWidth="1.5" opacity="0.85">
            <rect x="158" y="44" width="34" height="18" rx="4" />
            <line x1="158" y1="74" x2="192" y2="74" strokeLinecap="round" />
            <line x1="158" y1="84" x2="184" y2="84" strokeLinecap="round" />
            <line x1="158" y1="94" x2="188" y2="94" strokeLinecap="round" />
          </g>
          <circle cx="175" cy="112" r="2.5" fill="url(#sv-mobile)" className="animate-node" />
        </svg>
      );

    // ─── WhatsApp & Workflow Automation — nodes + flowing wires ───
    case 'workflow':
    case 'workflow-automation':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sv-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <g stroke="url(#sv-flow)" strokeWidth="1.5" fill="none">
            <path d="M96 34 C 130 34, 128 70, 162 70" className="animate-dash" />
            <path d="M96 106 C 130 106, 128 70, 162 70" className="animate-dash" style={{ animationDelay: '-0.5s' }} />
          </g>
          <g stroke="url(#sv-flow)" strokeWidth="1.5" fill="#0c0c11">
            <rect x="70" y="22" width="30" height="24" rx="6" />
            <rect x="70" y="94" width="30" height="24" rx="6" />
            <rect x="160" y="56" width="34" height="28" rx="7" />
          </g>
          <g fill="url(#sv-flow)">
            <circle cx="85" cy="34" r="3" className="animate-node" />
            <circle cx="85" cy="106" r="3" className="animate-node" style={{ animationDelay: '-1.3s' }} />
            <circle cx="177" cy="70" r="3.5" className="animate-node" style={{ animationDelay: '-0.7s' }} />
          </g>
        </svg>
      );

    // ─── AI Tools & Chatbots — neural constellation ───
    case 'ai':
    case 'brain':
    case 'custom-ai':
    default:
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="sv-ai" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#818cf8" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <g stroke="url(#sv-ai)" strokeWidth="1.2" opacity="0.7">
            <line x1="120" y1="40" x2="160" y2="26" />
            <line x1="120" y1="40" x2="150" y2="76" />
            <line x1="160" y1="26" x2="196" y2="54" />
            <line x1="150" y1="76" x2="196" y2="54" />
            <line x1="150" y1="76" x2="168" y2="112" />
            <line x1="196" y1="54" x2="168" y2="112" />
          </g>
          <g fill="url(#sv-ai)">
            <circle cx="120" cy="40" r="4" className="animate-node" />
            <circle cx="160" cy="26" r="4" className="animate-node" style={{ animationDelay: '-0.6s' }} />
            <circle cx="196" cy="54" r="4.5" className="animate-node" style={{ animationDelay: '-1.2s' }} />
            <circle cx="150" cy="76" r="4" className="animate-node" style={{ animationDelay: '-1.8s' }} />
            <circle cx="168" cy="112" r="3.5" className="animate-node" style={{ animationDelay: '-2.2s' }} />
          </g>
        </svg>
      );
  }
}
