"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

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

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="Clerin Balakrishnan — home">
          <span aria-hidden="true">CB</span><span className="wordmark-cursor" aria-hidden="true">_</span>
        </a>
        <span className="header-session" aria-hidden="true">session: portfolio/main</span>
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
          {navigation.map((item, index) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">{String(index).padStart(2, "0")}</span> {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
