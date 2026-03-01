import { StatCard } from "@/components/StatCard";
import { BloomBadge } from "@/components/BloomBadge";
import { mockStudents, mockLectures, conceptPerformance } from "@/data/mockData";
import { Users, BookOpen, Brain, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const levelColors: Record<string, string> = {
  Advanced: "bg-success/15 text-success border-success/30",
  Intermediate: "bg-primary/15 text-primary border-primary/30",
  Beginner: "bg-warm/15 text-warm border-warm/30",
};

export default function TeacherDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Welcome back, Professor</h1>
        <p className="text-muted-foreground">Here's an overview of your lecture analytics.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value={125} icon={<Users className="h-5 w-5" />} trend={{ value: 12, positive: true }} />
        <StatCard title="Lectures Uploaded" value={mockLectures.length} icon={<BookOpen className="h-5 w-5" />} />
        <StatCard title="Questions Generated" value={48} icon={<Brain className="h-5 w-5" />} trend={{ value: 8, positive: true }} />
        <StatCard title="Avg. Understanding" value="76%" icon={<TrendingUp className="h-5 w-5" />} trend={{ value: 5, positive: true }} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Concept Performance */}
        <div className="rounded-xl border bg-card p-6 card-shadow">
          <h2 className="font-display text-lg font-semibold mb-4">Concept-wise Performance</h2>
          <div className="space-y-4">
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

        {/* Recent Lectures */}
        <div className="rounded-xl border bg-card p-6 card-shadow">
          <h2 className="font-display text-lg font-semibold mb-4">Recent Lectures</h2>
          <div className="space-y-3">
            {mockLectures.map((l) => (
              <div key={l.id} className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
                <div>
                  <p className="font-medium text-sm">{l.title}</p>
                  <p className="text-xs text-muted-foreground">{l.subject} · {l.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{l.avgScore}%</p>
                  <p className="text-xs text-muted-foreground">{l.students} students</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="rounded-xl border bg-card card-shadow">
        <div className="p-6 pb-0">
          <h2 className="font-display text-lg font-semibold">Student Performance</h2>
        </div>
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStudents.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {s.avatar}
                      </div>
                      <span className="font-medium">{s.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{s.score}%</TableCell>
                  <TableCell>
                    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", levelColors[s.level])}>
                      {s.level}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
