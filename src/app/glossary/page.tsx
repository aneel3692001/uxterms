"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { glossaryTerms } from "@/data/glossary";
import { Search, ChevronRight, Hash } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Design Glossary</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            The essential vocabulary of Product, UX, and UI Design.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-6 sticky top-20 z-40 bg-bg-base/80 backdrop-blur-xl py-4 -mx-4 px-4 md:mx-0 md:px-0 transition-all">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-bg-glass border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm"
            />
          </div>

          {/* A-Z Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide mask-linear-fade">
            <button
              onClick={() => setActiveLetter(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                activeLetter === null
                  ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                  : "bg-bg-glass border-border-subtle text-text-muted hover:bg-bg-soft"
              )}
            >
              All
            </button>
            {allLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter === activeLetter ? null : letter)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all shrink-0 border",
                  activeLetter === letter
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-bg-glass border-border-subtle text-text-muted hover:bg-bg-soft"
                )}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-12">
          {letters.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-bg-soft rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">No terms found</h3>
              <p className="text-text-muted">Try adjusting your search or filter.</p>
              <button 
                onClick={() => { setSearch(""); setActiveLetter(null); }}
                className="mt-4 text-brand-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            letters.map((letter) => (
              <div key={letter} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-brand-primary/20">
                    {letter}
                  </h2>
                  <div className="h-px flex-1 bg-border-subtle" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedTerms[letter].map((term) => (
                    <Link key={term.id} href={`/glossary/${term.id}`}>
                      <GlassCard hoverEffect className="h-full group flex flex-col justify-between p-6">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-bold group-hover:text-brand-primary transition-colors">
                              {term.term}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-text-subtle group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-text-muted text-sm line-clamp-2">
                            {term.definition}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-border-subtle/50 flex flex-wrap gap-2">
                          {term.related.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-bg-soft text-text-subtle">
                              {tag}
                            </span>
                          ))}
                          {term.related.length > 2 && (
                            <span className="text-xs px-2 py-1 rounded-md bg-bg-soft text-text-subtle">
                              +{term.related.length - 2}
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
