import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const TIMELINE = [
  ["Founded", "Blazin Property Solutions launches as a local LLC in Kansas."],
  ["First Crew", "Grew from solo hauls to a dedicated team and equipment fleet."],
  ["Expanded Services", "Added fencing, demolition, and full property management."],
  ["Today", "Trusted across Wichita & Butler County for everything property."],
];

const VALUES = [
  ["Integrity", "Fair quotes, honest timelines, no surprises."],
  ["Speed", "We respond fast and finish faster."],
  ["Craft", "Every job leaves the site spotless."],
  ["Local", "Kansas owned. Kansas operated."],
];

export default function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">About BPS</div>
          <h1 className="font-display text-6xl sm:text-9xl leading-[0.9]">BUILT FROM<br/><span className="text-fire-gradient">FIRE & GRIT</span></h1>
          <p className="mt-10 text-lg text-muted-foreground max-w-2xl">A Local LLC born in Kansas with one mission — make property work fast, clean, and dependable for every home and business we serve.</p>
        </Reveal>

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={IMG.truckTrailer} alt="BPS truck and trailer" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl sm:text-6xl">OUR <span className="text-fire-gradient">MISSION</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">Be the one call Kansans make when their property needs work. Whether it's a single haul, a tree down after a storm, a fence install, or ongoing rental upkeep — we show up, we work hard, and we leave it better than we found it.</p>
            <p className="mt-4 font-display text-3xl text-fire-gradient">Fast. Clean. Dependable.</p>
          </Reveal>
        </div>

        <div className="mt-32">
          <Reveal className="mb-12"><h2 className="font-display text-5xl sm:text-7xl">THE <span className="text-fire-gradient">JOURNEY</span></h2></Reveal>
          <RevealGroup className="relative">
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            {TIMELINE.map(([t, d], i) => (
              <RevealItem key={t} className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 mb-12`}>
                <div className={i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}>
                  <div className="glass-card rounded-2xl p-6 inline-block">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Chapter 0{i + 1}</div>
                    <div className="font-display text-2xl mt-2">{t}</div>
                    <p className="text-sm text-muted-foreground mt-2">{d}</p>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-fire-gradient glow-flame" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-32">
          <Reveal className="mb-12"><h2 className="font-display text-5xl sm:text-7xl">CORE <span className="text-fire-gradient">VALUES</span></h2></Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(([t, d]) => (
              <RevealItem key={t}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <Flame className="h-6 w-6 text-primary" />
                  <div className="font-display text-2xl text-fire-gradient mt-3">{t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-24 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame">Work With Us</Link>
          <div className="mt-4 text-sm text-muted-foreground">Or call {SITE.phone}</div>
        </Reveal>
      </div>
    </div>
  );
}
