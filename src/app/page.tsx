"use client";

import { useRef } from "react";
import IntroAnimation from "@/components/ui/intro-animation";
import { ImageTrail } from "@/components/ui/image-trail";

const IMAGES = [
    "/angel/IMG-20251206-WA0036.jpg",
    "/angel/IMG-20251206-WA0037.jpg",
    "/angel/IMG-20260307-WA0024.jpg",
    "/angel/IMG-20260307-WA0047.jpg",
    "/angel/IMG-20260307-WA0048.jpg",
    "/angel/IMG-20260308-WA0027.jpg",
    "/angel/IMG-20260308-WA0028.jpg",
    "/angel/IMG-20260308-WA0029.jpg",
    "/angel/IMG-20260308-WA0030.jpg",
    "/angel/IMG-20260308-WA0034.jpg",
    "/angel/IMG-20260308-WA0038.jpg",
    "/angel/IMG-20260310-WA0013.jpg",
    "/angel/IMG-20260310-WA0016.jpg",
    "/angel/IMG-20260314-WA0017.jpg",
    "/angel/IMG-20260314-WA0019.jpg",
    "/angel/IMG-20260316-WA0006.jpg",
    "/angel/IMG-20260326-WA0009.jpg",
    "/angel/IMG-20260328-WA0018.jpg",
    "/angel/IMG-20260402-WA0002.jpg",
    "/angel/IMG-20260430-WA0009.jpg",
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#111111]">
      <ImageTrail containerRef={containerRef}>
        {IMAGES.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`trail-${idx}`}
            className="w-24 h-32 object-cover rounded-xl shadow-2xl border border-white/10 pointer-events-none"
          />
        ))}
      </ImageTrail>
      <div className="relative z-10 w-full h-full">
        <IntroAnimation />
      </div>
    </main>
  );
}
