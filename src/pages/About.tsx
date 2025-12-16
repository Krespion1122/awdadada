import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nasza historia
          </motion.p>
          <motion.h1
            className="font-display text-4xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            O Marce
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutImage}
                alt="MISSIL Atelier"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="lg:py-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-8">
                Ponadczasowa Elegancja
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  MISSIL to polska marka odzieżowa założona w 2015 roku, która łączy 
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
                  garderoby MISSIL to wyraz naszej pasji do mody i zaangażowania 
                  w tworzenie ubrań, które przetrwają próbę czasu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nasze Wartości
          </motion.h2>

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
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <ParallaxImage
          src={lookbook4}
          alt="MISSIL Fashion"
          className="w-full h-full"
          speed={0.3}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.blockquote
            className="font-display text-3xl lg:text-4xl text-background text-center max-w-3xl px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "Moda przemija, styl pozostaje na zawsze."
          </motion.blockquote>
        </div>
      </section>
    </main>
  );
};

export default About;
