/** @format */

import LosAngeles from "./LosAngeles";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import React from "react";

const Header = () => {
  return (
    <main id="landing-header" className="h-screen relative">
      <Wrapper>
        <Navbar textClasses={"text-white"} />
        <div className="w-full flex mt-14 font-bold items-center justify-center text-6xl md:text-7xl lg:text-9xl">
          <LosAngeles />
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('piclanding.png')] opacity-30"></div>
      </Wrapper>
    </main>
  );
};

export default Header;
