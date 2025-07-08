import TopNewsLayout from "@/components/multimedia/TopNewsLayout";
import TrendingChips from "@/components/common/TrendingChips";
import BooksSection from "@/components/books/BooksSection";
import MultimediaSection from "@/components/multimedia/MultimediaSection";
import HighlightsSection from "@/components/highlights/HighlightsSection";
import BusinessSection from "@/components/business/BusinessSection";
import LifeStyleSection from "@/components/lifesStyle/LifeStyleSection";
import CategoriesSection from "@/components/category/CategoriesSection";
import MagazineSection from "@/components/magazine/MagazineSection";
import VideoSection from "@/components/video/VideoSection";
import MobileLayout from "@/components/common/MobileLayout";

export default async function Home() {
  return (
    <div className="md:px-6 xl:px-0">
      <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
        <TrendingChips />
        <TopNewsLayout />
        <BooksSection />
        <MobileLayout />
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

      <MagazineSection />

      <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
        <VideoSection />
      </div>
    </div>
  );
}
