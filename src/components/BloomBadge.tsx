import { cn } from "@/lib/utils";

interface BloomBadgeProps {
  level: string;
  className?: string;
}

const bloomColors: Record<string, string> = {
  Remember: "bg-bloom-remember/15 text-bloom-remember border-bloom-remember/30",
  Understand: "bg-bloom-understand/15 text-bloom-understand border-bloom-understand/30",
  Apply: "bg-bloom-apply/15 text-bloom-apply border-bloom-apply/30",
  Analyze: "bg-bloom-analyze/15 text-bloom-analyze border-bloom-analyze/30",
  Evaluate: "bg-bloom-evaluate/15 text-bloom-evaluate border-bloom-evaluate/30",
  Create: "bg-bloom-create/15 text-bloom-create border-bloom-create/30",
};

export function BloomBadge({ level, className }: BloomBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        bloomColors[level] || "bg-muted text-muted-foreground",
        className
      )}
    >
      {level}
    </span>
  );
}
