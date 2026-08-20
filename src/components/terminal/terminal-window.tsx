import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  path?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title, path, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <span className="terminal-led" aria-hidden="true" />
        <span>{title}</span>
        {path ? <span className="terminal-path">{path}</span> : null}
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
}
