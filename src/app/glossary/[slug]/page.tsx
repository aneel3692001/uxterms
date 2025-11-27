import { glossaryTerms } from "@/data/glossary";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { ArrowLeft, BookOpen, Lightbulb, Link as LinkIcon, Quote, Share2 } from "lucide-react";
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
    <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl space-y-8 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/glossary">
            <Button variant="ghost" size="sm" className="gap-2 text-text-muted hover:text-text-primary pl-0 hover:bg-transparent group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Glossary
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-text-muted hover:text-brand-primary rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <GlassCard className="p-8 md:p-16 space-y-12 border-border-subtle shadow-2xl bg-bg-elevated/40 backdrop-blur-2xl" variant="elevated">
          <div className="space-y-8 border-b border-border-subtle pb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">UX Terminology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-primary leading-[1.1]">
              {term.term}
            </h1>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-text-subtle uppercase tracking-wider flex items-center gap-2">
                Definition
              </h2>
              <p className="text-2xl md:text-3xl text-text-primary leading-relaxed font-medium">
                {term.definition}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-accent/5 to-transparent border border-brand-accent/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
                <Quote className="w-32 h-32 text-brand-accent" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent-dark shrink-0 shadow-sm self-start border border-brand-accent/20">
                  <Lightbulb className="w-8 h-8 text-brand-lime-dark" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-text-primary">Example in Context</h3>
                  <p className="text-xl text-text-muted italic leading-relaxed">"{term.example}"</p>
                </div>
              </div>
            </div>

            {term.related.length > 0 && (
              <div className="pt-8 border-t border-border-subtle/50">
                <h3 className="text-sm font-bold text-text-subtle uppercase tracking-widest mb-6 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> Related Terms
                </h3>
                <div className="flex flex-wrap gap-3">
                  {term.related.map((relatedTerm) => {
                    const relatedObj = glossaryTerms.find(
                      (t) => t.term.toLowerCase() === relatedTerm.toLowerCase()
                    );
                    
                    if (relatedObj) {
                      return (
                        <Link key={relatedTerm} href={`/glossary/${relatedObj.id}`}>
                          <span className="inline-flex items-center px-5 py-2.5 rounded-xl bg-bg-soft hover:bg-brand-primary/10 hover:text-brand-primary text-sm font-bold transition-all cursor-pointer border border-transparent hover:border-brand-primary/20 hover:shadow-lg hover:-translate-y-0.5">
                            {relatedTerm}
                          </span>
                        </Link>
                      );
                    }
                    
                    return (
                      <span key={relatedTerm} className="inline-flex items-center px-5 py-2.5 rounded-xl bg-bg-soft text-text-muted text-sm font-medium opacity-50 cursor-not-allowed border border-transparent">
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
