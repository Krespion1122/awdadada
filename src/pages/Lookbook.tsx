import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kolekcja Jesień/Zima 2024
          </motion.p>
          <motion.h1
            className="font-display text-4xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Lookbook
          </motion.h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {lookbookImages.map((image, index) => (
              <motion.div
                key={index}
                className={cn(
                  "group relative cursor-pointer overflow-hidden",
                  index === 0 && "md:col-span-2 aspect-[16/9]",
                  index !== 0 && "aspect-[3/4]"
                )}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-foreground/0"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-background/70 mb-1">
                    {image.season}
                  </p>
                  <h3 className="font-display text-xl text-background">
                    {image.title}
                  </h3>
                </div>
                {/* Corner accents on hover */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-background/0"
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-background/0"
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors"
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.button
              onClick={prevImage}
              className="absolute left-6 text-background/70 hover:text-background transition-colors"
              aria-label="Previous"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft size={48} />
            </motion.button>

            <div className="max-w-5xl max-h-[85vh] px-16">
              <motion.img
                key={selectedImage}
                src={lookbookImages[selectedImage].src}
                alt={lookbookImages[selectedImage].title}
                className="max-w-full max-h-[85vh] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.button
              onClick={nextImage}
              className="absolute right-6 text-background/70 hover:text-background transition-colors"
              aria-label="Next"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={48} />
            </motion.button>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {lookbookImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    selectedImage === index
                      ? "bg-background w-8"
                      : "bg-background/30 hover:bg-background/50 w-2"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Lookbook;
