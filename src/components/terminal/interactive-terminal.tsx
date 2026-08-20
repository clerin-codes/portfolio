"use client";

import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import { terminalCommands } from "@/data/portfolio";
import { TerminalWindow } from "./terminal-window";

interface OutputLine {
  id: number;
  command?: string;
  message: string;
  isError?: boolean;
  link?: { href: string; label: string };
}

const welcome: OutputLine[] = [{ id: 0, message: "Type 'help' to inspect the portfolio." }];

export function InteractiveTerminal() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState<OutputLine[]>(welcome);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const nextId = useRef(1);

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    setHistory((items) => [...items, command]);
    setHistoryIndex(-1);

    if (command === "clear") {
      setOutput([]);
      return;
    }

    const definition = terminalCommands.find((item) => item.command === command);
    let line: OutputLine;

    if (!definition) {
      line = { id: nextId.current++, command, message: `[ERR] command not found: ${command}. Try 'help'.`, isError: true };
    } else if (command === "help") {
      line = {
        id: nextId.current++,
        command,
        message: terminalCommands.map((item) => `${item.command.padEnd(10)} ${item.description}`).join("\n"),
      };
    } else if (definition.section) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById(definition.section)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      line = { id: nextId.current++, command, message: `[OK] navigating to /${definition.section}` };
    } else if (definition.url) {
      line = {
        id: nextId.current++,
        command,
        message: `[CONFIRM] Open ${definition.command} in a new tab:`,
        link: { href: definition.url, label: `[ OPEN_${definition.command.toUpperCase()} ]` },
      };
    } else {
      line = { id: nextId.current++, command, message: definition.description };
    }

    setOutput((lines) => [...lines, line]);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    runCommand(value);
    setValue("");
  }

  function handleHistory(event: KeyboardEvent<HTMLInputElement>) {
    if (!history.length || (event.key !== "ArrowUp" && event.key !== "ArrowDown")) return;
    event.preventDefault();

    if (event.key === "ArrowUp") {
      const index = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(index);
      setValue(history[index]);
    } else {
      const index = historyIndex < 0 ? -1 : historyIndex + 1;
      if (index >= history.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(index);
        setValue(history[index]);
      }
    }
  }

  return (
    <TerminalWindow title="interactive_shell" path="~/portfolio">
      <p className="terminal-instruction">Interactive shortcut: enter a command below. Use ↑/↓ for history.</p>
      <div className="terminal-output" aria-live="polite" aria-atomic="false">
        {output.map((line) => (
          <div key={line.id} className={line.isError ? "output-line output-error" : "output-line"}>
            {line.command ? <p><span className="prompt">visitor@portfolio:~$</span> {line.command}</p> : null}
            <pre>{line.message}</pre>
            {line.link ? (
              <a href={line.link.href} target="_blank" rel="noopener noreferrer" className="terminal-inline-link">
                {line.link.label}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        ))}
      </div>
      <form className="terminal-form" onSubmit={submit}>
        <label htmlFor="terminal-command" className="prompt">visitor@portfolio:~$</label>
        <input
          id="terminal-command"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleHistory}
          autoComplete="off"
          spellCheck={false}
          aria-describedby="terminal-help"
        />
        <button type="submit">[ RUN ]</button>
      </form>
      <span id="terminal-help" className="sr-only">Enter help for a list of commands.</span>
    </TerminalWindow>
  );
}
