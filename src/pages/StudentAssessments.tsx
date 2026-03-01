import { useState } from "react";
import { mockQuestions } from "@/data/mockData";
import { BloomBadge } from "@/components/BloomBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

export default function StudentAssessments() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const q = mockQuestions[current];
  const progress = ((current + 1) / mockQuestions.length) * 100;

  const handleSubmit = () => {
    if (current < mockQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      toast({ title: "Assessment Submitted!", description: "Your answers are being evaluated by AI..." });
      setTimeout(() => navigate("/student/results"), 1500);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Assessment: Machine Learning</h1>
        <p className="text-muted-foreground">Answer each question thoughtfully.</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {current + 1} of {mockQuestions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="rounded-xl border bg-card p-8 card-shadow space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {current + 1}
            </span>
            <BloomBadge level={q.bloom} />
            <span className="text-xs text-muted-foreground ml-auto">{q.points} pts</span>
          </div>
          <p className="text-lg font-medium">{q.question}</p>
        </div>

        <Textarea
          placeholder="Type your answer here..."
          className="min-h-[120px]"
          value={answers[q.id] || ""}
          onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
        />

        <div className="flex justify-between">
          <Button variant="outline" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
            Previous
          </Button>
          <Button onClick={handleSubmit} className={current === mockQuestions.length - 1 ? "bg-hero-gradient text-primary-foreground border-0" : ""}>
            {current === mockQuestions.length - 1 ? "Submit Assessment" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}
