import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function ExternalLink({ children, className = "", ...props }: ExternalLinkProps) {
  return (
    <a className={`external-link ${className}`} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ExternalLinkIcon size={14} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
