import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  className?: string;
}

export function ProductCard({ id, name, category, image, price, className }: ProductCardProps) {
  return (
    <Link
      to={`/produkt/${id}`}
      className={cn(
        "group block",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
          {category}
        </p>
        <h3 className="font-display text-lg text-foreground">
          {name}
        </h3>
        {price && (
          <p className="text-sm text-muted-foreground">
            {price}
          </p>
        )}
      </div>
    </Link>
  );
}
