import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios";

const Portfolio = () => {
  const [featuredWork, setFeaturedWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate('');

  useEffect(() => {
    const fetchFeaturedWork = async () => {
      try {
        const response = await axiosInstance.get("/featured-work");  // Adjust the endpoint as needed
        setFeaturedWork(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedWork();
  }, []);

  const handleImageClick = (work) => {
    if (work.imageType === "laptopMobileView") {
      navigate(`/mobile-features/${work._id}`);
    } else {
      navigate(`/brand-features/${work._id}`);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div id="portfolio" className="service flex flex-col justify-center items-center p-8 dark:bg-white  ">
      <div className="service-heading text-center items-center">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-white dark:text-black font-medium pb-8 leading-tight">
          featured
          <span className="text-[#04ABE2]"> works</span>
        </h1>
      </div>

      <div className="service-content text-center items-center px-0 sm:px-20 md:px-28 lg:px-40 pt-3 pb-14">
        <p className="flex flex-wrap text-lg md:text-xl lg:text-2xl text-[#999999]">
          look at how businesses have leveraged our services to excel at what
          they do. We are excited to add you to our list of happy clients.
        </p>
      </div>

      <div className="service-card flex flex-wrap justify-center gap-10 pt-10 pb-5 m-auto">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-10 pt-10 pb-5 m-auto">
            <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[22%] sprinkle-animation">
              <div className="w-[250px] h-[250px] bg-gray-300 rounded-lg animate-pulse"></div>
              <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9 text-center animate-pulse">
                Loading...
              </h2>
              <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full opacity-50 cursor-not-allowed">
                <span>view case study</span>
                <img
                  src="../assets/arrow_diag.png"
                  alt=""
                  className="w-3 h-3"
                />
              </button>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[22%] sprinkle-animation">
              <div className="w-[250px] h-[250px] bg-gray-300 rounded-lg animate-pulse"></div>
              <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9 text-center animate-pulse">
                Loading...
              </h2>
              <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full opacity-50 cursor-not-allowed">
                <span>view case study</span>
                <img
                  src="../assets/arrow_diag.png"
                  alt=""
                  className="w-3 h-3"
                />
              </button>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[22%] sprinkle-animation">
              <div className="w-[250px] h-[250px] bg-gray-300 rounded-lg animate-pulse"></div>
              <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9 text-center animate-pulse">
                Loading...
              </h2>
              <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full opacity-50 cursor-not-allowed">
                <span>view case study</span>
                <img
                  src="../assets/arrow_diag.png"
                  alt=""
                  className="w-3 h-3"
                />
              </button>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[250px] sm:w-[400px] lg:w-[33%] xl:w-[22%] sprinkle-animation">
              <div className="w-[250px] h-[250px] bg-gray-300 rounded-lg animate-pulse"></div>
              <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9 text-center animate-pulse">
                Loading...
              </h2>
              <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full opacity-50 cursor-not-allowed">
                <span>view case study</span>
                <img
                  src="../assets/arrow_diag.png"
                  alt=""
                  className="w-3 h-3"
                />
              </button>
            </div>
          </div>

        ) : featuredWork.map(work => (
          <div
            key={work._id}
            className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] max-w-[90%] lg:w-[33%] xl:w-[20%] hover:border hover:border-[#04ABE2] hover:bg-none dark:hover:bg-[#04ABE2]"

          >
            <img src={work.image} alt={work.metadataimage} className="w-[250px] h-[250px] rounded-lg object-hidden" />
            <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9 text-center h-[30%]">
              {work.metadataimage}
            </h2>

            <button onClick={() => handleImageClick(work)} className="featured-btn absolute bottom-0 flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full dark:hover:border dark:hover:border-black">
              <span>view case study</span>
              <img
                src="../assets/arrow_diag.png"
                alt=""
                className="w-3 h-3"
              />
            </button>
          </div>
        ))}
      </div>

      {/* <div className="hidden xl:flex gap-6 cursor-pointer py-14">
        <img src="../assets/arrow_left.png" alt="arrow-left" className="dark:hidden" />
        <img src="../assets/arrow_right.png" alt="arrow-right" className="dark:hidden" />
        <img src="../assets/arrow_left_dark.png" alt="arrow-left" className="hidden dark:block" />
        <img src="../assets/arrow_right_dark.png" alt="arrow-right" className="hidden dark:block" />
      </div> */}
    </div>
  );
};

export default Portfolio;
