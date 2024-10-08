import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../css/brandview.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axios";
import { motion } from "framer-motion";
const Laptop = () => {
  const { workId } = useParams();
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentLaptopImageIndex, setCurrentLaptopImageIndex] = useState(0);

  const laptopImageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  useEffect(() => {
    const fetchSelectedWork = async () => {
      try {
        const response = await axiosInstance.get(`/featured-work/${workId}`);
        setSelectedWork(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Failed to fetch the selected work", err);
      }
    };

    fetchSelectedWork();
  }, [workId]); // Ensure this effect runs only once on mount

  useEffect(() => {
    let interval;
    if (selectedWork && selectedWork.laptopViewImages.length > 0) {
      interval = setInterval(() => {
        setCurrentLaptopImageIndex(
          (prevIndex) => (prevIndex + 1) % selectedWork.laptopViewImages.length
        );
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedWork]); // Only re-run when selectedWork changes

  if (!selectedWork) return <div>Loading...</div>;

  const handleButtonClick = () => {
    if (selectedWork.websiteUrl) {
      let url = selectedWork.websiteUrl;
      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
      }
      window.open(url, "_blank");
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
    <div className="relative flex flex-col lg:flex-row gap-5 lg:justify-between items-center min-h-screen p-4 md:p-10 bg-white dark:bg-gray-900">
      {/* Background Image */}

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

      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div> */}

      <div className="flex flex-col mt-[3rem] md:mt-0 lg:flex-1 mb-6 md:mb-0 relative z-10">
        <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold mb-4 text-black dark:text-white">
          {selectedWork.title}
        </p>
        <p className="text-base md:text-lg mb-6 text-[#999999]">
          {selectedWork.description}
        </p>
        <button
          onClick={handleButtonClick}
          className="laptop-btn text-xl bg-transparent text-black dark:text-white py-2 px-1 border border-black dark:border-white hover:border-none hover:text-white rounded-full w-48 dark:hover:text-white"
        >
          <span>Visit Project</span>
        </button>
      </div>

      {selectedWork.laptopViewImages.length > 0 && (
        <div className="flex justify-center w-[100%]  lg:flex-1 items-center  relative">
          <animated.img
            src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
            alt={`laptop-view-${currentLaptopImageIndex}`}
            className={`w-[100%] max-w-full h-auto ${
              selectedWork.title === "Adiray Global"
                ? "md:aspect-[22/11]"
                : "md:aspect-[16/10]"
            } object-cover  md:max-w-[900px]`}
            // className=`{w-[100%] max-w-full h-auto md:aspect-[22/11] ${selectedWork.laptopViewImages[currentLaptopImageIndex]==0 ?"md:aspect-[22/11]":"md:aspect-[16/11]"} object-cover bg-red-400  md:max-w-[900px]}`
            style={laptopImageSpring}
          />
          {/* <animated.img
            src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
            alt={`laptop-view-${currentLaptopImageIndex}`}
            className="w-full max-w-[900px] object-cover"
            style={laptopImageSpring}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Laptop;

// import React, { useContext, useEffect, useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { FeaturedWorkContext } from "../contextApi/FeaturedContext";
// import '../css/brandview.css'

// const Laptop = () => {
//   const { selectedWork } = useContext(FeaturedWorkContext);

//   const [currentLaptopImageIndex, setCurrentLaptopImageIndex] = useState(0);

//   const laptopImageSpring = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     reset: true,
//   });

//   // Handle laptop view images cycling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (selectedWork?.laptopViewImages.length) {
//         setCurrentLaptopImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.laptopViewImages.length);
//       }
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [selectedWork?.laptopViewImages.length]);

//   if (!selectedWork) return <div>Loading...</div>;

//   const handleButtonClick = () => {
//     if (selectedWork.websiteUrl) {
//       // Make sure the URL starts with 'http://' or 'https://'
//       let url = selectedWork.websiteUrl;
//       if (!/^https?:\/\//i.test(url)) {
//         url = `https://${url}`;
//       }

//       // Open the URL in a new tab
//       window.open(url, '_blank');
//     }
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-center sm:justify-between items-center min-h-screen p-4 md:p-10 bg-gray-900 text-white">
//       {/* Background Image */}

//       {/* Circles in Background */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="laptop-circle circle-1"></div>
//         <div className="laptop-circle circle-2"></div>
//         <div className="laptop-circle circle-3"></div>
//         <div className="laptop-circle circle-4"></div>
//         <div className="laptop-circle circle-5"></div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col md:w-1/3 md:pr-8 mb-6 md:mb-0 relative z-10">
//         <h1 className="text-5xl text-center md:text-5xl md:w-[20rem] lg:text-6xl font-bold mb-4 lg:w-96 ">
//           {selectedWork.title}
//         </h1>
//         <p className="text-sm md:text-sm mb-6 text-[#999999] md:text-rap md:ml-3 md:w-[18rem] lg:text-xl lg:w-[24rem]  text-center">
//           {selectedWork.description}
//         </p>
//         <button
//           onClick={handleButtonClick}
//           className="laptop-btn text-sm bg-transparent border text-white  py-2 px-1 hover:border-none rounded-full mx-auto w-1/2 md:ml-[85px]"
//         >
//           <span>Visit Project</span>
//         </button>
//       </div>

//       {/* Laptop View Images */}
//       {selectedWork.laptopViewImages.length > 0 && (
//         <div className="flex justify-center items-center md:w-1/2 relative  ">
//           <animated.img
//             src={selectedWork.laptopViewImages[currentLaptopImageIndex]}
//             alt={`laptop-view-${currentLaptopImageIndex}`}
//             className="w-full max-w-[900px] object-cover"
//             style={laptopImageSpring}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Laptop;
