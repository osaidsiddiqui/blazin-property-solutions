import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trash2, Trees, Hammer, KeyRound, Wrench, Fence } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const ICONS: Record<string, any> = { Trash2, Trees, Hammer, KeyRound, Wrench, Fence };

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Junk Removal, Fencing, Demolition Wichita KS — BPS" },
      { name: "description", content: "Full property services in Wichita & Butler County, KS: junk removal, tree trimming, fence installation, demolition, property management, and custom solutions." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Capabilities</div>
          <h1 className="font-display text-6xl sm:text-8xl leading-[0.9]">EVERY <span className="text-fire-gradient">PROPERTY</span> SERVICE</h1>
          <p className="mt-8 text-lg text-muted-foreground">From junk removal to full demolition — one local crew handles it all across Wichita & Butler County, Kansas.</p>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <RevealItem key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group block glass-card rounded-2xl p-8 h-full hover:border-primary/50 hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-fire-gradient opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                  <div className="text-xs font-mono text-muted-foreground mb-4">0{i + 1}</div>
                  <div className="h-14 w-14 rounded-xl bg-fire-gradient/10 border border-primary/30 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                    Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
