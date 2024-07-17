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

const Circles = () => {
  useEffect(() => {
    document.querySelectorAll(".circle").forEach((circle, index) => {
      circle.addEventListener("mouseover", () => handleHover(index));
      circle.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      document.querySelectorAll(".circle").forEach((circle) => {
        circle.removeEventListener("mouseover", handleHover);
        circle.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div className="relative circles w-[100%] md:w-[70%] h-[100%]">
      <div className="circle circle1 bg-[#04ABE2]" />
      <div className="circle circle2 bg-[#04ABE2]" />
      <div className="circle circle3 bg-[#04ABE2]" />
      <div className="circle circle4 bg-[#04ABE2]" />
      <div className="circle circle5 bg-[#04ABE2]" />
    </div>
  );
};

export default Circles;
