import { useState } from "react";
import { Link } from "react-router-dom";
import { Handshake, Store, Sparkles, Newspaper, Send, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Collaboration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    collaborationType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Zgłoszenie wysłane",
      description: "Dziękujemy za zainteresowanie współpracą. Skontaktujemy się wkrótce.",
    });
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      collaborationType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const collaborationTypes = [
    {
      icon: Store,
      title: "Dla butików",
      description: "Współpraca B2B z atrakcyjnymi marżami i wsparciem merchandisingowym. Dostęp do ekskluzywnych kolekcji przed premierą.",
      benefits: ["Atrakcyjne warunki handlowe", "Wsparcie marketingowe", "Materiały POS", "Szkolenia produktowe"],
    },
    {
      icon: Sparkles,
      title: "Projekty specjalne",
      description: "Realizujemy limitowane kolekcje kapsułowe we współpracy z wybranymi partnerami i artystami.",
      benefits: ["Indywidualny projekt", "Limitowana edycja", "Wspólny branding", "Ekskluzywność"],
    },
    {
      icon: Newspaper,
      title: "Media i prasa",
      description: "Zapraszamy do kontaktu w sprawie wypożyczeń do sesji zdjęciowych oraz współpracy redakcyjnej.",
      benefits: ["Wypożyczenia do sesji", "Materiały prasowe", "Wywiady i artykuły", "Eventy prasowe"],
    },
  ];

  const stats = [
    { value: "50+", label: "Partnerów handlowych" },
    { value: "12", label: "Krajów dystrybucji" },
    { value: "100%", label: "Satysfakcji partnerów" },
    { value: "24h", label: "Czas odpowiedzi" },
  ];

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-fashion-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-fashion-gold/30 to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-transparent via-fashion-gold/30 to-transparent" />
        
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
                Partnerstwo
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl lg:text-7xl xl:text-8xl text-foreground mb-8"
            >
              Zostań naszym
              <br />
              <span className="text-fashion-gold">partnerem</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Poszukujemy ambitnych partnerów, którzy podzielają naszą pasję 
              do wyjątkowej mody i dbałości o każdy detal.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl lg:text-5xl text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Formy współpracy
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-foreground">
              Jak możemy współpracować?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-secondary/30 border border-border/50 p-8 lg:p-10 hover:bg-secondary hover:border-fashion-gold/30 transition-all duration-500"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-fashion-gold/0 group-hover:border-fashion-gold/40 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-fashion-gold/0 group-hover:border-fashion-gold/40 transition-all duration-500" />
                
                <div className="w-14 h-14 bg-fashion-gold/10 flex items-center justify-center mb-6 group-hover:bg-fashion-gold/20 transition-colors duration-500">
                  <type.icon size={28} className="text-fashion-gold" />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {type.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {type.description}
                </p>
                
                <ul className="space-y-3">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                      <Check size={16} className="text-fashion-gold flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake size={24} className="text-fashion-gold" />
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    Zacznijmy rozmowę
                  </p>
                </div>
                
                <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-8">
                  Opowiedz nam
                  <br />o swoich planach
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                  Każda współpraca zaczyna się od rozmowy. Wypełnij formularz, 
                  a nasz zespół ds. partnerstw skontaktuje się z Tobą w ciągu 24 godzin.
                </p>

                {/* Process steps */}
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Wypełnij formularz", desc: "Opisz krótko swoją firmę i oczekiwania" },
                    { step: "02", title: "Rozmowa wstępna", desc: "Omówimy szczegóły potencjalnej współpracy" },
                    { step: "03", title: "Propozycja", desc: "Przygotujemy indywidualną ofertę" },
                    { step: "04", title: "Partnerstwo", desc: "Rozpoczynamy owocną współpracę" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <span className="font-display text-2xl text-fashion-gold/50">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-foreground font-medium mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-background p-8 lg:p-12 border border-border">
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-fashion-gold/10 -z-10" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-fashion-gold/5 -z-10" />
                
                <h3 className="font-display text-2xl text-foreground mb-8">
                  Formularz współpracy
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Nazwa firmy
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all"
                        placeholder="Twoja firma"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Osoba kontaktowa
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all"
                        placeholder="Imię i nazwisko"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all"
                        placeholder="email@firma.pl"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all"
                        placeholder="+48 000 000 000"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                      Rodzaj współpracy
                    </label>
                    <select
                      name="collaborationType"
                      value={formData.collaborationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Wybierz rodzaj współpracy</option>
                      <option value="boutique">Współpraca B2B - Butik/Sklep</option>
                      <option value="special">Projekt specjalny / Kolekcja kapsułowa</option>
                      <option value="media">Media / Prasa</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                      Wiadomość
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold focus:bg-secondary transition-all resize-none"
                      placeholder="Opowiedz nam więcej o swoich planach i oczekiwaniach..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="fashion" 
                      size="fashion" 
                      type="submit" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}</span>
                      <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Odpowiadamy na wszystkie zgłoszenia w ciągu 24 godzin roboczych.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
              Masz pytania?
            </p>
            <h2 className="font-display text-3xl lg:text-5xl mb-6">
              Porozmawiajmy o możliwościach
            </h2>
            <p className="text-background/70 mb-10 max-w-xl mx-auto">
              Jeśli masz dodatkowe pytania lub chciałbyś omówić szczegóły 
              potencjalnej współpracy, skontaktuj się z nami bezpośrednio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="fashion" 
                size="fashion" 
                className="bg-background text-foreground hover:bg-background/90 group"
                asChild
              >
                <Link to="/kontakt">
                  <span>Kontakt ogólny</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="fashion" 
                className="border-background/50 text-background hover:bg-background/10 hover:border-background"
                asChild
              >
                <a href="mailto:partnership@missil.pl">
                  partnership@missil.pl
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Collaboration;
