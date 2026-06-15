import { useState, useRef } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
}

export function BeforeAfter({ before, after, alt }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background) */}
      <img src={after} alt={`${alt} - after`} className="w-full h-full block" />

      {/* Before image (overlay) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img src={before} alt={`${alt} - before`} className="w-screen h-full object-cover" style={{ width: `${(100 / position) * 100}%` }} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 h-full w-1 bg-primary/80 group-hover:bg-primary transition-colors"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/80 group-hover:bg-primary rounded-full p-3 transition-colors">
          <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 glass-card rounded-full px-4 py-2 text-xs uppercase tracking-widest pointer-events-none">Before</div>
      <div className="absolute top-6 right-6 glass-card rounded-full px-4 py-2 text-xs uppercase tracking-widest pointer-events-none">After</div>
    </div>
  );
}
