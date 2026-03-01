import { mockLectures } from "@/data/mockData";
import { StatCard } from "@/components/StatCard";
import { BookOpen, ClipboardList, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function StudentDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Welcome, Student</h1>
        <p className="text-muted-foreground">Your learning journey at a glance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Available Lectures" value={mockLectures.length} icon={<BookOpen className="h-5 w-5" />} />
        <StatCard title="Assessments Taken" value={2} icon={<ClipboardList className="h-5 w-5" />} />
        <StatCard title="Avg. Score" value="78%" icon={<TrendingUp className="h-5 w-5" />} trend={{ value: 6, positive: true }} />
        <StatCard title="Current Level" value="Intermediate" icon={<Award className="h-5 w-5" />} />
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold mb-4">Available Lectures</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockLectures.map((l) => (
            <div key={l.id} className="rounded-xl border bg-card p-6 card-shadow transition-all hover:card-shadow-hover hover:-translate-y-0.5">
              <div className="mb-4">
                <p className="font-display font-semibold">{l.title}</p>
                <p className="text-sm text-muted-foreground">{l.subject} · {l.date}</p>
              </div>
              <Button size="sm" asChild>
                <Link to="/student/assessments">Attempt Assessment</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
