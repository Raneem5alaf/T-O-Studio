import { motion } from "motion/react";
import SafeImage from "./SafeImage";
import logoHorizontal from "../assets/images/regenerated_image_1784122943237.png";

interface HeroSectionProps {
  scrollLeft: number;
  viewportWidth: number;
}

const logoSources = [
  logoHorizontal,
  "/logo_horizontal.svg",
  "/input_file_2.png",
  "/input_file_2",
  "/logo_stacked.svg",
  "/input_file_0.png",
  "/input_file_1.png"
];

export default function HeroSection({ scrollLeft, viewportWidth }: HeroSectionProps) {
  // Parallax fade out logic as we scroll away
  const progress = Math.min(Math.max(scrollLeft / viewportWidth, 0), 1);
  const opacity = Math.max(0, 1 - progress * 1.5);

  return (
    <div 
      className="relative w-screen h-screen flex-none flex-shrink-0 flex flex-col items-center justify-center bg-white text-black px-6 select-none overflow-hidden pt-20"
      id="section-hero"
      dir="rtl"
      style={{ width: "100vw" }}
    >
      {/* خلفية الشبكة - متباعدة جداً لتعطي إحساساً بالاتساع والهدوء - معدلة لتكون بدقة شفافة جداً 0.3 */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f3f3f3_1.5px,transparent_1.5px)] bg-[size:12rem_12rem] pointer-events-none" 
        style={{ opacity: 0.3 }}
      />

      {/* المحتوى المركزي - هوية الاستوديو مع السلوجان */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl"
        style={{ opacity }}
      >
        {/* الصورة الرئيسية لشعار الاستوديو - مع حركة دخول فائقة الدقة والجمال */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 select-none pointer-events-none w-full flex justify-center"
        >
          <SafeImage
            fallbackSources={logoSources}
            alt="TO Studio Logo"
            className="w-[500px] max-w-[80vw] h-auto object-contain"
          />
        </motion.div>

        {/* النص الفرعي - بخط Tajawal النظيف وبلون رمادي غامق أنيق مع تباعد ممتاز */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="font-sans text-xs sm:text-base md:text-lg text-zinc-700 font-bold tracking-normal px-4 leading-relaxed"
          style={{ fontFamily: '"Tajawal", sans-serif' }}
        >
          نصنع الجمال بدقة احترافية 
          <span className="mx-2 md:mx-3 text-zinc-300">|</span> 
          إحدى شركات مجموعة تركي عمر التجارية
        </motion.p>
      </motion.div>
    </div>
  );
}
