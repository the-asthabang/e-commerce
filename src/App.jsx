import { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import Heroo from "./component/Hero/Heroo";
import Programs from "./component/program/Program";
import Topprogram from "./component/TopProgram/topprogram";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./component/Banner/Banner";
import Subcription from "./component/Subcriptiption/Subcription";
import Footer from "./component/Footer/Footer";
import Testimonial from "./component/Testimonial/Testimonial";







const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Heroo />
      <Programs  />
      <Topprogram />
      <Banner />
      <Subcription />
      <Programs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;