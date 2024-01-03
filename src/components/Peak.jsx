/** @format */


import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Corasol from "./Corasol";

const Peak = () => {
  return (
    <main id="history">
      <Wrapper classes={""}>
        <Navbar titled={true} textClasses={"text-[#414f6b]"} />
      </Wrapper>
      <div className="  bg-[url('peak2.png')] h-screen bg-cover saturate-50 -z-10">
        <Wrapper classes={"h-full"}>
          <div className="p-16">
            <div>
              <MainHeading title={"HISTORY"} sub={"01. "} spanClasses={""} />
              <p className="ml-28 mt-2 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                vel at hic atque voluptatibus voluptas, alias a delectus animi
                non ut facilis sapiente quae reprehenderit accusantium
                recusandae distinctio harum aspernatur!
              </p>
            </div>
          </div>
        </Wrapper>
        <Corasol />
      </div>
    </main>
  );
};

export default Peak;
