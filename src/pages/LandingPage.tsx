import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Brain,
  BarChart3,
  FileText,
  Sparkles,
  ChevronRight,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Lecture-Based Assessment",
    description: "Upload any lecture content and instantly generate meaningful assessments aligned with learning objectives.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Question Generation",
    description: "Automatically create questions across all Bloom's Taxonomy levels for comprehensive evaluation.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Semantic Evaluation",
    description: "AI-powered answer analysis that understands meaning, not just keywords, for fair grading.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Learning Analytics",
    description: "Real-time dashboards showing student understanding, weak areas, and class-wide trends.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-hero-gradient">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Lecture Lens</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/student">Student Login</Link>
            </Button>
            <Button asChild>
              <Link to="/teacher">Teacher Login</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />
        <div className="container text-center">
          <div className="mx-auto max-w-3xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium card-shadow">
              <Sparkles className="h-4 w-4 text-warm" />
              AI-Powered Education Analytics
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient">Lecture Lens</span>
              <br />
              <span className="text-foreground">AI Lecture Understanding</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Transform lecture content into Bloom's Taxonomy assessments, evaluate understanding with AI, and unlock real-time learning insights.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-hero-gradient text-primary-foreground border-0 px-8 text-base" asChild>
                <Link to="/teacher">
                  Get Started as Teacher <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-base" asChild>
                <Link to="/student">I'm a Student</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card/50 py-12">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Active Teachers", value: "2,400+", icon: <Users className="h-5 w-5" /> },
            { label: "Lectures Analyzed", value: "18,000+", icon: <BookOpen className="h-5 w-5" /> },
            { label: "Questions Generated", value: "1.2M+", icon: <Brain className="h-5 w-5" /> },
            { label: "Avg. Score Improvement", value: "34%", icon: <BarChart3 className="h-5 w-5" /> },
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold font-display">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Everything you need to understand learning
            </h2>
            <p className="mt-4 text-muted-foreground">
              From lecture upload to actionable insights — powered by AI at every step.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-xl border bg-card p-8 card-shadow transition-all hover:card-shadow-hover hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="rounded-2xl bg-hero-gradient p-12 text-center md:p-16">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to transform your classroom?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
              Join thousands of educators using AI to understand and improve student learning.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 px-8 text-base"
              asChild
            >
              <Link to="/teacher">Start for Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold">Lecture Lens</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Lecture Lens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
