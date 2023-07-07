import Hero from "@/components/Hero";
import Header from "../components/Header";
import Gallery from "@/components/Gallery";
import Feature from "@/components/Feature";
import RentalVehicle from "@/components/RentalVehicle";
import ClickToAction from "@/components/ClickToAction";
import Footer from "@/components/Footer";
import EmailList from "@/components/EmailList";
import { popularOccasions, iconicDestinations, rentalVehicles } from "@/data";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery dataList={popularOccasions}>Popular Occasions</Gallery>
      <Feature />
      <Gallery dataList={iconicDestinations}>Iconic Destinations</Gallery>
      <RentalVehicle dataList={rentalVehicles}>
        Rentals for any group size
      </RentalVehicle>
      <ClickToAction />
      <EmailList />
      <Footer />
    </>
  );
}
