import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/portfolio/about";
import { ContactPanel } from "@/components/portfolio/contact-panel";
import { Education } from "@/components/portfolio/education";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { SkillsGrid } from "@/components/portfolio/skills-grid";
import { profile, socialLinks } from "@/data/portfolio";
import { SITE_URL } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    homeLocation: { "@type": "Place", name: profile.location },
    sameAs: socialLinks.filter((link) => link.href.startsWith("https://")).map((link) => link.href),
    ...(SITE_URL ? { url: SITE_URL } : {}),
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <noscript>
        <nav className="nojs-nav" aria-label="No-script navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a>
        </nav>
      </noscript>
      <main id="main-content">
        <Hero />
        <About />
        <SkillsGrid />
        <Projects />
        <Education />
        <ContactPanel />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
