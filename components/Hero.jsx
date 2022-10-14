import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-hero-bg h-[90vh] w-full bg-hero-position py-0 px-[90px] flex flex-col items-start bg-cover justify-center"
    >
      <h4 className="font-bold text-2xl pb-[15px]">Trade-in-Offer</h4>
      <h2 className="font-bold text-6xl pb-[15px]">Super value deals</h2>
      <h1 className="font-bold text-6xl text-[#6275D9]">On all products</h1>
      <p className="text-xl font-medium">
        Save more with coupons & up to 70% off!
      </p>
      <button className="bg-hero-btn-bg bg-transparent text-[#6275D9] border-0 text-base pt-[12px] pr-[80px] pb-[14px] pl-[65px] bg-no-repeat cursor-pointer font-bold">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
