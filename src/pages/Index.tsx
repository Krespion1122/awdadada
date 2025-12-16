import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AnimatedLetters, RevealText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxImage } from "@/components/ParallaxImage";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Index = () => {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-foreground">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster={lookbook1}
          >
            {/* Fashion runway video from Pexels */}
            <source
              src="https://videos.pexels.com/video-files/5699766/5699766-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            {/* Fallback */}
            <source
              src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Animated grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            className="text-background/80 text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kolekcja Jesień/Zima 2024
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-background tracking-wide mb-6">
            <AnimatedLetters text="MISSIL" delay={0.5} />
          </h1>

          <RevealText className="text-background/80 text-lg md:text-xl font-light max-w-xl mb-10" delay={1.2}>
            Odkryj ponadczasowe kreacje, które definiują nowoczesny luksus
          </RevealText>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <MagneticButton>
              <Link to="/lookbook">
                <Button variant="fashion-white-outline" size="fashion" className="group relative overflow-hidden">
                  <span className="relative z-10">Zobacz więcej</span>
                  <motion.div
                    className="absolute inset-0 bg-background"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-foreground z-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Zobacz więcej
                  </motion.span>
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <ScrollIndicator />

        {/* Animated line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-background/30"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 2 }}
        />
      </section>

      {/* Featured Section */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Najnowsza kolekcja
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              Minimalizm w Ruchu
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/lookbook" className="group relative aspect-[3/4] overflow-hidden block">
                <ParallaxImage
                  src={lookbook1}
                  alt="Lookbook"
                  className="w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-foreground/0"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-8 left-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/70 mb-2">
                      Lookbook
                    </p>
                    <h3 className="font-display text-2xl text-foreground">
                      Zobacz kolekcję
                    </h3>
                  </motion.div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to="/sklep" className="group relative aspect-[3/4] overflow-hidden block">
                <ParallaxImage
                  src={lookbook2}
                  alt="Shop"
                  className="w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-foreground/0"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-8 left-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/70 mb-2">
                      Sklep
                    </p>
                    <h3 className="font-display text-2xl text-foreground">
                      Przeglądaj produkty
                    </h3>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - replaces quote */}
      <section className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Wyróżnione
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground">
              Bestsellery Sezonu
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: product1, name: "Kaszmirowy Sweter", price: "1 890 PLN" },
              { img: product2, name: "Jedwabna Bluzka", price: "1 290 PLN" },
              { img: product3, name: "Wełniane Spodnie", price: "1 590 PLN" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to="/sklep" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/sklep">
              <Button variant="fashion" size="fashion">
                Zobacz wszystkie produkty
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with animated gradient */}
      <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, hsl(var(--fashion-gold)) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, hsl(var(--fashion-gold)) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, hsl(var(--fashion-gold)) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, hsl(var(--fashion-gold)) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, hsl(var(--fashion-gold)) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h2
            className="font-display text-3xl lg:text-4xl text-background mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dołącz do świata MISSIL
          </motion.h2>
          <motion.p
            className="text-background/70 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zapisz się do naszego newslettera i bądź na bieżąco z nowościami, 
            ekskluzywnymi kolekcjami i wydarzeniami marki.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Twój adres e-mail"
              className="w-full px-6 py-4 bg-transparent border border-background/30 text-background placeholder:text-background/50 text-sm focus:outline-none focus:border-background transition-colors"
            />
            <MagneticButton>
              <Button variant="fashion-white" size="fashion" className="whitespace-nowrap">
                Zapisz się
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
