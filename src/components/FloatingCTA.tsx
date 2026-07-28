import { motion } from "motion/react";
import { CalendarRange } from "lucide-react";

export default function FloatingCTA() {
  const whatsappUrl = "https://wa.me/966550992123";

  return (
    <motion.div
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 bg-royal-blue text-white font-mono font-medium text-xs md:text-sm px-5 py-3 md:px-7 md:py-4 rounded-full shadow-[0_10px_30px_rgba(122,122,122,0.25)] hover:shadow-[0_14px_40px_rgba(122,122,122,0.4)] hover:bg-white hover:text-royal-blue group transition-all duration-500 overflow-hidden"
        id="book-now-cta"
      >
        {/* Background slide-over effect on hover */}
        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Pulsing inner glow ring */}
        <span className="absolute -inset-1 rounded-full bg-royal-blue/30 blur-md group-hover:bg-white/20 animate-pulse -z-10" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2.5">
          <CalendarRange className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-[360deg] text-current" />
          <span className="tracking-widest flex items-center gap-2 font-display">
            <span>BOOK NOW</span>
            <span className="text-white/30 group-hover:text-royal-blue/30">|</span>
            <span className="font-sans font-bold text-xs md:text-sm">احجز الآن</span>
          </span>
        </span>
      </a>
    </motion.div>
  );
}
