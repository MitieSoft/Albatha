import GlobalAccessibilityButton from "./components/GlobalAccessibilityButton";
import GlobalChatButton from "./components/GlobalChatButton";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import LiveLifeSection from "./components/LiveLifeSection";
import CeoAbout from "./components/CeoAbout";
import SustainabilityReportSection from "./components/SustainabilityReportSection";
import LatestLaunchesSection from "./components/LatestLaunchesSection";
import DynamicJoudTowerSection from "./components/DynamicJoudTowerSection";
import MoreThanYouKnowSection from "./components/MoreThanYouKnowSection";
import InvestmentSection from "./components/InvestmentSection";
import SustainabilitySection from "./components/SustainabilitySection";
import WhatsNewSection from "./components/WhatsNewSection";
import LatestUpdatesSection from "./components/LatestUpdatesSection";
import Footer from "./components/Footer";
import ContactUsSection from "./components/ContactUsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <GlobalAccessibilityButton /> */}
      <GlobalChatButton />
      <Navigation />
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      {/* <WorkspaceSection /> */}
      <div className="animate-fade-in-up animation-delay-200">
        <CeoAbout />
      </div>
      {/* <LiveLifeSection />
      <SustainabilityReportSection /> */}
      <div className="animate-fade-in-up animation-delay-400">
        <LatestLaunchesSection />
      </div>
      <div className="animate-fade-in-up animation-delay-600">
        <DynamicJoudTowerSection />
      </div>
      <div className="animate-fade-in-up animation-delay-800">
        <ContactUsSection />
      </div>
      {/* <MoreThanYouKnowSection />
      <InvestmentSection />
      <SustainabilitySection />
      <WhatsNewSection />
      <LatestUpdatesSection /> */}
      <Footer />
    </div>
  );
}
