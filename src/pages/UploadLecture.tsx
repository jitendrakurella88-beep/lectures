import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function UploadLecture() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploaded(true);
    toast({
      title: "Lecture Uploaded!",
      description: "AI is generating your assessment questions...",
    });
    setTimeout(() => setUploaded(false), 3000);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">Upload Lecture</h1>
        <p className="text-muted-foreground">Upload your lecture content to generate AI-powered assessments.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-8 card-shadow space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Lecture Title</Label>
          <Input id="title" placeholder="e.g., Introduction to Machine Learning" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="e.g., Computer Science" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Lecture Content</Label>
          <Textarea id="content" placeholder="Paste your lecture notes or content here..." className="min-h-[160px]" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <div className="rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-colors hover:border-primary/50">
          <Upload className="mx-auto h-10 w-10 text-primary/60 mb-3" />
          <p className="text-sm font-medium">Drop your PDF or document here</p>
          <p className="text-xs text-muted-foreground mt-1">Supports PDF, DOCX, TXT files</p>
        </div>

        <Button type="submit" className="w-full bg-hero-gradient text-primary-foreground border-0" size="lg" disabled={uploaded}>
          {uploaded ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Uploaded Successfully
            </>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" /> Upload & Generate Assessment
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
