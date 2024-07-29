import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FeaturedWorkContext } from "../contextApi/FeaturedContext"; 
import '../css/brandview.css'


const Laptop = () => {
  const { selectedWork } = useContext(FeaturedWorkContext);

  const [currentLaptopImageIndex, setCurrentLaptopImageIndex] = useState(0);

  const laptopImageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  // Handle laptop view images cycling
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedWork?.laptopViewImages.length) {
        setCurrentLaptopImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.laptopViewImages.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedWork?.laptopViewImages.length]);

  if (!selectedWork) return <div>Loading...</div>;

  const handleButtonClick = () => {
    if (selectedWork.websiteUrl) {
      // Make sure the URL starts with 'http://' or 'https://'
      let url = selectedWork.websiteUrl;
      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
      }
      
      // Open the URL in a new tab
      window.open(url, '_blank');
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center sm:justify-between items-center min-h-screen p-4 md:p-10 bg-gray-900 text-white">
      {/* Background Image */}
     

      {/* Circles in Background */}
      <div className="absolute inset-0  flex justify-center items-center">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:w-1/3 md:pr-8 mb-6 md:mb-0 relative z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{selectedWork.title}</h1>
        <p className="text-base md:text-lg mb-6">{selectedWork.description}</p>
        <button
          onClick={handleButtonClick}
          className="border-2 border-white hover:bg-blue-700 text-white w-48 font-bold py-2 px-4 rounded-2xl"
        >
          Visit Project
        </button>
      </div>

      {/* Laptop View Images */}
      {selectedWork.laptopViewImages.length > 0 && (
        <div className="flex justify-center items-center md:w-1/2 relative">
          <animated.img
            src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
            alt={`laptop-view-${currentLaptopImageIndex}`}
            className="w-full max-w-[900px] object-cover"
            style={laptopImageSpring}
          />
        </div>
      )}
      
    </div>
  );
};

export default Laptop;
