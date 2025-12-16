import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/80 hover:text-background transition-colors duration-300 animate-bounce-slow"
      aria-label="Scroll down"
    >
      <ChevronDown size={32} strokeWidth={1} />
    </button>
  );
}
