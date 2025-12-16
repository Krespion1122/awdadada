import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import lookbook3 from "@/assets/lookbook-3.jpg";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana",
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
            Partnerstwo
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-foreground animate-fade-up delay-100">
            Współpraca
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">
                Zostań naszym partnerem
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                <p>
                  ATELIER nieustannie poszukuje nowych możliwości współpracy z butikami, 
                  concept store'ami oraz innymi partnerami handlowymi, którzy podzielają 
                  naszą wizję luksusowej mody.
                </p>
                <p>
                  Oferujemy atrakcyjne warunki współpracy, wsparcie marketingowe oraz 
                  dostęp do ekskluzywnych kolekcji. Jeśli prowadzisz butik lub sklep 
                  z modą premium i chciałbyś wprowadzić do swojej oferty produkty ATELIER, 
                  wypełnij formularz kontaktowy.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Dla butików
                  </h3>
                  <p className="text-foreground">
                    Oferujemy współpracę B2B z atrakcyjnymi marżami i wsparciem 
                    merchandisingowym.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Projekty specjalne
                  </h3>
                  <p className="text-foreground">
                    Realizujemy limitowane kolekcje kapsułowe we współpracy 
                    z wybranymi partnerami.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Media i prasa
                  </h3>
                  <p className="text-foreground">
                    Zapraszamy do kontaktu w sprawie wypożyczeń do sesji 
                    oraz współpracy redakcyjnej.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-secondary p-8 lg:p-12">
              <h3 className="font-display text-2xl text-foreground mb-8">
                Formularz kontaktowy
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Nazwa firmy
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Osoba kontaktowa
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Rodzaj współpracy
                  </label>
                  <select
                    name="collaborationType"
                    value={formData.collaborationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="">Wybierz...</option>
                    <option value="butik">Butik / Sklep</option>
                    <option value="concept">Concept Store</option>
                    <option value="media">Media / Prasa</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <Button variant="fashion" size="fashion" type="submit" className="w-full">
                  Wyślij zapytanie
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={lookbook3}
          alt="ATELIER Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </section>
    </main>
  );
};

export default Collaboration;
