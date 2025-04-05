import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Missions from "@/components/Missions";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Slogan from "@/components/Slogan";
import HowToTrain from "@/components/HowToTrain";
import Action from "@/components/Action";
import { BackToTopButton } from "@/components/BackToTopBtn";

function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Missions />
      <Benefits />
      <Services />
      <Slogan />
      <HowToTrain />
      <Action />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default Page;
