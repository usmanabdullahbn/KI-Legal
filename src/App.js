import React from "react";
import Navbar from "./components/nav/Navigation";
import Home from "./components/home/Home";
import AboutUs from "./components/about us/About";
import Expertise from "./components/our expertise/expertise";
import Team from "./components/our Team/Team";
import ChooseUs from "./components/choose us/ChooseUs";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Slider from "./components/Suppoting Team/Suppoting";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Expertise />
      <Team />
      <Slider />
      <ChooseUs/>
      <ContactUs/>
      <Footer/>
   
   
    </>
  );
};

export default App;
