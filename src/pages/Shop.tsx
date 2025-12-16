import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, sizes } from "@/data/products";
import { Search, ChevronDown, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SortOption = "newest" | "price-asc" | "price-desc" | "name";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const minPrice = 0;
  const maxPrice = 3000;

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Najnowsze" },
    { value: "price-asc", label: "Cena: rosnąco" },
    { value: "price-desc", label: "Cena: malejąco" },
    { value: "name", label: "Alfabetycznie" },
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
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

    // Sort
    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, selectedSize, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedSize("all");
    setPriceRange([0, 3000]);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedSize !== "all" || priceRange[0] !== 0 || priceRange[1] !== 3000;

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  };

  const shopLetters = "SKLEP".split("");

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-32 border-b border-border relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-1/3 right-16 w-px h-48 bg-gradient-to-b from-transparent via-foreground/10 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-2 h-2 border border-foreground/20 rotate-45"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="text-center">
            <motion.p 
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Kolekcja MISSIL
            </motion.p>
            
            {/* Animated title */}
            <div className="overflow-hidden mb-8">
              <h1 className="font-display text-6xl lg:text-9xl text-foreground flex justify-center gap-1 lg:gap-3">
                {shopLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block hover:text-muted-foreground transition-colors duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Decorative line */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="w-12 h-px bg-foreground/30" />
              <span className="w-1.5 h-1.5 bg-foreground/50 rotate-45" />
              <span className="w-12 h-px bg-foreground/30" />
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground max-w-md mx-auto text-lg lg:text-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Ponadczasowe kreacje wykonane z najwyższej jakości materiałów
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Search */}
                <div>
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Szukaj produktów..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-medium mb-5">
                    Kategoria
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={cn(
                          "block w-full text-left px-4 py-3 text-sm transition-all duration-200 border-l-2",
                          selectedCategory === cat.value
                            ? "border-l-foreground bg-secondary/50 text-foreground font-medium"
                            : "border-l-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-medium mb-5">
                    Rozmiar
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setSelectedSize(size.value)}
                        className={cn(
                          "py-3 text-xs border transition-all duration-200",
                          selectedSize === size.value
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                        )}
                      >
                        {size.label === "Wszystkie" ? "All" : size.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Slider */}
                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-medium mb-5">
                    Przedział cenowy
                  </h3>
                  <div className="px-1">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={minPrice}
                      max={maxPrice}
                      step={100}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="px-3 py-1.5 bg-secondary text-foreground">
                        {priceRange[0].toLocaleString()} PLN
                      </span>
                      <span className="px-3 py-1.5 bg-secondary text-foreground">
                        {priceRange[1].toLocaleString()} PLN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-3 border border-foreground text-foreground text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
                  >
                    Wyczyść filtry
                  </button>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Wyświetlono <span className="text-foreground font-medium">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'produkt' : 'produktów'}
                </p>

                {/* Sort Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <ArrowUpDown size={16} />
                    <span>{sortOptions.find(o => o.value === sortBy)?.label}</span>
                    <ChevronDown size={14} className={cn("transition-transform", showSortDropdown && "rotate-180")} />
                  </button>
                  
                  {showSortDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-xl z-20">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowSortDropdown(false);
                          }}
                          className={cn(
                            "block w-full text-left px-4 py-3 text-sm transition-colors",
                            sortBy === option.value
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
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
                  className="text-center py-24 bg-secondary/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg text-muted-foreground mb-6">
                    Nie znaleziono produktów spełniających wybrane kryteria.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-8 py-3 bg-foreground text-background text-sm tracking-wider uppercase hover:bg-foreground/90 transition-colors"
                  >
                    Wyczyść filtry
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;