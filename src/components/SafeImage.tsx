import React, { useState, useEffect } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSources: string | string[];
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SafeImage({ fallbackSources, alt, className, style, ...props }: SafeImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  const sources = Array.isArray(fallbackSources)
    ? fallbackSources
    : fallbackSources
    ? [fallbackSources]
    : [];

  useEffect(() => {
    setCurrentIndex(0);
    setHasFailedAll(false);
  }, [fallbackSources]);

  const handleError = () => {
    if (currentIndex < sources.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  // If all sources failed or no sources are provided, render a gorgeous premium vector logo representations
  if (hasFailedAll || sources.length === 0) {
    // For a luxury minimalist studio brand, render the elegant monogram + wordmark fallback
    return (
      <div className="flex items-center gap-3 select-none pointer-events-auto" style={style}>
        {/* Sleek, thin circular geometric monoline monogram */}
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-1.5 border-black text-black flex items-center justify-center font-sans font-black text-xs md:text-sm tracking-wider shadow-sm bg-white/50 backdrop-blur-xs">
          TO
        </div>
        <div className="flex flex-col items-start leading-[1.15] text-left">
          <span className="font-sans font-extrabold text-[15px] md:text-[17px] tracking-tight text-black">TO STUDIO</span>
          <span className="font-mono text-[9px] tracking-widest text-zinc-500 font-bold uppercase">TAIF</span>
        </div>
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      style={style}
      src={sources[currentIndex] || ""}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}

