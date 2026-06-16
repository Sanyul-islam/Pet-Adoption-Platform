import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";


const layout = ({children}) => {
    return (
       <>
       <Navbar/>
       {children}
       <Footer/>
       </>
    );
};

export default layout;