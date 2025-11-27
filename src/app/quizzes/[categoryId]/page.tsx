import { quizzes } from "@/data/quizzes";
import { QuizRunner } from "@/components/quiz-runner";
import { notFound } from "next/navigation";

interface QuizPageProps {
  params: {
    categoryId: string;
  };
}

// Generate static params for all quizzes
export function generateStaticParams() {
  return quizzes.map((quiz) => ({
    categoryId: quiz.id,
  }));
}

export default function QuizPage({ params }: QuizPageProps) {
  const category = quizzes.find((q) => q.id === params.categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <QuizRunner category={category} />
    </div>
  );
}
