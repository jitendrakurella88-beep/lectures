import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  className?: string;
  trend?: { value: number; positive: boolean };
}

export function StatCard({ title, value, description, icon, className, trend }: StatCardProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 card-shadow transition-all hover:card-shadow-hover", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold font-display text-card-foreground">{value}</p>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
          {trend && (
            <p className={cn("text-xs font-medium", trend.positive ? "text-success" : "text-destructive")}>
              {trend.positive ? "↑" : "↓"} {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}
