import {Footer} from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AchievementSection from "@/components/homepage/AchievementSection";
import BlogSection from "@/components/homepage/BlogSection";
import Carousel from "@/components/homepage/Carousel";
import ECMemberCarousel from "@/components/homepage/ECMemberCarousel";
import EventSection from "@/components/homepage/EventSection";
import GallerySection from "@/components/homepage/GallerySection";
import Hero from "@/components/homepage/Hero";
import NoticeSection from "@/components/homepage/NoticeSection";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Carousel />
      <EventSection />
      <NoticeSection />
      <BlogSection />
      <AchievementSection />
      <ECMemberCarousel />
      <GallerySection />
      <Footer/>
    </main>
  );
}
