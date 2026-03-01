import { conceptPerformance } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

export default function StudentResults() {
  const score = 78;
  const level = "Intermediate";

  const feedback = [
    { concept: "Supervised Learning", status: "strong", note: "Excellent understanding of core concepts." },
    { concept: "Neural Networks", status: "moderate", note: "Good grasp, but review backpropagation." },
    { concept: "Overfitting", status: "weak", note: "Revisit regularization techniques." },
    { concept: "Decision Trees", status: "strong", note: "Strong application skills demonstrated." },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Your Results</h1>
        <p className="text-muted-foreground">Machine Learning Assessment</p>
      </div>

      {/* Score Card */}
      <div className="rounded-xl border bg-card p-8 card-shadow text-center space-y-4">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-hero-gradient">
          <span className="text-3xl font-bold font-display text-primary-foreground">{score}%</span>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">Understanding Level: {level}</p>
          <p className="text-muted-foreground text-sm mt-1">You scored above the class average of 72%</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-success font-medium">
          <TrendingUp className="h-4 w-4" />
          +6% improvement from your last assessment
        </div>
      </div>

      {/* Concept Feedback */}
      <div className="rounded-xl border bg-card p-6 card-shadow space-y-4">
        <h2 className="font-display text-lg font-semibold">Concept Feedback</h2>
        <div className="space-y-3">
          {feedback.map((f) => (
            <div key={f.concept} className="flex items-start gap-3 rounded-lg border p-4">
              {f.status === "strong" ? (
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 shrink-0" />
              ) : f.status === "weak" ? (
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
              ) : (
                <Award className="h-5 w-5 text-warm mt-0.5 shrink-0" />
              )}
              <div>
                <p className="font-medium text-sm">{f.concept}</p>
                <p className="text-xs text-muted-foreground">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
