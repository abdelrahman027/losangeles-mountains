/** @format */

import LosAngeles from "./LosAngeles";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";


const Header = () => {
  return (
    <main id="landing-header" className="h-screen relative">
      <Wrapper>
        <Navbar textClasses={"text-white"} />
        <div className="w-full flex mt-14 font-bold items-center justify-center text-6xl md:text-7xl lg:text-9xl">
          <LosAngeles />
        </div>
      </Wrapper>
    </main>
  );
};

export default Header;
