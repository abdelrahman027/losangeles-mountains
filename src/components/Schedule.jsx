/** @format */

import React, { useState } from "react";
import Wrapper from "./Wrapper";
import MainHeading from "./MainHeading";
import Tap from "./Tap";

const Schedule = () => {
  const [mountainToggle, setMountainToggle] = useState(false);

  return (
    <main id="team">
      <Wrapper classes={"p-8"}>
        <MainHeading climb={true} title={"CLIMB"} sub={"02. "} classes={""} />
      </Wrapper>
      <div className="w-full bg-[#414f6b]">
        <Wrapper classes={"flex gap-2 items-enter"}>
          <button
            onClick={() => setMountainToggle("mountain1")}
            className={` font-bold  hover:bg-[#b0b4be]  hover:text-[#414f6b] p-2 ${
              mountainToggle === "mountain1"
                ? "bg-[#b0b4be] text-[#414f6b] "
                : "text-[#b0b4be] bg-[#414f6b]"
            } `}
          >
            MOUNTAIN1
          </button>
          <button
            onClick={() => setMountainToggle("mountain2")}
            className={` font-bold  hover:bg-[#b0b4be]  hover:text-[#414f6b] p-2 ${
              mountainToggle === "mountain2"
                ? "bg-[#b0b4be] text-[#414f6b] "
                : "text-[#b0b4be] bg-[#414f6b]"
            } `}
          >
            MOUNTAIN2
          </button>
        </Wrapper>
      </div>
      <div className="transition-all">
        {mountainToggle ? (
          mountainToggle === "mountain1" ? (
            <div
              className={` transition-all
         bg-[url("/tap1.png")] 
         bg-cover w-full h-[calc(100vh-38px)]
          before:content-[""] before:absolute before:w-full before:h-[calc(100%-38px)] before:bg-black/10`}
            >
              <Tap date={"25 Nov 2016"} destination={"vestibulum vivierra"} />
            </div>
          ) : (
            <div
              className={`
        bg-[url("/tap2.png")] transition-all bg-cover w-full h-[calc(100vh-38px)] before:content-[""] before:absolute before:w-full before:h-[calc(100%-38px)] before:bg-black/10`}
            >
              <Tap date={"12 Dec 2016"} destination={"Lorem ipsum"} />
            </div>
          )
        ) : (
          <div className="w-full h-[0vh]"></div>
        )}
      </div>
    </main>
  );
};

export default Schedule;
