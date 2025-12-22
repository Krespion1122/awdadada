import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import heroImage from "@/assets/hero-image.jpg";

const lookbookImages = [
  { src: heroImage, title: "Tailored Precision", season: "AW24", description: "Elegancja w każdym detalu" },
  { src: lookbook1, title: "White Elegance", season: "AW24", description: "Minimalizm i prostota" },
  { src: lookbook2, title: "Evening Drama", season: "AW24", description: "Wieczorowy splendor" },
  { src: lookbook3, title: "Modern Classic", season: "AW24", description: "Ponadczasowy styl" },
  { src: lookbook4, title: "Bold Statement", season: "AW24", description: "Odważne spojrzenie" },
];

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <main className="bg-background">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src={heroImage}
            alt="Lookbook Hero"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          <div className="absolute inset-0 bg-foreground/20" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-background/80">
              Kolekcja Jesień/Zima 2024
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-background tracking-tight">
              Lookbook
            </h1>
            <div className="flex items-center justify-center gap-4 text-background/60">
              <span className="w-12 h-px bg-background/40" />
              <span className="text-sm tracking-[0.3em] uppercase">5 Looks</span>
              <span className="w-12 h-px bg-background/40" />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-background/60">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-background/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.5em] uppercase text-muted-foreground">
              Odkryj kolekcję
            </span>
          </motion.div>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* First large image */}
            <motion.div
              className="col-span-12 lg:col-span-8 aspect-[16/10] group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={lookbookImages[0].src}
                alt={lookbookImages[0].title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === 0 ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-foreground/0"
                animate={{ backgroundColor: hoveredIndex === 0 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
                transition={{ duration: 0.5 }}
              />
              <ImageOverlay image={lookbookImages[0]} isHovered={hoveredIndex === 0} index="01" />
            </motion.div>
            
            {/* Second image - tall */}
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-4 aspect-[3/4] lg:aspect-auto lg:row-span-2 group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.img
                src={lookbookImages[1].src}
                alt={lookbookImages[1].title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === 1 ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-foreground/0"
                animate={{ backgroundColor: hoveredIndex === 1 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
                transition={{ duration: 0.5 }}
              />
              <ImageOverlay image={lookbookImages[1]} isHovered={hoveredIndex === 1} index="02" />
            </motion.div>
            
            {/* Third image */}
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5] group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={lookbookImages[2].src}
                alt={lookbookImages[2].title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === 2 ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-foreground/0"
                animate={{ backgroundColor: hoveredIndex === 2 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
                transition={{ duration: 0.5 }}
              />
              <ImageOverlay image={lookbookImages[2]} isHovered={hoveredIndex === 2} index="03" />
            </motion.div>
            
            {/* Fourth image */}
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5] group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={lookbookImages[3].src}
                alt={lookbookImages[3].title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === 3 ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-foreground/0"
                animate={{ backgroundColor: hoveredIndex === 3 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
                transition={{ duration: 0.5 }}
              />
              <ImageOverlay image={lookbookImages[3]} isHovered={hoveredIndex === 3} index="04" />
            </motion.div>
            
            {/* Fifth image - wide */}
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-8 aspect-[16/9] group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(4)}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img
                src={lookbookImages[4].src}
                alt={lookbookImages[4].title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === 4 ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute inset-0 bg-foreground/0"
                animate={{ backgroundColor: hoveredIndex === 4 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
                transition={{ duration: 0.5 }}
              />
              <ImageOverlay image={lookbookImages[4]} isHovered={hoveredIndex === 4} index="05" />
            </motion.div>
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.blockquote
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl lg:text-8xl font-display text-muted-foreground/20">"</span>
            <p className="font-display text-2xl lg:text-4xl text-foreground leading-relaxed -mt-8">
              Moda przemija, styl pozostaje na zawsze
            </p>
            <footer className="mt-8 text-sm tracking-[0.3em] uppercase text-muted-foreground">
              — Coco Chanel
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-background/70 hover:text-background transition-colors"
              aria-label="Zamknij"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={28} />
            </motion.button>
            
            {/* Navigation buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 lg:left-8 z-10 w-14 h-14 flex items-center justify-center text-background/70 hover:text-background transition-colors bg-background/10 backdrop-blur-sm rounded-full"
              aria-label="Poprzednie"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 lg:right-8 z-10 w-14 h-14 flex items-center justify-center text-background/70 hover:text-background transition-colors bg-background/10 backdrop-blur-sm rounded-full"
              aria-label="Następne"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={32} />
            </motion.button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center px-20 py-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  className="relative max-w-6xl w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={lookbookImages[selectedImage].src}
                    alt={lookbookImages[selectedImage].title}
                    className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  />
                  
                  {/* Image info */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-1">
                          {lookbookImages[selectedImage].season}
                        </p>
                        <h3 className="font-display text-2xl text-background">
                          {lookbookImages[selectedImage].title}
                        </h3>
                        <p className="text-sm text-background/70 mt-1">
                          {lookbookImages[selectedImage].description}
                        </p>
                      </div>
                      <span className="text-sm text-background/40 font-display">
                        {String(selectedImage + 1).padStart(2, '0')} / {String(lookbookImages.length).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {lookbookImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative w-16 h-10 overflow-hidden rounded transition-all duration-300",
                    selectedImage === index
                      ? "ring-2 ring-background ring-offset-2 ring-offset-foreground"
                      : "opacity-50 hover:opacity-80"
                  )}
                  aria-label={`Przejdź do zdjęcia ${index + 1}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

// Image overlay component
interface ImageOverlayProps {
  image: { title: string; season: string; description: string };
  isHovered: boolean;
  index: string;
}

const ImageOverlay = ({ image, isHovered, index }: ImageOverlayProps) => (
  <>
    {/* Index number */}
    <motion.span
      className="absolute top-6 left-6 font-display text-5xl lg:text-7xl text-background/20"
      animate={{ opacity: isHovered ? 1 : 0.3 }}
      transition={{ duration: 0.3 }}
    >
      {index}
    </motion.span>
    
    {/* Content */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
      initial={false}
      animate={{ 
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 20
      }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs tracking-[0.3em] uppercase text-background/70 mb-2">
        {image.season}
      </p>
      <h3 className="font-display text-xl lg:text-2xl text-background mb-1">
        {image.title}
      </h3>
      <p className="text-sm text-background/70">
        {image.description}
      </p>
    </motion.div>
    
    {/* Expand icon */}
    <motion.div
      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-background/10 backdrop-blur-sm rounded-full"
      animate={{ 
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.8
      }}
      transition={{ duration: 0.3 }}
    >
      <Expand size={18} className="text-background" />
    </motion.div>
    
    {/* Corner accents */}
    <motion.div
      className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2"
      animate={{ 
        borderColor: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0)"
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2"
      animate={{ 
        borderColor: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0)"
      }}
      transition={{ duration: 0.3 }}
    />
  </>
);

export default Lookbook;
