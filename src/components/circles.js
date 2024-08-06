import { useEffect } from "react";
import "../css/circles.css";

const handleHover = (index) => {
  document.querySelectorAll(".circle").forEach((circle, i) => {
    circle.classList.remove("hovered");
    circle.classList.remove("shift");
    if (i === index) {
      circle.classList.add("hovered");
    } else {
      circle.classList.add("shift");
    }
  });
};

const handleMouseOut = () => {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.classList.remove("hovered");
    circle.classList.remove("shift");
  });
};
const handleTouch = (index) => {
  document.querySelectorAll(".circle").forEach((circle, i) => {
    circle.classList.remove("hovered");
    circle.classList.remove("shift");
    if (i === index) {
      circle.classList.add("hovered");
    } else {
      circle.classList.add("shift");
    }
  });
};

const handleTouchEnd = () => {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.classList.remove("hovered");
    circle.classList.remove("shift");
  });
};

const Circles = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.addEventListener("mouseover", () => handleHover(index));
      circle.addEventListener("mouseout", handleMouseOut);
      circle.addEventListener("touchstart", () => handleTouch(index));
      circle.addEventListener("touchend", handleTouchEnd);
    });

    return () => {
      circles.forEach((circle,index) => {
        circle.removeEventListener("mouseover", () => handleHover(index));
        circle.removeEventListener("mouseout", handleMouseOut);
        circle.removeEventListener("touchstart", () => handleTouch(index));
        circle.removeEventListener("touchend", handleTouchEnd);
      });
    };
  }, []);

  return (
    <div className="circles w-[100%] md:w-[90%] h-full">
      <div className="circle circle1 bg-[#04ABE2]">
        <img
          src="../assets/circle_elearning.png"
          alt="circle-images"
          className=""
        />

      </div>
      <div className="circle circle2 bg-[#04ABE2]">
        <img src="../assets/circle_food.png" alt="circle-images" className="" />
      </div>
      <div className="circle circle3 bg-[#04ABE2]">
        <img
          src="../assets/circle_banking.png"
          alt="circle-images"
          className=""
        />
      </div>
      <div className="circle circle4 bg-[#04ABE2]">
        <img src="../assets/circle_hrms.png" alt="circle-images" className="" />
      </div>
      <div className="circle circle5 bg-[#04ABE2]">
        <img
          src="../assets/circle_app_dev.png"
          alt="circle-images"
          className=""
        />
      </div>
    </div>
  );
};

export default Circles;
