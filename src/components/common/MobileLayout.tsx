import BusinessMobile from "@/components/business/BusinessMobile";
import EntertainmentMobile from "@/components/entertainment/EntertainmentMobiel";
import TrendingSection from "@/components/trending/Trending";
import RecentlyNews from "@/components/recentlyNews/recentlyNews";
import ScrollToTop from "./ScrollToTop";


export default function MobileLayout() {
  return (
    <>
     <TrendingSection />
     <BusinessMobile />
     <EntertainmentMobile />
     <RecentlyNews />
     <ScrollToTop />
    </>
  );
}