"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const followSystemTheme = (event: MediaQueryListEvent) => {
    try {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
    } catch {
      // Storage can be unavailable in hardened browser modes; system theme still works.
    }
    document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    callback();
  };

  media.addEventListener("change", followSystemTheme);
  window.addEventListener("portfolio-theme-change", callback);
  return () => {
    media.removeEventListener("change", followSystemTheme);
    window.removeEventListener("portfolio-theme-change", callback);
  };
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getThemeSnapshot, () => null);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The selected theme still applies for this page view when storage is blocked.
    }
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  const isDark = theme === "dark";
  const label = theme ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme";

  return (
    <button className={theme ? "theme-toggle is-ready" : "theme-toggle"} type="button" onClick={toggleTheme} aria-label={label} title={label} disabled={!theme}>
      {isDark ? <Moon size={16} strokeWidth={1.75} aria-hidden="true" /> : <Sun size={16} strokeWidth={1.75} aria-hidden="true" />}
      <span aria-hidden="true">[ {isDark ? "DARK" : "LIGHT"}_MODE ]</span>
    </button>
  );
}
