/*
 * AcquireMe Listings Page — Editorial Luxury Design
 * Full search/filter experience with listing grid
 */
import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  LayoutGrid,
  List,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import {
  listings,
  CATEGORIES,
  LOCATIONS,
  PRICE_RANGES,
  type BusinessListing,
} from "@/lib/data";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "revenue";

export default function Listings() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);

  const [searchQuery, setSearchQuery] = useState(params.get("q") || "");
  const [category, setCategory] = useState(params.get("category") || "All Industries");
  const [location, setLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sbaOnly, setSbaOnly] = useState(false);

  const filteredListings = useMemo(() => {
    let result = [...listings];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.category.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q)
      );
    }

    // Category
    if (category && category !== "All Industries") {
      result = result.filter((l) => l.category === category);
    }

    // Location
    if (location && location !== "All Locations") {
      result = result.filter((l) => l.location === location);
    }

    // Price
    const range = PRICE_RANGES[priceRange];
    if (range) {
      result = result.filter((l) => l.askingPrice >= range.min && l.askingPrice <= range.max);
    }

    // Verified
    if (verifiedOnly) {
      result = result.filter((l) => l.verified);
    }

    // SBA
    if (sbaOnly) {
      result = result.filter((l) => l.sbaPreQualified);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.askingPrice - b.askingPrice);
        break;
      case "price-desc":
        result.sort((a, b) => b.askingPrice - a.askingPrice);
        break;
      case "newest":
        result.sort((a, b) => a.daysListed - b.daysListed);
        break;
      case "revenue":
        result.sort((a, b) => b.revenue - a.revenue);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, category, location, priceRange, sortBy, verifiedOnly, sbaOnly]);

  const activeFilterCount = [
    category !== "All Industries",
    location !== "All Locations",
    priceRange !== 0,
    verifiedOnly,
    sbaOnly,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setCategory("All Industries");
    setLocation("All Locations");
    setPriceRange(0);
    setVerifiedOnly(false);
    setSbaOnly(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 lg:pt-24">
        {/* Header */}
        <div className="container mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-2">
              Businesses for Sale
            </h1>
            <p className="text-ivory-muted">
              Showing {filteredListings.length} {filteredListings.length === 1 ? "listing" : "listings"}
              {category !== "All Industries" && ` in ${category}`}
              {location !== "All Locations" && ` near ${location}`}
            </p>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <div className="border-y border-white/[0.06] bg-surface-1/50 sticky top-16 z-30 backdrop-blur-xl">
          <div className="container py-4">
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground placeholder:text-ivory-muted/50 focus:outline-none focus:border-teal/40 transition-all"
                />
              </div>

              {/* Filter Selects */}
              <div className="flex gap-2 flex-wrap">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-3 py-2.5 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-3 py-2.5 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="px-3 py-2.5 bg-surface-2 border border-white/[0.06] rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-teal/40"
                >
                  {PRICE_RANGES.map((range, i) => (
                    <option key={i} value={i}>{range.label}</option>
                  ))}
                </select>

                <Button
                  variant="outline"
                  size="sm"
                  className={`border-white/[0.06] gap-1.5 ${showFilters ? "bg-teal/10 border-teal/30 text-teal" : "text-ivory-muted"}`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  More
                  {activeFilterCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-teal text-background text-[10px] flex items-center justify-center font-bold">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>

                {activeFilterCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-ivory-muted hover:text-foreground gap-1"
                    onClick={clearFilters}
                  >
                    <X className="w-3.5 h-3.5" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Extended Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-4"
              >
                <label className="flex items-center gap-2 text-sm text-ivory-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="rounded border-white/20 bg-surface-2 text-teal focus:ring-teal"
                  />
                  Verified Only
                </label>
                <label className="flex items-center gap-2 text-sm text-ivory-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sbaOnly}
                    onChange={(e) => setSbaOnly(e.target.checked)}
                    className="rounded border-white/20 bg-surface-2 text-teal focus:ring-teal"
                  />
                  SBA Pre-Qualified
                </label>
              </motion.div>
            )}
          </div>
        </div>

        {/* Sort & View Controls */}
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-ivory-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-sm text-ivory-muted focus:outline-none appearance-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="revenue">Highest Revenue</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center gap-1 bg-surface-1 rounded-lg p-0.5 border border-white/[0.06]">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-surface-2 text-foreground" : "text-ivory-muted"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-surface-2 text-foreground" : "text-ivory-muted"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="container pb-20">
          {filteredListings.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "flex flex-col gap-4"
              }
            >
              {filteredListings.map((listing, i) => (
                <ListingCard key={listing.id} listing={listing} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-surface-1 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-ivory-muted" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No listings found</h3>
              <p className="text-ivory-muted mb-6">Try adjusting your search or filters to find what you're looking for.</p>
              <Button
                onClick={clearFilters}
                className="bg-teal hover:bg-teal-dark text-background"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
