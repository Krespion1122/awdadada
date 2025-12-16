import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, sizes } from "@/data/products";
import { Search, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);

  const minPrice = 0;
  const maxPrice = 3000;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesSize =
        selectedSize === "all" || product.sizes.includes(selectedSize);
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPrice && matchesSize && matchesSearch;
    });
  }, [selectedCategory, priceRange, selectedSize, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedSize("all");
    setPriceRange([0, 3000]);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedSize !== "all" || priceRange[0] !== 0 || priceRange[1] !== 3000 || searchQuery !== "";

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Kolekcja MISSIL
            </p>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mb-4">
              Sklep
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Odkryj nasze ponadczasowe kreacje wykonane z najwyższej jakości materiałów
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Left: Filter toggles */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <SlidersHorizontal size={18} />
                <span>Filtry</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                )}
              </button>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={14} />
                  Wyczyść
                </button>
              )}
            </div>

            {/* Right: Search & Results count */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produkt' : 'produktów'}
              </span>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Szukaj..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-secondary/50 border border-border rounded-none text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground w-full lg:w-56 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Expandable Filters */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-border">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Kategoria</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={cn(
                        "px-4 py-2 text-sm border transition-all duration-200",
                        selectedCategory === cat.value
                          ? "bg-foreground text-background border-foreground"
                          : "bg-transparent text-foreground/70 border-border hover:border-foreground"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Rozmiar</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={cn(
                        "w-12 h-12 text-sm border transition-all duration-200 flex items-center justify-center",
                        selectedSize === size.value
                          ? "bg-foreground text-background border-foreground"
                          : "bg-transparent text-foreground/70 border-border hover:border-foreground"
                      )}
                    >
                      {size.label === "Wszystkie" ? "All" : size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Przedział cenowy
                </h3>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={minPrice}
                    max={maxPrice}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-foreground">
                    <span>{priceRange[0].toLocaleString()} PLN</span>
                    <span>{priceRange[1].toLocaleString()} PLN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-12">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    image={product.images[0]}
                    price={product.priceFormatted}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-4">
                Nie znaleziono produktów spełniających wybrane kryteria.
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-foreground underline hover:no-underline"
              >
                Wyczyść filtry
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
