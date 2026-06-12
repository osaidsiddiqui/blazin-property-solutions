import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export default function ServicesIndex() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Capabilities</div>
          <h1 className="font-display text-6xl sm:text-8xl leading-[0.9]">EVERY <span className="text-fire-gradient">PROPERTY</span> SERVICE</h1>
          <p className="mt-8 text-lg text-muted-foreground">From junk removal to full demolition — one local crew handles it all across Wichita & Butler County, Kansas.</p>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <RevealItem key={s.slug}>
              <Link to={`/services/${s.slug}`} className="group relative block rounded-2xl h-[26rem] overflow-hidden border border-border/60 hover:border-primary/60 hover:-translate-y-1 transition-all">
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/25 group-hover:to-accent/25 transition-colors" />
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="text-xs font-mono text-primary">0{i + 1}</div>
                  <div>
                    <h3 className="font-display text-3xl mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                      Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
