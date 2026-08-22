import { GitFork, MapPin, Network } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { BlinkingCursor } from "@/components/terminal/blinking-cursor";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { TerminalButton } from "@/components/ui/terminal-button";
import { ExternalLink } from "@/components/ui/external-link";

export function Hero() {
  const github = socialLinks.find((link) => link.icon === "github")!;
  const linkedin = socialLinks.find((link) => link.icon === "linkedin")!;

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <TerminalWindow title="zsh — identity" path="~/portfolio/whoami" className="hero-terminal">
          <div className="identity-plate" aria-hidden="true">
            <span>┌─ CB / FULL-STACK + MOBILE ──┐</span>
            <span>└─ SLIIT // LK // BUILDING  .──┘</span>
          </div>
          <p className="command-line"><span>user@portfolio:~$</span> whoami</p>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero-role">{profile.role}<BlinkingCursor /></p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <TerminalButton href="#projects" variant="primary">[ VIEW_PROJECTS ]</TerminalButton>
            <TerminalButton href={profile.resume} download="Clerin-Balakrishnan-CV.pdf" aria-label="Download Clerin Balakrishnan's CV as PDF">
              [ DOWNLOAD_CV ]
            </TerminalButton>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <ExternalLink href={github.href} aria-label="View Clerin's GitHub profile">
              <GitFork size={16} strokeWidth={1.75} aria-hidden="true" /> GitHub
            </ExternalLink>
            <ExternalLink href={linkedin.href} aria-label="View Clerin's LinkedIn profile">
              <Network size={16} strokeWidth={1.75} aria-hidden="true" /> LinkedIn
            </ExternalLink>
          </div>
        </TerminalWindow>

        <TerminalWindow title="sysinfo" path="/proc/clerin" className="system-pane">
          <dl className="system-list">
            <div><dt>USER</dt><dd>{profile.handle}</dd></div>
            <div><dt>ROLE</dt><dd>Undergraduate / Developer</dd></div>
            <div><dt>FOCUS</dt><dd>Full-stack + Mobile</dd></div>
            <div><dt>BASE</dt><dd><MapPin size={14} aria-hidden="true" /> {profile.location}</dd></div>
            <div><dt>UPTIME</dt><dd>Learning continuously</dd></div>
          </dl>
          <div className="status-block">
            <span className="status-pulse" aria-hidden="true" />
            <span>[ STATUS: {profile.status} ]</span>
          </div>
          <div className="system-meter" aria-label="Current focus areas: web, mobile, and systems">
            <span>FOCUS_MAP</span>
            <p>WEB&nbsp;&nbsp;&nbsp;&nbsp;[||||||||||]</p>
            <p>MOBILE&nbsp; [||||||||..]</p>
            <p>SYSTEMS [|||||||...]</p>
          </div>
        </TerminalWindow>
      </div>
      <a href="#about" className="scroll-cue">↓ SCROLL_TO_INSPECT</a>
    </section>
  );
}
