/*
 * AcquireMe Footer — Main Street Edition
 */

import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Browse",
    links: [
      { label: "Plumbing & HVAC",         href: "/listings?category=Plumbing+%26+HVAC" },
      { label: "Electrical Services",      href: "/listings?category=Electrical+Services" },
      { label: "Landscaping & Lawn Care",  href: "/listings?category=Landscaping+%26+Lawn+Care" },
      { label: "Auto Repair & Body Shops", href: "/listings?category=Auto+Repair+%26+Body+Shops" },
      { label: "Restaurants & Diners",     href: "/listings?category=Restaurants+%26+Diners" },
      { label: "All Businesses",           href: "/listings" },
    ],
  },
  {
    title: "Sellers",
    links: [
      { label: "Get a Free Valuation", href: "/sell" },
      { label: "List Your Business",   href: "/sell" },
      { label: "How It Works",         href: "/about" },
      { label: "Pricing",              href: "/sell" },
      { label: "Seller Resources",     href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AcquireMe",  href: "/about" },
      { label: "Our Mission",      href: "/about" },
      { label: "Contact Us",       href: "/about" },
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-teal" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-teal flex items-center justify-center">
                <span className="text-background font-bold text-sm">A</span>
              </div>
              <span className="font-serif text-2xl text-foreground tracking-tight">
                Acquire<span className="text-teal">Me</span>
              </span>
            </div>
            <p className="text-ivory-muted text-sm leading-relaxed max-w-sm mb-6">
              The marketplace built for Main Street America. We help retiring business owners — plumbers, electricians, restaurant owners, and more — find the right buyer and get the exit they've earned.
            </p>
            <div className="space-y-2">
              <a href="tel:+18005550000" className="flex items-center gap-2 text-sm text-ivory-muted hover:text-teal transition-colors">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                1-800-555-0000 — Free support
              </a>
              <a href="mailto:hello@acquireme.com" className="flex items-center gap-2 text-sm text-ivory-muted hover:text-teal transition-colors">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                hello@acquireme.com
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ivory-muted mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-teal transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory-muted">
            &copy; {new Date().getFullYear()} AcquireMe. All rights reserved. Built for Main Street America.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">No Hidden Fees</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
