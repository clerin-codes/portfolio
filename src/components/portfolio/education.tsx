import { Award, MapPin } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { SectionShell } from "@/components/layout/section-shell";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function Education() {
  return (
    <SectionShell id="education" index="04" eyebrow="git log --education --certifications" title="Education + certifications">
      <div className="education-grid">
        <TerminalWindow title="education.log" path="~/records/academic">
          <ol className="timeline">
            {education.map((item, index) => (
              <li key={item.institution}>
                <span className="timeline-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <time>{item.dates}</time>
                  <h3>{item.institution}</h3>
                  <p>{item.qualification}</p>
                  <span className="timeline-location"><MapPin size={14} aria-hidden="true" /> {item.location}</span>
                </div>
              </li>
            ))}
          </ol>
        </TerminalWindow>
        <TerminalWindow title="certificates.json" path="~/records/verified">
          <ul className="certification-list">
            {certifications.map((certification, index) => (
              <li key={certification.name}>
                <Award aria-hidden="true" />
                <span><span className="cert-index">CERT_{String(index + 1).padStart(2, "0")}</span><strong>{certification.name}</strong><small>ISSUER: {certification.issuer}</small></span>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
    </SectionShell>
  );
}
