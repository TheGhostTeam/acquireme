/*
 * AcquireMe Sell Business Page — Main Street Edition
 * Warm, simple, no jargon. Built for retiring business owners.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowRight,
  DollarSign,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  Phone,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORIES, formatFullCurrency } from "@/lib/data";

const INDUSTRY_MULTIPLES: Record<string, number> = {
  "Plumbing & HVAC":            3.2,
  "Electrical Services":        3.0,
  "Landscaping & Lawn Care":    2.5,
  "Auto Repair & Body Shops":   2.8,
  "Restaurants & Diners":       2.2,
  "Retail & Local Stores":      2.0,
  "Construction & Contracting": 2.8,
  "Cleaning Services":          2.3,
  "Childcare & Education":      3.0,
  "Healthcare & Medical":       3.5,
  "Manufacturing":              3.2,
  "Franchise Opportunities":    2.5,
};

export default function SellBusiness() {
  const [revenue, setRevenue] = useState("");
  const [ownerEarnings, setOwnerEarnings] = useState("");
  const [industry, setIndustry] = useState("Plumbing & HVAC");
  const [yearsInBusiness, setYearsInBusiness] = useState("10-20 years");
  const [valuation, setValuation] = useState<number | null>(null);

  const calculateValuation = () => {
    const earnings = parseFloat(ownerEarnings.replace(/[^0-9.]/g, ""));
    const rev = parseFloat(revenue.replace(/[^0-9.]/g, ""));
    if (!earnings || !rev) {
      toast.error("Please enter both revenue and owner earnings to get your estimate.");
      return;
    }
    const baseMultiple = INDUSTRY_MULTIPLES[industry] ?? 2.5;
    const longevityBonus =
      yearsInBusiness === "20+ years" ? 0.4 :
      yearsInBusiness === "10-20 years" ? 0.2 :
      yearsInBusiness === "5-10 years" ? 0.1 : 0;
    setValuation(Math.round(earnings * (baseMultiple + longevityBonus)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">For Business Owners</span>
                <div className="h-px w-6 bg-teal" />
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-5 leading-tight">
                You've Earned<br /><span className="italic text-teal">This Exit.</span>
              </h1>
              <p className="text-lg text-ivory-muted max-w-xl mx-auto leading-relaxed">
                After everything you've put into your business — the early mornings, the long seasons, the crew you've built — you deserve to sell on your terms. We make it simple, private, and fair.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-2xl mx-auto">
            <div className="bg-surface-1 border border-white/[0.06] rounded-2xl p-8 lg:p-10 gradient-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Free Business Valuation</h2>
                  <p className="text-xs text-ivory-muted">Get an honest estimate in 60 seconds — no strings attached</p>
                </div>
              </div>

              <p className="text-sm text-ivory-muted mb-6 leading-relaxed border-l-2 border-teal/30 pl-3">
                Not sure what your business is worth? Most owners are surprised — usually in a good way. Enter your numbers below and we'll give you an honest, industry-based estimate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Annual Revenue <span className="text-ivory-muted font-normal text-xs">(total sales last year)</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                    <input type="text" placeholder="e.g. 850,000" value={revenue} onChange={(e) => setRevenue(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground placeholder:text-ivory-muted/40 focus:outline-none focus:border-teal/40" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Owner Earnings <span className="text-ivory-muted font-normal text-xs">(what the business pays you)</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                    <input type="text" placeholder="e.g. 220,000" value={ownerEarnings} onChange={(e) => setOwnerEarnings(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground placeholder:text-ivory-muted/40 focus:outline-none focus:border-teal/40" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Type of Business</label>
                  <select value={industry} onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40">
                    {CATEGORIES.filter((c) => c !== "All Industries").map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Years in Business</label>
                  <select value={yearsInBusiness} onChange={(e) => setYearsInBusiness(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40">
                    <option>Less than 3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10-20 years</option>
                    <option>20+ years</option>
                  </select>
                </div>
              </div>

              <Button onClick={calculateValuation} className="w-full bg-teal hover:bg-teal-dark text-background font-semibold py-3 h-auto gap-2 text-base">
                <TrendingUp className="w-4 h-4" />
                Get My Free Valuation
              </Button>

              {valuation && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 p-6 bg-teal/5 border border-teal/20 rounded-xl text-center">
                  <p className="text-xs uppercase tracking-wider text-teal mb-2 font-medium">Your Estimated Valuation Range</p>
                  <p className="font-mono text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {formatFullCurrency(valuation * 0.85)} — {formatFullCurrency(valuation * 1.15)}
                  </p>
                  <p className="text-xs text-ivory-muted mb-5">
                    Based on {industry} industry multiples and your years in business.
                  </p>
                  <Button onClick={() => toast("We'll be in touch shortly!")} className="bg-teal hover:bg-teal-dark text-background font-semibold px-8 py-2.5 h-auto gap-2">
                    List My Business for Sale <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-xs text-ivory-muted mt-2">Free to start · $79/month to list · Cancel anytime</p>
                </motion.div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-ivory-muted">
              <Phone className="w-4 h-4 text-teal" />
              <span>Prefer to talk it through?</span>
              <a href="tel:+18005550000" className="text-teal hover:underline font-medium">Call us free: 1-800-555-0000</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Why owners choose AcquireMe</h2>
            <p className="text-ivory-muted max-w-lg mx-auto">We built this for people like you — not for Wall Street dealmakers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Simple from Start to Finish", description: "No MBA required. Our process is built for business owners, not lawyers. We walk you through every step in plain English." },
              { icon: <Lock className="w-6 h-6" />, title: "Private & Confidential", description: "Your employees, customers, and competitors won't find out until you're ready. We protect your business every step of the way." },
              { icon: <DollarSign className="w-6 h-6" />, title: "Honest, Upfront Pricing", description: "$79/month to list, or $299 for 6 months. No hidden fees, no surprise commissions. You keep what you earn." },
              { icon: <Users className="w-6 h-6" />, title: "Serious, Pre-Screened Buyers", description: "Every buyer on our platform is pre-qualified. No tire-kickers, no time-wasters — just people ready to make a real offer." },
              { icon: <Clock className="w-6 h-6" />, title: "Sell on Your Timeline", description: "Sell in 6 weeks or take 6 months. You set the pace. We're here to support you however long it takes." },
              { icon: <Phone className="w-6 h-6" />, title: "Real People, Real Support", description: "Have a question? Call or email us. You'll talk to a real person who understands your situation — not a chatbot." },
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

      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Four steps to sell your business</h2>
            </div>
            <div className="space-y-8">
              {[
                { step: "01", icon: <BarChart3 className="w-5 h-5" />, title: "Tell Us About Your Business", description: "Fill out our simple form — takes about 15 minutes. We ask about your revenue, your employees, how long you've been in business, and what makes your business special. No jargon, no confusing questions." },
                { step: "02", icon: <CheckCircle2 className="w-5 h-5" />, title: "We Review and Go Live", description: "Our team reviews your listing within 24 hours. Once approved, you get a professional listing page that shows buyers the real value of what you've built." },
                { step: "03", icon: <Users className="w-5 h-5" />, title: "Meet Qualified Buyers", description: "We notify pre-screened buyers in your industry and location. You decide who gets your contact information. Every conversation starts on your terms." },
                { step: "04", icon: <DollarSign className="w-5 h-5" />, title: "Close and Enjoy Your Retirement", description: "When you find the right buyer, we help you through the final steps — from your first offer to the final handshake. Then you get to walk away proud of what you built." },
              ].map((item, i) => (
                <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border border-teal/30 flex items-center justify-center bg-teal/5">
                      <span className="font-mono text-sm font-semibold text-teal">{item.step}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-ivory-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Button className="bg-teal hover:bg-teal-dark text-background font-semibold px-10 py-3.5 h-auto text-base gap-2"
                onClick={() => toast("Listing form coming soon! We'll notify you when it's ready.")}>
                Start My Free Listing <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-ivory-muted mt-3">Free to start · $79/month to list · No broker commissions · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
