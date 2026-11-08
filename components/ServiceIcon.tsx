interface ServiceIconProps {
  name: string;
  className?: string;
}

/** SVG icons per service — keeps bundle small vs icon libraries */
export default function ServiceIcon({ name, className = 'h-6 w-6' }: ServiceIconProps) {
  const props = { className, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' };

  switch (name) {
    case 'target':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="4.5" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="1" strokeWidth={1.5} />
        </svg>
      );
    case 'cart':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 3h2l2.2 11.2a1.5 1.5 0 001.5 1.2h8.6a1.5 1.5 0 001.5-1.2L20 7H5.4" />
          <circle cx="9.5" cy="19.5" r="1.4" strokeWidth={1.5} />
          <circle cx="17" cy="19.5" r="1.4" strokeWidth={1.5} />
        </svg>
      );
    case 'window':
      return (
        <svg {...props}>
          <rect x="3" y="4.5" width="18" height="15" rx="2.5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
        </svg>
      );
    case 'code':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 16.5 4 12l4.5-4.5M15.5 7.5 20 12l-4.5 4.5M13.5 4.5l-3 15" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.5 11.5c0 4-3.8 7.2-8.5 7.2a9.6 9.6 0 01-2.9-.44L4 20l1.3-3.5A6.9 6.9 0 013.5 11.5c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2z" />
          <path strokeLinecap="round" strokeWidth={1.5} d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.5 11.7a8.4 8.4 0 01-12.4 7.4L3.5 20.5l1.5-4.4A8.4 8.4 0 1120.5 11.7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.2 8.6c.3 0 .5.2.6.4l.7 1.5c.1.2 0 .4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.1.4-.2.6-.1l1.5.7c.2.1.4.3.4.6 0 1-.8 1.7-1.8 1.7a6.9 6.9 0 01-6-6c0-1 .7-1.8 1.7-1.8z" />
        </svg>
      );
    case 'voice':
      return (
        <svg {...props}>
          <rect x="9" y="3" width="6" height="11" rx="3" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" />
        </svg>
      );
    case 'link':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 13.5a3.5 3.5 0 005.1.3l2.6-2.6a3.6 3.6 0 00-5.1-5.1l-1.4 1.4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10.5a3.5 3.5 0 00-5.1-.3l-2.6 2.6a3.6 3.6 0 005.1 5.1l1.4-1.4" />
        </svg>
      );
    case 'database':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      );
    case 'workflow':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'invoice':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'route':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18a2 2 0 100-4 2 2 0 000 4zm0 0v-6a4 4 0 014-4h4m0 0a2 2 0 104 0 2 2 0 00-4 0zm4 4v2a4 4 0 01-4 4h-1" />
        </svg>
      );
    case 'brain':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}
