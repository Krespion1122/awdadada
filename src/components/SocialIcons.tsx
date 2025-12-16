import { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
];

export function SocialIcons() {
  const [isOnDark, setIsOnDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsOnDark(heroBottom > window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
            isOnDark 
              ? "bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:scale-110" 
              : "bg-foreground/5 border border-foreground/20 text-foreground/70 hover:bg-foreground/10 hover:text-foreground hover:scale-110"
          }`}
          aria-label={social.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon size={18} strokeWidth={1.5} />
        </motion.a>
      ))}
      
      {/* Vertical line decoration */}
      <motion.div 
        className={`w-px h-16 mx-auto mt-2 ${isOnDark ? "bg-white/20" : "bg-foreground/20"}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      />
    </motion.div>
  );
}
