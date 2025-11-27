"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";
import { glossaryTerms } from "@/data/glossary";
import { Search } from "lucide-react";
import Link from "next/link";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  
  const filteredTerms = glossaryTerms.filter((term) =>
    term.term.toLowerCase().includes(search.toLowerCase()) ||
    term.definition.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Design Glossary</h1>
          <p className="text-text-muted text-lg">
            The essential vocabulary of Product, UX, and UI Design.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl bg-bg-elevated border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
          />
        </div>

        {/* Terms List */}
        <div className="space-y-12">
          {letters.length === 0 ? (
            <div className="text-center py-12 text-text-muted">
              No terms found matching "{search}"
            </div>
          ) : (
            letters.map((letter) => (
              <div key={letter} className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-blue border-b border-border-subtle pb-2">
                  {letter}
                </h2>
                <div className="grid gap-4">
                  {groupedTerms[letter].map((term) => (
                    <GlassCard key={term.id} className="space-y-2">
                      <h3 className="text-xl font-bold">{term.term}</h3>
                      <p className="text-text-muted">{term.definition}</p>
                      <div className="pt-2">
                        <span className="text-xs font-semibold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
                          Example
                        </span>
                        <p className="text-sm mt-1 text-text-subtle italic">
                          "{term.example}"
                        </p>
                      </div>
                    </GlassCard>
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
