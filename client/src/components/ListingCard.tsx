/*
 * AcquireMe ListingCard — Editorial Luxury Design
 * Glassmorphic card with gradient border on hover
 * Financial data in monospace, teal accents for key metrics
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Clock, BadgeCheck, Building2 } from "lucide-react";
import { type BusinessListing, formatCurrency } from "@/lib/data";

interface ListingCardProps {
  listing: BusinessListing;
  index?: number;
}

export default function ListingCard({ listing, index = 0 }: ListingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/listing/${listing.id}`}>
        <article className="group relative bg-surface-1 rounded-lg overflow-hidden border border-white/[0.06] hover:border-teal/30 transition-all duration-300 hover:shadow-[0_8px_40px_oklch(0.78_0.15_175/0.08)]">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {listing.featured && (
                <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-teal text-background rounded-sm">
                  Featured
                </span>
              )}
              {listing.sbaPreQualified && (
                <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-sm">
                  SBA Pre-Qual
                </span>
              )}
            </div>

            {/* Price overlay */}
            <div className="absolute bottom-3 left-3">
              <span className="font-mono text-xl font-semibold text-white">
                {formatCurrency(listing.askingPrice)}
              </span>
            </div>

            {/* Days listed */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/70">
              <Clock className="w-3 h-3" />
              <span className="text-[11px]">{listing.daysListed}d ago</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 lg:p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-teal transition-colors duration-200">
                {listing.title}
              </h3>
              {listing.verified && (
                <BadgeCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
              )}
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              <MapPin className="w-3 h-3 text-ivory-muted" />
              <span className="text-xs text-ivory-muted">{listing.location}</span>
              <span className="text-ivory-muted mx-1">·</span>
              <span className="text-xs text-ivory-muted">{listing.category}</span>
            </div>

            {/* Financial Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06]">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-ivory-muted mb-0.5">Revenue</p>
                <p className="font-mono text-sm font-medium text-foreground">{formatCurrency(listing.revenue)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-ivory-muted mb-0.5">Cash Flow</p>
                <p className="font-mono text-sm font-medium text-teal">{formatCurrency(listing.cashFlow)}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {listing.highlights.slice(0, 3).map((h) => (
                <span
                  key={h}
                  className="px-2 py-0.5 text-[10px] font-medium bg-white/[0.04] border border-white/[0.06] rounded-sm text-ivory-muted"
                >
                  {h}
                </span>
              ))}
              {listing.realEstateIncluded && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-teal/10 border border-teal/20 rounded-sm text-teal flex items-center gap-1">
                  <Building2 className="w-2.5 h-2.5" />
                  RE Included
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
