import { useEffect } from "react";
import { Star } from "lucide-react";

interface GoogleReviewsWidgetProps {
  placeId?: string;
  businessName?: string;
}

export function GoogleReviewsWidget({ placeId, businessName = "Blazin Property Solutions" }: GoogleReviewsWidgetProps) {
  useEffect(() => {
    // Load Google Reviews widget script if available
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/assets/platform/v3/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="space-y-6">
        {/* Google Reviews Info */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl sm:text-3xl">{businessName}</h3>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Google Reviews</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Blazin+Property+Solutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center rounded-full bg-fire-gradient px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:opacity-95 glow-flame"
            >
              View on Google
            </a>
          </div>
        </div>

        {/* Widget Embed Area */}
        <div className="glass-card rounded-2xl p-6 border border-border/60">
          <p className="text-sm text-muted-foreground mb-4">
            💡 <strong>Setup Instructions:</strong> To display your Google reviews here, connect your Google Business Profile:
          </p>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Get your Google Business ID from your Google Business Profile</li>
            <li>Visit <a href="https://www.trustindex.io" target="_blank" rel="noreferrer" className="text-primary hover:underline">TrustIndex.io</a> (free widget service)</li>
            <li>Connect your Google Business account and copy the embed code</li>
            <li>Share the code and we'll add it to display your reviews automatically</li>
          </ol>
          <p className="text-xs text-muted-foreground mt-4">Or manually add reviews below as you receive them.</p>
        </div>
      </div>
    </div>
  );
}
