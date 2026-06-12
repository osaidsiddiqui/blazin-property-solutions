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
  logo: "/assets/logo.png",
  truckTrailer: "/assets/truck-trailer.jpg",
  dumpLoad: "/assets/dump-load.jpg",
  trailerAlley: "/assets/trailer-alley.jpg",
  yardCleanup: "/assets/yard-cleanup.jpg",
  svcJunk: "/assets/svc-junk.jpg",
  svcTree: "/assets/svc-tree.jpg",
  svcFence: "/assets/svc-fence.jpg",
  svcDemo: "/assets/svc-demo.jpg",
  svcPm: "/assets/svc-pm.jpg",
  svcGeneral: "/assets/svc-general.jpg",
  galleryTruckRoad: "/assets/gallery-truck-road.jpg",
  galleryHouseDebris: "/assets/gallery-house-debris.jpg",
  galleryShopHaul: "/assets/gallery-shop-haul.jpg",
  galleryFenceRepair: "/assets/gallery-fence-repair.jpg",
};

export const SERVICES = [
  { slug: "junk-removal", title: "Junk Removal", short: "Residential and commercial cleanouts.", image: IMG.svcJunk,
    desc: "Full-service junk hauling for homes, businesses, and construction sites across Wichita and Butler County. We load, haul, and dispose responsibly.",
    benefits: ["Same-day & next-day service", "Full-truck or partial loads", "Eco-friendly disposal", "We do the heavy lifting"] },
  { slug: "tree-trimming", title: "Tree Trimming", short: "Safe and professional tree maintenance.", image: IMG.svcTree,
    desc: "Professional trimming, limb removal, and storm cleanup. Keep your property safe and your trees healthy year-round.",
    benefits: ["Storm damage cleanup", "Limb & branch removal", "Lot clearing", "Full debris haul-off"] },
  { slug: "fencing", title: "Fencing", short: "Fence installation and repair solutions.", image: IMG.svcFence,
    desc: "New fence installation and repair — wood, chain link, and privacy fencing built to last Kansas weather.",
    benefits: ["New installs & repairs", "Wood, chain link, privacy", "Free on-site estimates", "Built to code"] },
  { slug: "demolition", title: "Demolition", short: "Efficient structure removal and cleanup.", image: IMG.svcDemo,
    desc: "Sheds, garages, outbuildings, decks, and interior demo. We tear it down and haul it off in one trip.",
    benefits: ["Structures & outbuildings", "Interior demo", "Site cleanup included", "Permit-aware crew"] },
  { slug: "property-management", title: "Property Management", short: "Reliable property maintenance services.", image: IMG.svcPm,
    desc: "Ongoing maintenance for landlords, investors, and absentee owners — one call handles it all.",
    benefits: ["Turn-over cleanouts", "Lawn & exterior upkeep", "Repair coordination", "Reliable monthly service"] },
  { slug: "general-solutions", title: "General Property Maintenance", short: "Custom property improvement projects.", image: IMG.svcGeneral,
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
