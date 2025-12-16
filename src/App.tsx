import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SocialIcons } from "@/components/SocialIcons";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <SocialIcons />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/sklep" element={<Shop />} />
          <Route path="/produkt/:id" element={<ProductDetail />} />
          <Route path="/o-marce" element={<About />} />
          <Route path="/wspolpraca" element={<Collaboration />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/koszyk" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
