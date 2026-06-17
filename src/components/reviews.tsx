import { useEffect } from "react";

export function ReviewsSection() {
  useEffect(() => {
    // Load Elfsight platform script with error handling
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.onerror = () => console.warn("Failed to load Elfsight reviews");

    // Suppress ResizeObserver warnings
    const originalWarn = console.warn;
    console.warn = function(...args) {
      if (args[0]?.includes?.("ResizeObserver")) return;
      originalWarn.apply(console, args);
    };

    document.body.appendChild(script);

    return () => {
      console.warn = originalWarn;
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Reviews</div>
          <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">WHAT CLIENTS<br/><span className="text-fire-gradient">SAY ABOUT US</span></h2>
        </div>

        <div className="space-y-12">
          {/* Facebook Reviews */}
          <div className="glass-card rounded-2xl p-8 overflow-hidden">
            <h3 className="font-display text-2xl mb-6 text-white">Facebook Reviews</h3>
            <div className="elfsight-widget-wrapper min-h-96">
              <div className="elfsight-app-3bfdf3ae-25a5-472c-b167-0e103e005a42" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
