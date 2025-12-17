import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Save, Image as ImageIcon, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { categories } from "@/data/products";

interface CMSProduct {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  price: string;
  description: string;
  imageUrl: string;
}

const availableSizes = ["XS", "S", "M", "L", "XL", "34", "36", "38", "40", "42", "ONE SIZE"];

const CMS = () => {
  const [cmsProducts, setCmsProducts] = useState<CMSProduct[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<CMSProduct | null>(null);
  
  const [formData, setFormData] = useState<Omit<CMSProduct, "id">>({
    name: "",
    category: "",
    sizes: [],
    price: "",
    description: "",
    imageUrl: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      sizes: [],
      price: "",
      description: "",
      imageUrl: "",
    });
    setEditingProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.price) {
      toast.error("Wypełnij wymagane pola: nazwa, kategoria, cena");
      return;
    }

    if (editingProduct) {
      setCmsProducts(prev => 
        prev.map(p => p.id === editingProduct.id ? { ...formData, id: editingProduct.id } : p)
      );
      toast.success("Produkt zaktualizowany");
    } else {
      const newProduct: CMSProduct = {
        ...formData,
        id: Date.now().toString(),
      };
      setCmsProducts(prev => [...prev, newProduct]);
      toast.success("Produkt dodany");
    }
    
    resetForm();
    setShowForm(false);
  };

  const handleEdit = (product: CMSProduct) => {
    setFormData({
      name: product.name,
      category: product.category,
      sizes: product.sizes,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setCmsProducts(prev => prev.filter(p => p.id !== id));
    toast.success("Produkt usunięty");
  };

  const toggleSize = (size: string) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size) 
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Panel administracyjny
            </p>
            <h1 className="font-display text-4xl lg:text-6xl text-foreground mb-4">
              CMS
            </h1>
            <p className="text-muted-foreground">
              Zarządzaj produktami w katalogu
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium text-foreground">
              Produkty ({cmsProducts.length})
            </h2>
            <Button 
              variant="fashion" 
              onClick={() => { resetForm(); setShowForm(true); }}
              className="gap-2"
            >
              <Plus size={18} />
              Dodaj produkt
            </Button>
          </div>

          {/* Product Form Modal */}
          {showForm && (
            <motion.div 
              className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h3 className="font-display text-xl">
                    {editingProduct ? "Edytuj produkt" : "Nowy produkt"}
                  </h3>
                  <button 
                    onClick={() => { setShowForm(false); resetForm(); }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Nazwa produktu *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="np. Kaszmirowy Sweter Essential"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Kategoria *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.filter(c => c.value !== "all").map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, category: cat.value }))}
                          className={cn(
                            "px-4 py-2 text-sm border transition-colors",
                            formData.category === cat.value
                              ? "bg-foreground text-background border-foreground"
                              : "bg-transparent text-muted-foreground border-border hover:border-foreground"
                          )}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Cena (PLN) *
                    </label>
                    <Input
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="np. 1 890 PLN"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  {/* Sizes */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Rozmiary
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => toggleSize(size)}
                          className={cn(
                            "px-4 py-2 text-sm border transition-colors",
                            formData.sizes.includes(size)
                              ? "bg-foreground text-background border-foreground"
                              : "bg-transparent text-muted-foreground border-border hover:border-foreground"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Opis
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Opis produktu..."
                      rows={4}
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      URL zdjęcia
                    </label>
                    <Input
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                      placeholder="https://..."
                      className="bg-secondary/50 border-border"
                    />
                    {formData.imageUrl && (
                      <div className="mt-3 aspect-[3/4] w-32 bg-secondary overflow-hidden">
                        <img 
                          src={formData.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => { setShowForm(false); resetForm(); }}
                      className="flex-1"
                    >
                      Anuluj
                    </Button>
                    <Button type="submit" variant="fashion" className="flex-1 gap-2">
                      <Save size={18} />
                      {editingProduct ? "Zapisz zmiany" : "Dodaj produkt"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Products List */}
          {cmsProducts.length === 0 ? (
            <motion.div 
              className="text-center py-24 border border-dashed border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Package size={48} className="mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground mb-2">Brak produktów</p>
              <p className="text-sm text-muted-foreground/70">
                Kliknij "Dodaj produkt" aby dodać pierwszy produkt
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cmsProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="border border-border bg-secondary/20 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image */}
                  <div className="aspect-[3/4] bg-secondary relative">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon size={48} className="text-muted-foreground/30" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">
                      {categories.find(c => c.value === product.category)?.label || product.category}
                    </p>
                    <h3 className="font-medium text-foreground mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground mb-3">{product.price}</p>
                    
                    {product.sizes.length > 0 && (
                      <p className="text-xs text-muted-foreground mb-4">
                        Rozmiary: {product.sizes.join(", ")}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEdit(product)}
                        className="flex-1"
                      >
                        Edytuj
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Info Note */}
          <div className="mt-12 p-6 bg-secondary/30 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Uwaga:</strong> Produkty dodane w tym panelu są zapisywane tylko w pamięci przeglądarki i zostaną utracone po odświeżeniu strony. 
              Aby trwale zapisywać produkty, należy połączyć panel z bazą danych.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CMS;
