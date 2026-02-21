import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index: number;
  onClick?: () => void;
}

const MovieCard = ({ movie, index, onClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[160px] md:w-[220px] transition-transform duration-300 group cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex flex-col justify-end p-3 animate-fade-in">
            <p className="text-foreground text-sm font-semibold truncate">{movie.title}</p>
            <div className="flex items-center gap-2 mt-2">
              <button className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors" onClick={(e) => e.stopPropagation()}>
                <Play className="w-3.5 h-3.5 text-background fill-current" />
              </button>
              <button className="w-7 h-7 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
                <Plus className="w-3.5 h-3.5 text-foreground" />
              </button>
              <button className="w-7 h-7 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
                <ThumbsUp className="w-3.5 h-3.5 text-foreground" />
              </button>
              <button className="w-7 h-7 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors ml-auto" onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
                <ChevronDown className="w-3.5 h-3.5 text-foreground" />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-primary font-bold">95%</span>
              <span className="text-muted-foreground border border-muted-foreground/40 px-1">{movie.rating}</span>
              <span className="text-muted-foreground">{movie.duration}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{movie.genre}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
