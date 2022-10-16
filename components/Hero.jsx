import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-hero-bg h-[70vh] lg:h-[90vh] w-full py-0 px-[20px] md:px-[80px] lg:px-[90px] bg-hero-position-small md:bg-hero-position-medium lg:bg-hero-position-pc flex flex-col items-start bg-cover justify-center"
    >
      <h4 className="font-bold text-lg md:text-2xl pb-[15px]">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "Hard-to-resist Deals",
              "Best Quality Products",
              "Huge Discounts",
            ],
          }}
        />
      </h4>
      <h2 className="font-bold text-4xl md:text-6xl pb-[15px]">
        Super saving deals
      </h2>
      <h1 className="font-bold text-4xl md:text-6xl text-[#6275D9]">
        From all brands
      </h1>
      <p className="text-base md:text-xl font-medium">
        Save more with coupon codes & up to 80% off!
      </p>
      <button className="bg-hero-btn-bg bg-transparent text-[#6275D9] border-0 text-base pt-[12px] pr-[80px] pb-[14px] pl-[65px] bg-no-repeat cursor-pointer font-bold">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
