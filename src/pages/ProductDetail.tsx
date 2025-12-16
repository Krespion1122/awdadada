import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4">Produkt nie znaleziony</h1>
          <Link to="/sklep" className="text-muted-foreground hover:text-foreground transition-colors">
            Wróć do sklepu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Back Link */}
        <Link
          to="/sklep"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Wróć do sklepu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-foreground mb-8">
              {product.price}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Dostępne rozmiary
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border border-border text-sm text-foreground"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Notice */}
            <div className="bg-secondary p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-1">
                    Brak dostępności online
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ten produkt nie jest dostępny do zakupu przez internet. 
                    Skontaktuj się z nami, aby sprawdzić dostępność w butikach partnerskich.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link to="/kontakt">
              <Button variant="fashion" size="fashion" className="w-full">
                Zapytaj o dostępność w butikach
              </Button>
            </Link>

            {/* Product Details */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Szczegóły produktu
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Najwyższa jakość materiałów</li>
                <li>• Ręczne wykonanie</li>
                <li>• Wyprodukowano we Włoszech</li>
                <li>• Profesjonalne pranie chemiczne</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
