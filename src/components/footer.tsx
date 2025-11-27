import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                UX
              </div>
              <span>UX Terms</span>
            </div>
            <p className="text-sm text-text-muted max-w-xs">
              Gamified learning platform for Product, UX, and UI Design. Master the craft through practice.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/glossary" className="hover:text-brand-primary transition-colors">Glossary</Link></li>
              <li><Link href="/quizzes" className="hover:text-brand-primary transition-colors">Quizzes</Link></li>
              <li><Link href="/challenges" className="hover:text-brand-primary transition-colors">Challenges</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/resources" className="hover:text-brand-primary transition-colors">Tools</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Templates</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-subtle text-center text-sm text-text-subtle">
          © {new Date().getFullYear()} UX Terms. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
}
