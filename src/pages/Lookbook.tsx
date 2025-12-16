import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import heroImage from "@/assets/hero-image.jpg";

const lookbookImages = [
  { src: heroImage, title: "Tailored Precision", season: "AW24" },
  { src: lookbook1, title: "White Elegance", season: "AW24" },
  { src: lookbook2, title: "Evening Drama", season: "AW24" },
  { src: lookbook3, title: "Modern Classic", season: "AW24" },
  { src: lookbook4, title: "Bold Statement", season: "AW24" },
];

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % lookbookImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + lookbookImages.length) % lookbookImages.length);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
            Kolekcja Jesień/Zima 2024
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up delay-100">
            Lookbook
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {lookbookImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "group relative cursor-pointer overflow-hidden",
                  index === 0 && "md:col-span-2 aspect-[16/9]",
                  index !== 0 && "aspect-[3/4]"
                )}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-background/70 mb-1">
                    {image.season}
                  </p>
                  <h3 className="font-display text-xl text-background">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-background/70 hover:text-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-16">
            <img
              src={lookbookImages[selectedImage].src}
              alt={lookbookImages[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="text-center mt-6">
              <p className="text-xs tracking-[0.2em] uppercase text-background/50 mb-1">
                {lookbookImages[selectedImage].season}
              </p>
              <h3 className="font-display text-2xl text-background">
                {lookbookImages[selectedImage].title}
              </h3>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-background/70 hover:text-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={48} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {lookbookImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedImage === index
                    ? "bg-background w-8"
                    : "bg-background/30 hover:bg-background/50"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Lookbook;
