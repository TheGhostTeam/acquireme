/*
 * AcquireMe Home Page — Main Street Edition
 * Targeting retiring baby boomers and trades business owners
 * Warm, trustworthy, direct. No jargon.
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Clock,
  DollarSign,
  BarChart3,
  ChevronRight,
  Wrench,
  Zap,
  Leaf,
  Car,
  UtensilsCrossed,
  ShoppingBag,
  HardHat,
  Sparkles,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { listings, CATEGORIES } from "@/lib/data";

const categoryConfig: Record<string, { icon: React.ReactNode; count: number }> = {
  "Plumbing & HVAC":           { icon: <Wrench className="w-5 h-5" />,        count: 834 },
  "Electrical Services":       { icon: <Zap className="w-5 h-5" />,           count: 612 },
  "Landscaping & Lawn Care":   { icon: <Leaf className="w-5 h-5" />,          count: 743 },
  "Auto Repair & Body Shops":  { icon: <Car className="w-5 h-5" />,           count: 521 },
  "Restaurants & Diners":      { icon: <UtensilsCrossed className="w-5 h-5" />, count: 1243 },
  "Retail & Local Stores":     { icon: <ShoppingBag className="w-5 h-5" />,   count: 892 },
  "Construction & Contracting":{ icon: <HardHat className="w-5 h-5" />,       count: 934 },
  "Cleaning Services":         { icon: <Sparkles className="w-5 h-5" />,      count: 412 },
};

const featuredListings = listings.filter((l) => l.featured);

export default function Home() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Industries");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCategory !== "All Industries") params.set("category", selectedCategory);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format"
            alt="American tradesmen at work"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-teal" />
              <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">
                America's Main Street Marketplace
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.0] mb-6"
            >
              Ready to Retire?{" "}
              <br />
              <span className="italic text-teal">Sell the Business</span>
              <br />
              You Built.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-ivory-muted max-w-xl mb-10 leading-relaxed"
            >
              AcquireMe is the trusted marketplace for Main Street business owners —
              trades, services, restaurants, and local shops. Real buyers, simple
              process, fair value for everything you've built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                <input
                  type="text"
                  placeholder="Search by trade, city, or business type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full pl-11 pr-4 py-3.5 bg-surface-1 border border-white/[0.08] rounded-lg text-sm text-foreground placeholder:text-ivory-muted/60 focus:outline-none focus:border-teal/40 focus:ring-1 focus:ring-teal/20 transition-all"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3.5 bg-surface-1 border border-white/[0.08] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40 sm:w-48"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Button
                onClick={handleSearch}
                className="bg-teal hover:bg-teal-dark text-background font-semibold px-8 py-3.5 h-auto"
              >
                Search
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-5 mt-10 text-sm text-ivory-muted"
            >
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                No broker fees
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                Pre-screened buyers only
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                Free valuation tool
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal" />
                Real people, real support
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-surface-1/50 relative grain">
        <div className="container py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={2400}  suffix="+"  label="Active Listings" />
            <AnimatedCounter end={480}   prefix="$"  suffix="M+" label="In Deals Closed" />
            <AnimatedCounter end={18000} suffix="+"  label="Registered Buyers" />
            <AnimatedCounter end={1200}  suffix="+"  label="Businesses Sold" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Ready to Sell</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground">Featured Businesses for Sale</h2>
              <p className="text-ivory-muted mt-2 text-sm">Verified listings from owners who are ready to retire.</p>
            </div>
            <Link href="/listings">
              <Button variant="ghost" className="text-ivory-muted hover:text-teal gap-1 hidden sm:flex">
                View all listings <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredListings.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-teal" />
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Browse by Trade</span>
              <div className="h-px w-6 bg-teal" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Find Your Kind of Business</h2>
            <p className="text-ivory-muted max-w-lg mx-auto">
              From plumbing and HVAC to restaurants and retail — we specialize in the businesses that make communities run.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(categoryConfig).map(([name, { icon, count }], i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link href={`/listings?category=${encodeURIComponent(name)}`}>
                  <div className="group flex items-center gap-4 p-5 bg-surface-1 border border-white/[0.06] rounded-lg hover:border-teal/30 hover:bg-surface-2 transition-all duration-300">
                    <div className="w-10 h-10 rounded-md bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-background transition-all duration-300 shrink-0">{icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{name}</p>
                      <p className="text-xs text-ivory-muted">{count.toLocaleString()} listings</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-ivory-muted group-hover:text-teal transition-colors shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Selling your business shouldn't be complicated</h2>
            <p className="text-ivory-muted max-w-xl mx-auto">We built AcquireMe for business owners — not lawyers or bankers. Four steps and you're done.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-6">
            {[
              { step: "01", icon: <BarChart3 className="w-6 h-6" />, title: "Get Your Free Valuation", description: "Enter a few numbers and get an honest estimate of what your business is worth. No strings attached — takes 2 minutes." },
              { step: "02", icon: <Search className="w-6 h-6" />, title: "List in 15 Minutes", description: "Our simple form walks you through step by step. No confusing jargon, no tech headaches. We review every listing before it goes live." },
              { step: "03", icon: <ShieldCheck className="w-6 h-6" />, title: "Meet Serious Buyers", description: "We match you with pre-screened, qualified buyers in your industry. No tire-kickers. You control who gets your contact information." },
              { step: "04", icon: <DollarSign className="w-6 h-6" />, title: "Close and Retire", description: "When you find the right buyer, we guide you through every step — from first offer to final handshake. Simple, clear, done." },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="mb-4"><span className="font-mono text-6xl font-bold text-white/[0.04]">{item.step}</span></div>
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-5">{item.icon}</div>
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface-1 to-surface-2 border border-white/[0.06] p-10 lg:p-16">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5 leading-tight">
                Built Over Decades.<br /><span className="italic text-teal">Sold in Weeks.</span>
              </h2>
              <p className="text-ivory-muted text-lg mb-8 leading-relaxed max-w-lg">
                You've put your life into your business — the early mornings, the long seasons, the crew you've built. You deserve an exit that reflects everything you put in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/sell">
                  <Button className="bg-teal hover:bg-teal-dark text-background font-semibold px-8 py-3 h-auto text-base gap-2">
                    Get My Free Valuation <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/listings">
                  <Button variant="outline" className="border-white/10 text-foreground hover:bg-white/5 px-8 py-3 h-auto text-base">Browse Businesses</Button>
                </Link>
              </div>
              <p className="text-xs text-ivory-muted mt-4">Free to start · No broker commissions · $79/mo to list</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5">
              10,000 boomers retire every day.<br />
              <span className="italic text-teal">Don't leave your business behind.</span>
            </h2>
            <p className="text-ivory-muted text-lg max-w-lg mx-auto mb-10">
              Start with a free valuation. No pressure, no commitment. Just an honest look at what you've built — and what it's worth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/sell">
                <Button className="bg-teal hover:bg-teal-dark text-background font-semibold px-10 py-3.5 h-auto text-base gap-2">
                  Get My Free Valuation <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/listings">
                <Button variant="outline" className="border-white/10 text-foreground hover:bg-white/5 px-10 py-3.5 h-auto text-base">
                  Browse Businesses for Sale
                </Button>
              </Link>
            </div>
            <p className="text-xs text-ivory-muted mt-4">Free to start · No broker commissions · Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
