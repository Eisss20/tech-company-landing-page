import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import OfferCardSection from "@/components/OfferCardSection";
import Footer from "@/components/Footer";
import Promotional from "@/components/Promotional";
import Pricing from "@/components/Pricing";
import Product from "@/components/Product";
import Partner from "@/components/Partner";
import Testimonial from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <OfferCardSection />
      <Product />
      <Partner />
      <Testimonial />
      <Pricing />
      <Promotional />
      <Footer />
    </>
  );
}
