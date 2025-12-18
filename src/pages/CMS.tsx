import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, Reorder } from "framer-motion";
import { Plus, Trash2, Save, Image as ImageIcon, X, Package, GripVertical, ChevronUp, ChevronDown, Star, ExternalLink, Settings, Sparkles, Edit3, Eye } from "lucide-react";
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
  isBestseller: boolean;
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
    isBestseller: false,
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
      isBestseller: false,
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
      isBestseller: product.isBestseller,
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

  const bestsellerCount = cmsProducts.filter(p => p.isBestseller).length;

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-fashion-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-20 border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fashion-gold/5 via-transparent to-fashion-gold/5" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fashion-gold/20 to-fashion-gold/5 border border-fashion-gold/30 mb-6"
            >
              <Settings className="w-8 h-8 text-fashion-gold" />
            </motion.div>
            
            <motion.p 
              className="text-xs tracking-[0.5em] uppercase text-fashion-gold mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Panel administracyjny
            </motion.p>
            
            <motion.h1 
              className="font-display text-4xl lg:text-5xl text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Zarządzanie produktami
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Dodawaj, edytuj i organizuj produkty w sklepie MISSIL
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-border/50 bg-secondary/30 backdrop-blur-sm relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="text-2xl font-display text-foreground">{cmsProducts.length}</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Produktów</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-4 h-4 text-fashion-gold" />
                <span className="text-2xl font-display text-foreground">{bestsellerCount}</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Bestsellerów</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-muted-foreground" />
                <span className="text-2xl font-display text-foreground">{categories.length - 1}</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-muted-foreground">Kategorii</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header with Add Button */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div>
              <h2 className="text-2xl font-display text-foreground mb-1">
                Lista produktów
              </h2>
              <p className="text-sm text-muted-foreground">
                Zarządzaj katalogiem produktów
              </p>
            </div>
            <Button 
              variant="fashion" 
              onClick={() => { resetForm(); setShowForm(true); }}
              className="gap-2 shadow-lg shadow-fashion-gold/20 hover:shadow-xl hover:shadow-fashion-gold/30 transition-all"
            >
              <Plus size={18} />
              Dodaj produkt
            </Button>
          </motion.div>

          {/* Product Form Modal */}
          {showForm && (
            <motion.div 
              className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-border/50"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <div className="p-6 lg:p-8 border-b border-border/50 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur-sm z-10 rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fashion-gold/20 to-fashion-gold/5 flex items-center justify-center">
                      {editingProduct ? <Edit3 className="w-5 h-5 text-fashion-gold" /> : <Plus className="w-5 h-5 text-fashion-gold" />}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground">
                        {editingProduct ? "Edytuj produkt" : "Nowy produkt"}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {editingProduct ? "Zaktualizuj dane produktu" : "Wypełnij formularz aby dodać produkt"}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setShowForm(false); resetForm(); }}
                    className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fashion-gold" />
                      Nazwa produktu *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="np. Kaszmirowy Sweter Essential"
                      className="bg-secondary/30 border-border/50 h-12 rounded-xl focus:border-fashion-gold/50 focus:ring-fashion-gold/20 transition-all"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fashion-gold" />
                      Kategoria *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.filter(c => c.value !== "all").map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, category: cat.value }))}
                          className={cn(
                            "px-5 py-2.5 text-sm rounded-xl border transition-all duration-300",
                            formData.category === cat.value
                              ? "bg-foreground text-background border-foreground shadow-lg"
                              : "bg-secondary/30 text-muted-foreground border-border/50 hover:border-foreground/50 hover:bg-secondary/50"
                          )}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fashion-gold" />
                      Cena (PLN) *
                    </label>
                    <Input
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="np. 1 890 PLN"
                      className="bg-secondary/30 border-border/50 h-12 rounded-xl focus:border-fashion-gold/50 focus:ring-fashion-gold/20 transition-all"
                    />
                  </div>

                  {/* Sizes */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Rozmiary
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => toggleSize(size)}
                          className={cn(
                            "w-12 h-12 text-sm rounded-xl border transition-all duration-300 font-medium",
                            formData.sizes.includes(size)
                              ? "bg-foreground text-background border-foreground shadow-lg"
                              : "bg-secondary/30 text-muted-foreground border-border/50 hover:border-foreground/50"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Opis
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Opis produktu..."
                      rows={4}
                      className="bg-secondary/30 border-border/50 rounded-xl resize-none focus:border-fashion-gold/50 focus:ring-fashion-gold/20 transition-all"
                    />
                  </div>

                  {/* Images - Multiple with Reordering */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fashion-gold" />
                      Zdjęcia produktu * 
                      <span className="text-fashion-gold">({formData.images.length})</span>
                    </label>
                    
                    {/* Add new image */}
                    <div className="flex gap-2">
                      <Input
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        placeholder="Wklej URL zdjęcia..."
                        className="bg-secondary/30 border-border/50 h-12 rounded-xl flex-1 focus:border-fashion-gold/50 focus:ring-fashion-gold/20 transition-all"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addImage();
                          }
                        }}
                      />
                      <Button type="button" variant="outline" onClick={addImage} className="h-12 px-5 rounded-xl gap-2 border-border/50 hover:bg-fashion-gold/10 hover:border-fashion-gold/50">
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
                            className="flex items-center gap-3 p-3 bg-secondary/30 border border-border/50 rounded-xl cursor-grab active:cursor-grabbing group/item"
                            whileDrag={{ 
                              scale: 1.02, 
                              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                              backgroundColor: "hsl(var(--secondary))"
                            }}
                          >
                            <div className="text-muted-foreground hover:text-foreground transition-colors">
                              <GripVertical size={18} />
                            </div>
                            
                            <div className="w-14 h-14 bg-secondary rounded-lg flex-shrink-0 overflow-hidden pointer-events-none">
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
                              <p className="text-sm text-foreground font-medium flex items-center gap-2">
                                {index === 0 && <span className="px-2 py-0.5 bg-fashion-gold/20 text-fashion-gold text-xs rounded-full">Główne</span>}
                                {index !== 0 && `Zdjęcie ${index + 1}`}
                              </p>
                              <p className="text-xs text-muted-foreground truncate mt-0.5">
                                {img}
                              </p>
                            </div>

                            {/* Reorder buttons */}
                            <div className="flex flex-col gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); moveImageUp(index); }}
                                disabled={index === 0}
                                className={cn(
                                  "p-1.5 rounded-lg transition-all",
                                  index === 0 
                                    ? "text-muted-foreground/30 cursor-not-allowed" 
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                )}
                              >
                                <ChevronUp size={14} />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); moveImageDown(index); }}
                                disabled={index === formData.images.length - 1}
                                className={cn(
                                  "p-1.5 rounded-lg transition-all",
                                  index === formData.images.length - 1 
                                    ? "text-muted-foreground/30 cursor-not-allowed" 
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                )}
                              >
                                <ChevronDown size={14} />
                              </button>
                            </div>

                            {/* Delete button */}
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); removeImage(index); }}
                              className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </Reorder.Item>
                        ))}
                      </Reorder.Group>
                    ) : (
                      <div className="text-center py-12 border-2 border-dashed border-border/50 rounded-2xl bg-secondary/20">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center">
                          <ImageIcon size={28} className="text-muted-foreground/50" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Brak zdjęć produktu
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          Wklej URL zdjęcia powyżej
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <GripVertical size={12} />
                      Przeciągnij zdjęcia aby zmienić kolejność
                    </p>
                  </div>

                  {/* Bestseller Toggle */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Wyróżnienie
                    </label>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, isBestseller: !prev.isBestseller }))}
                      className={cn(
                        "flex items-center gap-4 px-5 py-4 border rounded-xl transition-all w-full",
                        formData.isBestseller
                          ? "bg-gradient-to-r from-fashion-gold/20 to-fashion-gold/5 border-fashion-gold/50 shadow-lg shadow-fashion-gold/10"
                          : "bg-secondary/30 border-border/50 hover:border-foreground/30"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                        formData.isBestseller 
                          ? "bg-fashion-gold/20" 
                          : "bg-secondary/50"
                      )}>
                        <Star 
                          size={20} 
                          className={cn(
                            "transition-all",
                            formData.isBestseller ? "fill-fashion-gold text-fashion-gold" : "text-muted-foreground"
                          )} 
                        />
                      </div>
                      <div className="text-left flex-1">
                        <span className="text-sm font-medium text-foreground block">
                          {formData.isBestseller ? "Produkt wyróżniony" : "Oznacz jako bestseller"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formData.isBestseller ? "Widoczny w sekcji bestsellerów na stronie głównej" : "Pokaż na stronie głównej"}
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Submit */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => { setShowForm(false); resetForm(); }}
                      className="flex-1 h-12 rounded-xl border-border/50"
                    >
                      Anuluj
                    </Button>
                    <Button type="submit" variant="fashion" className="flex-1 h-12 rounded-xl gap-2 shadow-lg shadow-fashion-gold/20">
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
              className="text-center py-24 border-2 border-dashed border-border/50 rounded-2xl bg-gradient-to-b from-secondary/20 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-fashion-gold/20 to-fashion-gold/5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                <Package size={36} className="text-fashion-gold/60" />
              </motion.div>
              <h3 className="text-lg font-display text-foreground mb-2">Brak produktów</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                Rozpocznij budowanie katalogu produktów klikając przycisk poniżej
              </p>
              <Button 
                variant="fashion" 
                onClick={() => { resetForm(); setShowForm(true); }}
                className="gap-2"
              >
                <Plus size={18} />
                Dodaj pierwszy produkt
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cmsProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group rounded-2xl border border-border/50 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden hover:shadow-xl hover:shadow-fashion-gold/5 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {/* Image */}
                  <Link to={`/produkt/${product.id}`} className="block relative">
                    <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                      {product.images.length > 0 ? (
                        <>
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {product.images.length > 1 && (
                            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-foreground/90 backdrop-blur-sm text-background text-xs rounded-full font-medium">
                              +{product.images.length - 1}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon size={48} className="text-muted-foreground/30" />
                        </div>
                      )}
                      
                      {/* Bestseller Badge */}
                      {product.isBestseller && (
                        <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-fashion-gold to-fashion-gold/80 text-foreground text-xs rounded-full flex items-center gap-1.5 font-medium shadow-lg">
                          <Star size={12} className="fill-current" />
                          Bestseller
                        </div>
                      )}

                      {/* Quick View Button */}
                      <Link
                        to={`/produkt/${product.id}`}
                        className="absolute bottom-3 left-3 px-3 py-1.5 bg-foreground/90 backdrop-blur-sm text-background text-xs rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      >
                        <Eye size={12} />
                        Podgląd
                      </Link>
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-fashion-gold font-medium">
                        {categories.find(c => c.value === product.category)?.label || product.category}
                      </p>
                      <Link 
                        to={`/produkt/${product.id}`}
                        className="text-muted-foreground hover:text-fashion-gold transition-colors"
                        title="Zobacz stronę produktu"
                      >
                        <ExternalLink size={12} />
                      </Link>
                    </div>
                    
                    <h3 className="font-display text-foreground mb-1 truncate">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm font-medium text-foreground/80 mb-3">{product.price}</p>
                    
                    {product.sizes.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.sizes.slice(0, 4).map(size => (
                          <span key={size} className="px-2 py-0.5 bg-secondary/50 text-xs text-muted-foreground rounded">
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="px-2 py-0.5 bg-secondary/50 text-xs text-muted-foreground rounded">
                            +{product.sizes.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEdit(product)}
                        className="flex-1 h-9 rounded-lg border-border/50 hover:bg-fashion-gold/10 hover:border-fashion-gold/50 hover:text-foreground gap-1.5"
                      >
                        <Edit3 size={14} />
                        Edytuj
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                        className="h-9 w-9 p-0 rounded-lg border-border/50 text-muted-foreground hover:bg-destructive/10 hover:border-destructive/50 hover:text-destructive"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Info Note */}
          <motion.div 
            className="mt-16 p-6 bg-gradient-to-r from-secondary/40 via-secondary/20 to-secondary/40 border border-border/50 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-fashion-gold/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-fashion-gold" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-1">Informacja</h4>
                <p className="text-sm text-muted-foreground">
                  Produkty dodane w tym panelu są zapisywane tylko w pamięci przeglądarki i zostaną utracone po odświeżeniu strony. 
                  Aby trwale zapisywać produkty, należy połączyć panel z bazą danych.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CMS;
