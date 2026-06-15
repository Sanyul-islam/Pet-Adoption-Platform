import NavbarPage from "../component/Navbar";
import Footer from "@/component/Footer";
import Banner from "@/component/HeroBanner";
import AllPets from "@/component/AllPets";

export default function Home() {
  return (
    <>
    <NavbarPage/>
    <Banner/>
    <AllPets/>
    <Footer/>
    </>
  );
}
