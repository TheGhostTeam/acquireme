/*
 * AcquireMe Navbar — Main Street Edition
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/listings", label: "Browse Businesses" },
  { href: "/sell",     label: "Sell Your Business" },
  { href: "/about",    label: "About Us" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 lg:h-18">

        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-teal flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
          <span className="font-serif text-2xl text-foreground tracking-tight">
            Acquire<span className="text-teal">Me</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location === link.href ? "text-teal" : "text-ivory-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18005550000" className="flex items-center gap-1.5 text-sm text-ivory-muted hover:text-teal transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">1-800-555-0000</span>
          </a>
          <Link href="/sell">
            <Button className="bg-teal hover:bg-teal-dark text-background text-sm font-semibold gap-1.5 px-5">
              Free Valuation
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

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
                <Link key={link.href} href={link.href}
                  className={`text-lg font-medium py-2 ${location === link.href ? "text-teal" : "text-ivory-muted"}`}
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <a href="tel:+18005550000"
                  className="flex items-center justify-center gap-2 py-3 text-sm text-ivory-muted border border-white/10 rounded-lg hover:text-teal transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Us: 1-800-555-0000
                </a>
                <Link href="/sell" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-teal hover:bg-teal-dark text-background font-semibold">
                    Get My Free Valuation
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
