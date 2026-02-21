import { Play, Plus, ThumbsUp, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/data/movies";

interface MovieDetailModalProps {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MovieDetailModal = ({ movie, open, onOpenChange }: MovieDetailModalProps) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border rounded-lg">
        {/* Trailer Placeholder */}
        <div className="relative w-full aspect-video bg-muted">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <DialogTitle className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              {movie.title}
            </DialogTitle>
            <div className="flex items-center gap-3">
              <Button className="bg-foreground text-background hover:bg-foreground/80 font-semibold gap-2">
                <Play className="w-4 h-4 fill-current" />
                Play
              </Button>
              <button className="w-10 h-10 rounded-full border-2 border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                <Plus className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-muted-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                <ThumbsUp className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
          {/* Play icon overlay for trailer placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-8 h-8 text-foreground fill-current" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
          <div>
            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="text-primary font-bold">97% Match</span>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="text-muted-foreground border border-muted-foreground/40 px-1.5 py-0.5 text-xs">
                {movie.rating}
              </span>
              <span className="text-muted-foreground">{movie.duration}</span>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {movie.description}
            </p>
          </div>

          <div className="min-w-[180px] space-y-3 text-sm">
            <div>
              <span className="text-muted-foreground">Cast: </span>
              <span className="text-foreground/80">{movie.cast.join(", ")}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Genre: </span>
              <span className="text-foreground/80">{movie.genre}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailModal;
