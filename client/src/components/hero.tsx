import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
  size?: "default" | "large";
}

export function Hero({ image, title, subtitle, overlay = true, size = "default" }: HeroProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-slate-900", size === "large" ? "h-[600px]" : "h-[400px]")}>
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      )}

      <div className="container mx-auto px-4 h-full relative flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-secondary/90 text-secondary-foreground px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
            Yukon Delta
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
