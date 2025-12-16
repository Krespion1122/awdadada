import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import heroImage from "@/assets/hero-image.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

const Index = () => {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video would be here - using image as fallback */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ATELIER Collection"
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-background/80 text-xs tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0">
            Kolekcja Jesień/Zima 2024
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background tracking-wide mb-6 animate-fade-up opacity-0 delay-100">
            Esencja Elegancji
          </h1>
          <p className="text-background/80 text-lg md:text-xl font-light max-w-xl mb-10 animate-fade-up opacity-0 delay-200">
            Odkryj ponadczasowe kreacje, które definiują nowoczesny luksus
          </p>
          <Link to="/lookbook" className="animate-fade-up opacity-0 delay-300">
            <Button variant="fashion-white-outline" size="fashion">
              Zobacz więcej
            </Button>
          </Link>
        </div>

        <ScrollIndicator />
      </section>

      {/* Featured Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Najnowsza kolekcja
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              Minimalizm w Ruchu
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <Link to="/lookbook" className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={lookbook1}
                alt="Lookbook"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/70 mb-2">
                  Lookbook
                </p>
                <h3 className="font-display text-2xl text-foreground">
                  Zobacz kolekcję
                </h3>
              </div>
            </Link>

            <Link to="/sklep" className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={lookbook2}
                alt="Shop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/70 mb-2">
                  Sklep
                </p>
                <h3 className="font-display text-2xl text-foreground">
                  Przeglądaj produkty
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <blockquote className="font-display text-3xl lg:text-4xl xl:text-5xl text-foreground leading-relaxed max-w-4xl mx-auto">
            "Każdy detal ma znaczenie. Każda kreacja opowiada historię."
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            — Filozofia ATELIER
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-background mb-6">
            Dołącz do świata ATELIER
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Zapisz się do naszego newslettera i bądź na bieżąco z nowościami, 
            ekskluzywnymi kolekcjami i wydarzeniami marki.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres e-mail"
              className="w-full px-6 py-4 bg-transparent border border-background/30 text-background placeholder:text-background/50 text-sm focus:outline-none focus:border-background transition-colors"
            />
            <Button variant="fashion-white" size="fashion" className="whitespace-nowrap">
              Zapisz się
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
