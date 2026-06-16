import NavbarPage from "../component/Navbar";
import Footer from "@/component/Footer";
import Banner from "@/component/HeroBanner";
import AllPets from "@/component/AllPets";
import WhyAdopt from "@/component/WhyAdopt";
import SuccessStories from "@/component/SuccessStories";
import AdoptionProcess from "@/component/AdoptionProcess";

export default function Home() {
  return (
    <>
    <NavbarPage/>
    <Banner/>
    <AllPets/>
    <WhyAdopt/>
    <SuccessStories/>
    <AdoptionProcess/>
    <Footer/>
    </>
  );
}
