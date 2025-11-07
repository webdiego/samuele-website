import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import PersonalTraining from "@/components/PersonalTraining";
import Footer from "@/components/Footer";
import Result from "@/components/Result";
import Booking from "@/components/Booking";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIAm />
      <PersonalTraining />
      <Result />
      <Booking />
      <Footer />
    </div>
  );
}
