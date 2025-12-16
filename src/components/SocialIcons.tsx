import { Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
];

export function SocialIcons() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground transition-all duration-300"
          aria-label={social.name}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
}
