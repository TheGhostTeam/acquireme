/*
 * AcquireMe About Page — Editorial Luxury Design
 * Company story, mission, team, and trust signals
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Eye,
  Sparkles,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">
                  About AcquireMe
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
                Modernizing how businesses{" "}
                <span className="italic text-teal">change hands</span>
              </h1>
              <p className="text-lg text-ivory-muted leading-relaxed max-w-2xl">
                The business marketplace hasn't evolved in decades. We're building the platform that entrepreneurs deserve — modern, transparent, and designed for the way deals happen today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-surface-1/50 relative grain">
        <div className="container py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={12400} suffix="+" label="Active Listings" />
            <AnimatedCounter end={50000} suffix="+" label="Verified Buyers" />
            <AnimatedCounter end={8500} suffix="+" label="Deals Closed" />
            <AnimatedCounter end={98} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
              </div>
              <p className="text-ivory-muted leading-relaxed mb-4">
                To democratize business ownership by creating the most transparent, efficient, and trustworthy marketplace for buying and selling businesses of all sizes.
              </p>
              <p className="text-ivory-muted leading-relaxed">
                We believe that every entrepreneur deserves access to the same quality tools and market reach that was once reserved for large M&A firms. Whether you're selling a neighborhood restaurant or a multi-million dollar SaaS company, AcquireMe levels the playing field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-teal" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="text-ivory-muted leading-relaxed mb-4">
                A world where buying or selling a business is as straightforward and transparent as any modern transaction — powered by data, protected by technology, and guided by expertise.
              </p>
              <p className="text-ivory-muted leading-relaxed">
                We envision a future where AI-powered valuations, verified financial data, and streamlined deal processes make business acquisitions accessible to everyone — not just those with Wall Street connections.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-teal" />
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Our Difference</span>
              <div className="h-px w-6 bg-teal" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground">
              What sets us apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Modern Technology",
                description: "AI-powered valuations, smart matching algorithms, and a platform built with modern technology — not legacy software from the 2000s.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Verified & Trusted",
                description: "Every listing is reviewed by our team. Financial data is validated. Buyers are pre-qualified. Trust is built into every interaction.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "All Business Types",
                description: "From Main Street brick-and-mortar to digital SaaS companies — we serve every industry and business size.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Data-Driven Insights",
                description: "Market reports, comparable sales data, and industry benchmarks help you make informed decisions.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Network",
                description: "Access our network of M&A advisors, business brokers, attorneys, and SBA lenders to support your transaction.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Premium Experience",
                description: "A beautiful, intuitive platform that respects your time and makes the complex process of buying or selling a business feel effortless.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-1 border border-white/[0.06] rounded-xl p-6 hover:border-teal/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5">
              Ready to get started?
            </h2>
            <p className="text-ivory-muted text-lg max-w-lg mx-auto mb-10">
              Whether you're buying or selling, AcquireMe is the modern platform built for your success.
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
