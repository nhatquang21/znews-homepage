import TopNewsLayout from "@/components/TopNewsLayout";
import TrendingChips from "@/components/TrendingChips";
import BooksSection from "@/components/BooksSection";
import MultimediaSection from "@/components/MultimediaSection";

export default async function Home() {
  return (
    <>
    <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
      <TrendingChips />
      <TopNewsLayout />
      <BooksSection />
      
    </div>
    <div className="max-w-[1200px] mx-auto mt-1 px-4 sm:px-0">
      <MultimediaSection />
    </div>
    </>
  );
}
