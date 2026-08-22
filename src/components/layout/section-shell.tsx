import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionShell({ id, index, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell" aria-labelledby={`${id}-heading`}>
      <div className="section-heading">
        <div className="section-index" aria-hidden="true">{index}</div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-heading`}>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
