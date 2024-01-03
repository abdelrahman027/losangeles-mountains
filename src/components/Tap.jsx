/** @format */

import React from "react";

const Tap = ({ date, destination }) => {
  return (
    <div className="p-6 bg-white/70 rounded-md md:translate-x-24 translate-x-[3rem] translate-y-32 max-w-xs z-30">
      <h2 className="text-[#414f6b] text-2xl font-bold mb-4 ">SCHEDULE</h2>
      <div>
        <div className="flex items-center justify-between">
          <p>{date}</p>
          <h3>{destination}</h3>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>{date}</p>
          <h3>{destination}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p>{date}</p>
          <h3>{destination}</h3>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>{date}</p>
          <h3>{destination}</h3>
        </div>
      </div>
    </div>
  );
};

export default Tap;
