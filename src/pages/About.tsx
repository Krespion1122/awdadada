import aboutImage from "@/assets/about-image.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
            Nasza historia
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up delay-100">
            O Marce
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="ATELIER Atelier"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:py-12">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-8">
                Ponadczasowa Elegancja
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  ATELIER to polska marka odzieżowa założona w 2015 roku, która łączy 
                  tradycyjne rzemiosło krawieckie z nowoczesnym, minimalistycznym designem. 
                  Tworzymy ubrania dla osób, które cenią sobie jakość, autentyczność i 
                  ponadczasowy styl.
                </p>
                <p>
                  Każda nasza kreacja powstaje w limitowanej serii, z najwyższej jakości 
                  materiałów sprowadzanych bezpośrednio od włoskich i francuskich 
                  dostawców. Wierzymy, że prawdziwy luksus to nie tylko ekskluzywne 
                  tkaniny, ale przede wszystkim perfekcyjny krój i dbałość o każdy detal.
                </p>
                <p>
                  Nasz atelier mieści się w sercu Warszawy, gdzie zespół doświadczonych 
                  krawców i projektantów pracuje nad kolejnymi kolekcjami. Każdy element 
                  garderoby ATELIER to wyraz naszej pasji do mody i zaangażowania 
                  w tworzenie ubrań, które przetrwają próbę czasu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground text-center mb-16">
            Nasze Wartości
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Jakość",
                description:
                  "Używamy tylko najlepszych materiałów i współpracujemy z doświadczonymi rzemieślnikami, aby zapewnić najwyższą jakość każdej kreacji.",
              },
              {
                title: "Zrównoważony rozwój",
                description:
                  "Produkujemy w limitowanych seriach, minimalizując odpady. Wspieramy lokalne rzemiosło i świadomą konsumpcję.",
              },
              {
                title: "Ponadczasowość",
                description:
                  "Projektujemy ubrania, które nie podążają za chwilowymi trendami, ale pozostają eleganckie przez lata.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={lookbook4}
          alt="ATELIER Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="font-display text-3xl lg:text-4xl text-background text-center max-w-3xl px-6">
            "Moda przemija, styl pozostaje na zawsze."
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default About;
