import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FeaturedWorkContext } from "../contextApi/FeaturedContext"; // Adjust path as needed
import '../css/brandview.css';

const BrandImages = () => {
  const { selectedWork } = useContext(FeaturedWorkContext);

  const [currentBrandImageIndex, setCurrentBrandImageIndex] = useState(0);

  const brandImageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  // Handle brand images cycling
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedWork?.brandImages.length) {
        setCurrentBrandImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.brandImages.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedWork?.brandImages.length]);

  if (!selectedWork) return <div>Loading...</div>;

  const handleButtonClick = () => {
    if (selectedWork.websiteUrl) {
      window.open(selectedWork.websiteUrl, '_blank');
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center min-h-screen justify-between p-4 md:p-10 bg-gray-900 text-white">
      {/* Circles in Background */}
      <div className="absolute inset-0 z-2 flex justify-center items-center">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:w-1/2 md:pr-10 mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{selectedWork.title}</h1>
        <p className="text-base md:text-lg mb-6">{selectedWork.description}</p>
        <button
          onClick={handleButtonClick}
          className="border-2 border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl w-1/2 md:w-1/3"
        >
          Visit Project
        </button>
      </div>

      {/* Brand Images */}
      {selectedWork.brandImages.length > 0 && (
        <div className="flex justify-center items-center md:w-1/2 relative">
          <animated.img
            src={selectedWork.brandImages[currentBrandImageIndex]}
            alt={`brand-view-${currentBrandImageIndex}`}
            className="w-full max-w-[900px] object-cover"
            style={brandImageSpring}
          />
        </div>
      )}
    </div>
  );
};

export default BrandImages;
