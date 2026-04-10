/*
 * AcquireMe About Page — Main Street Edition
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Eye, ShieldCheck, DollarSign, Users, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">Our Story</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
                Built for the People<br />
                <span className="italic text-teal">Who Built America</span>
              </h1>
              <p className="text-lg text-ivory-muted leading-relaxed max-w-2xl">
                Every day, 10,000 baby boomers retire. Many of them own the backbone of America — the plumbing companies, the auto shops, the diners, the landscaping crews. AcquireMe exists to make sure those businesses find the right next owner, and those owners get the retirement they've earned.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-surface-1/50 relative grain">
        <div className="container py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={2400}  suffix="+" label="Active Listings" />
            <AnimatedCounter end={18000} suffix="+" label="Registered Buyers" />
            <AnimatedCounter end={1200}  suffix="+" label="Businesses Sold" />
            <AnimatedCounter end={97}    suffix="%" label="Seller Satisfaction" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-teal" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
              </div>
              <p className="text-ivory-muted leading-relaxed mb-4">
                Our mission is simple: help hardworking business owners get a fair, dignified exit. Not just a transaction — a proper send-off for the business they spent their life building.
              </p>
              <p className="text-ivory-muted leading-relaxed">
                The business marketplace has been broken for decades. Too complicated, too expensive, too focused on big deals and tech companies. We're fixing that — specifically for the plumbers, electricians, restaurant owners, and shop owners who keep America running.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-teal" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="text-ivory-muted leading-relaxed mb-4">
                A marketplace where any business owner — whether they run a two-truck plumbing company or a 50-person HVAC firm — can confidently sell their business without needing a broker, a lawyer, or a Wall Street connection.
              </p>
              <p className="text-ivory-muted leading-relaxed">
                And for buyers, a clear, trustworthy path to owning a real, profitable Main Street business — the kind that serves a neighborhood and generates steady, predictable income year after year.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Why Now</span>
                <div className="h-px w-6 bg-teal" />
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                The biggest business transfer in American history
              </h2>
            </div>
            <div className="bg-surface-1 border border-white/[0.06] rounded-2xl p-8 lg:p-12 gradient-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
                <div>
                  <p className="font-mono text-4xl font-bold text-teal mb-2">$10T</p>
                  <p className="text-sm text-ivory-muted">in small business value owned by baby boomers</p>
                </div>
                <div>
                  <p className="font-mono text-4xl font-bold text-teal mb-2">10,000</p>
                  <p className="text-sm text-ivory-muted">boomers retire every single day</p>
                </div>
                <div>
                  <p className="font-mono text-4xl font-bold text-teal mb-2">~70%</p>
                  <p className="text-sm text-ivory-muted">of family businesses don't survive the owner's retirement</p>
                </div>
              </div>
              <p className="text-ivory-muted leading-relaxed text-center max-w-2xl mx-auto">
                Without a clear path to sell, too many great businesses just close their doors — leaving crews without jobs and communities without the services they depend on. AcquireMe is here to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-6 bg-teal" />
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-medium">Our Difference</span>
              <div className="h-px w-6 bg-teal" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground">What sets AcquireMe apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Built for Main Street, Not Wall Street", description: "We don't serve venture-backed startups or private equity firms. We serve the plumber, the landscaper, the diner owner — business owners who built something real." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Honest and Transparent", description: "Our pricing is clear, our process is simple, and we won't hit you with surprise commissions. What you see is what you get — always." },
              { icon: <DollarSign className="w-6 h-6" />, title: "Fair Valuations for Real Businesses", description: "We understand how trades businesses and Main Street companies are valued. Our estimates are based on real sales — not Silicon Valley multiples." },
              { icon: <Clock className="w-6 h-6" />, title: "We Respect Your Timeline", description: "Selling your life's work isn't something to rush. We're here for you whether it takes 6 weeks or 6 months — you set the pace." },
              { icon: <Users className="w-6 h-6" />, title: "We Protect Your Legacy", description: "We help you find buyers who will take care of your crew, your customers, and the reputation you spent years building. That matters to us." },
              { icon: <Phone className="w-6 h-6" />, title: "Real People, Real Support", description: "Every seller gets real human support. Call us, email us — we answer. No bots, no ticket queues, no runaround." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-surface-1 border border-white/[0.06] rounded-xl p-6 hover:border-teal/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-5">Ready to take the next step?</h2>
            <p className="text-ivory-muted text-lg max-w-lg mx-auto mb-10">
              Whether you're ready to sell or just want to know what your business is worth — start with a free valuation. No commitment, no pressure.
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
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ivory-muted">
              <Phone className="w-4 h-4 text-teal" />
              <span>Questions? Call us free:</span>
              <a href="tel:+18005550000" className="text-teal hover:underline font-medium">1-800-555-0000</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
