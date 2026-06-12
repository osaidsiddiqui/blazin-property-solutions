import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/site";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bps_loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("bps_loaded", "1");
      setDone(true);
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          {/* Embers */}
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-orange-400"
              initial={{ y: 200, x: (Math.random() - 0.5) * 400, opacity: 0 }}
              animate={{ y: -400, opacity: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random() * 1.5, delay: Math.random() * 1.2, repeat: Infinity, ease: "easeOut" }}
              style={{ boxShadow: "0 0 8px rgba(255,140,40,0.9)" }}
            />
          ))}

          {/* Flame glow */}
          <motion.div
            className="absolute h-96 w-96 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, rgba(255,120,30,0.6), rgba(200,40,10,0.3) 40%, transparent 70%)", filter: "blur(20px)" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.img
              src={IMG.logo}
              alt="BPS"
              className="h-32 w-32 rounded-2xl object-cover"
              initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              style={{ boxShadow: "0 0 60px rgba(255,120,30,0.7)" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-2xl sm:text-3xl tracking-[0.2em] text-white">BLAZIN PROPERTY SOLUTIONS</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
                className="mt-2 text-xs uppercase tracking-[0.5em] text-orange-400"
              >
                Fast. Clean. Dependable.
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
