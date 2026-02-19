import { Search, Bell, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-3 transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <h1 className="font-display text-3xl md:text-4xl text-primary tracking-wider">
          NETFLIX
        </h1>
        <ul className="hidden md:flex items-center gap-5 text-sm text-secondary-foreground">
          <li className="text-foreground font-medium cursor-pointer">Home</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">TV Shows</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">Movies</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">New & Popular</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">My List</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 text-foreground">
        <Search className="w-5 h-5 cursor-pointer hover:text-muted-foreground transition-colors" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-muted-foreground transition-colors" />
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 rounded bg-primary" />
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
