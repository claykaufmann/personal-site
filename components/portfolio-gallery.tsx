"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Photo } from "@/types/types";

interface PortfolioGalleryProps {
  photos: Photo[];
}

export function PortfolioGallery({ photos }: PortfolioGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  }, [selectedIndex, photos.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  }, [selectedIndex, photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={photo.url}
            onClick={() => setSelectedIndex(index)}
            className="mb-4 block w-full overflow-hidden rounded-lg cursor-zoom-in break-inside-avoid"
          >
            <Image
              src={photo.url}
              alt={photo.alt ?? ""}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto transition-opacity duration-200 hover:opacity-90"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-[95vw] sm:max-w-[95vw] h-[90vh] bg-black/95 border-none ring-0 p-0 flex items-center justify-center"
        >
          <DialogTitle className="sr-only">
            {selectedIndex !== null
              ? (photos[selectedIndex].alt ?? "Photo")
              : "Photo"}
          </DialogTitle>

          <DialogClose
            render={
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 z-10 text-white/80 hover:text-white hover:bg-white/10"
              />
            }
          >
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {photos.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white hover:bg-white/10"
                onClick={goPrev}
              >
                <ChevronLeft className="size-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white hover:bg-white/10"
                onClick={goNext}
              >
                <ChevronRight className="size-6" />
                <span className="sr-only">Next</span>
              </Button>
            </>
          )}

          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <Image
                src={photos[selectedIndex].url}
                alt={photos[selectedIndex].alt ?? ""}
                width={photos[selectedIndex].width}
                height={photos[selectedIndex].height}
                className="max-w-full max-h-full object-contain"
                sizes="95vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
