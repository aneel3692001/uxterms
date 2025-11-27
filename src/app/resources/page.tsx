import { GlassCard } from "@/components/glass-card";
import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/button";

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
          <p className="text-text-muted text-lg">
            Curated tools and templates to supercharge your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, i) => (
            <GlassCard key={i} hoverEffect className="flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-bg-soft text-text-muted">
                  {resource.category}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-text-muted text-sm">{resource.description}</p>
                </div>
              </div>
              <div className="pt-6">
                <Button variant="outline" className="w-full gap-2 group">
                  Visit Website 
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </GlassCard>
          ))}
          
          {/* Ad Placeholder */}
          <GlassCard className="flex flex-col justify-center items-center text-center p-8 border-dashed border-2 border-brand-blue/20 bg-brand-blue/5">
            <h3 className="font-bold text-brand-blue mb-2">Sponsor Slot</h3>
            <p className="text-sm text-text-muted mb-4">
              Your tool could be featured here.
            </p>
            <Button variant="ghost" size="sm">Contact Us</Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
