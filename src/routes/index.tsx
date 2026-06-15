import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Flame, MapPin, Clock, Building2, Zap } from "lucide-react";
import { SITE, IMG, SERVICES, TESTIMONIALS } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={ref} className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 noise">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-20">
          <motion.div style={{ y: heroY }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary mb-8"
            >
              <Flame className="h-3 w-3" /> Property Services Experts
            </motion.div>
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.88] tracking-tight">
              {["PROPERTY", "SOLUTIONS", "DONE RIGHT"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {i === 2 ? <span className="text-fire-gradient">{word}</span> : word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Serving Butler County and rural Kansas with dependable property services — junk removal, fencing, demolition, tree trimming, landscaping, mowing, property management, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame hover:scale-[1.03] transition-transform">
                Get Free Estimate <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-3 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glow-flame">
              <img src={IMG.truckTrailer} alt="Blazin Property Solutions truck and dump trailer ready for work" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">On the Job</div>
                <div className="font-display text-lg mt-1">Butler County & Surrounding Areas</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 hidden md:block"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Available</div>
              <div className="font-display text-xl text-primary">24/7</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-y border-border/50 bg-card/30">
        <RevealGroup className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Zap, label: "Fast Response", value: "24/7" },
            { icon: MapPin, label: "Serving Butler/Surrounding", value: "AREAS" },
            { icon: Clock, label: "Always Open", value: "365" },
            { icon: Building2, label: "Res & Commercial", value: "BOTH" },
          ].map(({ icon: Icon, label, value }) => (
            <RevealItem key={label} className="text-center">
              <Icon className="h-7 w-7 mx-auto text-primary" />
              <div className="font-display text-3xl sm:text-4xl text-fire-gradient mt-3">{value}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ABOUT */}
      <section className="px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={IMG.yardCleanup} alt="Cleaned-up yard after Blazin Property Solutions service" className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">About BPS</div>
              <h2 className="font-display text-5xl sm:text-7xl leading-[0.9]">
                BUILT FOR<br/>PROPERTY<br/><span className="text-fire-gradient">EXCELLENCE</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                🔥 A local company serving Butler County & rural Kansas. Junk removal • Tree trimming • Fencing • Demolition • Landscaping • Mowing • Property management & more.
              </p>
              <p className="mt-4 font-display text-2xl text-fire-gradient">Your property, our priority.</p>
            </Reveal>
            <RevealGroup className="mt-8 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <RevealItem key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">What We Do</div>
              <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">OUR<br/><span className="text-fire-gradient">SERVICES</span></h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary group">
              View all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <RevealItem key={s.slug}>
                <Link to={`/services/${s.slug}`}
                  className="group relative block rounded-2xl h-80 overflow-hidden border border-border/60 hover:border-primary/60 transition-all hover:-translate-y-1">
                  <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/25 group-hover:to-accent/25 transition-colors" />
                  <div className="relative h-full p-7 flex flex-col justify-between">
                    <div className="text-xs text-primary font-mono">0{i + 1}</div>
                    <div>
                      <h3 className="font-display text-3xl">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Recent Work</div>
            <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">PROPERTY<br/><span className="text-fire-gradient">TRANSFORMATIONS</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-5">
            {[
              { img: IMG.dumpLoad, title: "Full Junk Haul", tag: "Junk Removal", span: "md:col-span-7 aspect-[16/10]" },
              { img: IMG.trailerAlley, title: "Alley Cleanout", tag: "Hauling", span: "md:col-span-5 aspect-[16/10]" },
              { img: IMG.yardCleanup, title: "Yard Restoration", tag: "Property Mgmt", span: "md:col-span-5 aspect-[16/10]" },
              { img: IMG.truckTrailer, title: "Heavy Equipment Move", tag: "General", span: "md:col-span-7 aspect-[16/10]" },
            ].map((p, i) => (
              <Reveal key={i} className={p.span} delay={i * 0.08}>
                <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                  <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</div>
                    <h3 className="font-display text-2xl sm:text-3xl mt-2">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Why BPS</div>
            <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">WHY CLIENTS<br/><span className="text-fire-gradient">TRUST BPS</span></h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Fast", "Quick response times."],
              ["Clean", "Professional cleanup after every project."],
              ["Dependable", "Reliable service you can count on."],
              ["Affordable", "Fair, honest pricing."],
              ["Locally Owned", "Kansas-based business."],
              ["Always Open", "Available when you need help."],
            ].map(([t, d]) => (
              <RevealItem key={t}>
                <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/50 transition-colors group">
                  <Flame className="h-6 w-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-3xl text-fire-gradient">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Reviews</div>
            <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">VOICES OF<br/><span className="text-fire-gradient">OUR CLIENTS</span></h2>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <RevealItem key={t.name}>
                <div className={`glass-card rounded-2xl p-8 h-full ${i % 2 === 1 ? "md:translate-y-6" : ""}`}>
                  <div className="text-primary mb-4">★★★★★</div>
                  <p className="text-muted-foreground leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="font-display tracking-wider">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mt-1">Verified Client</div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-32">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl glass-card p-12 sm:p-20 text-center glow-flame">
            <div className="absolute inset-0 bg-fire-gradient opacity-10" />
            <div className="relative">
              <h2 className="font-display text-5xl sm:text-7xl">READY TO <span className="text-fire-gradient">IGNITE</span> YOUR PROJECT?</h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Free on-site estimates. Same-day response across Butler County & surrounding areas.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame">Get Estimate</Link>
                <a href={SITE.phoneHref} className="rounded-full border border-border px-7 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary">{SITE.phone}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
