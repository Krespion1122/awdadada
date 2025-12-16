import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up">
            Koszyk
          </h1>
        </div>
      </section>

      {/* Empty Cart */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-lg mx-auto text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-muted-foreground/30 mb-8" />
            <h2 className="font-display text-2xl text-foreground mb-4">
              Koszyk jest pusty
            </h2>
            <p className="text-muted-foreground mb-8">
              Przeglądaj naszą kolekcję i dodaj ulubione produkty do koszyka.
              Pamiętaj, że zakupy online nie są dostępne – skontaktuj się z nami,
              aby sprawdzić dostępność produktów w butikach partnerskich.
            </p>
            <Link to="/sklep">
              <Button variant="fashion" size="fashion">
                Przeglądaj produkty
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
