import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
];

export function SocialIcons() {
  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3 mix-blend-difference"
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
          className="w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 bg-background/10 border border-background/30 text-background/90 hover:bg-background/20 hover:scale-110"
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
    </motion.div>
  );
}
