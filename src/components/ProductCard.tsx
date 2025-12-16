import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
          className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick view button */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-background/95 backdrop-blur-sm text-foreground text-center py-3 text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Zobacz szczegóły
            </div>
          </div>
        </motion.div>

        <div className="space-y-1.5">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            {category}
          </p>
          <h3 className="font-display text-base lg:text-lg text-foreground leading-tight group-hover:underline underline-offset-4 transition-all">
            {name}
          </h3>
          {price && (
            <p className="text-sm font-medium text-foreground/80">{price}</p>
          )}
        </div>
      </Link>
    );
  }
);

ProductCard.displayName = "ProductCard";
