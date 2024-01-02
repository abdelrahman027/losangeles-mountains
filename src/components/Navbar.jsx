/** @format */

import React from "react";
import LosAngeles from "./LosAngeles";

const Navbar = ({ textClasses, Classes, titled }) => {
  return (
    <div className={` z-10 flex items-center justify-between p-2 ${Classes}`}>
      <div className={`relative ${titled && "flex gap-1 items-center"}`}>
        <img src="/Logo.png" alt="logo" />
        {titled && (
          <div className="font-bold leading-[1rem]">
            <LosAngeles />
          </div>
        )}
      </div>
      <nav
        className={`flex gap-16 underline underline-offset-4 uppercase font-bold ${textClasses}`}
      >
        <a href="#history">01.history</a>
        <a href="#team">02.team</a>
      </nav>
    </div>
  );
};

export default Navbar;
