import { mockQuestions, bloomLevels } from "@/data/mockData";
import { BloomBadge } from "@/components/BloomBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeacherAssessments() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Generated Assessments</h1>
        <p className="text-muted-foreground">Questions categorized by Bloom's Taxonomy levels.</p>
      </div>

      {/* Bloom summary */}
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {bloomLevels.map((b) => (
          <div key={b.level} className="rounded-xl border bg-card p-4 card-shadow text-center">
            <BloomBadge level={b.level} className="mb-2" />
            <p className="text-2xl font-bold font-display">{b.count}</p>
            <p className="text-xs text-muted-foreground mt-1">{b.description}</p>
          </div>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {bloomLevels.map((b) => (
            <TabsTrigger key={b.level} value={b.level}>{b.level}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <QuestionList questions={mockQuestions} />
        </TabsContent>
        {bloomLevels.map((b) => (
          <TabsContent key={b.level} value={b.level}>
            <QuestionList questions={mockQuestions.filter((q) => q.bloom === b.level)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function QuestionList({ questions }: { questions: typeof mockQuestions }) {
  if (questions.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-12 text-center card-shadow">
        <p className="text-muted-foreground">No questions at this level yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={q.id} className="flex items-start gap-4 rounded-xl border bg-card p-5 card-shadow transition-all hover:card-shadow-hover">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold">
            {i + 1}
          </span>
          <div className="flex-1 space-y-2">
            <p className="font-medium">{q.question}</p>
            <div className="flex items-center gap-3">
              <BloomBadge level={q.bloom} />
              <span className="text-xs text-muted-foreground">{q.points} points</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
