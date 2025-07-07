import TopNewsLayout from "@/components/TopNewsLayout";
import TrendingChips from "@/components/TrendingChips";
import BooksSection from "@/components/BooksSection";
import MultimediaSection from "@/components/MultimediaSection";
import HighlightsSection from "@/components/HighlightsSection";
import BusinessSection from "@/components/BusinessSection";
import LifeStyleSection from "@/components/LifeStyleSection";
import CategoriesSection from "@/components/CategoriesSection";
import MagazineSection from "@/components/MagazineSection";
import VideoSection from "@/components/VideoSection";

export default async function Home() {
  return (
    <div className="md:px-6 xl:px-0">
    <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
      <TrendingChips />
      <TopNewsLayout />
      <BooksSection />
      
    </div>
    <div className="max-w-[1200px] mx-auto mt-1 px-4 sm:px-0">
      <MultimediaSection />
    </div>
    <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
      <HighlightsSection />
      <BusinessSection />
      <LifeStyleSection />
      <CategoriesSection />
      
    </div>
    <div className="max-w-full mx-auto p-4 my-6 sm:px-0" style={{
      background: '#eee'
    }}>
       <MagazineSection />
    </div>
    <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
      <VideoSection />
    </div>
    </div>
  );
}
