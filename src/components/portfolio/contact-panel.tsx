import { GitFork, Mail, MapPin, Network } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { SectionShell } from "@/components/layout/section-shell";
import { InteractiveTerminal } from "@/components/terminal/interactive-terminal";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { TerminalButton } from "@/components/ui/terminal-button";
import { ExternalLink } from "@/components/ui/external-link";

const iconMap = { github: GitFork, linkedin: Network, mail: Mail };

export function ContactPanel() {
  return (
    <SectionShell id="contact" index="05" eyebrow="open /dev/communication" title="Start a conversation" description="Have a project, opportunity, or technical idea to discuss? The public channels below are the fastest way to connect.">
      <div className="contact-grid">
        <TerminalWindow title="contact.sock" path="~/network/public">
          <p className="contact-prompt"><span>clerin@portfolio:~$</span> echo &quot;Let&apos;s build something useful.&quot;</p>
          <TerminalButton href={`mailto:${profile.email}?subject=Portfolio%20enquiry`} variant="primary">
            <Mail size={16} strokeWidth={1.75} aria-hidden="true" /> [ SEND_EMAIL ]
          </TerminalButton>
          <address className="contact-address">
            <p><MapPin size={16} aria-hidden="true" /> {profile.location}</p>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return link.href.startsWith("http") ? (
                <ExternalLink key={link.label} href={link.href} aria-label={`${link.label} profile for Clerin Balakrishnan`}>
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" /> {link.label}
                </ExternalLink>
              ) : (
                <a key={link.label} href={link.href} className="external-link">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" /> {profile.email}
                </a>
              );
            })}
          </address>
          <p className="privacy-note">PUBLIC_CHANNELS_ONLY // Email · LinkedIn · GitHub</p>
        </TerminalWindow>
        <InteractiveTerminal />
      </div>
    </SectionShell>
  );
}
