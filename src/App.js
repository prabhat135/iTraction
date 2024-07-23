
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laptop from "./components/Laptop";
import Home from "./pages/Home";
import BrandImages from "./components/BrandView";


function App() {
  

  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mobile-features" element={<Laptop/>} />
        <Route path="/brand-features" element={<BrandImages/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
