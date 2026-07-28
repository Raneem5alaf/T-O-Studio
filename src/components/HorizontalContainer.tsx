import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";
import SafeImage from "./SafeImage";
import logoHorizontal from "../assets/images/regenerated_image_1784122943237.png";

const logoSources = [
  logoHorizontal,
  "/logo_horizontal.svg",
  "/input_file_2.png",
  "/input_file_2",
  "/input_file_0.png",
  "/input_file_0",
  "/input_file_1.png",
  "/input_file_1"
];

export default function HorizontalContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Track viewport scale changes
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      if (containerRef.current) {
        setMaxScroll(containerRef.current.scrollWidth - window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up mouse wheel redirection (vertical scroll -> horizontal scroll) in RTL
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const path = e.composedPath() as HTMLElement[];
      const isInsideYScroll = path.some(
        (el) => el.scrollHeight > el.clientHeight && window.getComputedStyle(el).overflowY === "auto"
      );
      if (isInsideYScroll) return;

      e.preventDefault();
      // Combine wheel movements. In RTL, scrolling down (positive deltaY) moves us Left (decreasing scrollLeft negative values)
      container.scrollLeft -= (e.deltaY * 1.25 + e.deltaX * 1.25);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    
    // Set initial scroll width metrics
    setTimeout(() => {
      if (containerRef.current) {
        setMaxScroll(containerRef.current.scrollWidth - window.innerWidth);
      }
    }, 600);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [viewportWidth]);

  // Handle standard tracking variables
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setScrollLeft(Math.abs(target.scrollLeft));
    setMaxScroll(target.scrollWidth - target.clientWidth);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = 350;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: "smooth"
        });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mouse Drag Panning Mechanics
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") || 
      target.closest("a") || 
      target.closest("input") || 
      target.closest("textarea") ||
      target.closest("#lightbox-backdrop")
    ) {
      return;
    }

    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8; 
    containerRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const getBackgroundColor = () => {
    const r1 = viewportWidth * 0.4;
    const r2 = viewportWidth * 0.9;
    const r3 = viewportWidth * 2.3;
    const r4 = viewportWidth * 2.8;

    if (scrollLeft <= r1) {
      return "#ffffff";
    } else if (scrollLeft > r1 && scrollLeft <= r2) {
      const ratio = (scrollLeft - r1) / (r2 - r1);
      const val = Math.round(255 - (255 - 244) * ratio); 
      const valG = Math.round(255 - (255 - 244) * ratio); 
      const valB = Math.round(255 - (255 - 246) * ratio); 
      return `rgb(${val}, ${valG}, ${valB})`;
    } else if (scrollLeft > r2 && scrollLeft <= r3) {
      return "#f4f4f6";
    } else if (scrollLeft > r3 && scrollLeft <= r4) {
      const ratio = (scrollLeft - r3) / (r4 - r3);
      const val = Math.round(244 + (255 - 244) * ratio); 
      const valG = Math.round(244 + (255 - 244) * ratio);
      const valB = Math.round(246 + (255 - 246) * ratio);
      return `rgb(${val}, ${valG}, ${valB})`;
    } else {
      return "#ffffff";
    }
  };

  const navItems = [
    { label: "الرئيسية", index: "01", offset: 0 },
    { label: "أعمالنا", index: "02", offset: viewportWidth * 1.0 },
    { label: "خدماتنا", index: "03", offset: viewportWidth * 2.8 },
    { label: "تواصل معنا", index: "04", offset: viewportWidth * 5.2 },
  ];

  const navigateTo = (offset: number) => {
    containerRef.current?.scrollTo({
      left: -offset,
      behavior: "smooth",
    });
  };

  const currentProgressPercent = (scrollLeft / (maxScroll || 1)) * 100;

  const determineActiveItemIndex = () => {
    if (maxScroll > 1 && scrollLeft >= maxScroll - 80) {
      return 3; // "تواصل معنا"
    }
    if (scrollLeft >= viewportWidth * 4.5) {
      return 3; // "تواصل معنا"
    } else if (scrollLeft >= viewportWidth * 2.2) {
      return 2; // "خدماتنا"
    } else if (scrollLeft >= viewportWidth * 0.5) {
      return 1; // "أعمالنا"
    }
    return 0; // "الرئيسية"
  };

  const activeIndex = determineActiveItemIndex();

  const handleNavPrev = () => {
    if (activeIndex > 0) {
      navigateTo(navItems[activeIndex - 1].offset);
    }
  };

  const handleNavNext = () => {
    if (activeIndex < navItems.length - 1) {
      navigateTo(navItems[activeIndex + 1].offset);
    }
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden text-deep-black select-none transition-colors duration-500 ease-out" 
      style={{ backgroundColor: getBackgroundColor() }}
      dir="rtl"
    >
      
      {/* ================= HEADER CONTROL BAR ================= */}
      {/* High-end responsive minimalist header, with 100% width, fixed at top, glassmorphism and faint bottom border */}
      <header className="fixed top-0 left-0 w-full h-[64px] md:h-[90px] z-[100] bg-white/80 backdrop-blur-[10px] border-b border-zinc-100/60 flex items-center select-none px-4 md:px-[40px]" dir="rtl">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* RIGHT COLUMN: BRANDING LOGO (Visible only on desktop, aligned to the right in RTL) */}
          <div className="hidden md:flex items-center justify-start w-[200px] shrink-0">
            <motion.div 
              className="flex items-center cursor-pointer pointer-events-auto shrink-0 z-10"
              onClick={() => navigateTo(0)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: activeIndex === 0 ? 0 : 1, 
                scale: activeIndex === 0 ? 0.95 : 1,
                pointerEvents: activeIndex === 0 ? "none" : "auto" 
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <SafeImage
                fallbackSources={logoSources}
                alt="TO Studio Logo"
                className="h-[28px] md:h-[36px] w-auto object-contain transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* CENTER COLUMN: NAVIGATION MENU (Takes full width and centers on mobile, or centers perfectly in the middle of 3-columns on desktop) */}
          <div className="flex-1 flex justify-center items-center">
            <nav className="flex items-center gap-[12px] md:gap-[40px] pointer-events-auto z-10" style={{ direction: "rtl" }} id="nav-container">
              {navItems.map((item, idx) => (
                 <button
                  key={item.label}
                  onClick={() => navigateTo(item.offset)}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer outline-none select-none text-center animate-none"
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 font-sans font-bold">
                    <span className={`font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-tight transition-all duration-300 hidden md:inline-block ${
                      activeIndex === idx ? "text-royal-blue font-bold" : "text-zinc-400 group-hover:text-deep-black"
                    }`}>
                      {item.index}
                    </span>
                    <span className={`text-[10px] sm:text-xs md:text-sm tracking-wide transition-all duration-300 ${
                      activeIndex === idx ? "text-royal-blue scale-105 font-bold" : "text-deep-black/80 group-hover:text-royal-blue font-bold"
                    }`}>
                      {item.label === "تواصل معنا" ? (
                        <>
                          <span className="md:hidden">تواصل</span>
                          <span className="hidden md:inline">تواصل معنا</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  </div>
                  {/* Active state indicator: blue underline */}
                  <div className={`h-[2px] rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-[90%] bg-royal-blue" : "w-0 bg-royal-blue/60 group-hover:w-1/2"
                  }`} />
                </button>
              ))}
            </nav>
          </div>

          {/* LEFT COLUMN: SPACER (Balances the layout perfectly on desktop, hidden on mobile) */}
          <div className="hidden md:block w-[200px] shrink-0"></div>

        </div>
      </header>

      {/* ================= HIGH-END SIDE GLIDING VIEWPORT LAYER ================= */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="flex h-full overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
        dir="rtl" // Follows RTL logic perfectly for standard right-to-left layout and timeline
      >
        {/* Section 1: Hero & Intro (100vw width) */}
        <HeroSection scrollLeft={scrollLeft} viewportWidth={viewportWidth} />

        {/* Section 1.5: Portfolio Section (180vw width) */}
        <PortfolioSection scrollLeft={scrollLeft} viewportWidth={viewportWidth} />

        {/* Section 2: Gallery Grid (240vw width) */}
        <GallerySection scrollLeft={scrollLeft} viewportWidth={viewportWidth} />

        {/* Section 3: Contact & Footer (100vw width) */}
        <ContactSection />
      </div>

      {/* ================= BOTTOM METRICS RAIL ================= */}
      <footer className="fixed bottom-0 inset-x-0 h-16 z-40 flex items-center justify-between px-6 md:px-12 pointer-events-none select-none">
        
        {/* Prev Arrow pointer (RTL flip: Prev is Right, Next is Left) */}
        <button
          onClick={handleNavPrev}
          disabled={activeIndex === 0}
          className={`pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            activeIndex === 0 
              ? "opacity-20 cursor-not-allowed border-zinc-100 text-zinc-300" 
              : "border-zinc-200 text-deep-black hover:bg-royal-blue hover:text-white hover:border-royal-blue cursor-pointer"
          }`}
          title="القسم السابق"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Core Linear Progress Bar */}
        <div className="flex-1 max-w-sm md:max-w-xl mx-8 flex items-center gap-4">
          <span className="font-sans text-[11px] font-bold text-zinc-400">
            الرئيسية
          </span>
          
          <div className="h-[1px] flex-1 relative rounded-full bg-zinc-200">
            <motion.div
              className="absolute right-0 top-0 bottom-0 bg-royal-blue rounded-full"
              style={{ width: `${currentProgressPercent}%` }}
              layoutId="scrollBarIndicator"
            />
          </div>

          <span className="font-sans text-[11px] font-bold text-zinc-400">
            تواصل معنا
          </span>
        </div>

        {/* Next Arrow pointer */}
        <button
          onClick={handleNavNext}
          disabled={activeIndex === navItems.length - 1}
          className={`pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            activeIndex === navItems.length - 1 
              ? "opacity-20 cursor-not-allowed border-zinc-100 text-zinc-300" 
              : "border-zinc-200 text-deep-black hover:bg-royal-blue hover:text-white hover:border-royal-blue cursor-pointer"
          }`}
          title="القسم التالي"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

      </footer>

      {/* Decorative Subtle Organic Texture Overlay applied globally */}
      <div className="absolute inset-0 pointer-events-none grain-overlay z-[150] mix-blend-overlay opacity-50" />
    </div>
  );
}
