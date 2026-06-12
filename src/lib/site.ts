import logo from "@/assets/logo.png.asset.json";
import truckTrailer from "@/assets/truck-trailer.jpg.asset.json";
import dumpLoad from "@/assets/dump-load.jpg.asset.json";
import trailerAlley from "@/assets/trailer-alley.jpg.asset.json";
import yardCleanup from "@/assets/yard-cleanup.jpg.asset.json";

export const SITE = {
  name: "Blazin Property Solutions",
  short: "BPS",
  tagline: "Fast. Clean. Dependable.",
  phone: "316-500-0152",
  phoneHref: "tel:+13165000152",
  area: "Butler County & Wichita, KS",
  facebook: "https://www.facebook.com/profile.php?id=61575931196023",
};

export const IMG = {
  logo: logo.url,
  truckTrailer: truckTrailer.url,
  dumpLoad: dumpLoad.url,
  trailerAlley: trailerAlley.url,
  yardCleanup: yardCleanup.url,
};

export const SERVICES = [
  { slug: "junk-removal", title: "Junk Removal", short: "Residential and commercial cleanouts.", icon: "Trash2",
    desc: "Full-service junk hauling for homes, businesses, and construction sites across Wichita and Butler County. We load, haul, and dispose responsibly.",
    benefits: ["Same-day & next-day service", "Full-truck or partial loads", "Eco-friendly disposal", "We do the heavy lifting"] },
  { slug: "tree-trimming", title: "Tree Trimming", short: "Safe and professional tree maintenance.", icon: "Trees",
    desc: "Professional trimming, limb removal, and storm cleanup. Keep your property safe and your trees healthy year-round.",
    benefits: ["Storm damage cleanup", "Limb & branch removal", "Lot clearing", "Full debris haul-off"] },
  { slug: "fencing", title: "Fencing", short: "Fence installation and repair solutions.", icon: "Fence",
    desc: "New fence installation and repair — wood, chain link, and privacy fencing built to last Kansas weather.",
    benefits: ["New installs & repairs", "Wood, chain link, privacy", "Free on-site estimates", "Built to code"] },
  { slug: "demolition", title: "Demolition", short: "Efficient structure removal and cleanup.", icon: "Hammer",
    desc: "Sheds, garages, outbuildings, decks, and interior demo. We tear it down and haul it off in one trip.",
    benefits: ["Structures & outbuildings", "Interior demo", "Site cleanup included", "Permit-aware crew"] },
  { slug: "property-management", title: "Property Management", short: "Reliable property maintenance services.", icon: "KeyRound",
    desc: "Ongoing maintenance for landlords, investors, and absentee owners — one call handles it all.",
    benefits: ["Turn-over cleanouts", "Lawn & exterior upkeep", "Repair coordination", "Reliable monthly service"] },
  { slug: "general-solutions", title: "General Property Solutions", short: "Custom property improvement projects.", icon: "Wrench",
    desc: "Odd jobs, hauling, light grading, and custom property work. If it needs doing, we'll get it done.",
    benefits: ["Custom scopes", "Hauling & disposal", "Light grading", "One-call convenience"] },
] as const;

export const TESTIMONIALS = [
  { name: "Mary Hancock", quote: "If anyone is needing their yard or place cleaned up, he is the one to call." },
  { name: "Emili Rikli", quote: "Highly recommend! Professional, friendly with reasonable prices!" },
  { name: "Mike Loyd", quote: "Fast, affordable and amazing customer service!" },
  { name: "Jesse Bishop", quote: "The project looks better than I thought it would." },
  { name: "Erin Thomas-Baldwin", quote: "Very friendly and professional. Highly recommended." },
];
