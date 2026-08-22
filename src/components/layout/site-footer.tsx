import { ArrowUp, Camera, GitFork, Mail, Network, Phone, Users } from "lucide-react";
import { navigation, profile, socialLinks } from "@/data/portfolio";

const socialIconMap = {
  github: GitFork,
  linkedin: Network,
  instagram: Camera,
  facebook: Users,
  mail: Mail,
};

export function SiteFooter() {
  const connectLinks = socialLinks.filter((link) => link.href.startsWith("https://"));

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-grid">
        <div className="footer-identity">
          <a href="#home" className="footer-brand" aria-label={`${profile.name}, return to home`}>
            <span aria-hidden="true">[ CB_ ]</span>
            <strong id="footer-heading">{profile.name}</strong>
          </a>
          <p>{profile.status}</p>
          <div className="footer-status"><span aria-hidden="true" /> SYSTEM_STATUS: BUILDING_AND_LEARNING</div>
        </div>

        <nav className="footer-group" aria-label="Footer navigation">
          <h2>Navigation</h2>
          <ul>
            {navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
          </ul>
        </nav>

        <div className="footer-group">
          <h2>Connect</h2>
          <ul>
            {connectLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} profile for ${profile.name}, opens in a new tab`}>
                    <Icon size={16} strokeWidth={1.75} aria-hidden="true" /> {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <address className="footer-group footer-contact">
          <h2>Contact</h2>
          <a href={`mailto:${profile.email}`}><Mail size={16} strokeWidth={1.75} aria-hidden="true" /> {profile.email}</a>
          <a href={profile.phoneHref}><Phone size={16} strokeWidth={1.75} aria-hidden="true" /> {profile.phone}</a>
        </address>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {profile.name}. Built with Next.js.</p>
        <a href="#home" className="back-to-top"><ArrowUp size={16} strokeWidth={1.75} aria-hidden="true" /> [ BACK_TO_TOP ]</a>
      </div>
    </footer>
  );
}
