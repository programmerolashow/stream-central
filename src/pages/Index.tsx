import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ContentRow from "@/components/ContentRow";
import Footer from "@/components/Footer";
import { trendingNow, popularOnNetflix, topRated, newReleases } from "@/data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroBanner />
        <div className="-mt-24 relative z-10 space-y-2">
          <ContentRow title="Trending Now" movies={trendingNow} />
          <ContentRow title="Popular on Netflix" movies={popularOnNetflix} />
          <ContentRow title="Top Rated" movies={topRated} />
          <ContentRow title="New Releases" movies={newReleases} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
