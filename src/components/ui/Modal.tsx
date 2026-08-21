import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  children,
  width = "max-w-lg",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  width?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/80 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-10 my-auto w-full rounded-t-sm border border-gold/25 bg-ivory shadow-2xl sm:rounded-sm",
          width,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4 sm:px-7">
          <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 text-xl leading-none text-warmgray transition-colors hover:text-gold"
          >
            ×
          </button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">{children}</div>
      </div>
    </div>
  );
}
