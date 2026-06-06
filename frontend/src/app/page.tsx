import ProductCategories from "@/components/sections/ProductCategories";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CompanyHighlights from "@/components/sections/CompanyHighlights";
import IndustriesServed from "@/components/sections/IndustriesServed";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyHighlights />
      <ProductCategories />
      <IndustriesServed />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}