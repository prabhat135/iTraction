import React from "react";
import "../css/cards.css";
import { domainsData } from "../constants/domains";

const ExpandCards = () => {
  return (
    <div className="wrapper">
      <div className="container flex flex-col md:flex-row flex-wrap lg:flex-nowrap  space-y-3 md:space-y-0">
        {domainsData.map((item, index) => {
          return (
            <div
              key={index}
              className="card flex flex-col items-center justify-center transition-all duration-500 hover:items-start space-y-3 px-7"
            >
              <div className="image-container w-[70px] h-[70px] bg-white flex items-center justify-center rounded-full transition-all duration-500 hover:mr-4">
                <img src={item.img} alt="img" className="pr-1 select-none pointer-events-none" />
              </div>
              <div className="w-full px-6 text-center hover:text-left title-container">
                <h1 className="text-lg font-bold text-white">{item.title}</h1>
              </div>
              <div className="w-full flex flex-col space-y-1 text-left description-container text-white">
                <h1 className="text-lg font-bold text-white">{item.title}</h1>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
              <div className="w-full flex flex-col space-y-1 text-center text-white md:hidden">
                <p className="text-[1rem] font-medium">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandCards;
