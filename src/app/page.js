import Image from "next/image";
import NavbarPage from "../component/Navbar";
import Footer from "@/component/Footer";
import Banner from "@/component/HeroBanner";

export default function Home() {
  return (
    <>
    <NavbarPage/>
    <Banner/>
    <Footer/>
    </>
  );
}
