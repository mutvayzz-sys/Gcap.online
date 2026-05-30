"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TASKS = [
  {
    id: "gather",
    label: "Gather Grade 8 results across all subjects",
    agent: "ANALYST",
    logLines: [
      "Connecting to grade management system...",
      "Fetching results: Math, Science, English, History...",
      "Cross-referencing 28 student records...",
      "Validating attendance and assessment data...",
      "Collating results into structured dataset...",
      "✓ Complete — 28 student records ready",
    ],
  },
  {
    id: "write",
    label: "Write personalised report comments",
    agent: "WRITER",
    logLines: [
      "Loading student performance data...",
      "Analysing individual progress patterns...",
      "Drafting personalised comment — student 1/28...",
      "Applying tone and school style guidelines...",
      "Completing remaining 27 student comments...",
      "✓ Complete — 28 personalised comments written",
    ],
  },
  {
    id: "verify",
    label: "Verify every grade against source",
    agent: "VERIFIER",
    logLines: [
      "Loading grade dataset and source records...",
      "Cross-checking 112 grade entries...",
      "Comparing against assessment submissions...",
      "Flagging 3 discrepancies for review...",
      "Corrections applied, all figures verified...",
      "✓ Complete — 112 grades verified",
    ],
  },
  {
    id: "assemble",
    label: "Assemble the final reports",
    agent: "COMPILER",
    logLines: [
      "Pulling verified grades and comments...",
      "Mapping data to report template...",
      "Generating individual report — student 1/28...",
      "Applying school branding and formatting...",
      "Completing remaining 27 reports...",
      "✓ Complete — 28 reports ready to send",
    ],
  },
] as const;

const MONOGRAMS: Record<string, string> = {
  ANALYST: "A",
  WRITER: "W",
  VERIFIER: "V",
  COMPILER: "C",
};

type Status = "idle" | "running" | "complete";

export default function OrchestratorDemo() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [logLines, setLogLines] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const autoStarted = useRef(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const runTask = (idx: number) => {
    if (busy) return;
    clearTimers();
    const task = TASKS[idx];
    setActiveIdx(idx);
    setLogLines([]);
    setBusy(true);
    setStatuses((prev) => ({ ...prev, [task.id]: "running" }));

    task.logLines.forEach((line, i) => {
      const t = setTimeout(() => {
        setLogLines((prev) => [...prev, line]);
        if (i === task.logLines.length - 1) {
          const done = setTimeout(() => {
            setStatuses((prev) => ({ ...prev, [task.id]: "complete" }));
            setBusy(false);
            const next = setTimeout(() => {
              const nextIdx = (idx + 1) % TASKS.length;
              runTask(nextIdx);
            }, 2200);
            timers.current.push(next);
          }, 700);
          timers.current.push(done);
        }
      }, 1100 + i * 340);
      timers.current.push(t);
    });
  };

  useEffect(() => {
    if (inView && !autoStarted.current) {
      autoStarted.current = true;
      const t = setTimeout(() => runTask(0), 900);
      timers.current.push(t);
    }
  }, [inView]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logLines]);

  useEffect(() => () => clearTimers(), []);

  const activeTask = activeIdx !== null ? TASKS[activeIdx] : null;
  const activeStatus = activeTask ? statuses[activeTask.id] ?? "idle" : null;

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-5">
      {/* Left: task cards */}
      <div className="space-y-3">
        {TASKS.map((task, i) => {
          const status = statuses[task.id] ?? "idle";
          const isActive = activeIdx === i;
          return (
            <motion.button
              key={task.id}
              onClick={() => !busy && runTask(i)}
              className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                isActive && status === "running"
                  ? "border-[#111111] bg-[#111111] text-[#F9F7F3]"
                  : status === "complete"
                  ? "border-[var(--accent)]/40 bg-[var(--bg-elevated)]"
                  : "border-[var(--border)] bg-[var(--bg-elevated)]"
              } ${busy && !isActive ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:border-[#111111]/30"}`}
              animate={isActive && status === "running" ? { x: [-3, 0] } : { x: 0 }}
              transition={{ duration: 0.35 }}
              aria-label={`Run task: ${task.label}`}
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium tracking-tight text-sm leading-snug">{task.label}</div>
                <div
                  className={`text-xs mt-1.5 tracking-[1.5px] font-medium ${
                    isActive && status === "running"
                      ? "text-[#F9F7F3]/50"
                      : status === "complete"
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {status === "complete"
                    ? "COMPLETE"
                    : isActive && status === "running"
                    ? "ASSIGNED →"
                    : "PENDING"}
                </div>
              </div>
              {status === "complete" ? (
                <span className="text-[var(--accent)] text-base mt-0.5 flex-shrink-0">✓</span>
              ) : isActive && status === "running" ? (
                <div className="w-1.5 h-1.5 rounded-full bg-[#F9F7F3]/60 mt-2 flex-shrink-0 animate-pulse" />
              ) : null}
            </motion.button>
          );
        })}
        <div className="text-xs text-[var(--text-muted)] pt-1 pl-1">
          {busy ? "Headmaster is running..." : "Click any task — or watch the auto-demo."}
        </div>
      </div>

      {/* Right: agent card + terminal */}
      <div className="flex flex-col gap-4">
        {/* Agent card */}
        <div
          className={`rounded-2xl border p-5 flex items-center gap-4 transition-all duration-300 ${
            activeTask
              ? "border-[#111111] bg-[#111111]"
              : "border-[var(--border)] bg-[var(--bg-elevated)]"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0 transition-all ${
              activeTask ? "bg-white/10 text-white" : "bg-[var(--border)] text-[var(--text-muted)]"
            }`}
            aria-hidden="true"
          >
            {activeTask ? MONOGRAMS[activeTask.agent] : "—"}
          </div>
          <div>
            <div
              className={`text-[10px] tracking-[2px] mb-1 uppercase ${
                activeTask ? "text-white/40" : "text-[var(--text-muted)]"
              }`}
            >
              Assigned agent
            </div>
            <div
              className={`text-xl font-semibold tracking-tight ${
                activeTask ? "text-white" : "text-[var(--text-muted)]"
              }`}
            >
              {activeTask ? activeTask.agent : "—"}
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeStatus === "complete"
                    ? "bg-green-400"
                    : activeStatus === "running"
                    ? "bg-yellow-400 animate-pulse"
                    : "bg-[var(--border)]"
                }`}
              />
              <span
                className={`text-[11px] tracking-wide ${
                  activeTask ? "text-white/40" : "text-[var(--text-muted)]"
                }`}
              >
                {activeStatus === "complete"
                  ? "COMPLETE"
                  : activeStatus === "running"
                  ? "RUNNING"
                  : "STANDBY"}
              </span>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="rounded-2xl border border-[var(--border)] bg-[#0D0D0D] overflow-hidden flex-1">
          <div className="border-b border-white/5 px-4 py-2.5 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <span className="text-[11px] text-white/25 ml-2 font-mono">headmaster.log</span>
          </div>
          <div ref={logRef} className="p-5 h-52 overflow-y-auto font-mono text-xs leading-6 space-y-0.5">
            <AnimatePresence>
              {logLines.length === 0 ? (
                <motion.span
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/20"
                >
                  _ waiting for task assignment...
                </motion.span>
              ) : (
                logLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className={line.startsWith("✓") ? "text-green-400" : "text-white/55"}
                  >
                    {line}
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
