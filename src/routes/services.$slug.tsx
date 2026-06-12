import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SERVICES, SITE, IMG } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import NotFound from "./not-found";

const HERO_IMAGES: Record<string, string> = {
  "junk-removal": IMG.dumpLoad,
  "tree-trimming": IMG.yardCleanup,
  fencing: IMG.trailerAlley,
  demolition: IMG.dumpLoad,
  "property-management": IMG.yardCleanup,
  "general-solutions": IMG.truckTrailer,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  const hero = HERO_IMAGES[service.slug] ?? IMG.truckTrailer;

  return (
    <div className="overflow-hidden">
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Link to="/services" className="text-xs uppercase tracking-[0.3em] text-primary">← All Services</Link>
            <h1 className="mt-6 font-display text-6xl sm:text-8xl leading-[0.9]"><span className="text-fire-gradient">{service.title.toUpperCase()}</span></h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl">{service.desc}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame">Get Estimate</Link>
              <a href={SITE.phoneHref} className="rounded-full border border-border px-7 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary inline-flex items-center gap-2"><Phone className="h-4 w-4"/>{SITE.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glow-flame">
              <img src={hero} alt={`${service.title} in Wichita KS`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl">WHAT YOU <span className="text-fire-gradient">GET</span></h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex gap-4 items-start glass-card rounded-xl p-4">
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-fire-gradient/10 border border-primary/30 grid place-items-center"><Check className="h-4 w-4 text-primary"/></div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-4xl sm:text-5xl">OUR <span className="text-fire-gradient">PROCESS</span></h2>
            <RevealGroup className="mt-8 space-y-4">
              {[
                ["01", "Call or Request", "Tell us what you need."],
                ["02", "Free Estimate", "We assess on-site, no obligation."],
                ["03", "Get to Work", "Clean, fast execution."],
                ["04", "Site Left Spotless", "Full cleanup, every time."],
              ].map(([n, t, d]) => (
                <RevealItem key={n} className="glass-card rounded-xl p-5 flex gap-5">
                  <div className="font-display text-2xl text-fire-gradient">{n}</div>
                  <div><div className="font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <Reveal className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl sm:text-5xl mb-10">SEE THE <span className="text-fire-gradient">WORK</span></h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[IMG.truckTrailer, IMG.dumpLoad, IMG.yardCleanup].map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="Project photo" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl sm:text-6xl">READY FOR <span className="text-fire-gradient">{service.title.toUpperCase()}</span>?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame inline-flex items-center gap-2">Book Now <ArrowRight className="h-4 w-4"/></Link>
            <a href={SITE.phoneHref} className="rounded-full border border-border px-7 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary">{SITE.phone}</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
