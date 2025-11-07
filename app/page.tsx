import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import PersonalTraining from "@/components/PersonalTraining";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIAm />
      <PersonalTraining />
      <Footer />
    </div>
  );
}
