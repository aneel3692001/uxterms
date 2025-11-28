import { GlassCard } from "@/components/glass-card";
import { quizzes } from "@/data/quizzes";
import { ArrowRight, BrainCircuit, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function QuizzesPage() {
  return (
    <div className="container-custom py-24 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-6 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
            <Zap className="w-3 h-3" /> Skill Check
          </div>
          <h1 className="font-display">
            Interactive <span className="warm-gradient-text">Quizzes</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl leading-relaxed">
            Test your knowledge and earn XP. Choose a category to begin your journey to mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quizzes.map((category) => (
            <Link key={category.id} href={`/quizzes/${category.id}`} className="block h-full">
              <GlassCard 
                hoverEffect 
                className="h-full flex flex-col justify-between group p-10 border-border-subtle hover:border-brand-primary/40 bg-bg-glass/50" 
                variant="elevated"
              >
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-2xl shadow-brand-primary/5 group-hover:shadow-brand-primary/30 group-hover:scale-110 group-hover:rotate-3">
                    {category.id === "ui-design" ? (
                      <Palette className="w-10 h-10" />
                    ) : (
                      <BrainCircuit className="w-10 h-10" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 font-display group-hover:text-brand-primary transition-colors duration-300">{category.title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="pt-10 flex items-center text-lg font-bold text-brand-primary group-hover:translate-x-2 transition-transform">
                  Start Quiz <ArrowRight className="w-6 h-6 ml-3" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
