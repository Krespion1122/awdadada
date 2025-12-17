import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6">
              <h2 className="font-display text-xl tracking-wider uppercase">
                Koszyk
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content - Empty State */}
            <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] p-6 text-center">
              <ShoppingBag size={64} className="text-muted-foreground/30 mb-6" />
              <h3 className="font-display text-xl text-foreground mb-3">
                Koszyk jest pusty
              </h3>
              <p className="text-muted-foreground text-sm mb-8 max-w-xs">
                Przeglądaj naszą kolekcję i dodaj ulubione produkty. Zakupy online nie są dostępne – skontaktuj się, aby sprawdzić dostępność w butikach.
              </p>
              <Link to="/sklep" onClick={onClose}>
                <Button variant="fashion" size="fashion">
                  Przeglądaj produkty
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
