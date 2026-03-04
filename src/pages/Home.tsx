import HeroSection from '../components/sections/HeroSection';
import ProblemValueSection from '../components/sections/ProblemValueSection';
import CoreDifferentiators from '../components/sections/CoreDifferentiators';
import SolutionsOverview from '../components/sections/SolutionsOverview';
import PartnerEcosystem from '../components/sections/PartnerEcosystem';
import FooterCTA from '../components/sections/FooterCTA';

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemValueSection />
      <CoreDifferentiators />
      <SolutionsOverview />
      <PartnerEcosystem />
      <FooterCTA />
    </main>
  );
};

export default Home;
