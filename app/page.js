import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedTrips from "@/components/FeaturedTrips";
import DestinationShowcase from "@/components/DestinationShowcase";
import WhyStudentsLove from "@/components/WhyStudentsLove";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <TrustBar />
      <FeaturedTrips />
      <DestinationShowcase />
      <WhyStudentsLove />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}