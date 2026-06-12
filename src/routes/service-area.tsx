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
          {/* Live Google Map */}
          <Reveal>
            <div className="relative glass-card rounded-3xl p-3 h-full min-h-[500px] overflow-hidden">
              <div className="relative w-full h-full min-h-[480px] rounded-2xl overflow-hidden border border-border/60">
                <iframe
                  title="Blazin Property Solutions Service Area — Wichita & Butler County, KS"
                  src="https://www.google.com/maps?q=Butler+County,+Kansas&z=9&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-110 invert-[0.92] hue-rotate-180"
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
                <div className="pointer-events-none absolute top-4 left-4 glass-card rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary">Live Coverage Map</div>
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
