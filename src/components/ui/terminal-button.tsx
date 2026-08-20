import type { AnchorHTMLAttributes, ReactNode } from "react";

interface TerminalButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function TerminalButton({ children, variant = "secondary", className = "", ...props }: TerminalButtonProps) {
  return (
    <a className={`terminal-button terminal-button--${variant} ${className}`} {...props}>
      {children}
    </a>
  );
}
