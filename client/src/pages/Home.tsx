/*
 * AcquireMe Home Page — Editorial Luxury Design
 * Hero with gradient mesh bg, animated stats, featured listings,
 * category grid, sell CTA, and trust section
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ChevronRight,
  Building2,
  UtensilsCrossed,
  Laptop,
  ShoppingBag,
  Factory,
  Heart,
  Briefcase,
  Wrench,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { listings, CATEGORIES } from "@/lib/data";

const categoryCounts: Record<string, number> = {
  "Restaurants & Food": 1243,
  "Technology & SaaS": 892,
  "Retail & E-Commerce": 2156,
  "Manufacturing": 634,
  "Healthcare & Wellness": 978,
  "Professional Services": 1567,
  "Construction & Trades": 1834,
  "Hospitality & Hotels": 723,
  "Education & Training": 412,
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Restaurants & Food": <UtensilsCrossed className="w-5 h-5" />,
  "Technology & SaaS": <Laptop className="w-5 h-5" />,
  "Retail & E-Commerce": <ShoppingBag className="w-5 h-5" />,
  "Manufacturing": <Factory className="w-5 h-5" />,
  "Healthcare & Wellness": <Heart className="w-5 h-5" />,
  "Professional Services": <Briefcase className="w-5 h-5" />,
  "Construction & Trades": <Wrench className="w-5 h-5" />,
  "Hospitality & Hotels": <Building2 className="w-5 h-5" />,
  "Education & Training": <GraduationCap className="w-5 h-5" />,
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

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663496248255/eHQVkZv4wYe8DuYjaQEcSe/hero-bg-FFeSSQm55PHuzLiZuKFKdK.webp"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-teal" />
              <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">
                The Modern Business Marketplace
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6"
            >
              Acquire your{" "}
              <span className="italic text-teal">next</span>
              <br />
              great business
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-ivory-muted max-w-xl mb-10 leading-relaxed"
            >
              Discover verified businesses for sale across every industry. From Main Street to SaaS — find, evaluate, and close your deal with confidence.
            </motion.p>

            {/* Search Bar */}
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
                  placeholder="Search businesses, industries, locations..."
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

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10 text-sm text-ivory-muted"
            >
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                12,000+ active listings
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                $2.8B+ in deal volume
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                50,000+ verified buyers
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-white/[0.06] bg-surface-1/50 relative grain">
        <div className="container py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={12400} suffix="+" label="Active Listings" />
            <AnimatedCounter end={2800} prefix="$" suffix="M+" label="Deal Volume" />
            <AnimatedCounter end={50000} suffix="+" label="Verified Buyers" />
            <AnimatedCounter end={8500} suffix="+" label="Successful Sales" />
          </div>
        </div>
      </section>

      {/* ===== FEATURED LISTINGS ===== */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Curated Selection</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground">
                Featured Opportunities
              </h2>
            </div>
            <Link href="/listings">
              <Button variant="ghost" className="text-ivory-muted hover:text-teal gap-1 hidden sm:flex">
                View all listings
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredListings.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/listings">
              <Button variant="ghost" className="text-ivory-muted hover:text-teal gap-1">
                View all listings
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-teal" />
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Explore</span>
              <div className="h-px w-6 bg-teal" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              Browse by Industry
            </h2>
            <p className="text-ivory-muted max-w-lg mx-auto">
              From restaurants to SaaS companies, find businesses across every sector of the economy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {Object.entries(categoryIcons).map(([name, icon], i) => {
              const count = categoryCounts[name] || 0;
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link href={`/listings?category=${encodeURIComponent(name)}`}>
                    <div className="group flex items-center gap-4 p-5 bg-surface-1 border border-white/[0.06] rounded-lg hover:border-teal/30 hover:bg-surface-2 transition-all duration-300">
                      <div className="w-10 h-10 rounded-md bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-background transition-all duration-300">
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{name}</p>
                        <p className="text-xs text-ivory-muted">{count.toLocaleString()} listings</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-ivory-muted group-hover:text-teal transition-colors shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-teal" />
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">How It Works</span>
              <div className="h-px w-6 bg-teal" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              Three steps to your next acquisition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                icon: <Search className="w-6 h-6" />,
                title: "Discover",
                description: "Browse thousands of verified listings across every industry. Use advanced filters to find businesses that match your criteria, budget, and goals.",
              },
              {
                step: "02",
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Evaluate",
                description: "Access detailed financials, AI-powered valuations, and market comparables. Make informed decisions with comprehensive due diligence tools.",
              },
              {
                step: "03",
                icon: <Zap className="w-6 h-6" />,
                title: "Acquire",
                description: "Connect directly with sellers, submit offers, and close deals. Our platform facilitates secure transactions from LOI to closing.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="mb-6">
                  <span className="font-mono text-6xl font-bold text-white/[0.04]">{item.step}</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELL CTA ===== */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface-1 to-surface-2 border border-white/[0.06] p-10 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">For Sellers</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5 leading-tight">
                Ready to sell?<br />
                <span className="italic text-teal">We'll find your buyer.</span>
              </h2>
              <p className="text-ivory-muted text-lg mb-8 leading-relaxed max-w-lg">
                List your business on the most modern marketplace. Reach thousands of qualified buyers, get AI-powered valuations, and close your deal faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/sell">
                  <Button className="bg-teal hover:bg-teal-dark text-background font-semibold px-8 py-3 h-auto text-base gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-white/10 text-foreground hover:bg-white/5 px-8 py-3 h-auto text-base">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / WHY ACQUIREME ===== */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Why AcquireMe</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                Built for the modern<br />
                <span className="italic">entrepreneur</span>
              </h2>
              <p className="text-ivory-muted leading-relaxed mb-8">
                The business marketplace hasn't evolved in decades. We're changing that with modern technology, transparent data, and a premium experience designed for serious buyers and sellers.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Verified Listings",
                    desc: "Every listing is reviewed and verified by our team. Financial data is validated to ensure accuracy and transparency.",
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "AI-Powered Valuations",
                    desc: "Get instant, data-driven business valuations using our proprietary AI model trained on thousands of transactions.",
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Faster Closings",
                    desc: "Our streamlined process and digital tools help you close deals 40% faster than traditional methods.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-ivory-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="relative">
              <div className="bg-surface-1 border border-white/[0.06] rounded-xl p-8 lg:p-10 gradient-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "AcquireMe made selling my restaurant group seamless. The platform connected me with serious buyers, and I closed at 15% above my asking price."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                    <span className="font-semibold text-teal">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Michael Rodriguez</p>
                    <p className="text-xs text-ivory-muted">Sold 3-location restaurant group · $2.1M</p>
                  </div>
                </div>
              </div>

              {/* Second testimonial */}
              <div className="bg-surface-1 border border-white/[0.06] rounded-xl p-6 mt-4 ml-8 gradient-border">
                <blockquote className="text-sm text-foreground/80 italic mb-4">
                  "Found and acquired a profitable SaaS business in under 30 days. The AI valuation tool gave me confidence in my offer."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center">
                    <span className="font-semibold text-teal text-xs">SK</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs">Sarah Kim</p>
                    <p className="text-[11px] text-ivory-muted">Acquired SaaS platform · $450K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5">
              Your next chapter starts here
            </h2>
            <p className="text-ivory-muted text-lg max-w-lg mx-auto mb-10">
              Join thousands of entrepreneurs who trust AcquireMe to find their next great business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/listings">
                <Button className="bg-teal hover:bg-teal-dark text-background font-semibold px-10 py-3.5 h-auto text-base gap-2">
                  Browse Listings
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/sell">
                <Button variant="outline" className="border-white/10 text-foreground hover:bg-white/5 px-10 py-3.5 h-auto text-base">
                  List Your Business
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
