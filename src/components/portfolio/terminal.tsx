import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TerminalIcon, X } from "lucide-react";

import { TERMINAL_REPLIES } from "./data";

type Entry = { prompt: string; lines: string[] };

export function AiTerminal() {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [entries, open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI terminal" : "Open AI terminal"}
        className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
      >
        {open ? <X className="size-5" /> : <TerminalIcon className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass fixed bottom-20 right-5 z-50 flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-signal/70" />
              <span className="size-2.5 rounded-full bg-cyan/70" />
              <p className="ml-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                ask.rebecca
              </p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4 font-mono text-[12px] leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-signal">$</span> init assistant — pick a query below.
              </p>
              {entries.map((e, i) => (
                <div key={`${e.prompt}-${i}`} className="space-y-1">
                  <p className="text-cyan">$ {e.prompt}</p>
                  {e.lines.map((l) => (
                    <p key={l} className="text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
              {TERMINAL_REPLIES.map((r) => (
                <button
                  key={r.prompt}
                  type="button"
                  onClick={() => setEntries((prev) => [...prev, r])}
                  className="rounded-full border border-border px-3 py-1.5 text-[11px] transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  {r.prompt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
