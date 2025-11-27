import { glossaryTerms } from "@/data/glossary";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { ArrowLeft, BookOpen, Lightbulb, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    slug: term.id,
  }));
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const term = glossaryTerms.find((t) => t.id === params.slug);

  if (!term) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <Link href="/glossary">
          <Button variant="ghost" size="sm" className="gap-2 text-text-muted hover:text-text-primary pl-0">
            <ArrowLeft className="w-4 h-4" /> Back to Glossary
          </Button>
        </Link>

        <GlassCard className="p-8 md:p-12 space-y-8">
          <div className="space-y-4 border-b border-border-subtle pb-8">
            <div className="flex items-center gap-2 text-brand-primary text-sm font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>UX Terminology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              {term.term}
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-text-primary">Definition</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                {term.definition}
              </p>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-accent/20 rounded-lg text-brand-black shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-text-primary">Example in Context</h3>
                  <p className="text-text-muted italic">"{term.example}"</p>
                </div>
              </div>
            </div>

            {term.related.length > 0 && (
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-text-subtle uppercase tracking-wider mb-3 flex items-center gap-2">
                  <LinkIcon className="w-3 h-3" /> Related Terms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {term.related.map((relatedTerm) => {
                    // Find the related term object to get its ID for the link
                    // This is a simple lookup; in a real app we might want a map or more robust linking
                    const relatedObj = glossaryTerms.find(
                      (t) => t.term.toLowerCase() === relatedTerm.toLowerCase()
                    );
                    
                    if (relatedObj) {
                      return (
                        <Link key={relatedTerm} href={`/glossary/${relatedObj.id}`}>
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-bg-soft hover:bg-brand-primary/10 hover:text-brand-primary text-sm transition-colors cursor-pointer border border-transparent hover:border-brand-primary/20">
                            {relatedTerm}
                          </span>
                        </Link>
                      );
                    }
                    
                    return (
                      <span key={relatedTerm} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-bg-soft text-text-muted text-sm opacity-70 cursor-not-allowed" title="Term not found">
                        {relatedTerm}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
