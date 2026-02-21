export interface Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  rating: string;
  duration: string;
  genre: string;
  description: string;
  cast: string[];
}

const poster = (seed: number) =>
  `https://picsum.photos/seed/${seed}/300/450`;

export const trendingNow: Movie[] = [
  { id: 1, title: "Shadow Empire", image: poster(101), year: 2025, rating: "TV-MA", duration: "2h 14m", genre: "Sci-Fi", description: "In a dystopian future, an unlikely alliance must navigate a world of shadows and deception to overthrow a ruthless empire that controls everything.", cast: ["Alex Rivera", "Maya Chen", "Jordan Blake", "Sarah Kim"] },
  { id: 2, title: "The Last Signal", image: poster(102), year: 2024, rating: "PG-13", duration: "1h 52m", genre: "Thriller", description: "A retired cryptographer intercepts a mysterious signal from deep space that could change humanity's understanding of the universe forever.", cast: ["David Park", "Elena Voss", "Marcus Webb"] },
  { id: 3, title: "Crimson Tide", image: poster(103), year: 2025, rating: "R", duration: "2h 1m", genre: "Action", description: "When a rogue submarine commander threatens global security, a young officer must challenge authority to prevent nuclear catastrophe.", cast: ["James Cole", "Nina Torres", "Robert Hayes", "Li Wei"] },
  { id: 4, title: "Neon Dreams", image: poster(104), year: 2024, rating: "TV-14", duration: "1h 48m", genre: "Drama", description: "A struggling artist in a neon-lit city discovers her paintings can predict the future, drawing dangerous attention from powerful forces.", cast: ["Sophia Laurent", "Kai Nakamura", "Isabel Cruz"] },
  { id: 5, title: "Arctic Descent", image: poster(105), year: 2025, rating: "PG-13", duration: "1h 55m", genre: "Adventure", description: "A team of scientists trapped in an Arctic research station must survive both the freezing cold and something ancient awakening beneath the ice.", cast: ["Tom Brennan", "Anya Petrov", "Chris Okafor"] },
  { id: 6, title: "Ghost Protocol", image: poster(106), year: 2024, rating: "R", duration: "2h 8m", genre: "Action", description: "An elite spy believed to be dead resurfaces to stop a global conspiracy that threatens to destabilize every major government.", cast: ["Liam Steele", "Yuki Tanaka", "Priya Sharma", "Omar Hassan"] },
  { id: 7, title: "Midnight Run", image: poster(107), year: 2025, rating: "TV-MA", duration: "1h 42m", genre: "Crime", description: "A bounty hunter with a dark past takes on one last job that leads him into the heart of a criminal underworld he thought he'd left behind.", cast: ["Victor Reyes", "Diana Frost", "Samuel Grant"] },
  { id: 8, title: "Solar Winds", image: poster(108), year: 2024, rating: "PG", duration: "1h 38m", genre: "Sci-Fi", description: "A young astronaut on a solo mission discovers a habitable planet, but the journey home proves more perilous than anyone imagined.", cast: ["Ella Morrison", "Dr. Felix Huang", "Commander Sara Osei"] },
];

export const popularOnNetflix: Movie[] = [
  { id: 9, title: "Dark Waters", image: poster(201), year: 2024, rating: "R", duration: "2h 5m", genre: "Horror", description: "A coastal town faces an ancient terror rising from the depths after a series of unexplained disappearances along the shore.", cast: ["Rachel Nguyen", "Ben Archer", "Tessa Collins"] },
  { id: 10, title: "The Heist", image: poster(202), year: 2025, rating: "TV-14", duration: "1h 50m", genre: "Crime", description: "Five strangers are recruited for an impossible museum heist, but each one harbors a secret that could unravel everything.", cast: ["Marco Deluca", "Zara Khan", "Tommy Lin", "Grace Harper"] },
  { id: 11, title: "Elysium Falls", image: poster(203), year: 2024, rating: "PG-13", duration: "2h 12m", genre: "Fantasy", description: "A young woman discovers a hidden realm where mythical creatures coexist with humans, but a looming war threatens both worlds.", cast: ["Luna Castellano", "Rowan Ashford", "Iris Kim"] },
  { id: 12, title: "Rogue Agent", image: poster(204), year: 2025, rating: "R", duration: "1h 58m", genre: "Thriller", description: "A disgraced intelligence officer goes rogue to expose a cover-up that reaches the highest levels of government.", cast: ["Nathan Cross", "Vera Stanton", "Ahmed Malik"] },
  { id: 13, title: "City of Echoes", image: poster(205), year: 2024, rating: "TV-MA", duration: "1h 45m", genre: "Drama", description: "In a city haunted by memories of war, three strangers' lives intertwine as they search for meaning and redemption.", cast: ["Helena Dubois", "Javier Moreno", "Aisha Rahman", "Luca Bianchi"] },
  { id: 14, title: "The Verdict", image: poster(206), year: 2025, rating: "PG-13", duration: "2h 3m", genre: "Legal", description: "A rookie lawyer takes on a seemingly unwinnable case against a pharmaceutical giant, uncovering a web of corruption.", cast: ["Claire Donovan", "Judge Marcus Williams", "Patrick Shaw"] },
  { id: 15, title: "Frozen Peak", image: poster(207), year: 2024, rating: "PG", duration: "1h 40m", genre: "Adventure", description: "Two siblings embark on a treacherous mountain expedition to find their missing father and uncover a decades-old secret.", cast: ["Emma Frost", "Jake Frost", "Guide Tenzing"] },
  { id: 16, title: "Quantum Shift", image: poster(208), year: 2025, rating: "TV-14", duration: "1h 53m", genre: "Sci-Fi", description: "A physicist accidentally opens a portal to parallel universes, each visit revealing a different version of the life she could have lived.", cast: ["Dr. Mia Chen", "Professor Alan Drake", "Riley Sato"] },
];

export const topRated: Movie[] = [
  { id: 17, title: "The Grand Illusion", image: poster(301), year: 2024, rating: "R", duration: "2h 20m", genre: "Drama", description: "A master illusionist's final show becomes a battlefield of truth and deception when his estranged daughter returns to confront him.", cast: ["Vincent Morrow", "Lily Morrow", "Detective Gail"] },
  { id: 18, title: "Velocity", image: poster(302), year: 2025, rating: "PG-13", duration: "1h 47m", genre: "Action", description: "A former race car driver is pulled back into the world of underground racing when her brother gets entangled with dangerous criminals.", cast: ["Rosa Vega", "Danny Vega", "Kira Storm"] },
  { id: 19, title: "Whispers", image: poster(303), year: 2024, rating: "TV-MA", duration: "1h 55m", genre: "Horror", description: "A family moves into a remote farmhouse, only to discover that the walls hold voices of those who lived—and died—there before.", cast: ["Anne Blackwood", "Paul Blackwood", "Young Chloe"] },
  { id: 20, title: "Oasis", image: poster(304), year: 2025, rating: "PG", duration: "1h 42m", genre: "Romance", description: "Two strangers meet at a desert oasis and fall in love over three days, knowing they may never see each other again.", cast: ["Leo Marchetti", "Amara Diallo"] },
  { id: 21, title: "Iron Will", image: poster(305), year: 2024, rating: "R", duration: "2h 10m", genre: "War", description: "Based on true events, a platoon of soldiers must hold a strategic bridge against overwhelming odds during a forgotten battle.", cast: ["Sgt. Dan Mitchell", "Pvt. Yusuf Ali", "Cpt. Joanne Price"] },
  { id: 22, title: "Starbound", image: poster(306), year: 2025, rating: "TV-14", duration: "1h 50m", genre: "Sci-Fi", description: "The crew of a generation ship must decide the fate of their colony when they discover their destination planet is already inhabited.", cast: ["Commander Hale", "Dr. Ren Zhao", "Navigator Patel"] },
  { id: 23, title: "The Architect", image: poster(307), year: 2024, rating: "PG-13", duration: "2h 5m", genre: "Thriller", description: "A brilliant architect discovers that his latest skyscraper design has been secretly weaponized by his own corporation.", cast: ["Adrian Cole", "Eva Sterling", "Mr. Blackstone"] },
  { id: 24, title: "Ember", image: poster(308), year: 2025, rating: "TV-MA", duration: "1h 38m", genre: "Fantasy", description: "A fire mage exiled from her kingdom must reclaim her powers and forge alliances to stop an ancient darkness from consuming the land.", cast: ["Seraphina Blaze", "Lord Ash", "Elder Willow", "Rook the Raven"] },
];

export const newReleases: Movie[] = [
  { id: 25, title: "Phantom Code", image: poster(401), year: 2025, rating: "TV-14", duration: "1h 52m", genre: "Tech-Thriller", description: "A teenage hacker stumbles upon a self-replicating AI code that threatens to take over every connected device on the planet.", cast: ["Max Turner", "Agent Li", "Professor Ada"] },
  { id: 26, title: "Deep Blue", image: poster(402), year: 2025, rating: "PG-13", duration: "1h 48m", genre: "Adventure", description: "A marine biologist and her team dive into the deepest ocean trench, where they encounter creatures beyond imagination.", cast: ["Dr. Coral Reed", "Diver Jake", "Captain Nemo II"] },
  { id: 27, title: "The Witness", image: poster(403), year: 2025, rating: "R", duration: "2h 2m", genre: "Crime", description: "The sole witness to a mob assassination must survive long enough to testify, hunted by both criminals and corrupt law enforcement.", cast: ["Maria Santos", "Detective Bryan", "Vince 'The Hammer'"] },
  { id: 28, title: "Zenith", image: poster(404), year: 2025, rating: "TV-MA", duration: "1h 55m", genre: "Sci-Fi", description: "At the peak of human civilization, a solar event threatens to erase all technology, forcing humanity to rebuild from scratch.", cast: ["Chancellor Eve", "Engineer Sol", "Historian Raye"] },
  { id: 29, title: "Bloodline", image: poster(405), year: 2025, rating: "R", duration: "2h 8m", genre: "Drama", description: "Three generations of a powerful family unravel when long-buried secrets surface during a patriarch's funeral.", cast: ["Eleanor Crane", "Thomas Crane Jr.", "Young Michael"] },
  { id: 30, title: "Echo Chamber", image: poster(406), year: 2025, rating: "TV-14", duration: "1h 44m", genre: "Thriller", description: "A podcast host investigating conspiracy theories discovers that her latest story is terrifyingly real—and someone wants her silenced.", cast: ["Sam Brooks", "Producer Gina", "The Caller"] },
  { id: 31, title: "Wild Card", image: poster(407), year: 2025, rating: "PG-13", duration: "1h 50m", genre: "Comedy", description: "A down-on-his-luck gambler enters a high-stakes poker tournament where the prize is more than just money—it's a second chance at life.", cast: ["Charlie Luck", "Dealer Rose", "The Shark"] },
  { id: 32, title: "Nightfall", image: poster(408), year: 2025, rating: "TV-MA", duration: "1h 42m", genre: "Horror", description: "When night falls permanently over a small town, its residents must confront the darkness within themselves and the creatures it attracts.", cast: ["Sheriff Dawn", "Father Michael", "The Girl"] },
];
