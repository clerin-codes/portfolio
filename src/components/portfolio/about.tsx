import Image from "next/image";
import { Braces, Languages, MapPinned, Users } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionShell } from "@/components/layout/section-shell";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export function About() {
  return (
    <SectionShell id="about" index="<>" eyebrow="cat ./profile.md" title="About" description="A developer profile built around practical problem solving, collaborative delivery, and continuous learning.">
      <div className="about-grid">
        <TerminalWindow title="profile.md" path="~/about/identity">
          <div className="about-copy">
            <p>{profile.summary}</p>
            <p>{profile.community}</p>
          </div>
          <dl className="about-facts">
            <div><dt><MapPinned aria-hidden="true" /> BASE</dt><dd>{profile.location}</dd></div>
            <div><dt><Languages aria-hidden="true" /> LANG</dt><dd>{profile.languages.join(" / ")}</dd></div>
            <div><dt><Users aria-hidden="true" /> MODE</dt><dd>Collaborative / Agile</dd></div>
            <div><dt><Braces aria-hidden="true" /> FOCUS</dt><dd>Web / Mobile / APIs</dd></div>
          </dl>
        </TerminalWindow>
        <TerminalWindow title="visual_feed" path="/dev/camera0" className="portrait-pane">
          <div className="portrait-frame">
            <Image
              src={profile.photo}
              alt="Clerin Balakrishnan working on a laptop"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              priority
            />
            <span className="viewfinder top-left" aria-hidden="true" />
            <span className="viewfinder bottom-right" aria-hidden="true" />
            <p aria-hidden="true">CAM_01 // CLERIN // FOCUS_MODE</p>
          </div>
        </TerminalWindow>
      </div>
      <div className="strength-strip" aria-label="Core strengths">
        <span className="strip-label">CORE_PROCESSES:</span>
        {profile.strengths.map((strength) => <span key={strength}>{strength}</span>)}
      </div>
    </SectionShell>
  );
}
