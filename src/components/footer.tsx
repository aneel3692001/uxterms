import Link from "next/link";
import { Twitter, Linkedin, Github, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-elevated/30 backdrop-blur-md pt-24 pb-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-transform">
                <span className="font-display font-bold text-lg">Ux</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">UxTerms</span>
            </Link>
            <p className="text-text-muted leading-relaxed max-w-sm">
              The essential gamified learning platform for Product, UX, and UI Design. 
              Master the craft through interactive quizzes, real-world challenges, and a comprehensive glossary.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Globe className="w-5 h-5" />} label="Website" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display font-bold text-text-primary mb-6">Platform</h4>
              <ul className="space-y-4">
                <FooterLink href="/glossary">Design Glossary</FooterLink>
                <FooterLink href="/quizzes">Interactive Quizzes</FooterLink>
                <FooterLink href="/challenges">Design Challenges</FooterLink>
                <FooterLink href="/roadmap">Skill Roadmap</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-text-primary mb-6">Resources</h4>
              <ul className="space-y-4">
                <FooterLink href="/tools">Free Tools</FooterLink>
                <FooterLink href="/templates">Templates</FooterLink>
                <FooterLink href="/blog">Design Blog</FooterLink>
                <FooterLink href="/community">Community</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-text-primary mb-6">Company</h4>
              <ul className="space-y-4">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-subtle">
          <p>© {new Date().getFullYear()} UxTerms. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-brand-primary">♥</span> for designers
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-surface border border-border-subtle text-text-muted hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-200"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-text-muted hover:text-brand-primary transition-colors duration-200 text-sm font-medium"
      >
        {children}
      </Link>
    </li>
  );
}
