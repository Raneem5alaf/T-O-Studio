import React from "react";
import { motion } from "motion/react";
import { Mail, Globe, Instagram } from "lucide-react";
import SafeImage from "./SafeImage";
import logoHorizontal from "../assets/images/regenerated_image_1784122943759.png";

// Fallbacks representation to ensure the official TO Studio logo is successfully loaded
const logoSources = [
  logoHorizontal,
  "/logo_horizontal.svg",
  "/input_file_2.png",
  "/input_file_2",
  "/logo_stacked.svg",
  "/input_file_0.png",
  "/input_file_1.png",
  "/input_file_3.png",
  "/input_file_3"
];

// Custom outlined minimal TikTok icon
function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

// Custom official outlined WhatsApp icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Speech bubble outline */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      {/* Phone handset silhouette inside */}
      <path d="M9.1 9.1c.4-.4 1-.3 1.3.1l1 1.2c.3.3.3.8-.1 1.1l-.1.1a1 1 0 0 0-.2 1.1c.3.6.7 1 1.2 1.2a1 1 0 0 0 1.1-.2l.1-.1c.3-.4.8-.4 1.1-.1l1.2 1c.4.3.4.9.1 1.3l-.6.6c-.5.5-1.2.6-1.8.3a9 9 0 0 1-4.8-4.8c-.3-.6-.2-1.3.3-1.8l.6-.6z" />
    </svg>
  );
}

// Custom hollow outlined Snapchat icon
function SnapchatIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <div 
      className="relative h-screen bg-white text-deep-black flex-none flex-shrink-0 flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 select-none border-l border-zinc-100"
      style={{ width: "100vw" }}
      id="section-contact"
      dir="rtl"
    >
      {/* 
        This is a highly polished, single-row footer designed to act as a clear, 
        subtle conclusion to the website experience with extensive white space.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200">
          
          {/* Column 1: Branding / Logo (Far Right in RTL) */}
          <div className="flex items-center justify-center lg:justify-start">
            <SafeImage
              fallbackSources={logoSources}
              alt="TO Studio Logo"
              className="h-[32px] w-auto object-contain"
            />
          </div>

          {/* Thin Vertical Grey Separator (Desktop only) */}
          <div className="hidden lg:block h-8 w-[1px] bg-zinc-200" />

          {/* Column 2: Social Media Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-right">
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-mono font-medium text-deep-black tracking-normal select-text" dir="ltr">
                @tostudioksa
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://instagram.com/tostudioksa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-royal-blue hover:text-deep-black transition-colors duration-300"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 stroke-[1.5]" />
                </a>
                <a 
                  href="https://tiktok.com/@tostudioksa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-royal-blue hover:text-deep-black transition-colors duration-300"
                  title="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://snapchat.com/add/tostudioksa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-royal-blue hover:text-deep-black transition-colors duration-300"
                  title="Snapchat"
                >
                  <SnapchatIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Thin Vertical Grey Separator (Desktop only) */}
          <div className="hidden lg:block h-8 w-[1px] bg-zinc-200" />

          {/* Column 3: Website URL */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-royal-blue stroke-[1.5]" />
            <a 
              href="https://www.tostudioksa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[13px] font-medium text-deep-black hover:text-royal-blue transition-colors duration-300 select-text"
              dir="ltr"
            >
              www.tostudioksa.com
            </a>
          </div>

          {/* Thin Vertical Grey Separator (Desktop only) */}
          <div className="hidden lg:block h-8 w-[1px] bg-zinc-200" />

          {/* Column 4: Email address */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-royal-blue stroke-[1.5]" />
            <a 
              href="mailto:info@tostudioksa.com" 
              className="font-mono text-[13px] font-medium text-deep-black hover:text-royal-blue transition-colors duration-300 select-text"
              dir="ltr"
            >
              info@tostudioksa.com
            </a>
          </div>

          {/* Thin Vertical Grey Separator (Desktop only) */}
          <div className="hidden lg:block h-8 w-[1px] bg-zinc-200" />

          {/* Column 5: Phone & WhatsApp */}
          <div className="flex items-center gap-2">
            <WhatsAppIcon className="w-4 h-4 text-royal-blue" />
            <a 
              href="https://wa.me/966550992123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[13px] font-semibold text-deep-black hover:text-royal-blue transition-colors duration-300 select-text"
              dir="ltr"
            >
              +966 550992123
            </a>
          </div>

        </div>

        {/* Brand Copyright Concluding Line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[10px] uppercase font-sans font-medium tracking-widest">
          <p>
            TO STUDIO &copy; 2024 - PART OF TURKI OMAR GROUP
          </p>
          <p className="text-zinc-300">
            Professional Portfolio
          </p>
        </div>

      </motion.div>
    </div>
  );
}
