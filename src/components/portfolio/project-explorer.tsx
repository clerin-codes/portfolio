"use client";

import { useMemo, useState } from "react";
import { Code2, GitFork, LockKeyhole } from "lucide-react";
import { projectFilters, projects } from "@/data/portfolio";
import { ExternalLink } from "@/components/ui/external-link";

export function ProjectExplorer() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) =>
      project.category.toLowerCase() === filter || project.stack.some((technology) => technology.toLowerCase() === filter),
    );
  }, [filter]);

  return (
    <>
      <div className="project-toolbar">
        <p id="project-filter-label">filter --by</p>
        <div className="project-filters" role="group" aria-labelledby="project-filter-label">
          {projectFilters.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              [ {item.label} ]
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">{String(filteredProjects.length).padStart(2, "0")} RESULT{filteredProjects.length === 1 ? "" : "S"}</p>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article key={project.slug} className="project-card">
            <div className="project-card-bar">
              <span className="terminal-led" aria-hidden="true" />
              <span>PID {String(index + 420).padStart(4, "0")}</span>
              <span>{project.category.toUpperCase()}_APP</span>
            </div>
            <div className="project-card-body">
              <div className="project-meta">
                <span>./projects/{project.slug}</span>
                <time>{project.dates}</time>
              </div>
              <h3>{project.name}</h3>
              <p className="project-type">{project.type}</p>
              <div className="project-detail">
                <h4><span aria-hidden="true">01.</span> Problem</h4>
                <p>{project.problem}</p>
              </div>
              <div className="project-detail">
                <h4><span aria-hidden="true">02.</span> Solution</h4>
                <p>{project.solution}</p>
              </div>
              <div className="project-detail">
                <h4><span aria-hidden="true">03.</span> Main features</h4>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
              <div className="stack-list" aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
            <footer className="project-card-footer">
              {project.repository ? (
                <ExternalLink href={project.repository} aria-label={`View ${project.name} source code on GitHub`}>
                  <GitFork size={15} strokeWidth={1.75} aria-hidden="true" /> [ VIEW_SOURCE ]
                </ExternalLink>
              ) : (
                <span className="source-unavailable" title="No exact public repository was verified">
                  <LockKeyhole size={15} strokeWidth={1.75} aria-hidden="true" /> [ SOURCE_UNAVAILABLE ]
                </span>
              )}
              <span className="project-state"><Code2 size={15} aria-hidden="true" /> CASE_STUDY</span>
            </footer>
          </article>
        ))}
      </div>
    </>
  );
}
