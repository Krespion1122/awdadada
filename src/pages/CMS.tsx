import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Plus, Trash2, Save, Image as ImageIcon, X, Package, GripVertical, ChevronUp, ChevronDown } from "lucide-react";
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
  images: string[];
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
    images: [],
  });

  const [newImageUrl, setNewImageUrl] = useState("");

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      sizes: [],
      price: "",
      description: "",
      images: [],
    });
    setNewImageUrl("");
    setEditingProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.price) {
      toast.error("Wypełnij wymagane pola: nazwa, kategoria, cena");
      return;
    }

    if (formData.images.length === 0) {
      toast.error("Dodaj przynajmniej jedno zdjęcie");
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
      images: product.images,
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

  // Image management
  const addImage = () => {
    if (!newImageUrl.trim()) {
      toast.error("Wprowadź URL zdjęcia");
      return;
    }
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, newImageUrl.trim()]
    }));
    setNewImageUrl("");
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const moveImageUp = (index: number) => {
    if (index === 0) return;
    setFormData(prev => {
      const newImages = [...prev.images];
      [newImages[index - 1], newImages[index]] = [newImages[index], newImages[index - 1]];
      return { ...prev, images: newImages };
    });
  };

  const moveImageDown = (index: number) => {
    if (index === formData.images.length - 1) return;
    setFormData(prev => {
      const newImages = [...prev.images];
      [newImages[index], newImages[index + 1]] = [newImages[index + 1], newImages[index]];
      return { ...prev, images: newImages };
    });
  };

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Panel administracyjny
              </p>
              <h1 className="font-display text-3xl lg:text-4xl text-foreground">
                CMS Panel
              </h1>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs text-right hidden lg:block">
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
                <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
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

                  {/* Images - Multiple with Reordering */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Zdjęcia produktu * ({formData.images.length})
                    </label>
                    
                    {/* Add new image */}
                    <div className="flex gap-2 mb-4">
                      <Input
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        placeholder="Wklej URL zdjęcia..."
                        className="bg-secondary/50 border-border flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addImage();
                          }
                        }}
                      />
                      <Button type="button" variant="outline" onClick={addImage} className="gap-2">
                        <Plus size={16} />
                        Dodaj
                      </Button>
                    </div>

                    {/* Image list with drag & drop reordering */}
                    {formData.images.length > 0 ? (
                      <Reorder.Group 
                        axis="y" 
                        values={formData.images} 
                        onReorder={(newOrder) => setFormData(prev => ({ ...prev, images: newOrder }))}
                        className="space-y-2"
                      >
                        {formData.images.map((img, index) => (
                          <Reorder.Item 
                            key={img} 
                            value={img}
                            className="flex items-center gap-3 p-3 bg-secondary/30 border border-border cursor-grab active:cursor-grabbing"
                            whileDrag={{ 
                              scale: 1.02, 
                              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                              backgroundColor: "hsl(var(--secondary))"
                            }}
                          >
                            <div className="text-muted-foreground hover:text-foreground transition-colors">
                              <GripVertical size={18} />
                            </div>
                            
                            <div className="w-16 h-16 bg-secondary flex-shrink-0 overflow-hidden pointer-events-none">
                              <img 
                                src={img} 
                                alt={`Zdjęcie ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => { 
                                  (e.target as HTMLImageElement).src = ''; 
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0 pointer-events-none">
                              <p className="text-sm text-foreground font-medium">
                                {index === 0 ? "Główne zdjęcie" : `Zdjęcie ${index + 1}`}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {img}
                              </p>
                            </div>

                            {/* Reorder buttons */}
                            <div className="flex flex-col gap-1">
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); moveImageUp(index); }}
                                disabled={index === 0}
                                className={cn(
                                  "p-1 transition-colors",
                                  index === 0 
                                    ? "text-muted-foreground/30 cursor-not-allowed" 
                                    : "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                <ChevronUp size={16} />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); moveImageDown(index); }}
                                disabled={index === formData.images.length - 1}
                                className={cn(
                                  "p-1 transition-colors",
                                  index === formData.images.length - 1 
                                    ? "text-muted-foreground/30 cursor-not-allowed" 
                                    : "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                <ChevronDown size={16} />
                              </button>
                            </div>

                            {/* Delete button */}
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); removeImage(index); }}
                              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </Reorder.Item>
                        ))}
                      </Reorder.Group>
                    ) : (
                      <div className="text-center py-8 border border-dashed border-border">
                        <ImageIcon size={32} className="mx-auto text-muted-foreground/50 mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Dodaj zdjęcia produktu
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground mt-2">
                      Przeciągnij zdjęcia aby zmienić kolejność. Pierwsze zdjęcie będzie główne.
                    </p>
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
                    {product.images.length > 0 ? (
                      <>
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 text-background text-xs">
                            +{product.images.length - 1} zdjęć
                          </div>
                        )}
                      </>
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
