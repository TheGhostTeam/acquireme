/*
 * AcquireMe — Main Street Business Data
 */

export interface BusinessListing {
  id: string;
  title: string;
  category: string;
  location: string;
  state: string;
  askingPrice: number;
  revenue: number;
  cashFlow: number;
  yearEstablished: number;
  employees: number;
  description: string;
  highlights: string[];
  image: string;
  featured: boolean;
  verified: boolean;
  daysListed: number;
  sbaPreQualified: boolean;
  realEstateIncluded: boolean;
}

export const CATEGORIES = [
  "All Industries",
  "Plumbing & HVAC",
  "Electrical Services",
  "Landscaping & Lawn Care",
  "Auto Repair & Body Shops",
  "Restaurants & Diners",
  "Retail & Local Stores",
  "Construction & Contracting",
  "Cleaning Services",
  "Childcare & Education",
  "Healthcare & Medical",
  "Franchise Opportunities",
  "Manufacturing",
] as const;

export const LOCATIONS = [
  "All Locations",
  "Nashville, TN",
  "Charlotte, NC",
  "Phoenix, AZ",
  "Tampa, FL",
  "Denver, CO",
  "Atlanta, GA",
  "Dallas, TX",
  "Columbus, OH",
  "Indianapolis, IN",
  "Kansas City, MO",
  "Raleigh, NC",
  "Salt Lake City, UT",
  "Louisville, KY",
] as const;

export const PRICE_RANGES = [
  { label: "Any Price",       min: 0,       max: Infinity },
  { label: "Under $100K",     min: 0,       max: 100000 },
  { label: "$100K – $250K",   min: 100000,  max: 250000 },
  { label: "$250K – $500K",   min: 250000,  max: 500000 },
  { label: "$500K – $1M",     min: 500000,  max: 1000000 },
  { label: "$1M – $2M",       min: 1000000, max: 2000000 },
  { label: "$2M – $5M",       min: 2000000, max: 5000000 },
  { label: "$5M+",            min: 5000000, max: Infinity },
] as const;

export const listings: BusinessListing[] = [
  {
    id: "1",
    title: "Established Plumbing & HVAC Company",
    category: "Plumbing & HVAC",
    location: "Nashville, TN",
    state: "Tennessee",
    askingPrice: 1100000,
    revenue: 2200000,
    cashFlow: 385000,
    yearEstablished: 1991,
    employees: 14,
    description: "Well-known residential and light commercial plumbing & HVAC business with 30+ years of community trust. Strong recurring revenue from service contracts and loyal customer base of 2,400+ households. Owner retiring after building this from the ground up.",
    highlights: [
      "2,400+ loyal residential customers",
      "Service contract revenue — predictable income",
      "10 fully equipped service vans included",
      "Owner will train buyer for 90 days",
      "SBA financing pre-approved",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format",
    featured: true,
    verified: true,
    daysListed: 18,
    sbaPreQualified: true,
    realEstateIncluded: false,
  },
  {
    id: "2",
    title: "Family-Owned Auto Repair Shop",
    category: "Auto Repair & Body Shops",
    location: "Columbus, OH",
    state: "Ohio",
    askingPrice: 485000,
    revenue: 980000,
    cashFlow: 195000,
    yearEstablished: 1998,
    employees: 7,
    description: "Trusted neighborhood auto repair shop with a 25-year reputation and 1,800+ active customer accounts. AAA-approved, ASE-certified technicians. Includes real estate in sale price. Owner retiring at 64 after a lifetime of running this shop.",
    highlights: [
      "Real estate included — building owned free and clear",
      "AAA-approved and ASE-certified",
      "Loyal walk-in customer base — no advertising needed",
      "All equipment fully owned, no leases",
      "Owner financing available for qualified buyers",
    ],
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da22?w=800&auto=format",
    featured: true,
    verified: true,
    daysListed: 34,
    sbaPreQualified: true,
    realEstateIncluded: true,
  },
  {
    id: "3",
    title: "Landscaping & Lawn Care Business",
    category: "Landscaping & Lawn Care",
    location: "Charlotte, NC",
    state: "North Carolina",
    askingPrice: 340000,
    revenue: 720000,
    cashFlow: 148000,
    yearEstablished: 2003,
    employees: 11,
    description: "Profitable landscaping and lawn maintenance company with 220 active weekly commercial and residential contracts. Owner looking to retire and willing to stay on for 60 days to ensure a smooth handoff.",
    highlights: [
      "220 active maintenance contracts — recurring revenue",
      "All equipment owned and well-maintained",
      "4.8 stars — 340+ Google reviews",
      "Trained crew in place — business runs without owner",
      "SBA pre-qualified up to $350K",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format",
    featured: true,
    verified: true,
    daysListed: 12,
    sbaPreQualified: true,
    realEstateIncluded: false,
  },
  {
    id: "4",
    title: "Downtown Diner & Breakfast Restaurant",
    category: "Restaurants & Diners",
    location: "Louisville, KY",
    state: "Kentucky",
    askingPrice: 275000,
    revenue: 610000,
    cashFlow: 112000,
    yearEstablished: 1987,
    employees: 9,
    description: "A true community institution — this breakfast diner has served the same neighborhood for 37 years. Fully staffed, loyal regulars, and a name that locals know and love. Lease runs through 2030 with renewal option.",
    highlights: [
      "37-year operating history — beloved community staple",
      "Fully staffed kitchen and front of house",
      "Long-term lease locked in through 2030",
      "All equipment included — fully outfitted kitchen",
      "Real estate available for purchase separately",
    ],
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&auto=format",
    featured: true,
    verified: true,
    daysListed: 27,
    sbaPreQualified: false,
    realEstateIncluded: false,
  },
  {
    id: "5",
    title: "Electrical Contracting Company",
    category: "Electrical Services",
    location: "Phoenix, AZ",
    state: "Arizona",
    askingPrice: 895000,
    revenue: 1850000,
    cashFlow: 310000,
    yearEstablished: 1996,
    employees: 16,
    description: "Licensed electrical contractor serving residential, commercial, and light industrial clients across metro Phoenix. Long-standing relationships with 3 regional home builders ensure steady backlog. Owner (age 61) ready to hand off after 28 years.",
    highlights: [
      "Builder contracts provide consistent revenue backlog",
      "All licenses transferable with state approval",
      "8 fully equipped service vehicles included",
      "Bonded and insured — all certifications current",
      "SBA 7(a) financing approved at listing price",
    ],
    image: "https://images.unsplash.com/photo-1555963966-b7ae9d9e9b41?w=800&auto=format",
    featured: false,
    verified: true,
    daysListed: 8,
    sbaPreQualified: true,
    realEstateIncluded: false,
  },
  {
    id: "6",
    title: "Commercial Cleaning Company",
    category: "Cleaning Services",
    location: "Indianapolis, IN",
    state: "Indiana",
    askingPrice: 185000,
    revenue: 420000,
    cashFlow: 98000,
    yearEstablished: 2007,
    employees: 12,
    description: "Established commercial cleaning company with 18 long-term contracts covering offices, medical facilities, and retail centers. Owner wants to retire and will provide 90 days of training.",
    highlights: [
      "18 active commercial contracts — zero seasonal risk",
      "90% recurring monthly revenue",
      "Owner provides 90-day training and transition",
      "Low overhead — no storefront needed",
      "Priced to sell — motivated seller",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format",
    featured: false,
    verified: true,
    daysListed: 45,
    sbaPreQualified: false,
    realEstateIncluded: false,
  },
  {
    id: "7",
    title: "General Contracting & Remodeling Business",
    category: "Construction & Contracting",
    location: "Denver, CO",
    state: "Colorado",
    askingPrice: 660000,
    revenue: 1400000,
    cashFlow: 245000,
    yearEstablished: 2001,
    employees: 10,
    description: "Well-established residential remodeling and general contracting company with 22 years of community presence in greater Denver. Specializes in kitchen, bath, and whole-home remodels. Owner retiring after building a great reputation.",
    highlights: [
      "4.9 stars — 520+ reviews on Google and Houzz",
      "Healthy job backlog of $380K at time of listing",
      "Long-term subcontractor relationships in place",
      "Includes branded vehicles, tools, and equipment",
      "Owner financing available for right buyer",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format",
    featured: false,
    verified: false,
    daysListed: 21,
    sbaPreQualified: true,
    realEstateIncluded: false,
  },
  {
    id: "8",
    title: "Independent Hardware & Farm Supply Store",
    category: "Retail & Local Stores",
    location: "Kansas City, MO",
    state: "Missouri",
    askingPrice: 520000,
    revenue: 1100000,
    cashFlow: 175000,
    yearEstablished: 1979,
    employees: 6,
    description: "A fourth-generation family hardware store that has served the same community for 45 years. Strong margins on specialty farm supply and seasonal products. Real estate included. Owner (age 68) ready to retire.",
    highlights: [
      "Real estate included — building valued at $280K",
      "45-year community institution with loyal base",
      "Specialty farm supply sets it apart from big box",
      "Fully staffed — can run without owner",
      "Seller will stay on through first full season",
    ],
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&auto=format",
    featured: false,
    verified: true,
    daysListed: 60,
    sbaPreQualified: true,
    realEstateIncluded: true,
  },
];

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}

export function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
