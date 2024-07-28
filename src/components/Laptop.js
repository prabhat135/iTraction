import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FeaturedWorkContext } from "../contextApi/FeaturedContext"; // Adjust path as needed

// Import background images
import mobileViewBg from '../assets/smart-Phone.png'; // Adjust the path as needed
import laptopViewBg from '../assets/laptop-image.png'; // Adjust the path as needed

const Laptop = () => {
  const { selectedWork } = useContext(FeaturedWorkContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLaptopImageIndex, setCurrentLaptopImageIndex] = useState(0);

  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const laptopImageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  // Handle mobile view images cycling
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedWork?.mobileViewImages.length) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.mobileViewImages.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedWork?.mobileViewImages.length]);

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
      window.open(selectedWork.websiteUrl, '_blank');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-10 bg-gray-900 text-white">
      {/* Text Section */}
      <div className="md:w-1/3 md:pr-8 mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{selectedWork.title}</h1>
        <p className="text-base md:text-lg mb-6">{selectedWork.description}</p>
        <button
          onClick={handleButtonClick}
          className="border-2 border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          Visit Project
        </button>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row items-center p-4 md:p-8 md:w-2/3 relative gap-4 md:gap-2">
        {/* Laptop View Images */}
        <div className="flex bg-[#151517] justify-center items-center flex-col relative w-full border-2 border-gray-200 md:w-auto ">
          {selectedWork.laptopViewImages.length > 0 && (
            <animated.img
              src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
              alt={`laptop-view-${currentLaptopImageIndex}`}
              className="relative inset-0 p-4 sm:p-8 rounded-lg w-full md:w-[600px] lg:w-[900px] mx-auto object-cover"
              style={laptopImageSpring}
            />
          )}
          <div className="bg-white rounded-2xl mb-2 p-1 h-[2px] w-24"></div>
        </div>
        {/* Mobile View Images */}
        <div className="flex  justify-center items-center flex-col relative w-full rounded-3xl md:w-auto md:h-auto">
          {selectedWork.mobileViewImages.length > 0 && (
            <animated.img
              src={selectedWork.mobileViewImages[currentImageIndex]}
              alt={`mobile-view-${currentImageIndex}`}
              className="inset-0 rounded-3xl mx-auto w-[150px] sm:w-[200px] h-[300px] sm:h-[400px] border-2 border-gray-200 object-cover"
              style={imageSpring}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
