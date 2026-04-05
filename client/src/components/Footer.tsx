/*
 * AcquireMe Footer — Editorial Luxury Design
 * Clean, organized footer with teal rule line accent
 */
import { Link } from "wouter";

const footerSections = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse Listings", href: "/listings" },
      { label: "Featured Businesses", href: "/listings" },
      { label: "Recently Added", href: "/listings" },
      { label: "SBA Pre-Qualified", href: "/listings" },
    ],
  },
  {
    title: "Sellers",
    links: [
      { label: "List Your Business", href: "/sell" },
      { label: "Valuation Tool", href: "/sell" },
      { label: "Seller Resources", href: "/about" },
      { label: "Find a Broker", href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AcquireMe", href: "/about" },
      { label: "How It Works", href: "/about" },
      { label: "Blog", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background relative">
      {/* Teal rule line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-teal" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
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
              The modern marketplace where entrepreneurs discover, evaluate, and acquire profitable businesses. Built for the next generation of business owners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-ivory-muted hover:text-teal transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-ivory-muted hover:text-teal transition-colors text-sm">Twitter</a>
              <a href="#" className="text-ivory-muted hover:text-teal transition-colors text-sm">Instagram</a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ivory-muted mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-teal transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory-muted">
            &copy; {new Date().getFullYear()} AcquireMe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-ivory-muted hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
