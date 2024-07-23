import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FeaturedWorkContext } from "../contextApi/FeaturedContext"; // Adjust path as needed

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
    <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-10 bg-gray-900 text-white">
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
      <div className="flex-1 p-4 md:p-8">
        {/* Mobile View Images */}
        <div className="relative mb-12 bg-cover bg-center" style={{ }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Mobile View Images</h2>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {selectedWork.mobileViewImages.length > 0 && (
              <animated.img
                src={selectedWork.mobileViewImages[currentImageIndex]}
                alt={`mobile-view-${currentImageIndex}`}
                className="absolute inset-0 w-full h-full object-cover"
                style={imageSpring}
              />
            )}
          </div>
        </div>

        {/* Laptop View Images */}
        <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${selectedWork.laptopViewBackgroundImage})` }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Laptop View Images</h2>
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
            {selectedWork.laptopViewImages.length > 0 && (
              <animated.img
                src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
                alt={`laptop-view-${currentLaptopImageIndex}`}
                className="absolute inset-0 w-full h-full object-cover"
                style={laptopImageSpring}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
