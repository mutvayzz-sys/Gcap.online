"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEPARTMENTS = [
  {
    id: "research",
    letter: "R",
    name: "Research",
    task: "Competitive analysis & market study",
    output: "12-page competitor brief",
    color: "#1e3a5f",
    duration: 2800,
  },
  {
    id: "strategy",
    letter: "S",
    name: "Strategy",
    task: "Campaign brief & positioning",
    output: "Messaging framework",
    color: "#1a3a2a",
    duration: 2400,
  },
  {
    id: "content",
    letter: "C",
    name: "Content",
    task: "Blog, social copy, email sequences",
    output: "14 content pieces",
    color: "#3a1a1a",
    duration: 3200,
  },
  {
    id: "outreach",
    letter: "O",
    name: "Outreach",
    task: "Press kit & partner emails",
    output: "38 personalised emails",
    color: "#2a1a3a",
    duration: 2600,
  },
  {
    id: "report",
    letter: "Σ",
    name: "Report",
    task: "Launch summary & metrics plan",
    output: "Executive summary",
    color: "#1a2a1a",
    duration: 1800,
  },
];

type DeptStatus = "idle" | "running" | "complete";

export default function AgencyOrchestration() {
  const [statuses, setStatuses] = useState<Record<string, DeptStatus>>({});
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoStarted = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const runSequence = useCallback(() => {
    clearTimers();
    setStatuses({});
    setActiveIdx(-1);
    setDone(false);
    setRunning(true);

    let cumulativeDelay = 400;

    DEPARTMENTS.forEach((dept, i) => {
      const startT = setTimeout(() => {
        setActiveIdx(i);
        setStatuses((prev) => ({ ...prev, [dept.id]: "running" }));

        const endT = setTimeout(() => {
          setStatuses((prev) => ({ ...prev, [dept.id]: "complete" }));
          if (i === DEPARTMENTS.length - 1) {
            setRunning(false);
            setDone(true);
            setActiveIdx(-1);
          }
        }, dept.duration);
        timers.current.push(endT);
      }, cumulativeDelay);
      timers.current.push(startT);
      cumulativeDelay += dept.duration + 700;
    });
  }, [clearTimers]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !autoStarted.current) {
          autoStarted.current = true;
          const t = setTimeout(runSequence, 1200);
          timers.current.push(t);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [clearTimers, runSequence]);

  const totalCompleted = Object.values(statuses).filter((s) => s === "complete").length;

  return (
    <div ref={containerRef}>
      {/* Workflow trigger */}
      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl px-6 py-5 mb-6 flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="#F9F7F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] tracking-[1.5px] text-[var(--text-muted)] uppercase mb-0.5">Workflow trigger</div>
          <div className="text-[16px] font-medium tracking-tight text-[var(--text)]">
            &ldquo;Launch my new product.&rdquo;
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {done && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[13px] text-green-600 font-medium"
            >
              All done ✓
            </motion.div>
          )}
          <button
            onClick={running ? undefined : runSequence}
            disabled={running}
            className={`text-[12px] tracking-[1px] font-medium px-4 py-2 rounded-full border transition-all ${
              running
                ? "border-[var(--border)] text-[var(--text-muted)] opacity-50 cursor-not-allowed"
                : "border-[var(--border)] text-[var(--text)] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F9F7F3]"
            }`}
          >
            {running ? "Running…" : done ? "Replay ↺" : "Run"}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 rounded-full bg-[var(--border)] mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#111111]"
          animate={{ width: `${(totalCompleted / DEPARTMENTS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Department cards */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {DEPARTMENTS.map((dept, i) => {
          const status = statuses[dept.id] ?? "idle";
          const isActive = activeIdx === i;

          return (
            <motion.div
              key={dept.id}
              className={`rounded-2xl border p-5 transition-all duration-300 ${
                status === "complete"
                  ? "border-green-300 bg-green-50"
                  : isActive
                  ? "border-[#111111] bg-[#111111]"
                  : "border-[var(--border)] bg-[var(--bg-elevated)]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-[16px] font-bold mb-3 ${
                  isActive ? "bg-white/15 text-white" : "text-white"
                }`}
                style={{ background: isActive ? undefined : dept.color + (status === "complete" ? "33" : "aa") }}
                aria-hidden="true"
              >
                {status === "complete" ? (
                  <span className="text-green-600">✓</span>
                ) : (
                  <span style={{ color: isActive ? "#fff" : "#fff" }}>{dept.letter}</span>
                )}
              </div>

              {/* Name + status */}
              <div className={`text-[12px] font-semibold tracking-tight mb-1 ${
                isActive ? "text-white" : status === "complete" ? "text-green-800" : "text-[var(--text)]"
              }`}>
                {dept.name}
              </div>

              <div className={`text-[11px] leading-snug mb-3 ${
                isActive ? "text-white/60" : status === "complete" ? "text-green-700" : "text-[var(--text-muted)]"
              }`}>
                {status === "complete" ? dept.output : dept.task}
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  status === "complete" ? "bg-green-500" :
                  isActive ? "bg-yellow-300 animate-pulse" :
                  "bg-[var(--border)]"
                }`} />
                <span className={`text-[10px] tracking-wide ${
                  isActive ? "text-white/40" : status === "complete" ? "text-green-600" : "text-[var(--text-muted)]"
                }`}>
                  {status === "complete" ? "DONE" : isActive ? "RUNNING" : "WAITING"}
                </span>
              </div>

              {/* Running animation bar */}
              {isActive && (
                <motion.div
                  className="mt-3 h-0.5 rounded-full bg-white/20 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-white/60 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: dept.duration / 1000, ease: "linear" }}
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Summary when done */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 bg-[#111111] text-[#F9F7F3] rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <div className="font-medium tracking-tight mb-1">Product launch complete.</div>
              <p className="text-[13px] text-white/55 leading-relaxed">
                Competitor brief, messaging framework, 14 content pieces, 38 personalised outreach emails,
                and an executive summary — coordinated across specialist agents and ready for review.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
