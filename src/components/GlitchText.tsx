import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className="relative inline-block"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute top-0 left-0 text-[hsl(var(--fashion-gold))] opacity-0"
        aria-hidden
        animate={{
          opacity: [0, 0.8, 0, 0.6, 0],
          x: [-2, 2, -1, 1, 0],
          y: [1, -1, 2, -2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-[hsl(var(--destructive))] opacity-0"
        aria-hidden
        animate={{
          opacity: [0, 0.6, 0, 0.8, 0],
          x: [2, -2, 1, -1, 0],
          y: [-1, 1, -2, 2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 0.05,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
