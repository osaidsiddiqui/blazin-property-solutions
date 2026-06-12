import { IMG, SITE } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const PROJECTS = [
  { img: IMG.galleryTruckRoad, title: "On-Route Haul Service", tag: "Hauling", h: "tall" },
  { img: IMG.galleryHouseDebris, title: "Side-Yard Debris Cleanout", tag: "Junk Removal", h: "short" },
  { img: IMG.galleryShopHaul, title: "Shop Lot Bulk Pickup", tag: "Property Mgmt", h: "tall" },
  { img: IMG.galleryFenceRepair, title: "Privacy Fence Repair", tag: "Fencing", h: "short" },
  { img: IMG.truckTrailer, title: "Equipment on Site", tag: "General", h: "tall" },
  { img: IMG.dumpLoad, title: "Full Junk Haul", tag: "Junk Removal", h: "short" },
  { img: IMG.trailerAlley, title: "Alley Access Cleanout", tag: "Hauling", h: "short" },
  { img: IMG.yardCleanup, title: "Yard Restoration", tag: "Property Mgmt", h: "tall" },
  { img: IMG.dumpLoad, title: "Demolition Haul-Off", tag: "Demolition", h: "short" },
  { img: IMG.truckTrailer, title: "Ready for Pickup", tag: "Service Day", h: "tall" },
  { img: IMG.yardCleanup, title: "Tree & Brush Cleanup", tag: "Tree Trimming", h: "short" },
  { img: IMG.trailerAlley, title: "Tight Access Hauling", tag: "Junk Removal", h: "tall" },
];

export default function Gallery() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Portfolio</div>
          <h1 className="font-display text-6xl sm:text-8xl leading-[0.9]">PROPERTY <span className="text-fire-gradient">TRANSFORMATIONS</span></h1>
          <p className="mt-8 text-lg text-muted-foreground">Real projects. Real results. {SITE.area}.</p>
        </Reveal>
        <RevealGroup className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {PROJECTS.map((p, i) => (
            <RevealItem key={i} className={`mb-5 break-inside-avoid`}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.title} className={`w-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ${p.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</div>
                  <div className="font-display text-xl mt-1">{p.title}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
