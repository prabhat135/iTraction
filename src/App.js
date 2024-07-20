import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Domain from "./components/Domain";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Testimonials from "./components/Reviews";
import AnimatedLogoCloud from "./components/logo-cloude";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Domain />
      <Service />
      <Portfolio />
      <Testimonials/>
      <AnimatedLogoCloud />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
