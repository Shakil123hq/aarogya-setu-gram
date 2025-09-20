import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import FeaturesGrid from "@/components/FeaturesGrid";
import NewsSection from "@/components/NewsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import DistrictReach from "@/components/DistrictReach";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <FeaturesGrid />
        <NewsSection />
        <DepartmentsSection />
        <DistrictReach />
      </main>
      <Footer />
    </div>
  );
};

export default Index;