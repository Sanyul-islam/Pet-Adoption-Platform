import NavbarPage from "../component/Navbar";
import Footer from "@/component/Footer";
import Banner from "@/component/HeroBanner";
import Pets from "@/component/Pets";
import WhyAdopt from "@/component/WhyAdopt";
import SuccessStories from "@/component/SuccessStories";
import AdoptionProcess from "@/component/AdoptionProcess";
import CommunityImpact from "@/component/CommunityImpact";
import PetCareTips from "@/component/PetCareTips";

export default function Home() {
  return (
    <>
    <NavbarPage/>
    <Banner/>
    <Pets/>
    <WhyAdopt/>
    <SuccessStories/>
    <AdoptionProcess/>
    <PetCareTips/>
    <CommunityImpact/>
    <Footer/>
    </>
  );
}
