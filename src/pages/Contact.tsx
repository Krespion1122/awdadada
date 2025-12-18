import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: ["ul. Mokotowska 12", "00-561 Warszawa", "Polska"],
    },
    {
      icon: Phone,
      title: "Telefon",
      content: ["+48 22 123 45 67"],
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["kontakt@missil.pl"],
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      content: ["Pon – Pt: 10:00 – 19:00", "Sob: 11:00 – 17:00", "Niedz: Zamknięte"],
    },
  ];

  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Skontaktuj się z nami
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl lg:text-7xl text-foreground mb-6"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Chętnie odpowiemy na wszystkie Twoje pytania. 
            Skontaktuj się z nami w dogodny dla Ciebie sposób.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-secondary/50 border border-border/50 p-8 hover:bg-secondary hover:border-border transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-fashion-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-fashion-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <item.icon size={24} className="text-fashion-gold mb-4" />
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.content.map((line, i) => (
                    <p key={i} className="text-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Map & Additional Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Showroom Image/Map Placeholder */}
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-20">
                    <MapPin size={32} className="text-fashion-gold mx-auto mb-4" />
                    <p className="text-foreground font-display text-xl mb-2">Showroom ATELIER</p>
                    <p className="text-muted-foreground text-sm">ul. Mokotowska 12, Warszawa</p>
                  </div>
                </div>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="bg-fashion-gold/5 border border-fashion-gold/20 p-8">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Umów wizytę
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Zapraszamy do naszego showroomu w centrum Warszawy. 
                  Dla zapewnienia najwyższej jakości obsługi, prosimy o wcześniejszą rezerwację wizyty.
                </p>
                <Button variant="fashion" size="fashion" className="group">
                  <span>Zarezerwuj termin</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="border-l-2 border-fashion-gold/30 pl-6">
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  "Niezwykła dbałość o detale i indywidualne podejście do klienta. 
                  ATELIER to miejsce, gdzie moda spotyka się z sztuką."
                </p>
                <p className="text-foreground text-sm mt-4">— Vogue Polska</p>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="relative bg-secondary p-8 lg:p-12">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-fashion-gold/20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-fashion-gold/20" />
                
                <div className="mb-10">
                  <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                    Napisz do nas
                  </h2>
                  <p className="text-muted-foreground">
                    Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 group-focus-within:text-foreground transition-colors">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold transition-colors placeholder:text-muted-foreground/50"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 group-focus-within:text-foreground transition-colors">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold transition-colors placeholder:text-muted-foreground/50"
                        placeholder="jan@email.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 group-focus-within:text-foreground transition-colors">
                      Temat
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold transition-colors placeholder:text-muted-foreground/50"
                      placeholder="W czym możemy pomóc?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 group-focus-within:text-foreground transition-colors">
                      Wiadomość
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border text-foreground text-sm focus:outline-none focus:border-fashion-gold transition-colors resize-none placeholder:text-muted-foreground/50"
                      placeholder="Twoja wiadomość..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="fashion" 
                      size="fashion" 
                      type="submit" 
                      className="w-full sm:w-auto group"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
                      <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Zainteresowany współpracą?
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
              Zostań naszym partnerem
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Poszukujemy partnerów handlowych i kreatywnych współpracowników 
              do realizacji wyjątkowych projektów.
            </p>
            <Button variant="fashion" size="fashion" className="group" asChild>
              <a href="/collaboration">
                <span>Dowiedz się więcej</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
