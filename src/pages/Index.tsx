import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AnimatedLetters, RevealText } from "@/components/AnimatedText";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxImage } from "@/components/ParallaxImage";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";

const Index = () => {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={lookbook1}
          >
            <source
              src="https://videos.pexels.com/video-files/4620563/4620563-hd_1920_1080_25fps.mp4"
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

      {/* Brand Statement with parallax */}
      <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.blockquote
            className="font-display text-3xl lg:text-4xl xl:text-5xl text-foreground leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "Każdy detal ma znaczenie. Każda kreacja opowiada historię."
          </motion.blockquote>
          <motion.p
            className="mt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            — Filozofia MISSIL
          </motion.p>
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
