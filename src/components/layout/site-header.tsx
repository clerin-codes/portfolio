"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const ctaZoneRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const zone = ctaZoneRef.current;
    const button = ctaRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!zone || !button || reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const bounds = zone.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 5;
      button.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      button.style.transition = "transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    };
    const resetPosition = () => {
      button.style.transform = "translate3d(0, 0, 0)";
      button.style.transition = "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)";
    };

    zone.addEventListener("pointermove", handlePointerMove);
    zone.addEventListener("pointerleave", resetPosition);
    return () => {
      zone.removeEventListener("pointermove", handlePointerMove);
      zone.removeEventListener("pointerleave", resetPosition);
    };
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={isCompact ? "site-header is-compact" : "site-header"}>
      <div className="header-inner">
        <div className="header-brand">
          <a className="wordmark" href="#home" aria-label="Clerin Balakrishnan — home">
            <span aria-hidden="true">CB</span><span className="wordmark-cursor" aria-hidden="true">_</span>
          </a>
          <span className="header-session" aria-hidden="true">session: portfolio/main</span>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="nav-token" aria-hidden="true">{item.prefix}</span>
                <span>{item.label}</span>
                <span className="nav-token" aria-hidden="true">{item.suffix}</span>
              </a>
            );
          })}
        </nav>
        <ThemeToggle />
        <div className="header-cta-zone" ref={ctaZoneRef}>
          <a className="header-cta-shell" href="#contact" aria-label="Jump to contact section">
            <span className="header-cta" ref={ctaRef} aria-hidden="true">
              {["[", " ", "L", "E", "T", "&apos;", "S", "_", "T", "A", "L", "K", " ", "]"].map((character, index) => (
                <span className="header-cta-letter" key={`${character}-${index}`}>{character === "&apos;" ? "'" : character}</span>
              ))}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
