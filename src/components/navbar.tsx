"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/button";

const navItems = [
  { name: "Glossary", href: "/glossary" },
  { name: "Quizzes", href: "/quizzes" },
  { name: "Challenges", href: "/challenges" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled 
            ? "bg-bg-glass/80 backdrop-blur-xl border-border-subtle shadow-sm supports-[backdrop-filter]:bg-bg-glass/60" 
            : "bg-transparent border-transparent py-2"
        )}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary overflow-hidden group-hover:scale-105 transition-transform duration-300">
               <Zap className="w-5 h-5 relative z-10" />
               <div className="absolute inset-0 bg-brand-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Ux<span className="text-brand-primary">Terms</span>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm bg-brand-accent/10 text-brand-primary border border-brand-primary/20 align-top">
                Beta
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-brand-primary"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-soft"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-brand-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" className="hidden lg:flex rounded-full px-5 bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg shadow-brand-primary/25 border-none">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl md:hidden pt-20 px-4"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "p-4 text-lg font-medium rounded-xl transition-all border border-transparent",
                    pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                      ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-soft"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-text-muted font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
