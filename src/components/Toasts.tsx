import { useStudio } from "@/store/StudioStore";

/** Minimal CSS/React toast stack — no UI library. */
export function Toasts() {
  const { toasts } = useStudio();
  if (toasts.length === 0) return null;
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[100] flex w-[min(92vw,26rem)] -translate-x-1/2 flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="rounded-sm border border-gold/40 bg-ink px-4 py-3 text-xs tracking-[0.12em] text-ivory shadow-lg"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
