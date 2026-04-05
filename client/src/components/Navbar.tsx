/*
 * AcquireMe Navbar — Editorial Luxury Design
 * Swiss-modernist navigation with Instrument Serif wordmark
 * Dark background, warm ivory text, teal accents
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const navLinks = [
  { href: "/listings", label: "Browse Listings" },
  { href: "/sell", label: "Sell a Business" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-teal flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
          <span className="font-serif text-2xl text-foreground tracking-tight">
            Acquire<span className="text-teal">Me</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location === link.href
                  ? "text-teal"
                  : "text-ivory-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm text-ivory-muted hover:text-foreground hover:bg-white/5"
            onClick={() => {
              toast("Sign in coming soon", { description: "This feature is under development." });
            }}
          >
            Sign In
          </Button>
          <Link href="/sell">
            <Button className="bg-teal hover:bg-teal-dark text-background text-sm font-semibold gap-1.5 px-5">
              List Your Business
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium py-2 ${
                    location === link.href ? "text-teal" : "text-ivory-muted"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full border-white/10 text-foreground"
                  onClick={() => {
                    toast("Sign in coming soon");
                    setMobileOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Link href="/sell" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-teal hover:bg-teal-dark text-background font-semibold">
                    List Your Business
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
