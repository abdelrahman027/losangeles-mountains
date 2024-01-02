/** @format */

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Corasol = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#414f6b]/90 ">
      <Splide options={{ rewind: true, perPage: 3, gap: 10 }}>
        <SplideSlide>
          <img src="cors1.png" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="cors2.png" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="cors1.png" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="cors2.png" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="cors1.png" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="cors2.png" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Corasol;
