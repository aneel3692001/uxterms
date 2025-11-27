import { GlassCard } from "@/components/glass-card";
import { ExternalLink, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";

const resources = [
  {
    title: "Figma",
    description: "The industry standard interface design tool.",
    category: "Tool",
    link: "https://figma.com",
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes and project management.",
    category: "Productivity",
    link: "https://notion.so",
  },
  {
    title: "Contrast Checker",
    description: "Ensure your designs meet WCAG accessibility standards.",
    category: "Accessibility",
    link: "#",
  },
  {
    title: "Design System Checklist",
    description: "A comprehensive guide to building robust design systems.",
    category: "Template",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resources</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Curated tools and templates to supercharge your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <Link key={i} href={resource.link} target="_blank">
              <GlassCard hoverEffect className="h-full flex flex-col justify-between p-6 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                      {resource.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-text-subtle group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{resource.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{resource.description}</p>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
          
          {/* Ad Placeholder */}
          <GlassCard className="flex flex-col justify-center items-center text-center p-8 border-dashed border-2 border-border-subtle bg-bg-soft/50 hover:bg-bg-soft transition-colors cursor-pointer group">
            <h3 className="font-bold text-text-primary mb-2">Sponsor Slot</h3>
            <p className="text-sm text-text-muted mb-4">
              Your tool could be featured here.
            </p>
            <Button variant="ghost" size="sm" className="group-hover:text-brand-primary">Contact Us</Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
