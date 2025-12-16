import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SocialIcons } from "@/components/SocialIcons";
import { CursorFollower } from "@/components/CursorFollower";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import Lookbook from "./pages/Lookbook";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Collaboration from "./pages/Collaboration";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/lookbook" element={<PageTransition><Lookbook /></PageTransition>} />
        <Route path="/sklep" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/produkt/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/o-marce" element={<PageTransition><About /></PageTransition>} />
        <Route path="/wspolpraca" element={<PageTransition><Collaboration /></PageTransition>} />
        <Route path="/kontakt" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/koszyk" element={<PageTransition><Cart /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CursorFollower />
        <Navigation />
        <SocialIcons />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
