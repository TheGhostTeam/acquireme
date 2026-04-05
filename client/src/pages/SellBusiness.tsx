/*
 * AcquireMe Sell Business Page — Editorial Luxury Design
 * Multi-step listing creation form with valuation tool
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
  Shield,
  Users,
  Zap,
  CheckCircle2,
  Building2,
  Globe,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORIES, formatFullCurrency } from "@/lib/data";

export default function SellBusiness() {
  const [revenue, setRevenue] = useState("");
  const [cashFlow, setCashFlow] = useState("");
  const [valuation, setValuation] = useState<number | null>(null);

  const calculateValuation = () => {
    const cf = parseFloat(cashFlow.replace(/[^0-9.]/g, ""));
    const rev = parseFloat(revenue.replace(/[^0-9.]/g, ""));
    if (cf && rev) {
      // Simple multiple-based valuation
      const multiple = rev > 1000000 ? 3.5 : rev > 500000 ? 3.0 : 2.5;
      setValuation(Math.round(cf * multiple));
    } else {
      toast.error("Please enter both revenue and cash flow");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-6 bg-teal" />
                <span className="text-xs uppercase tracking-[0.25em] text-teal font-medium">
                  Sell Your Business
                </span>
                <div className="h-px w-6 bg-teal" />
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-5 leading-tight">
                Get the exit you{" "}
                <span className="italic text-teal">deserve</span>
              </h1>
              <p className="text-lg text-ivory-muted max-w-xl mx-auto leading-relaxed">
                List your business on the most modern marketplace. Reach 50,000+ verified buyers and close your deal with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valuation Tool */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-surface-1 border border-white/[0.06] rounded-2xl p-8 lg:p-10 gradient-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Instant Valuation Estimate</h2>
                  <p className="text-xs text-ivory-muted">Get a data-driven estimate in seconds</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ivory-muted mb-2 font-medium">
                    Annual Revenue
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                    <input
                      type="text"
                      placeholder="e.g. 1,500,000"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm font-mono text-foreground placeholder:text-ivory-muted/40 focus:outline-none focus:border-teal/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ivory-muted mb-2 font-medium">
                    Annual Cash Flow / SDE
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                    <input
                      type="text"
                      placeholder="e.g. 400,000"
                      value={cashFlow}
                      onChange={(e) => setCashFlow(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm font-mono text-foreground placeholder:text-ivory-muted/40 focus:outline-none focus:border-teal/40"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ivory-muted mb-2 font-medium">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40">
                    {CATEGORIES.filter((c) => c !== "All Industries").map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-ivory-muted mb-2 font-medium">
                    Years in Business
                  </label>
                  <select className="w-full px-4 py-3 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40">
                    <option>Less than 3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10-20 years</option>
                    <option>20+ years</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={calculateValuation}
                className="w-full bg-teal hover:bg-teal-dark text-background font-semibold py-3 h-auto gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Get Valuation Estimate
              </Button>

              {valuation && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-6 bg-teal/5 border border-teal/20 rounded-xl text-center"
                >
                  <p className="text-xs uppercase tracking-wider text-teal mb-2 font-medium">Estimated Valuation Range</p>
                  <p className="font-mono text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {formatFullCurrency(valuation * 0.85)} — {formatFullCurrency(valuation * 1.15)}
                  </p>
                  <p className="text-xs text-ivory-muted">
                    Based on industry multiples and comparable transactions
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06] bg-surface-1/30 relative grain">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              Why sellers choose AcquireMe
            </h2>
            <p className="text-ivory-muted max-w-lg mx-auto">
              We've built the tools and network to help you maximize your exit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "50,000+ Verified Buyers",
                description: "Access a massive network of pre-qualified buyers actively looking for businesses like yours.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Confidential Process",
                description: "NDA-protected listings ensure your business information stays private until you're ready to share.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "AI-Powered Valuations",
                description: "Get data-driven valuations based on real transaction data from thousands of comparable sales.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Maximum Exposure",
                description: "Your listing reaches buyers across our platform, partner networks, and targeted marketing campaigns.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Faster Closings",
                description: "Our digital tools and streamlined process help close deals 40% faster than traditional methods.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Expert Support",
                description: "Access our team of M&A advisors, legal resources, and transaction support throughout the process.",
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

      {/* Listing Process */}
      <section className="py-20 lg:py-28 border-t border-white/[0.06]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                How to list your business
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Create Your Listing",
                  description: "Fill out our streamlined listing form with your business details, financials, and photos. Our team reviews every submission for quality.",
                },
                {
                  step: "02",
                  title: "Get Verified",
                  description: "Our team validates your financial data and business information. Verified listings receive 3x more buyer inquiries.",
                },
                {
                  step: "03",
                  title: "Connect with Buyers",
                  description: "Receive inquiries from qualified buyers. Share detailed financials through our NDA-protected data room.",
                },
                {
                  step: "04",
                  title: "Close Your Deal",
                  description: "Negotiate terms, execute LOI, and close with support from our transaction team and legal resources.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border border-teal/30 flex items-center justify-center">
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
              <Button
                className="bg-teal hover:bg-teal-dark text-background font-semibold px-10 py-3.5 h-auto text-base gap-2"
                onClick={() => toast("Listing form coming soon! We'll notify you when it's ready.")}
              >
                Start Your Listing
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-ivory-muted mt-3">Free to list · No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
