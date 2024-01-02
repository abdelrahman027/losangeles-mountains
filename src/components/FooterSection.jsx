/** @format */

import React from "react";
import Wrapper from "./Wrapper";

const FooterSection = () => {
  return (
    <footer className="bg-[#414f6b] p-2 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#414f6b]/50"></div>
      <Wrapper classes={"flex items-center justify-between"}>
        <div className="flex items-center gap-1">
          <img src="./Logo.png" alt="logo" />
          <h1 className="uppercase text-[#b0b4be] leading-[1rem] font-bold">
            losangeles <br />
            mountains
          </h1>
        </div>

        <p className="text-[#b0b4be]">COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
      </Wrapper>
    </footer>
  );
};

export default FooterSection;
