import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { SITE, IMG } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/service-area", label: "Service Area" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div className="glass-card rounded-2xl px-4 sm:px-6 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img src={IMG.logo} alt="Blazin Property Solutions logo" className="h-10 w-10 rounded-lg object-cover" />
            <div className="hidden sm:block min-w-0">
              <div className="font-display text-sm tracking-wider truncate">BLAZIN PROPERTY</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary -mt-0.5">Solutions</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors group",
                    isActive && "text-primary",
                  )
                }
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2 justify-end">
            <a href={SITE.phoneHref} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link to="/contact" className="hidden sm:inline-flex shrink-0 items-center rounded-full bg-fire-gradient px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:opacity-95 glow-flame">
              Free Estimate
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden glass-card mt-2 rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg uppercase tracking-widest text-sm hover:bg-white/5">
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="px-3 py-2 rounded-lg uppercase tracking-widest text-sm text-primary">
              {SITE.phone}
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-fire-gradient opacity-10 blur-3xl rounded-full pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={IMG.logo} alt="" className="h-12 w-12 rounded-lg" />
              <div>
                <div className="font-display tracking-wider">BLAZIN PROPERTY</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Solutions</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{SITE.tagline} Local LLC serving {SITE.area}.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Junk Removal Wichita KS</li>
              <li>Tree Trimming Wichita KS</li>
              <li>Fence Installation Wichita KS</li>
              <li>Demolition Services</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={SITE.phoneHref} className="hover:text-foreground">{SITE.phone}</a></li>
              <li>{SITE.area}</li>
              <li>Always Open</li>
              <li><a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} Blazin Property Solutions LLC. All rights reserved.</div>
          <div>Fast. Clean. Dependable.</div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions({ className }: { className?: string }) {
  return (
    <div className={cn("fixed bottom-5 right-5 z-40 flex flex-col gap-3", className)}>
      <a href={SITE.phoneHref} className="group flex h-14 w-14 items-center justify-center rounded-full bg-fire-gradient text-white shadow-2xl glow-flame hover:scale-110 transition-transform" aria-label="Call now">
        <Phone className="h-6 w-6" />
      </a>
      <a href={SITE.facebook} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full glass-card text-white hover:text-primary hover:scale-110 transition-all" aria-label="Facebook">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.73l-.44 2.89h-2.29v6.98A10 10 0 0 0 22 12Z"/></svg>
      </a>
    </div>
  );
}
