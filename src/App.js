import React from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Domain from './components/Domain';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Laptop from './components/Laptop';
import Footer from './components/Footer';
// import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Domain />
      <Service />
      <Portfolio />
      <Laptop />
      {/* <Reviews /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
