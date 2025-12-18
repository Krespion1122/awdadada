import { motion } from "framer-motion";
import { Award, Leaf, Clock, Heart, Scissors, MapPin, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Jakość",
      description: "Używamy tylko najlepszych materiałów i współpracujemy z doświadczonymi rzemieślnikami, aby zapewnić najwyższą jakość każdej kreacji.",
    },
    {
      icon: Leaf,
      title: "Zrównoważony rozwój",
      description: "Produkujemy w limitowanych seriach, minimalizując odpady. Wspieramy lokalne rzemiosło i świadomą konsumpcję.",
    },
    {
      icon: Clock,
      title: "Ponadczasowość",
      description: "Projektujemy ubrania, które nie podążają za chwilowymi trendami, ale pozostają eleganckie przez lata.",
    },
  ];

  const milestones = [
    { year: "2015", title: "Początek", description: "Założenie marki w Warszawie" },
    { year: "2017", title: "Pierwszy pokaz", description: "Debiut na Fashion Week" },
    { year: "2019", title: "Ekspansja", description: "Otwarcie showroomu" },
    { year: "2022", title: "Międzynarodowo", description: "Wejście na rynki europejskie" },
    { year: "2024", title: "Dziś", description: "50+ partnerów handlowych" },
  ];

  const team = [
    { name: "Anna Kowalska", role: "Founder & Creative Director" },
    { name: "Piotr Nowak", role: "Head of Design" },
    { name: "Maria Wiśniewska", role: "Master Tailor" },
  ];

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fashion-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Decorative lines */}
        <div className="absolute top-32 left-12 w-px h-48 bg-gradient-to-b from-fashion-gold/40 to-transparent hidden lg:block" />
        <div className="absolute top-32 left-12 w-24 h-px bg-gradient-to-r from-fashion-gold/40 to-transparent hidden lg:block" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-fashion-gold" />
              <p className="text-xs tracking-[0.3em] uppercase text-fashion-gold">
                Nasza historia
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl lg:text-7xl xl:text-8xl text-foreground mb-8"
            >
              Tworzymy
              <br />
              <span className="text-fashion-gold">ponadczasową</span>
              <br />
              elegancję
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Od 2015 roku łączymy tradycyjne rzemiosło krawieckie 
              z nowoczesnym, minimalistycznym designem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with decorative elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={aboutImage}
                  alt="ATELIER Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-fashion-gold/30" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-fashion-gold/30" />
              
              {/* Floating stat box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 lg:right-8 bg-foreground text-background p-6 lg:p-8"
              >
                <p className="font-display text-4xl lg:text-5xl mb-1">9+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-background/70">Lat doświadczenia</p>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:py-12"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                O nas
              </p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-8">
                Gdzie tradycja spotyka nowoczesność
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
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
              </div>

              {/* Key facts */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl text-foreground mb-1">100%</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Produkcja w Polsce</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground mb-1">Premium</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Materiały z Europy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Filozofia
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground">
              Nasze wartości
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-background border border-border/50 p-8 lg:p-10 text-center hover:border-fashion-gold/30 transition-all duration-500"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-fashion-gold/0 group-hover:border-fashion-gold/40 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-fashion-gold/0 group-hover:border-fashion-gold/40 transition-all duration-500" />
                
                <div className="w-16 h-16 bg-fashion-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-fashion-gold/20 transition-colors duration-500">
                  <value.icon size={32} className="text-fashion-gold" />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nasza droga
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground">
              Kamienie milowe
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center lg:justify-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-fashion-gold rounded-full lg:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'
                  }`}>
                    <div className="bg-secondary/50 border border-border/50 p-6 inline-block">
                      <span className="font-display text-3xl text-fashion-gold">{milestone.year}</span>
                      <h4 className="font-display text-xl text-foreground mt-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ParallaxImage
          src={lookbook4}
          alt="ATELIER Fashion"
          className="w-full h-full"
          speed={0.3}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <div className="w-16 h-px bg-fashion-gold mx-auto mb-8" />
            <blockquote className="font-display text-3xl lg:text-5xl text-background max-w-3xl mx-auto leading-relaxed">
              "Moda przemija, styl pozostaje na zawsze."
            </blockquote>
            <p className="text-background/70 mt-6 text-sm tracking-[0.2em] uppercase">
              — Coco Chanel
            </p>
            <div className="w-16 h-px bg-fashion-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Atelier Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Scissors size={24} className="text-fashion-gold" />
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Nasze atelier
                </p>
              </div>
              
              <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-8">
                Serce naszej marki
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Nasze atelier mieści się w sercu Warszawy, gdzie zespół doświadczonych 
                  krawców i projektantów pracuje nad kolejnymi kolekcjami. Każdy element 
                  garderoby ATELIER to wyraz naszej pasji do mody i zaangażowania 
                  w tworzenie ubrań, które przetrwają próbę czasu.
                </p>
                <p>
                  Zapraszamy do odwiedzenia naszego showroomu, gdzie możesz zobaczyć 
                  proces tworzenia naszych kolekcji i przymierzyć wybrane modele.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/50 border-l-2 border-fashion-gold">
                <MapPin size={24} className="text-fashion-gold flex-shrink-0" />
                <div>
                  <h4 className="text-foreground font-medium mb-1">Showroom ATELIER</h4>
                  <p className="text-muted-foreground text-sm">
                    ul. Mokotowska 12, 00-561 Warszawa
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Pon-Pt: 10:00-19:00 | Sob: 11:00-17:00
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={lookbook1}
                    alt="Atelier process"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-fashion-gold/10 flex items-center justify-center">
                  <Heart size={48} className="text-fashion-gold/50" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center">
                  <Scissors size={48} className="text-muted-foreground/30" />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Atelier details"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Ludzie
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground">
              Nasz zespół
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-fashion-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-fashion-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-display text-xl text-foreground mb-1">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
              Zapraszamy
            </p>
            <h2 className="font-display text-3xl lg:text-5xl mb-6">
              Odkryj nasze kolekcje
            </h2>
            <p className="text-background/70 mb-10 max-w-xl mx-auto">
              Poznaj unikalne kreacje ATELIER i znajdź ubrania, które idealnie 
              podkreślą Twój indywidualny styl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="fashion" 
                className="border-background text-background hover:bg-background hover:text-foreground group"
                asChild
              >
                <Link to="/sklep">
                  <span>Zobacz sklep</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="fashion" 
                className="border-background/30 text-background/80 hover:border-background hover:text-background"
                asChild
              >
                <Link to="/lookbook">
                  Lookbook
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
