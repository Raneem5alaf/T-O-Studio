import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Layers } from "lucide-react";
import SafeImage from "./SafeImage";

// Import premium images to represent the Best of TO Studio
import abayasRes from "../assets/images/regenerated_image_1780488098601.jpg";
import jewelryRes from "../assets/images/regenerated_image_1780476573704.jpg";
import personalRes5 from "../assets/images/regenerated_image_1780492870980.jpg";
import specialEventsRes from "../assets/images/regenerated_image_1780492021801.jpg";
import specialEventStudio from "../assets/images/special_event_studio_1785226908507.jpg";

interface PortfolioSectionProps {
  scrollLeft: number;
  viewportWidth: number;
}

interface AlbumPage {
  id: string;
  num: string;
  image: string;
  alt: string;
  baseTilt: number; // Organic physical tilt for natural stack aesthetic
}

export default function PortfolioSection({ scrollLeft, viewportWidth }: PortfolioSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shufflingIdx, setShufflingIdx] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const albumPages: AlbumPage[] = [
    {
      id: "album-page-1",
      num: "01",
      image: abayasRes,
      alt: "Elite Abaya Lookbook Editorial",
      baseTilt: -3.5,
    },
    {
      id: "album-page-2",
      num: "02",
      image: jewelryRes,
      alt: "Luxury Jewelry High-Key Macro Shots",
      baseTilt: 2.5,
    },
    {
      id: "album-page-3",
      num: "03",
      image: personalRes5,
      alt: "Sovereign Executive High-End Portraits",
      baseTilt: -1.5,
    },
    {
      id: "album-page-4",
      num: "04",
      image: specialEventStudio,
      alt: "Exclusive Occasions Coverage of Elite Forums",
      baseTilt: 3.0,
    },
  ];

  // STACK SHUFFLE TRIGGER ACTION
  const handleShuffle = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    setShufflingIdx(currentIndex);

    // Slide out the card swiftly
    setTimeout(() => {
      // Put it to the back and advance index
      setCurrentIndex((prev) => (prev + 1) % albumPages.length);
      setShufflingIdx(null);
      setIsShuffling(false);
    }, 280); // snappy physical response 280ms
  };

  // Math calculated for fading our section as we transition between Hero and Services
  const progress = scrollLeft / (viewportWidth || 1);
  let sectionOpacity = 1;
  if (progress < 1.0) {
    sectionOpacity = Math.max(0, Math.min(1, (progress - 0.4) / 0.6));
  } else if (progress > 1.9) {
    sectionOpacity = Math.max(0, Math.min(1, 1 - (progress - 1.9) / 0.7));
  }

  return (
    <div
      className="relative h-screen flex-none flex-shrink-0 flex flex-col justify-center px-4 md:px-16 lg:px-24 select-none border-l border-zinc-100 overflow-hidden"
      style={{
        width: "180vw",
        opacity: sectionOpacity,
        transition: "opacity 200ms ease-out",
      }}
      id="section-portfolio"
      dir="rtl"
    >
      {/* Film-Grain Texturing Overlay for high-end organic aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-50 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid line backdrop decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f2f2f4_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f4_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none opacity-80" />

      {/* Massive Semi-transparent background typographic accents */}
      <div
        className="absolute left-[6%] bottom-[4vh] select-none pointer-events-none text-[22vw] leading-none font-sans font-black tracking-tighter text-zinc-300/15 opacity-40 transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(${(scrollLeft - viewportWidth) * 0.15}px)`,
        }}
        dir="ltr"
      >
        TO STUDIO
      </div>

      <div
        className="absolute right-[8%] top-[4vh] select-none pointer-events-none text-[16vw] leading-none font-sans font-black tracking-normal text-zinc-300/15 opacity-40 transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(${(viewportWidth - scrollLeft) * 0.1}px)`,
        }}
      >
        إبـداع
      </div>

      {/* ================= COMPRESSED RESPONSIVE ROW GRID LALOUT ================= */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* ================= MINIMALIST TITLE COLUMN (RIGHT SIDE IN RTL) ================= */}
        <div className="relative flex flex-col gap-2 text-right select-none pr-2 shrink-0 md:max-w-[480px]">
          <div className="flex items-center gap-3 justify-start">
            <span className="w-10 h-[2px] bg-royal-blue" />
            <span className="font-mono text-xs text-royal-blue tracking-[0.3em] uppercase font-bold">
              02 / أعمال الاستوديو • OUR PORTFOLIO
            </span>
          </div>
          
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-normal text-deep-black mt-1 leading-tight">
            أعمالنا الإبداعية المختارة
          </h2>
          
          <span className="text-zinc-400 font-sans text-xs md:text-sm mt-1 tracking-wider block">
            استعراض لأبرز اللحظات والإنتاجات التي تعكس شغفنا واحترافيتنا
          </span>
        </div>

        {/* ================= MASSIVE FULL-BLEED SHUFFLE DECK (LEFT/CENTER) ================= */}
        <div 
          className="relative flex-1 flex items-center justify-center min-h-[50vh] md:min-h-[64vh] w-full" 
          id="portfolio-shuffle-wrapper"
        >
          {/* Deck Container (Bigger stack sizing requested) */}
          <div className="relative w-[86vw] sm:w-[480px] md:w-[500px] lg:w-[580px] h-[48vh] sm:h-[53vh] md:h-[58vh] max-h-[540px] flex items-center justify-center">
            {albumPages.map((page, idx) => {
              // Determine current distance/order from top
              const distance = (idx - currentIndex + albumPages.length) % albumPages.length;
              const isTopCard = distance === 0;
              const isShufflingOut = shufflingIdx === idx;

              // Positioning offset to stack behind
              let targetX = distance * -12;
              let targetY = distance * -10;
              let scale = 1 - distance * 0.035;
              let rotation = page.baseTilt + (distance * 1.5);
              let zIndex = albumPages.length - distance;
              let opacity = distance === 3 ? 0 : 1 - distance * 0.15;
              let filterVal = `blur(${distance * 0.3}px)`;

              // Shuffling Out Action Overwrite
              if (isShufflingOut) {
                targetX = isMobile ? -260 : -425; // slide far out
                targetY = -35;
                scale = 1.02;
                rotation = -12;
                zIndex = 40; // stay top of deck
                opacity = 0.85;
                filterVal = "blur(0px)";
              }

              return (
                <motion.div
                  key={page.id}
                  onClick={isTopCard ? handleShuffle : undefined}
                  className="absolute w-full h-full rounded-[16px] md:rounded-[20px] overflow-hidden select-none cursor-pointer"
                  style={{
                    zIndex: zIndex,
                    pointerEvents: isTopCard ? "auto" : "none",
                  }}
                  animate={{
                    x: targetX,
                    y: targetY,
                    scale: scale,
                    rotate: rotation,
                    opacity: opacity,
                    filter: filterVal,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 26,
                    mass: 0.9,
                  }}
                >
                  {/* FULL-IMAGE BLEED POLAROID STYLE FRAME (NO FOOTER, NO BORDERS) */}
                  <div className="w-full h-full relative select-none rounded-[16px] md:rounded-[20px] overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.22)] md:shadow-[0_35px_80px_rgba(0,0,0,0.26)] bg-zinc-100 group border border-white/10">
                    
                    {/* The Full Edge-to-Edge Cover Image */}
                    <SafeImage
                      fallbackSources={page.image}
                      alt={page.alt}
                      className="w-full h-full object-cover filter brightness-[0.93] contrast-[1.01] transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for high-end subtle look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />

                    {/* Clean Page Index Number in Corner (To keep focus on photography) */}
                    <div 
                      className="absolute bottom-6 right-6 z-20 flex flex-col items-end select-none"
                      dir="ltr"
                    >
                      <span className="font-mono text-[13px] md:text-[14px] font-black tracking-widest text-white/90 drop-shadow-sm">
                        {page.num} / 04
                      </span>
                    </div>

                    {/* Micro organic details corner hints */}
                    <div className="absolute top-6 right-6 w-3.5 h-3.5 border-t border-r border-white/30 pointer-events-none" />
                    <div className="absolute bottom-6 left-6 w-3.5 h-3.5 border-b border-l border-white/30 pointer-events-none" />

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Guide text on bottom left margin */}
      <div className="absolute bottom-6 left-12 font-sans text-[10px] text-zinc-400 flex items-center gap-2 z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-ping" />
        <span>انقر على الصورة العلوية للتبديل • Tap card to shuffle</span>
      </div>
    </div>
  );
}
