import React, { useState, useEffect } from "react";
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
import Header2 from "./components/Header2";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight / 1.8;

      if (scrollY > viewportHeight * 0.6) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header2 isVisible={showHeader} />
      <Hero />
      <AboutUs />
      <Domain />
      <Service />
      <Portfolio />
      <Testimonials />
      <AnimatedLogoCloud />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
