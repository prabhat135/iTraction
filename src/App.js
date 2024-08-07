
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laptop from "./components/Laptop";
import Home from "./pages/Home";
import BrandImages from "./components/BrandView";


function App() {
  

  return (
    <div className="App">
      <Hero />
      <AboutUs />

    <Domain />
    <Service />
   <Portfolio />
    { /*<Laptop / >*/}
     {/* <Reviews /> */}
  <ContactUs />
    <Footer />
  

    </div>
  );
}

export default App;
