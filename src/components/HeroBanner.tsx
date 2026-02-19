import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        src={heroBanner}
        alt="Featured movie banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[20%] left-4 md:left-12 max-w-lg z-10 animate-fade-in">
        <h2 className="font-display text-5xl md:text-7xl tracking-wide text-foreground mb-2">
          SHADOW EMPIRE
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="text-primary font-semibold">98% Match</span>
          <span>2025</span>
          <span className="border border-muted-foreground/40 px-1.5 py-0.5 text-xs">TV-MA</span>
          <span>2h 14m</span>
        </div>
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 max-w-md">
          In a dystopian future, an unlikely alliance must navigate a world of shadows
          and deception to overthrow a ruthless empire that controls everything.
        </p>
        <div className="flex items-center gap-3">
          <Button className="bg-foreground text-background hover:bg-foreground/80 font-semibold px-6 py-2 gap-2 text-base">
            <Play className="w-5 h-5 fill-current" />
            Play
          </Button>
          <Button variant="secondary" className="gap-2 text-base px-6 py-2 bg-secondary/80 hover:bg-secondary">
            <Info className="w-5 h-5" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
