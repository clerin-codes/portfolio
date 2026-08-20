"use client";

import { useEffect, useState } from "react";

const bootLines = [
  "[ OK ] mounting portfolio filesystem",
  "[ OK ] loading project registry",
  "[ OK ] applying accessibility preferences",
  "[ OK ] initializing terminal interface",
  "[ READY ] welcome, operator",
];

export function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sessionStorage.getItem("portfolio-booted") || reducedMotion) {
      sessionStorage.setItem("portfolio-booted", "true");
      return;
    }

    const showFrame = window.requestAnimationFrame(() => setVisible(true));
    const lineTimer = window.setInterval(() => {
      setLineCount((count) => Math.min(count + 1, bootLines.length));
    }, 150);
    const endTimer = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-booted", "true");
      setVisible(false);
    }, 1150);

    return () => {
      window.cancelAnimationFrame(showFrame);
      window.clearInterval(lineTimer);
      window.clearTimeout(endTimer);
    };
  }, []);

  function skip() {
    sessionStorage.setItem("portfolio-booted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="boot-screen" role="status" aria-label="Portfolio loading">
      <div className="boot-content">
        <p className="boot-mark">CLERIN/OS <span>v1.0.0</span></p>
        <div className="boot-log" aria-live="polite">
          {bootLines.slice(0, lineCount).map((line) => <p key={line}>{line}</p>)}
        </div>
        <button type="button" className="boot-skip" onClick={skip}>[ SKIP_BOOT ]</button>
      </div>
    </div>
  );
}
