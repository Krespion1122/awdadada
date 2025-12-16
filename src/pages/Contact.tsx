import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
            Skontaktuj się z nami
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up delay-100">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Dane kontaktowe
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Adres
                    </h3>
                    <p className="text-foreground">
                      ul. Mokotowska 12<br />
                      00-561 Warszawa<br />
                      Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Telefon
                    </h3>
                    <p className="text-foreground">+48 22 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-foreground">kontakt@atelier.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Godziny otwarcia
                    </h3>
                    <p className="text-foreground">
                      Poniedziałek – Piątek: 10:00 – 19:00<br />
                      Sobota: 11:00 – 17:00<br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  Mapa lokalizacji
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 lg:p-12">
              <h3 className="font-display text-2xl text-foreground mb-8">
                Napisz do nas
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <Button variant="fashion" size="fashion" type="submit" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
