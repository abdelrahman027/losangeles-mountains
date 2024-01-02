/** @format */

import React from "react";

const MainHeading = ({ title, sub, classes, climb, spanClasses }) => {
  return (
    <div className="">
      <h2
        className={`relative ${
          climb && "flex items-center justify-center"
        } font-bold  ${classes}`}
      >
        <p className="text-2xl lg:text-9xl  text-black/50">{sub}</p>
        <span
          className={`absolute top-[0%] !text-[#414f6b] left-[10%] md:top-[40%] md:left-[8%] lg:left-[18%] text-2xl lg:text-4xl ${spanClasses}`}
        >
          {title}
        </span>
        {climb && (
          <p className="ml-24 sm:ml-28  text-sm md:text-base !text-[#414f6b]/80 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel at
            hic atque voluptatibus voluptas, alias a delectus animi non ut.
          </p>
        )}
      </h2>
    </div>
  );
};

export default MainHeading;
