import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4">Produkt nie znaleziony</h1>
          <Link to="/sklep" className="text-muted-foreground hover:text-foreground transition-colors">
            Wróć do sklepu
          </Link>
        </div>
      </main>
    );
  }

  const hasMultipleImages = product.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Back Link */}
        <Link
          to="/sklep"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Wróć do sklepu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-secondary overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - zdjęcie ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Poprzednie zdjęcie"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Następne zdjęcie"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/80 text-background text-sm">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hasMultipleImages && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-20 h-24 flex-shrink-0 overflow-hidden border-2 transition-colors",
                      currentImageIndex === index
                        ? "border-foreground"
                        : "border-transparent hover:border-muted-foreground/50"
                    )}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-foreground mb-8">
              {product.priceFormatted}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Sizes - Clickable */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Wybierz rozmiar
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "relative px-5 py-3 border text-sm transition-all duration-200 min-w-[60px]",
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border hover:border-foreground"
                    )}
                  >
                    {size}
                    {selectedSize === size && (
                      <Check size={14} className="absolute top-1 right-1" />
                    )}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-sm text-muted-foreground mt-3">
                  Wybrany rozmiar: <span className="text-foreground font-medium">{selectedSize}</span>
                </p>
              )}
            </div>

            {/* Availability Notice */}
            <div className="bg-secondary p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-1">
                    Brak dostępności online
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ten produkt nie jest dostępny do zakupu przez internet. 
                    Skontaktuj się z nami, aby sprawdzić dostępność w butikach partnerskich.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link to="/kontakt">
              <Button variant="fashion" size="fashion" className="w-full">
                Zapytaj o dostępność w butikach
              </Button>
            </Link>

            {/* Product Details */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Szczegóły produktu
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Najwyższa jakość materiałów</li>
                <li>• Ręczne wykonanie</li>
                <li>• Wyprodukowano we Włoszech</li>
                <li>• Profesjonalne pranie chemiczne</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
