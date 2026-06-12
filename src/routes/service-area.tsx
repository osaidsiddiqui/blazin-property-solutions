import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area | Wichita & Butler County KS — BPS" },
      { name: "description", content: "Blazin Property Solutions serves Wichita, El Dorado, Augusta, Andover, Rose Hill, and all of Butler County, Kansas." },
    ],
  }),
  component: ServiceArea,
});

const CITIES = ["Wichita", "El Dorado", "Augusta", "Andover", "Rose Hill", "Towanda", "Douglass", "Benton", "Leon", "Whitewater"];

function ServiceArea() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Coverage</div>
          <h1 className="font-display text-6xl sm:text-8xl leading-[0.9]">SERVING <span className="text-fire-gradient">KANSAS</span></h1>
          <p className="mt-8 text-lg text-muted-foreground">Proudly serving {SITE.area} and surrounding communities. Local crew, fast response, no travel fees within our service zone.</p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-stretch">
          {/* Stylized Kansas map */}
          <Reveal>
            <div className="relative glass-card rounded-3xl p-8 h-full min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
              <svg viewBox="0 0 400 250" className="relative w-full h-auto">
                <defs>
                  <linearGradient id="ks" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.3 0.04 35)" />
                    <stop offset="100%" stopColor="oklch(0.2 0.02 30)" />
                  </linearGradient>
                  <radialGradient id="pulse">
                    <stop offset="0%" stopColor="oklch(0.78 0.21 50)" stopOpacity="1" />
                    <stop offset="100%" stopColor="oklch(0.78 0.21 50)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Kansas rectangle-ish outline */}
                <path d="M30 60 L370 60 L370 180 L260 180 L260 200 L30 200 Z"
                  fill="url(#ks)" stroke="oklch(0.5 0.1 40)" strokeWidth="1.5" />
                {/* Wichita */}
                <circle cx="220" cy="160" r="30" fill="url(#pulse)">
                  <animate attributeName="r" values="20;40;20" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="160" r="6" fill="oklch(0.78 0.22 55)" />
                <text x="232" y="158" fill="white" fontSize="11" fontFamily="Oswald" letterSpacing="1">WICHITA</text>
                {/* Butler County */}
                <circle cx="265" cy="155" r="25" fill="url(#pulse)">
                  <animate attributeName="r" values="18;36;18" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="265" cy="155" r="5" fill="oklch(0.62 0.24 28)" />
                <text x="278" y="170" fill="white" fontSize="10" fontFamily="Oswald" letterSpacing="1">BUTLER CO.</text>
                <text x="30" y="40" fill="oklch(0.6 0.05 60)" fontSize="9" letterSpacing="3">KANSAS</text>
              </svg>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="font-display text-xl mt-2">Wichita, KS</div>
                  <div className="text-xs text-muted-foreground mt-1">Sedgwick County</div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="font-display text-xl mt-2">Butler County</div>
                  <div className="text-xs text-muted-foreground mt-1">El Dorado, Augusta+</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal>
              <div className="glass-card rounded-2xl p-6">
                <Clock className="h-6 w-6 text-primary" />
                <div className="font-display text-2xl mt-3">Always Open</div>
                <p className="text-sm text-muted-foreground mt-2">Call anytime — we answer fast and schedule even faster.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-2xl p-6">
                <Phone className="h-6 w-6 text-primary" />
                <div className="font-display text-2xl mt-3">{SITE.phone}</div>
                <a href={SITE.phoneHref} className="text-xs uppercase tracking-widest text-primary">Call Now →</a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-card rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Cities We Cover</div>
                <RevealGroup className="flex flex-wrap gap-2">
                  {CITIES.map((c) => (
                    <RevealItem key={c}>
                      <span className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-widest">{c}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame">Request Service</Link>
        </Reveal>
      </div>
    </div>
  );
}
