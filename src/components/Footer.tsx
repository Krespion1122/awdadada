import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] uppercase mb-6">
              MISSIL
            </h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-md">
              Ekskluzywna marka odzieżowa łącząca ponadczasową elegancję z nowoczesnym 
              minimalizmem. Każda kreacja to wyraz najwyższego kunsztu krawieckiego.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Lookbook", path: "/lookbook" },
                { name: "Sklep", path: "/sklep" },
                { name: "O marce", path: "/o-marce" },
                { name: "Współpraca", path: "/wspolpraca" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>kontakt@missil.pl</li>
              <li>+48 22 123 45 67</li>
              <li>
                ul. Mokotowska 12<br />
                00-561 Warszawa
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © 2024 MISSIL. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-xs text-background/50">
            <Link to="/polityka-prywatnosci" className="hover:text-background transition-colors">
              Polityka prywatności
            </Link>
            <Link to="/regulamin" className="hover:text-background transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
