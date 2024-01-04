/** @format */

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import cors1 from '../assets/cors1.png'
import cors2 from '../assets/cors2.png'

const Corasol = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#414f6b]/90 ">
      <Splide options={{ rewind: true, perPage: 3, gap: 10 }}>
        <SplideSlide>
          <img src={cors1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors2} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={cors2} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Corasol;
