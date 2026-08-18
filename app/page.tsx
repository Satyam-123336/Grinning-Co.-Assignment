import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductCollection from "@/components/ProductCollection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <BrandStory />
      <ProductCollection />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
