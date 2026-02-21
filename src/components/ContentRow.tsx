import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetailModal from "./MovieDetailModal";
import type { Movie } from "@/data/movies";

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

const ContentRow = ({ title, movies }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const scrollAmount = rowRef.current.clientWidth * 0.8;
    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeft(rowRef.current.scrollLeft > 0);
    }
  };

  return (
    <section className="relative px-4 md:px-12 mb-8 group/row">
      <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide mb-3">
        {title}
      </h3>
      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-10 w-10 bg-background/60 hover:bg-background/80 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
        )}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, i) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={i}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 bg-background/60 hover:bg-background/80 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      <MovieDetailModal
        movie={selectedMovie}
        open={!!selectedMovie}
        onOpenChange={(open) => !open && setSelectedMovie(null)}
      />
    </section>
  );
};

export default ContentRow;
