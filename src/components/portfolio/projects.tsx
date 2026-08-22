import { SectionShell } from "@/components/layout/section-shell";
import { ProjectExplorer } from "./project-explorer";

export function Projects() {
  return (
    <SectionShell id="projects" index="[]" eyebrow="find ./projects -type featured" title="Featured projects" description="Selected systems across full-stack web and native mobile development. Filter by category or core technology.">
      <ProjectExplorer />
    </SectionShell>
  );
}
