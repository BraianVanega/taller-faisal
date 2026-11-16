import type { SVGProps } from "react";
import type { IconoServicio } from "@/data/site";

type Props = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: Props & { children: React.ReactNode }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}

export const IconWhatsApp = (p: Props) => <Base {...p}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></Base>;
export const IconPhone = (p: Props) => <Base {...p}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></Base>;
export const IconPin = (p: Props) => <Base {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></Base>;
export const IconClock = (p: Props) => <Base {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Base>;
export const IconCheck = (p: Props) => <Base {...p}><rect x="5" y="4" width="14" height="17" rx="1" /><path d="M9 4V3h6v1M8.5 12.5l2.5 2.5 4.5-5" /></Base>;
export const IconMenu = (p: Props) => <Base {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Base>;
export const IconClose = (p: Props) => <Base {...p}><path d="M6 6l12 12M18 6L6 18" /></Base>;
export const IconInstagram = (p: Props) => <Base {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" /></Base>;
export const IconImage = (p: Props) => <Base {...p}><rect x="3" y="5" width="18" height="14" rx="1" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5-8 8" /></Base>;
export const IconPlay = (p: Props) => <Base {...p}><path d="M8 5l11 7-11 7z" /></Base>;
export const IconMap = (p: Props) => <Base {...p}><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z" /><path d="M9 4v14M15 6v14" /></Base>;
export const IconArrow = (p: Props) => <Base {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Base>;

export function IconStar({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2l-5.9 3.2 1.3-6.5L2.5 9.3l6.6-.8z" />
    </svg>
  );
}

const SERVICIO: Record<IconoServicio, React.ReactNode> = {
  llave: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.3-.4-.4-2.3z" />,
  alineacion: <><circle cx="12" cy="12" r="8" /><path d="M12 2v6M12 16v6M2 12h6M16 12h6" /></>,
  frenos: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M17 5.5l2.5 2.5" /></>,
  escaner: <><rect x="3" y="5" width="18" height="12" rx="1" /><path d="M8 21h8M12 17v4M7 11h2l1.5-3 2 6 1.5-3h3" /></>,
  suspension: <path d="M12 2v3M12 19v3M8 5h8M8 19h8M9 8l6 2-6 2 6 2-6 2" />,
  aceite: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  rulemanes: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="5.5" r="1.2" /><circle cx="18.5" cy="12" r="1.2" /><circle cx="12" cy="18.5" r="1.2" /><circle cx="5.5" cy="12" r="1.2" /></>,
  bateria: <><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M7 7V4.5h3V7M14 7V4.5h3V7M6.5 13.5h4M15.5 11.5v4M13.5 13.5h4" /></>,
  lampara: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />,
  eje: <><path d="M5 12h14" /><rect x="2" y="7" width="3" height="10" rx="1" /><rect x="19" y="7" width="3" height="10" rx="1" /><circle cx="12" cy="12" r="2.5" /></>,
  correa: <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><path d="M6 9h12M6 15h12" /></>,
  embrague: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.5" /><path d="M12 3v6.5M12 14.5V21M3 12h6.5M14.5 12H21" /></>,
};

export function IconServicio({ icono, ...p }: Props & { icono: IconoServicio }) {
  return <Base strokeWidth={1.6} {...p}>{SERVICIO[icono]}</Base>;
}
