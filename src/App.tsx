/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HorizontalContainer from "./components/HorizontalContainer";
import FloatingCTA from "./components/FloatingCTA";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-noir-black text-white selection:bg-royal-blue selection:text-white">
      {/* 1. Custom Immersive Cursor Halo (Mouse platforms only) */}
      <CustomCursor />

      {/* 2. Core Immersive Horizontal Scrolling Engine */}
      <HorizontalContainer />

      {/* 3. Floating Booking Interactive Button (Royal Blue WhatsApp redirect) */}
      <FloatingCTA />
    </main>
  );
}
