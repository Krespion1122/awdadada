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
  sizes: string[];
  price: number;
  priceFormatted: string;
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kaszmirowy Sweter Essential",
    category: "swetry",
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 1890,
    priceFormatted: "1 890 PLN",
    description: "Luksusowy sweter wykonany z najwyższej jakości kaszmiru mongolskiego. Ponadczasowy krój i minimalistyczny design sprawiają, że jest idealnym elementem każdej garderoby.",
    images: [product1],
  },
  {
    id: "2",
    name: "Jedwabna Bluzka Atelier",
    category: "bluzki",
    sizes: ["XS", "S", "M", "L"],
    price: 1290,
    priceFormatted: "1 290 PLN",
    description: "Elegancka bluzka z włoskiego jedwabiu o delikatnym połysku. Uniwersalny fason idealny zarówno do biura, jak i na wieczorne wyjścia.",
    images: [product2],
  },
  {
    id: "3",
    name: "Wełniane Spodnie Tailored",
    category: "spodnie",
    sizes: ["34", "36", "38", "40", "42"],
    price: 1590,
    priceFormatted: "1 590 PLN",
    description: "Klasyczne spodnie z wełny merino włoskiej o prostym kroju. Wysoka talia i idealne proporcje zapewniają wyjątkowy komfort noszenia.",
    images: [product3],
  },
  {
    id: "4",
    name: "Oversized Blazer Cream",
    category: "marynarki",
    sizes: ["XS", "S", "M", "L"],
    price: 2490,
    priceFormatted: "2 490 PLN",
    description: "Oversize'owa marynarka w kolorze ecru wykonana z wysokogatunkowej wełny. Złote guziki dodają elegancji minimalistycznej formie.",
    images: [product4],
  },
  {
    id: "5",
    name: "Skórzana Torebka Minimal",
    category: "akcesoria",
    sizes: ["ONE SIZE"],
    price: 2890,
    priceFormatted: "2 890 PLN",
    description: "Ręcznie wykonana torebka z włoskiej skóry cielęcej. Minimalistyczny design i praktyczne wymiary czynią ją idealną na każdą okazję.",
    images: [product5],
  },
  {
    id: "6",
    name: "Wełniany Szal Heritage",
    category: "akcesoria",
    sizes: ["ONE SIZE"],
    price: 690,
    priceFormatted: "690 PLN",
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

export const priceRanges = [
  { value: "all", label: "Wszystkie ceny" },
  { value: "0-1000", label: "Do 1 000 PLN" },
  { value: "1000-1500", label: "1 000 - 1 500 PLN" },
  { value: "1500-2000", label: "1 500 - 2 000 PLN" },
  { value: "2000+", label: "Powyżej 2 000 PLN" },
];

export const sizes = [
  { value: "all", label: "Wszystkie" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
