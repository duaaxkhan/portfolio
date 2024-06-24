import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#000000]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#856776] text-[#c1c1c1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right md:text-4xl  sm:text-3xl font-bold text-[#fcc0c5]">
            <p>
              Hi. I'm Duaa Shahid, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="text-[#ffffff] md:text-3xl sm:text-3xl ">
            <p>
              I am passionate about building interactive front-ends which are captivating and responsive. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
