import Hero from "@/components/Hero";
import FeaturedTrips from "@/components/FeaturedTrips";
import DestinationShowcase from "@/components/DestinationShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <FeaturedTrips />
      <DestinationShowcase />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}