import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
// import CustomerSection from "./components/home/CustomerSection";
import PricingSection from "./components/home/PricingSection";
import TeamSection from "./components/home/TeamSection";
import FeatureSection from "./components/home/FeatureSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        {/* <CustomerSection /> */}
        <TeamSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
