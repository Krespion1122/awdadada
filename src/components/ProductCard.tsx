import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  className?: string;
}

export const ProductCard = forwardRef<HTMLAnchorElement, ProductCardProps>(
  ({ id, name, category, image, price, className }, ref) => {
    return (
      <Link
        ref={ref}
        to={`/produkt/${id}`}
        className={cn("group block", className)}
      >
        <motion.div
          className="relative aspect-[3/4] overflow-hidden bg-secondary"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />

          {/* Quick view button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 bg-background text-foreground px-6 py-3 text-xs tracking-[0.15em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye size={14} />
              <span>Podgląd</span>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
              {category}
            </span>
          </div>
        </motion.div>

        <div className="pt-5 space-y-2">
          <h3 className="font-display text-lg lg:text-xl text-foreground leading-tight group-hover:underline underline-offset-4 decoration-1 transition-all">
            {name}
          </h3>
          {price && (
            <p className="text-base font-medium text-foreground/70">{price}</p>
          )}
        </div>
      </Link>
    );
  }
);

ProductCard.displayName = "ProductCard";