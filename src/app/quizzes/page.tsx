import { GlassCard } from "@/components/glass-card";
import { quizzes } from "@/data/quizzes";
import { ArrowRight, BrainCircuit, Palette } from "lucide-react";
import Link from "next/link";

export default function QuizzesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Quizzes</h1>
          <p className="text-text-muted text-lg">
            Test your knowledge and earn XP. Choose a category to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((category) => (
            <Link key={category.id} href={`/quizzes/${category.id}`}>
              <GlassCard hoverEffect className="h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {category.id === "ui-design" ? (
                      <Palette className="w-6 h-6" />
                    ) : (
                      <BrainCircuit className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-text-muted text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="pt-6 flex items-center text-sm font-medium text-brand-blue group-hover:translate-x-1 transition-transform">
                  Start Quiz <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
