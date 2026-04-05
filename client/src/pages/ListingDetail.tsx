/*
 * AcquireMe Listing Detail — Editorial Luxury Design
 * Full business detail page with financials, gallery, and contact
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  BadgeCheck,
  Building2,
  Share2,
  Heart,
  MessageSquare,
  TrendingUp,
  DollarSign,
  BarChart3,
  Clock,
  Shield,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { listings, formatFullCurrency, formatCurrency } from "@/lib/data";

export default function ListingDetail() {
  const { id } = useParams<{ id: string }>();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Listing Not Found</h1>
          <p className="text-ivory-muted mb-8">The business listing you're looking for doesn't exist or has been removed.</p>
          <Link href="/listings">
            <Button className="bg-teal hover:bg-teal-dark text-background">
              Browse All Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const multiplier = (listing.askingPrice / listing.cashFlow).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 lg:pt-24 pb-20">
        {/* Back Navigation */}
        <div className="container mb-6">
          <Link href="/listings">
            <button className="flex items-center gap-2 text-sm text-ivory-muted hover:text-teal transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to listings
            </button>
          </Link>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-xl overflow-hidden mb-8"
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {listing.featured && (
                    <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal text-background rounded-sm">
                      Featured
                    </span>
                  )}
                  {listing.sbaPreQualified && (
                    <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-sm">
                      SBA Pre-Qualified
                    </span>
                  )}
                  {listing.verified && (
                    <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-sm flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toast("Listing saved to favorites")}
                    className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast("Link copied to clipboard");
                    }}
                    className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Title & Meta */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="font-serif text-2xl lg:text-3xl text-foreground mb-3">
                  {listing.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ivory-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {listing.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Est. {listing.yearEstablished}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {listing.employees} employees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Listed {listing.daysListed} days ago
                  </span>
                </div>
              </motion.div>

              {/* Financial Metrics Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              >
                {[
                  { label: "Asking Price", value: formatFullCurrency(listing.askingPrice), icon: <DollarSign className="w-4 h-4" />, accent: false },
                  { label: "Annual Revenue", value: formatFullCurrency(listing.revenue), icon: <TrendingUp className="w-4 h-4" />, accent: false },
                  { label: "Cash Flow", value: formatFullCurrency(listing.cashFlow), icon: <BarChart3 className="w-4 h-4" />, accent: true },
                  { label: "Multiple", value: `${multiplier}x`, icon: <TrendingUp className="w-4 h-4" />, accent: false },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-surface-1 border border-white/[0.06] rounded-lg p-4"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-ivory-muted">{metric.icon}</span>
                      <span className="text-[10px] uppercase tracking-wider text-ivory-muted font-medium">
                        {metric.label}
                      </span>
                    </div>
                    <p className={`font-mono text-lg font-semibold ${metric.accent ? "text-teal" : "text-foreground"}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">Business Overview</h2>
                <p className="text-ivory-muted leading-relaxed">{listing.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h2>
                <div className="grid grid-cols-2 gap-3">
                  {listing.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 p-3 bg-surface-1 border border-white/[0.06] rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal shrink-0" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                  {listing.realEstateIncluded && (
                    <div className="flex items-center gap-3 p-3 bg-teal/5 border border-teal/20 rounded-lg">
                      <Building2 className="w-4 h-4 text-teal shrink-0" />
                      <span className="text-sm text-teal font-medium">Real Estate Included</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Business Details Table */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">Business Details</h2>
                <div className="bg-surface-1 border border-white/[0.06] rounded-lg overflow-hidden">
                  {[
                    { label: "Industry", value: listing.category },
                    { label: "Location", value: listing.location },
                    { label: "Year Established", value: listing.yearEstablished.toString() },
                    { label: "Number of Employees", value: listing.employees.toString() },
                    { label: "Real Estate", value: listing.realEstateIncluded ? "Included in asking price" : "Leased" },
                    { label: "SBA Pre-Qualified", value: listing.sbaPreQualified ? "Yes" : "No" },
                    { label: "Reason for Selling", value: "Retirement / New Ventures" },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex justify-between items-center px-5 py-3.5 ${
                        i !== 0 ? "border-t border-white/[0.04]" : ""
                      }`}
                    >
                      <span className="text-sm text-ivory-muted">{row.label}</span>
                      <span className="text-sm font-medium text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-surface-1 border border-white/[0.06] rounded-xl p-6 gradient-border"
                >
                  <div className="text-center mb-6">
                    <p className="text-[10px] uppercase tracking-wider text-ivory-muted mb-1">Asking Price</p>
                    <p className="font-mono text-3xl font-bold text-foreground">
                      {formatFullCurrency(listing.askingPrice)}
                    </p>
                    <p className="text-xs text-ivory-muted mt-1">
                      {multiplier}x cash flow multiple
                    </p>
                  </div>

                  <Button
                    className="w-full bg-teal hover:bg-teal-dark text-background font-semibold py-3 h-auto mb-3 gap-2"
                    onClick={() => toast("Contact request sent! The seller will be in touch shortly.")}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact Seller
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-foreground hover:bg-white/5 py-3 h-auto gap-2"
                    onClick={() => toast("NDA request submitted. You'll receive the document shortly.")}
                  >
                    <Shield className="w-4 h-4" />
                    Request NDA & Financials
                  </Button>

                  <div className="mt-5 pt-5 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                        <span className="font-semibold text-teal text-sm">AB</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Listed by Broker</p>
                        <p className="text-xs text-ivory-muted">AcquireMe Verified Partner</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-surface-1 border border-white/[0.06] rounded-xl p-6"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-4">Financial Summary</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Annual Revenue", value: formatCurrency(listing.revenue) },
                      { label: "Cash Flow / SDE", value: formatCurrency(listing.cashFlow) },
                      { label: "Gross Margin", value: `${Math.round((listing.cashFlow / listing.revenue) * 100)}%` },
                      { label: "Asking Multiple", value: `${multiplier}x` },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="text-xs text-ivory-muted">{item.label}</span>
                        <span className="font-mono text-sm font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* SBA Financing */}
                {listing.sbaPreQualified && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="bg-teal/5 border border-teal/20 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-teal" />
                      <h3 className="text-sm font-semibold text-teal">SBA Financing Available</h3>
                    </div>
                    <p className="text-xs text-ivory-muted leading-relaxed mb-3">
                      This business is pre-qualified for SBA 7(a) financing. Estimated down payment as low as {formatCurrency(listing.askingPrice * 0.1)}.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal/30 text-teal hover:bg-teal/10 gap-1 text-xs"
                      onClick={() => toast("Financing calculator coming soon!")}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Estimate Payments
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
