import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import PersonalTraining from "@/components/PersonalTraining";
import Footer from "@/components/Footer";
import Result from "@/components/Result";
import Booking from "@/components/Booking";
import Posts from "@/components/Posts";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhoIAm />
      <PersonalTraining />
      <Result />
      <Booking />
      <Posts />
      <Footer />
    </div>
  );
}
