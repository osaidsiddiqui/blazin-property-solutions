import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</div>
          <h1 className="font-display text-5xl sm:text-8xl leading-[0.9]">LET'S GET YOUR<br/>PROPERTY <span className="text-fire-gradient">BACK IN SHAPE</span></h1>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <Reveal>
            <div className="space-y-4">
              <a href={SITE.phoneHref} className="block glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors group">
                <Phone className="h-6 w-6 text-primary" />
                <div className="font-display text-2xl mt-3 group-hover:text-fire-gradient">{SITE.phone}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Call Anytime</div>
              </a>
              <div className="glass-card rounded-2xl p-6">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="font-display text-2xl mt-3">{SITE.area}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Service Area</div>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <Clock className="h-6 w-6 text-primary" />
                <div className="font-display text-2xl mt-3">Always Open</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Hours</div>
              </div>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="block glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className="font-display text-xl">Follow on Facebook</div>
                <div className="text-xs uppercase tracking-widest text-primary mt-1">@BlazinPropertySolutions →</div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-card rounded-3xl p-8 sm:p-10 space-y-5"
            >
              {sent ? (
                <div className="text-center py-20">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="font-display text-3xl mt-6">MESSAGE SENT</h3>
                  <p className="text-muted-foreground mt-3">We'll be in touch shortly. For urgent jobs, call {SITE.phone}.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FloatInput label="Name" type="text" required />
                    <FloatInput label="Phone" type="tel" required />
                  </div>
                  <FloatInput label="Email" type="email" required />
                  <div className="relative">
                    <select required defaultValue="" className="peer w-full bg-input/60 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:border-primary focus:outline-none appearance-none">
                      <option value="" disabled>Select…</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other</option>
                    </select>
                    <label className="absolute left-4 top-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Service Needed</label>
                  </div>
                  <div className="relative">
                    <textarea required rows={5} placeholder=" " className="peer w-full bg-input/60 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:border-primary focus:outline-none resize-none" />
                    <label className="absolute left-4 top-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-fire-gradient px-7 py-4 text-sm font-bold uppercase tracking-widest text-white glow-flame hover:scale-[1.01] transition-transform">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function FloatInput({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input {...rest} placeholder=" " className="peer w-full bg-input/60 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:border-primary focus:outline-none" />
      <label className="absolute left-4 top-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
    </div>
  );
}
