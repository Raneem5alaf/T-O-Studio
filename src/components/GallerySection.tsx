import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Sparkles, Camera } from "lucide-react";
import SafeImage from "./SafeImage";

// Import local assets correctly so Vite compiles and bundles them
import abayaFashion from "../assets/images/abaya_fashion_1780403749941.png";
import familyPortrait from "../assets/images/family_portrait_1780403784644.png";
import luxProduct from "../assets/images/lux_product_1780403765142.png";
import studioSpace from "../assets/images/studio_space_1780403731956.png";
import jewelryRes from "../assets/images/regenerated_image_1780476573704.jpg";
import newbornRes from "../assets/images/regenerated_image_1780477819244.jpg";
import studioRentalRes from "../assets/images/regenerated_image_1780477914825.jpg";
import studioRentalRes2 from "../assets/images/regenerated_image_1780478010914.jpg";
import productsFoodRes from "../assets/images/regenerated_image_1780478261159.jpg";
import personalRes from "../assets/images/regenerated_image_1780486576174.heic";
import abayasRes from "../assets/images/regenerated_image_1780488098601.jpg";
import personalRes2 from "../assets/images/regenerated_image_1780489265402.jpg";
import personalRes3 from "../assets/images/regenerated_image_1780489378151.jpg";
import specialEventsRes from "../assets/images/regenerated_image_1780492021801.jpg";
import specialEventsRes2 from "../assets/images/regenerated_image_1784186034982.png";
import userUploadedPhoto from "../assets/images/input_file_2.png";
import specialEventStudio from "../assets/images/special_event_studio_1785226908507.jpg";
import personalRes4 from "../assets/images/regenerated_image_1780492054084.heic";
import personalRes5 from "../assets/images/regenerated_image_1780492870980.jpg";
import studioRentalRes3 from "../assets/images/regenerated_image_1784185777568.png";
import productsFoodRes2 from "../assets/images/regenerated_image_1784186086501.png";

interface GallerySectionProps {
  scrollLeft: number;
  viewportWidth: number;
}

interface CustomGalleryItem {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  image: string[];
  descriptionEn: string;
  descriptionAr: string;
  specs: {
    camera: string;
    lens: string;
    lighting: string;
  };
}

export default function GallerySection({ scrollLeft, viewportWidth }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<CustomGalleryItem | null>(null);

  const galleryItems: CustomGalleryItem[] = [
    {
      id: "studio-rental",
      titleEn: "Vanguard Studio Rental",
      titleAr: "تأجير مساحة الاستوديو",
      categoryEn: "CREATIVE SPACE",
      categoryAr: "تأجير المساحة",
      image: [
        studioRentalRes3,
        studioRentalRes2,
        studioRentalRes,
        "/input_file_4.png",
        "/input_file_4",
        "/input_file_1.png",
        "/input_file_1",
        "/input_file_3.png",
        "/input_file_3",
        "/input_file_0.png",
        "/input_file_0",
        studioSpace
      ],
      descriptionEn: "A modular professional studio space equipped with master class lighting arrays, diffusers, Godox synchronization setups, and custom-styled background backdrops. Ready for commercial campaign production in Taif.",
      descriptionAr: "مساحة استوديو احترافية فائقة التجّهيز، مدعومة بأنظمة تحكم بالإضاءة الموزعة وخلفيات متنوعة تتيح للمبدعين وصانعي العلامات التجارية تطبيق رؤاهم الفنية بأعلى المعايير العالمية.",
      specs: {
        camera: "تجهيز الاستوديو الاحترافي",
        lens: "موزعات ضوئية ومرونة تحكم كاملة",
        lighting: "Godox Professional Studio Array Sets"
      }
    },
    {
      id: "jewelry",
      titleEn: "Macro Luxury Jewelry",
      titleAr: "تصوير مجوهرات",
      categoryEn: "LUXURY CAMPAIGNS",
      categoryAr: "مجوهرات فاخرة",
      image: [
        jewelryRes,
        "/input_file_3.png",
        "/input_file_3",
        "/input_file_0.png",
        "/input_file_0",
        "/input_file_1.png",
        "/input_file_1",
        luxProduct
      ],
      descriptionEn: "Highly polished, surgical macro photography capturing diamonds, gold finishes, and precise gemstone facets. Orchestrated under polarized cross-lighting for ultimate pristine luxury brilliance.",
      descriptionAr: "فن تصوير المجوهرات النفيسة والذهب بدقة بروتوكولية فائقة وتكبير ماكرو دقيق، يعكس الجودة اللامتناهية وبريق الأحجار الكريمة لعلامتكم التجارية الفاخرة.",
      specs: {
        camera: "PhaseOne 100MP Medium Format",
        lens: "Schneider Kreuznach 120mm f/4.0 Macro",
        lighting: "Polarized Diffusion & Softbox Accents"
      }
    },
    {
      id: "abayas",
      titleEn: "Editorial Abayas & Fashion",
      titleAr: "تصوير العبايات والأزياء",
      categoryEn: "FASHION LOOKBOOK",
      categoryAr: "الأزياء والعبايات",
      image: [abayasRes, abayaFashion],
      descriptionEn: "Pristine lifestyle and studio editorial lookbooks for Saudi designer Abayas. Emphasizing dynamic drape flows, rich textile textures, and custom high-contrast architectural shadows.",
      descriptionAr: "تصوير كتالوجات وحملات إعلانية مبتكرة لأرقى تصميمات العبايات والأزياء العصرية، لنبرز فخامة تفاصيل النسيج وانسيابية الأقمشة تحت ظلال إضاءات تحاكي رقي خطوط الموضة.",
      specs: {
        camera: "Fujifilm GFX 100S Medium Format",
        lens: "GF 110mm f/2 R LM WR Lens",
        lighting: "Godox AD1200 Pro + 150cm Octas"
      }
    },
    {
      id: "products-food",
      titleEn: "Commercial Products & Food",
      titleAr: "تصوير المنتجات ومنيو الطعام",
      categoryEn: "COMMERCIAL BRANDING",
      categoryAr: "المنتجات والأغذية",
      image: [productsFoodRes2, productsFoodRes, luxProduct],
      descriptionEn: "Creative product staging and gourmet restaurant menu visuals. Control of reflections, color harmony, and textured organic setups to establish high consumer desire.",
      descriptionAr: "إنتاج بصري واعد للمنتجات الفاخرة، زجاجات العطور، وقوائم الطعام الراقية للمطاعم والكافيهات، مبني على تنسيق إبداعي وزوايا تسلط الضوء على جودة منتجاتكم.",
      specs: {
        camera: "Sony A7R V High Resolution",
        lens: "FE 90mm f/2.8 Macro G OSS",
        lighting: "Godox AD300 Pro Duals + Strip Grids"
      }
    },
    {
      id: "special-events",
      titleEn: "Ultra-Classic Special Events",
      titleAr: "تصوير المناسبات الخاصة",
      categoryEn: "RECEPTIONS",
      categoryAr: "المناسبات والفعاليات",
      image: [specialEventStudio, userUploadedPhoto, specialEventsRes2, specialEventsRes, familyPortrait],
      descriptionEn: "Exclusive coverage for premium events, boutique store launches, and private corporate celebrations. Meticulous capture of candid emotion and pristine decor settings.",
      descriptionAr: "توثيق ملكي للمناسبات المرموقة، افتتاح المحلات الفاخرة، حفلات التدشين الرسمية والخاصة مع الحفاظ على دفء اللحظة وحيوية الألوان والرموز البصرية للمناسبة.",
      specs: {
        camera: "Canon EOS R3 Video & Stills",
        lens: "RF 24-70mm f/2.8L IS USM",
        lighting: "Diffused Speedlights & Multi-strobe setup"
      }
    },
    {
      id: "personal",
      titleEn: "Creative Personal Portraiture",
      titleAr: "تصوير شخصي",
      categoryEn: "PORTRAITURE",
      categoryAr: "بورتريهات احترافية",
      image: [personalRes5, personalRes4, personalRes3, personalRes2, personalRes, familyPortrait],
      descriptionEn: "Sophisticated portrait sessions for executives, creators, and professionals. Capturing natural elegance and confidence through custom high-key cinematic lighting configurations.",
      descriptionAr: "جلسات تصوير شخصية مخصصة لرسم حضورك القيادي والمهني لملفات الأعمال أو الصور الشخصية التي تمزج الثقة المطلقة بالنعومة والجمال البصري الاستوديو.",
      specs: {
        camera: "Sony A7R V High Resolution",
        lens: "FE 85mm f/1.4 GM Master",
        lighting: "Cinematic High Key Soft light Dome"
      }
    },
    {
      id: "newborn",
      titleEn: "Gentle Newborn Photography",
      titleAr: "تصوير المواليد",
      categoryEn: "INFANT CARE",
      categoryAr: "تفاصيل المواليد",
      image: [newbornRes, familyPortrait],
      descriptionEn: "Delicate and warm child-safe portraiture designed in a highly hygienic, quiet environment. Utilizing soft, UV-safe continuous lighting to preserve memories of initial days of newborn grace.",
      descriptionAr: "نوفر لملائككم الصغار ذكريات لا تُنسى لأيامهم الأولى في بيئة استوديو دافئة، معقمة، وآمنة كلياً، نستخدم إضاءات مستمرة خفيفة ولطيفة للعناية بصحة مولودكم الجديد.",
      specs: {
        camera: "Canon EOS R5 Master",
        lens: "RF 50mm f/1.2L Deluxe USM",
        lighting: "Ultra-Soft UV Safe Continuous Starlites"
      }
    }
  ];

  return (
    <div 
      className="relative h-screen bg-white text-deep-black flex-none flex-shrink-0 flex flex-col justify-center px-12 md:px-24 select-none border-l border-zinc-100"
      style={{ width: "240vw" }}
      id="section-gallery"
      dir="rtl"
    >
      {/* Subtle background lines for an artistic engineering look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Top Title Block */}
      <div className="relative mb-10 max-w-4xl flex flex-col gap-2 text-right">
        <div className="flex items-center gap-3 justify-start">
          <span className="w-10 h-[2px] bg-royal-blue" />
          <span className="font-mono text-xs text-royal-blue tracking-[0.3em] uppercase font-bold">
            03 / خدمات الاستوديو • OUR SERVICES
          </span>
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-normal text-deep-black">
          خدماتنا الإنتاجية الفاخرة
        </h2>
        <span className="text-zinc-400 font-sans text-xs md:text-sm mt-1 tracking-wider block">
          اضغط على أي عمل لاستكشاف الكواليس والمعايير التقنية المستخدمة
        </span>
      </div>

      {/* Bento Layout Row */}
      <div className="flex gap-8 items-stretch h-[54vh] w-full">
        {galleryItems.map((item, index) => {
          // Alternative grid scales
          const isTaller = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              className="relative flex-none rounded-3xl overflow-hidden cursor-pointer group border border-zinc-200 shadow-md w-[25vw] h-[54vh]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden w-full h-full bg-zinc-100">
                <SafeImage
                  fallbackSources={item.image}
                  alt={item.titleAr}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.95]"
                />
              </div>

              {/* Sophisticated light shadow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90 group-hover:opacity-65 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Expand Icon */}
              <div className="absolute top-4 left-4 bg-royal-blue text-white p-2.5 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & tags */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white z-20 text-right">
                <div className="flex items-center gap-2 mb-2 justify-start">
                  <span className="font-sans text-[10px] text-zinc-300">
                    {item.categoryAr}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg md:text-xl tracking-normal leading-tight text-white group-hover:text-royal-blue transition-colors duration-300">
                  {item.titleAr}
                </h3>
                <span className="font-mono text-[9px] text-zinc-400 mt-1 uppercase tracking-widest block">
                  {item.titleEn}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer guideline */}
      <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-zinc-400 absolute bottom-12 inset-x-12 md:inset-x-24">
        <span>اسحب شريط التمرير للاستكشاف والذهاب يميناً &larr;</span>
        <span>تي او استديو &copy; ٢٠٢٦</span>
      </div>

      {/* Lightbox details modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[200] p-4 md:p-8 cursor-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="lightbox-backdrop"
            onClick={(e) => {
              if ((e.target as HTMLElement).id === "lightbox-backdrop") {
                setSelectedItem(null);
              }
            }}
          >
            <motion.div
              className="bg-white border border-zinc-200 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 relative text-right"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 left-4 bg-zinc-100 hover:bg-royal-blue hover:text-white text-deep-black rounded-full p-2.5 transition-colors duration-300 z-50 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Photo Frame (Span 7) */}
              <div className="md:col-span-6 h-[40vh] md:h-[65vh] relative bg-zinc-50 border-l border-zinc-100">
                <SafeImage
                  fallbackSources={selectedItem.image}
                  alt={selectedItem.titleAr}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Description Content (Span 5) */}
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between max-h-[45vh] md:max-h-[65vh] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-royal-blue animate-pulse" />
                    <span className="font-mono text-xs tracking-widest text-royal-blue uppercase font-bold">
                      {selectedItem.categoryAr} • {selectedItem.categoryEn}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-3xl text-deep-black leading-tight">
                    {selectedItem.titleAr}
                  </h3>
                  <h4 className="font-mono text-zinc-400 text-xs uppercase mt-1 tracking-wider mb-4">
                    {selectedItem.titleEn}
                  </h4>

                  <hr className="border-zinc-100 my-4" />

                  <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed mb-4">
                    {selectedItem.descriptionAr}
                  </p>

                  <p className="font-sans text-xxs text-zinc-400 leading-relaxed mb-6 font-mono text-left" dir="ltr">
                    {selectedItem.descriptionEn}
                  </p>
                </div>



              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
