export interface Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  rating: string;
  duration: string;
  genre: string;
  description?: string;
}

const posterBase = "https://image.tmdb.org/t/p/w500";

// Using placeholder poster-style images via picsum with fixed seeds
const poster = (seed: number) =>
  `https://picsum.photos/seed/${seed}/300/450`;

export const trendingNow: Movie[] = [
  { id: 1, title: "Shadow Empire", image: poster(101), year: 2025, rating: "TV-MA", duration: "2h 14m", genre: "Sci-Fi" },
  { id: 2, title: "The Last Signal", image: poster(102), year: 2024, rating: "PG-13", duration: "1h 52m", genre: "Thriller" },
  { id: 3, title: "Crimson Tide", image: poster(103), year: 2025, rating: "R", duration: "2h 1m", genre: "Action" },
  { id: 4, title: "Neon Dreams", image: poster(104), year: 2024, rating: "TV-14", duration: "1h 48m", genre: "Drama" },
  { id: 5, title: "Arctic Descent", image: poster(105), year: 2025, rating: "PG-13", duration: "1h 55m", genre: "Adventure" },
  { id: 6, title: "Ghost Protocol", image: poster(106), year: 2024, rating: "R", duration: "2h 8m", genre: "Action" },
  { id: 7, title: "Midnight Run", image: poster(107), year: 2025, rating: "TV-MA", duration: "1h 42m", genre: "Crime" },
  { id: 8, title: "Solar Winds", image: poster(108), year: 2024, rating: "PG", duration: "1h 38m", genre: "Sci-Fi" },
];

export const popularOnNetflix: Movie[] = [
  { id: 9, title: "Dark Waters", image: poster(201), year: 2024, rating: "R", duration: "2h 5m", genre: "Horror" },
  { id: 10, title: "The Heist", image: poster(202), year: 2025, rating: "TV-14", duration: "1h 50m", genre: "Crime" },
  { id: 11, title: "Elysium Falls", image: poster(203), year: 2024, rating: "PG-13", duration: "2h 12m", genre: "Fantasy" },
  { id: 12, title: "Rogue Agent", image: poster(204), year: 2025, rating: "R", duration: "1h 58m", genre: "Thriller" },
  { id: 13, title: "City of Echoes", image: poster(205), year: 2024, rating: "TV-MA", duration: "1h 45m", genre: "Drama" },
  { id: 14, title: "The Verdict", image: poster(206), year: 2025, rating: "PG-13", duration: "2h 3m", genre: "Legal" },
  { id: 15, title: "Frozen Peak", image: poster(207), year: 2024, rating: "PG", duration: "1h 40m", genre: "Adventure" },
  { id: 16, title: "Quantum Shift", image: poster(208), year: 2025, rating: "TV-14", duration: "1h 53m", genre: "Sci-Fi" },
];

export const topRated: Movie[] = [
  { id: 17, title: "The Grand Illusion", image: poster(301), year: 2024, rating: "R", duration: "2h 20m", genre: "Drama" },
  { id: 18, title: "Velocity", image: poster(302), year: 2025, rating: "PG-13", duration: "1h 47m", genre: "Action" },
  { id: 19, title: "Whispers", image: poster(303), year: 2024, rating: "TV-MA", duration: "1h 55m", genre: "Horror" },
  { id: 20, title: "Oasis", image: poster(304), year: 2025, rating: "PG", duration: "1h 42m", genre: "Romance" },
  { id: 21, title: "Iron Will", image: poster(305), year: 2024, rating: "R", duration: "2h 10m", genre: "War" },
  { id: 22, title: "Starbound", image: poster(306), year: 2025, rating: "TV-14", duration: "1h 50m", genre: "Sci-Fi" },
  { id: 23, title: "The Architect", image: poster(307), year: 2024, rating: "PG-13", duration: "2h 5m", genre: "Thriller" },
  { id: 24, title: "Ember", image: poster(308), year: 2025, rating: "TV-MA", duration: "1h 38m", genre: "Fantasy" },
];

export const newReleases: Movie[] = [
  { id: 25, title: "Phantom Code", image: poster(401), year: 2025, rating: "TV-14", duration: "1h 52m", genre: "Tech-Thriller" },
  { id: 26, title: "Deep Blue", image: poster(402), year: 2025, rating: "PG-13", duration: "1h 48m", genre: "Adventure" },
  { id: 27, title: "The Witness", image: poster(403), year: 2025, rating: "R", duration: "2h 2m", genre: "Crime" },
  { id: 28, title: "Zenith", image: poster(404), year: 2025, rating: "TV-MA", duration: "1h 55m", genre: "Sci-Fi" },
  { id: 29, title: "Bloodline", image: poster(405), year: 2025, rating: "R", duration: "2h 8m", genre: "Drama" },
  { id: 30, title: "Echo Chamber", image: poster(406), year: 2025, rating: "TV-14", duration: "1h 44m", genre: "Thriller" },
  { id: 31, title: "Wild Card", image: poster(407), year: 2025, rating: "PG-13", duration: "1h 50m", genre: "Comedy" },
  { id: 32, title: "Nightfall", image: poster(408), year: 2025, rating: "TV-MA", duration: "1h 42m", genre: "Horror" },
];
