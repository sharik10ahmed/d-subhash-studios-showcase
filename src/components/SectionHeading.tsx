import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  as = "h2",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="label-eyebrow">{eyebrow}</span>
      <Tag
        className={cn(
          "mt-4 text-4xl leading-[1.1] sm:text-5xl",
          tone === "dark" ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </Tag>
      <span
        className={cn("gold-rule mt-6", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {intro ? (
        <p
          className={cn(
            "mt-6 text-sm leading-relaxed sm:text-base",
            tone === "dark" ? "text-ivory/65" : "text-warmgray",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
