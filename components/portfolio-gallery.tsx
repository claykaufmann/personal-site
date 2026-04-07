"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/types/types";

interface PortfolioGalleryProps {
  photos: Photo[];
}

export function PortfolioGallery({ photos }: PortfolioGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Constrain body to viewport so footer stays visible, no vertical scroll
    document.body.style.height = "100svh";
    document.body.style.overflowY = "hidden";

    const snapToNearest = () => {
      const snapOffset = 0.1 * window.innerWidth; // matches 10vw paddingLeft
      const items = Array.from(el.children) as HTMLElement[];
      let nearest: HTMLElement | null = null;
      let minDist = Infinity;
      for (const item of items) {
        const dist = Math.abs(el.scrollLeft - (item.offsetLeft - snapOffset));
        if (dist < minDist) {
          minDist = dist;
          nearest = item;
        }
      }
      if (nearest) {
        el.scrollTo({ left: nearest.offsetLeft - snapOffset, behavior: "smooth" });
      }
    };

    let snapTimer: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(snapToNearest, 180);
    };

    const updateScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const ratio = clientWidth / scrollWidth;
      const maxScroll = scrollWidth - clientWidth;
      setThumbWidth(ratio);
      setThumbLeft(maxScroll > 0 ? (scrollLeft / maxScroll) * (1 - ratio) : 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    updateScroll();
    el.addEventListener("scroll", updateScroll);

    return () => {
      document.body.style.height = "";
      document.body.style.overflowY = "";
      window.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", updateScroll);
      clearTimeout(snapTimer);
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto overflow-y-hidden items-center scrollbar-none"
        style={{ height: "60svh", paddingLeft: "10vw", paddingRight: "6vw" }}
      >
        {photos.map((photo) => (
          <div key={photo.url} className="flex-none h-full py-4">
            <Image
              src={photo.url}
              alt={photo.alt ?? ""}
              width={photo.width}
              height={photo.height}
              className="h-full w-auto object-contain rounded-sm"
              sizes="auto"
            />
          </div>
        ))}
      </div>

      {/* Scrollbar */}
      <div className="relative h-px bg-border mx-[10vw] mt-3">
        <div
          className="absolute top-0 h-full bg-foreground"
          style={{
            width: `${thumbWidth * 100}%`,
            left: `${thumbLeft * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
