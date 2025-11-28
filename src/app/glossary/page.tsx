"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { glossaryTerms } from "@/data/glossary";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  
  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch = term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter ? term.term.startsWith(activeLetter) : true;
    return matchesSearch && matchesLetter;
  }).sort((a, b) => a.term.localeCompare(b.term));

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();
  const allLetters = Array.from(new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))).sort();

  return (
    <div className="container-custom py-24 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
            <BookOpen className="w-3 h-3" /> Dictionary
          </div>
          <h1 className="font-display">
            The <span className="warm-gradient-text">Design Glossary</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl leading-relaxed">
            The essential vocabulary of Product, UX, and UI Design. Master the language of the industry.
          </p>
        </div>

        {/* Search & Filter - FIXED: Letters now wrap */}
        <div className="sticky top-20 z-40 space-y-6 bg-bg-base/80 backdrop-blur-xl py-6 px-6 rounded-2xl border border-border-subtle shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a term..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 pl-14 pr-6 rounded-xl bg-bg-elevated/50 border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all shadow-sm text-lg placeholder:text-text-subtle"
              />
            </div>

            {/* A-Z Filter - FIXED: Now wraps instead of overflow-x */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveLetter(null)}
                className={cn(
                  "px-5 py-3 rounded-xl text-sm font-bold transition-all border",
                  activeLetter === null
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg accent-glow"
                    : "bg-bg-elevated border-border-subtle text-text-muted hover:bg-bg-soft hover:text-text-primary hover:border-brand-primary/30"
                )}
              >
                All
              </button>
              {allLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter === activeLetter ? null : letter)}
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-xl text-sm font-bold transition-all border",
                    activeLetter === letter
                      ? "bg-brand-primary text-white border-brand-primary shadow-lg accent-glow"
                      : "bg-bg-elevated border-border-subtle text-text-muted hover:bg-bg-soft hover:text-text-primary hover:border-brand-primary/30"
                  )}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-20">
          {letters.length === 0 ? (
            <div className="text-center py-32">
              <div className="w-24 h-24 bg-bg-soft rounded-full flex items-center justify-center mx-auto mb-6 text-text-muted">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No terms found</h3>
              <p className="text-text-muted text-lg">Try adjusting your search or filter.</p>
              <button 
                onClick={() => { setSearch(""); setActiveLetter(null); }}
                className="mt-8 px-6 py-3 rounded-full bg-brand-primary/10 text-brand-primary font-bold hover:bg-brand-primary/20 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            letters.map((letter) => (
              <div key={letter} className="space-y-8 scroll-mt-32" id={`letter-${letter}`}>
                {/* Letter Header */}
                <div className="flex items-center gap-6">
                  <h2 className="text-6xl font-black text-brand-primary/10 select-none font-display">
                    {letter}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-border-subtle to-transparent" />
                </div>
                
                {/* Term Cards - Equal Heights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedTerms[letter].map((term) => (
                    <Link key={term.id} href={`/glossary/${term.id}`} className="block h-full">
                      <GlassCard 
                        hoverEffect 
                        className="h-full group flex flex-col justify-between p-6 border-border-subtle hover:border-brand-primary/40 bg-bg-glass/50 min-h-[200px]" 
                        variant="flat"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors font-display">
                              {term.term}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-text-subtle group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0" />
                          </div>
                          <p className="text-text-muted leading-relaxed line-clamp-3 text-sm">
                            {term.definition}
                          </p>
                        </div>
                        
                        {/* Tags */}
                        <div className="pt-6 mt-6 border-t border-border-subtle/50 flex flex-wrap gap-2">
                          {term.related.slice(0, 3).map((tag) => (
                            <span 
                              key={tag} 
                              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-bg-soft text-text-subtle group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-colors border border-transparent group-hover:border-brand-primary/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {term.related.length > 3 && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-bg-soft text-text-subtle">
                              +{term.related.length - 3}
                            </span>
                          )}
                        </div>
                      </GlassCard>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
