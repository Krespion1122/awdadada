import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Info, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id?: string;
    name: string;
    category: string;
    price: string;
    description: string;
    images: string[];
    sizes: string[];
  };
}

const ProductPreviewModal = ({ isOpen, onClose, product }: ProductPreviewModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!isOpen) return null;

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
    <motion.div 
      className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-background w-full max-w-6xl max-h-[95vh] overflow-hidden rounded-2xl shadow-2xl border border-border/50 flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        {/* Header */}
        <div className="p-4 lg:p-6 border-b border-border/50 flex items-center justify-between bg-secondary/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-fashion-gold/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-fashion-gold" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground">
                Podgląd strony produktu
              </h3>
              <p className="text-xs text-muted-foreground">
                Tak będzie wyglądać produkt w sklepie
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {product.id && (
              <Link 
                to={`/produkt/${product.id}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-fashion-gold/10 text-fashion-gold rounded-lg hover:bg-fashion-gold/20 transition-colors"
              >
                <ExternalLink size={14} />
                Otwórz w nowej karcie
              </Link>
            )}
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content - Product Page Preview */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] bg-secondary overflow-hidden relative group rounded-xl">
                {product.images.length > 0 ? (
                  <>
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground/80 text-background text-sm rounded-full">
                          {currentImageIndex + 1} / {product.images.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Brak zdjęć</p>
                  </div>
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
                        "w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors rounded-lg",
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
            <div className="lg:pt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {product.category || "Kategoria"}
              </p>
              <h1 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                {product.name || "Nazwa produktu"}
              </h1>
              <p className="text-xl text-foreground mb-6">
                {product.price || "0 PLN"}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description || "Opis produktu pojawi się tutaj..."}
              </p>

              {/* Sizes */}
              {product.sizes.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Wybierz rozmiar
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "relative px-4 py-2 border text-sm transition-all duration-200 min-w-[50px] rounded-lg",
                          selectedSize === size
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border hover:border-foreground"
                        )}
                      >
                        {size}
                        {selectedSize === size && (
                          <Check size={12} className="absolute top-1 right-1" />
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Wybrany rozmiar: <span className="text-foreground font-medium">{selectedSize}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Availability Notice */}
              <div className="bg-secondary p-5 mb-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm">
                      Brak dostępności online
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ten produkt nie jest dostępny do zakupu przez internet. 
                      Skontaktuj się z nami, aby sprawdzić dostępność w butikach partnerskich.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="fashion" size="fashion" className="w-full rounded-xl">
                Zapytaj o dostępność w butikach
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductPreviewModal;
