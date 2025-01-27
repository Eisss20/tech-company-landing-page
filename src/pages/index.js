import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import OfferCardSection from "@/components/OfferCardSection";
import Footer from "@/components/Footer";
import Promotional from "@/components/Promotional";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <OfferCardSection />
      <Pricing />
      <Promotional />
      <Footer />
    </>
  );
}
