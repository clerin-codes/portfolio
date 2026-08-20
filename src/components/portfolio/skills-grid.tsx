import { skillGroups } from "@/data/portfolio";
import { SectionShell } from "@/components/layout/section-shell";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function SkillsGrid() {
  return (
    <SectionShell id="skills" index="02" eyebrow="tree ./skills --depth=2" title="Technical skills" description="Technologies grouped by the work they support—without arbitrary proficiency scores.">
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <TerminalWindow key={group.title} title={`proc_${String(index + 1).padStart(2, "0")}`} path={`~/skills/${group.title.toLowerCase().replaceAll(" ", "-")}`}>
            <p className="skill-command"><span>$</span> {group.command}</p>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => <li key={skill}><span aria-hidden="true">›</span>{skill}</li>)}
            </ul>
          </TerminalWindow>
        ))}
      </div>
    </SectionShell>
  );
}
