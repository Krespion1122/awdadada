import { useState, useEffect } from 'react';

export interface CMSProduct {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  price: string;
  description: string;
  images: string[];
  isBestseller: boolean;
}

const LOCAL_STORAGE_KEY = 'missil_cms_products';

export const useCMSProducts = () => {
  const [products, setProducts] = useState<CMSProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setProducts(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse CMS products from localStorage');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products, isLoaded]);

  const addProduct = (product: Omit<CMSProduct, 'id'>) => {
    const newProduct: CMSProduct = {
      ...product,
      id: `cms_${Date.now()}`,
    };
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Omit<CMSProduct, 'id'>>) => {
    setProducts(prev => 
      prev.map(p => p.id === id ? { ...p, ...updates } : p)
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const getBestsellers = () => {
    return products.filter(p => p.isBestseller);
  };

  const getCategories = () => {
    const categorySet = new Set(products.map(p => p.category.toLowerCase().trim()));
    return Array.from(categorySet).filter(Boolean);
  };

  return {
    products,
    isLoaded,
    addProduct,
    updateProduct,
    deleteProduct,
    getBestsellers,
    getCategories,
  };
};

// Helper to read products directly (for components that don't need reactivity)
export const getCMSProductsFromStorage = (): CMSProduct[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return [];
    }
  }
  return [];
};
