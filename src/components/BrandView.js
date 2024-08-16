
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useParams } from 'react-router-dom';
import '../css/brandview.css';
import axiosInstance from "../config/axios";
import { motion } from "framer-motion";

const BrandImages = () => {
  const { workId } = useParams();
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentBrandImageIndex, setCurrentBrandImageIndex] = useState(0);

  const brandImageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  useEffect(() => {
    const fetchSelectedWork = async () => {
      try {
        const response = await axiosInstance.get(`/featured-work/${workId}`);
        setSelectedWork(response.data);
      } catch (err) {
        console.error("Failed to fetch the selected work", err);
      }
    };

    fetchSelectedWork();
  }, [workId]);

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

  const circleVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center min-h-screen justify-between p-4 md:p-10 bg-white dark:bg-gray-900">
      {/* Circles in Background */}

      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className={`circle circle-${index + 1}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        />
      ))}

      {/* <div className="absolute inset-0 z-10">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div> */}

      {/* Description Section */}
      <div className="flex flex-col flex-wrap w-full md:w-1/3 md:pr-10 mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">{selectedWork.title}</h1>
        <p className="text-base md:text-lg mb-6 text-[#999999]">{selectedWork.description}</p>
        <button
          onClick={handleButtonClick}
          className="brand-btn text-xl bg-transparent text-black dark:text-white w-1/3 py-2 px-4 border border-black dark:border-white hover:border-none rounded-full hover:text-white"
        >
          <span>Visit Project</span>
        </button>
      </div>

      {/* Brand Images */}
      <div className="relative bg-gray-200 shadow-2xl w-full md:w-[800px] h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
        {selectedWork.brandImages.length > 0 && (
          <animated.img
            src={selectedWork.brandImages[currentBrandImageIndex]}
            alt={`brand-view-${currentBrandImageIndex}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={brandImageSpring}
          />
        )}
      </div>
    </div>
  );
};

export default BrandImages;

// import React, { useContext, useEffect, useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { FeaturedWorkContext } from "../contextApi/FeaturedContext"; // Adjust path as needed
// import '../css/brandview.css'
// const BrandImages = () => {
//   const { selectedWork } = useContext(FeaturedWorkContext);

//   const [currentBrandImageIndex, setCurrentBrandImageIndex] = useState(0);

//   const brandImageSpring = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     reset: true,
//   });

//   // Handle brand images cycling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (selectedWork?.brandImages.length) {
//         setCurrentBrandImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.brandImages.length);
//       }
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [selectedWork?.brandImages.length]);

//   if (!selectedWork) return <div>Loading...</div>;

//   const handleButtonClick = () => {
//     if (selectedWork.websiteUrl) {
//       window.open(selectedWork.websiteUrl, '_blank');
//     }
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row items-center min-h-screen justify-between p-4 md:p-10 bg-gray-900 text-white">
//       {/* Circles in Background */}
//       <div className="absolute inset-0">
//         <div className="brandview-circle circle-1"></div>
//         <div className="brandview-circle circle-2"></div>
//         <div className="brandview-circle circle-3"></div>
//         <div className="brandview-circle circle-4"></div>
//         <div className="brandview-circle circle-5"></div>
//       </div>

//       {/* Description Section */}
//       <div className="flex flex-col flex-wrap w-full md:w-1/3 md:pr-10 mb-6 md:mb-0">
//         <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{selectedWork.title}</h1>
//         <p className="text-base md:text-2xl mb-6 text-[#999999]">{selectedWork.description}</p>
//         <button
//           onClick={handleButtonClick}
//           className="brand-btn text-xl bg-transparent border text-white w-48 py-2 px-10 hover:border-none rounded-full"
//         >
//           <span>Visit Project</span>
//         </button>
//       </div>

//       {/* Brand Images */}
//       <div className="relative bg-gray-200 shadow-2xl w-full md:w-[800px] h-[400px] md:h-[550px] overflow-hidden rounded-lg">
//         {selectedWork.brandImages.length > 0 && (
//           <animated.img
//             src={selectedWork.brandImages[currentBrandImageIndex]}
//             alt={`brand-view-${currentBrandImageIndex}`}
//             className="absolute inset-0 w-full h-full object-cover"
//             style={brandImageSpring}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default BrandImages;