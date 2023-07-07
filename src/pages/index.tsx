import Hero from "@/components/Hero";
import Header from "../components/Header";
import Gallery from "@/components/Gallery";
import Feature from "@/components/Feature";
import RentalVehicle from "@/components/RentalVehicle";
import ClickToAction from "@/components/ClickToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Feature />
      <Gallery />
      {/* Replace RentalVehicle with Gallery */}
      <RentalVehicle />
      <ClickToAction />
      <Footer />
    </>
  );
}
