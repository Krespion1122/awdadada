import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilter } from "@/components/ProductFilter";
import { products, categories, colors, sizes } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesColor =
        selectedColor === "all" || product.color === selectedColor;
      const matchesSize =
        selectedSize === "all" || product.sizes.includes(selectedSize);
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesColor && matchesSize && matchesSearch;
    });
  }, [selectedCategory, selectedColor, selectedSize, searchQuery]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
            Kolekcja
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up delay-100">
            Sklep
          </h1>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ProductFilter
            categories={categories}
            colors={colors}
            sizes={sizes}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            searchQuery={searchQuery}
            onCategoryChange={setSelectedCategory}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
            onSearchChange={setSearchQuery}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    image={product.images[0]}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground">
                Nie znaleziono produktów spełniających wybrane kryteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
