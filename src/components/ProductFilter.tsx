import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterOption {
  value: string;
  label: string;
}

interface ProductFilterProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
  sizes: FilterOption[];
  selectedCategory: string;
  selectedPriceRange: string;
  selectedSize: string;
  searchQuery: string;
  onCategoryChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
      >
        {label}: {options.find((o) => o.value === value)?.label || "Wszystkie"}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute top-full left-0 mt-2 bg-background border border-border shadow-lg z-20 min-w-[180px] animate-fade-in">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm transition-colors duration-200",
                  value === option.value
                    ? "bg-secondary text-foreground"
                    : "text-foreground/70 hover:bg-secondary/50"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProductFilter({
  categories,
  priceRanges,
  sizes,
  selectedCategory,
  selectedPriceRange,
  selectedSize,
  searchQuery,
  onCategoryChange,
  onPriceRangeChange,
  onSizeChange,
  onSearchChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6 border-b border-border">
      <div className="flex flex-wrap items-center gap-6">
        <FilterDropdown
          label="Kategoria"
          options={categories}
          value={selectedCategory}
          onChange={onCategoryChange}
        />
        <FilterDropdown
          label="Cena"
          options={priceRanges}
          value={selectedPriceRange}
          onChange={onPriceRangeChange}
        />
        <FilterDropdown
          label="Rozmiar"
          options={sizes}
          value={selectedSize}
          onChange={onSizeChange}
        />
      </div>

      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Szukaj produktów..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 bg-secondary border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground w-full lg:w-64"
        />
      </div>
    </div>
  );
}
