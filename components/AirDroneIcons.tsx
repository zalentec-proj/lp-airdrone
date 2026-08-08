import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconFrame({ children, ...props }: IconProps) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export function BudgetIcon(props: IconProps) {
  return <IconFrame {...props}><circle cx="12" cy="12" r="8.5" /><path d="M14.7 9.6c-.6-.5-1.45-.8-2.55-.8-1.35 0-2.4.62-2.4 1.7 0 2.55 5.05 1.16 5.05 4.08 0 1.16-1.04 1.91-2.66 1.91-1.12 0-2.18-.35-2.9-.93M12 7.45v9.12" /></IconFrame>;
}

export function FreightIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M3.2 6.8h10v10.1h-10zM13.2 10h3.7l2 2.4v4.5h-5.7z" /><circle cx="7" cy="17.1" r="1.6" /><circle cx="16.5" cy="17.1" r="1.6" /><path d="M15.2 13.2h3.4" /></IconFrame>;
}

export function WarrantyIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M12 3.4 19 6v5.1c0 4.46-2.95 7.64-7 9.45-4.05-1.81-7-4.99-7-9.45V6z" /><path d="m8.6 12 2.1 2.1 4.65-4.65" /></IconFrame>;
}

export function BrazilIcon(props: IconProps) {
  return <IconFrame {...props}><path d="m8.4 3.6 3.56.7 2.43 1.76 3.1-.16 1.61 2.2-1.05 2.02 2.22 1.94-.74 2.75-1.95 1.67-.81 2.7-2.24 1.46-2.13-.82-2.03 1.13-1.83-2.64-1.58-1.2.43-2.54-1.52-2.24.8-2.5L5.3 7.54z" /><circle cx="12.5" cy="13" r="1.15" fill="currentColor" stroke="none" /></IconFrame>;
}

export function ContactIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M4 5.2c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8v9.1c0 1-.8 1.8-1.8 1.8h-6.1l-3.6 3v-3H5.8c-1 0-1.8-.8-1.8-1.8z" /><path d="M8 9.7h.01M12 9.7h.01M16 9.7h.01" strokeWidth="2.4" /></IconFrame>;
}

export function ShippingIcon(props: IconProps) {
  return <IconFrame {...props}><path d="m4 8.1 8-4.1 8 4.1v8L12 20l-8-3.9z" /><path d="M4 8.1 12 12l8-3.9M12 12v8" /><path d="m8.3 6 7.9 4" /></IconFrame>;
}

export function RepairIcon(props: IconProps) {
  return <IconFrame {...props}><path d="m14.9 5.1 4 4M5 18.9 18.9 5M6.6 5.3a3.35 3.35 0 0 0 4.16 4.16L5.1 15.1a2.8 2.8 0 1 0 3.96 3.96l5.67-5.67a3.35 3.35 0 0 0 4.1-4.22l-2.28 2.29-2.5-.45-.45-2.5z" /></IconFrame>;
}

export function ApprovalIcon(props: IconProps) {
  return <IconFrame {...props}><rect x="6.2" y="4.5" width="10.3" height="15.3" rx="1.6" /><path d="M9.2 4.5v-1a2.8 2.8 0 0 1 5.6 0v1M9 10h4.7M9 13.2h3.2" /><circle cx="17.5" cy="16.5" r="3.4" fill="white" /><path d="m16 16.5 1 1 2-2.2" /></IconFrame>;
}

export function DroneReturnIcon(props: IconProps) {
  return <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><g transform="translate(-4 -4) scale(1.17)"><path d="M7 13h9M32 13h9M11.5 10v6M36.5 10v6" /><path d="M5 10h13M30 10h13" /><path d="m16 15 6 7h4l6-7M32 15l-4 7h-6" /><path d="M19 22h10l2.4 7.1H16.6z" /><path d="M18.5 29.1 16 39M29.5 29.1 32 39M13.5 39h5M29.5 39h5" /><rect x="20" y="27" width="8" height="6" rx="1.1" /><circle cx="24" cy="30" r="1.25" /><path d="M22 22v-3M26 22v-3" /></g></svg>;
}

export function ExperienceIcon(props: IconProps) {
  return <IconFrame {...props}><path d="m12 3.5 2.06 4.2 4.64.67-3.35 3.27.79 4.61L12 14.08l-4.14 2.17.8-4.61-3.36-3.27 4.65-.67z" /><path d="M7.1 17.8 6 20.5l3.22-.88L12 21l2.78-1.38 3.22.88-1.1-2.7" /></IconFrame>;
}

export function LocationIcon(props: IconProps) {
  return <IconFrame {...props}><path d="M19.4 10.4c0 4.25-4.9 8.77-7.4 10.6-2.5-1.83-7.4-6.35-7.4-10.6a7.4 7.4 0 1 1 14.8 0Z" /><circle cx="12" cy="10.3" r="2.15" /></IconFrame>;
}

export function TechnicalIcon(props: IconProps) {
  return <IconFrame {...props}><circle cx="12" cy="12" r="2.2" /><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2.15 2.15M15.85 15.85 18 18M18 6l-2.15 2.15M8.15 15.85 6 18" /></IconFrame>;
}
