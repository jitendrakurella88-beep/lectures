import { StatCard } from "@/components/StatCard";
import { bloomLevels, classPerformance, conceptPerformance } from "@/data/mockData";
import { BloomBadge } from "@/components/BloomBadge";
import { Users, TrendingUp, Brain, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const bloomChartData = bloomLevels.map((b) => ({ name: b.level, count: b.count }));
const bloomChartColors = [
  "hsl(220, 70%, 55%)",
  "hsl(200, 65%, 50%)",
  "hsl(170, 60%, 45%)",
  "hsl(45, 85%, 52%)",
  "hsl(25, 90%, 55%)",
  "hsl(340, 65%, 55%)",
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Class performance overview and learning insights.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value={125} icon={<Users className="h-5 w-5" />} />
        <StatCard title="Class Average" value="76%" icon={<TrendingUp className="h-5 w-5" />} trend={{ value: 5, positive: true }} />
        <StatCard title="Questions Answered" value="3,200" icon={<Brain className="h-5 w-5" />} />
        <StatCard title="Mastery Rate" value="68%" icon={<Target className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Class Performance Bar Chart */}
        <div className="rounded-xl border bg-card p-6 card-shadow">
          <h2 className="font-display text-lg font-semibold mb-4">Class Performance Over Time</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bloom Distribution Pie Chart */}
        <div className="rounded-xl border bg-card p-6 card-shadow">
          <h2 className="font-display text-lg font-semibold mb-4">Bloom's Taxonomy Distribution</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={bloomChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="count"
              >
                {bloomChartData.map((_, i) => (
                  <Cell key={i} fill={bloomChartColors[i]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {bloomLevels.map((b) => (
              <BloomBadge key={b.level} level={b.level} />
            ))}
          </div>
        </div>
      </div>

      {/* Concept Mastery */}
      <div className="rounded-xl border bg-card p-6 card-shadow">
        <h2 className="font-display text-lg font-semibold mb-4">Concept Mastery</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {conceptPerformance.map((c) => (
            <div key={c.concept} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{c.concept}</span>
                <span className="text-muted-foreground">{c.mastery}%</span>
              </div>
              <Progress value={c.mastery} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
