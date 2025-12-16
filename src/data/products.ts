import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  color: string;
  sizes: string[];
  price: string;
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kaszmirowy Sweter Essential",
    category: "swetry",
    color: "czarny",
    sizes: ["XS", "S", "M", "L", "XL"],
    price: "1 890 PLN",
    description: "Luksusowy sweter wykonany z najwyższej jakości kaszmiru mongolskiego. Ponadczasowy krój i minimalistyczny design sprawiają, że jest idealnym elementem każdej garderoby.",
    images: [product1],
  },
  {
    id: "2",
    name: "Jedwabna Bluzka Atelier",
    category: "bluzki",
    color: "biały",
    sizes: ["XS", "S", "M", "L"],
    price: "1 290 PLN",
    description: "Elegancka bluzka z włoskiego jedwabiu o delikatnym połysku. Uniwersalny fason idealny zarówno do biura, jak i na wieczorne wyjścia.",
    images: [product2],
  },
  {
    id: "3",
    name: "Wełniane Spodnie Tailored",
    category: "spodnie",
    color: "czarny",
    sizes: ["34", "36", "38", "40", "42"],
    price: "1 590 PLN",
    description: "Klasyczne spodnie z wełny merino włoskiej o prostym kroju. Wysoka talia i idealne proporcje zapewniają wyjątkowy komfort noszenia.",
    images: [product3],
  },
  {
    id: "4",
    name: "Oversized Blazer Cream",
    category: "marynarki",
    color: "kremowy",
    sizes: ["XS", "S", "M", "L"],
    price: "2 490 PLN",
    description: "Oversize'owa marynarka w kolorze ecru wykonana z wysokogatunkowej wełny. Złote guziki dodają elegancji minimalistycznej formie.",
    images: [product4],
  },
  {
    id: "5",
    name: "Skórzana Torebka Minimal",
    category: "akcesoria",
    color: "czarny",
    sizes: ["ONE SIZE"],
    price: "2 890 PLN",
    description: "Ręcznie wykonana torebka z włoskiej skóry cielęcej. Minimalistyczny design i praktyczne wymiary czynią ją idealną na każdą okazję.",
    images: [product5],
  },
  {
    id: "6",
    name: "Wełniany Szal Heritage",
    category: "akcesoria",
    color: "czarny",
    sizes: ["ONE SIZE"],
    price: "690 PLN",
    description: "Miękki szal z wełny jagnięcej o subtelnej fakturze. Frędzle wykonane ręcznie dodają charakteru klasycznej formie.",
    images: [product6],
  },
];

export const categories = [
  { value: "all", label: "Wszystkie" },
  { value: "swetry", label: "Swetry" },
  { value: "bluzki", label: "Bluzki" },
  { value: "spodnie", label: "Spodnie" },
  { value: "marynarki", label: "Marynarki" },
  { value: "akcesoria", label: "Akcesoria" },
];

export const colors = [
  { value: "all", label: "Wszystkie" },
  { value: "czarny", label: "Czarny" },
  { value: "biały", label: "Biały" },
  { value: "kremowy", label: "Kremowy" },
];

export const sizes = [
  { value: "all", label: "Wszystkie" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
