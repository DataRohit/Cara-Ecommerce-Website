import React from "react";

const Banner1 = () => {
  return (
    <section
      id="banner1"
      className="section-m1 px-2 flex flex-col justify-center items-center text-center bg-home-banner-1 w-full h-[40vh] md:h-[20vh] lg:h-[40vh] bg-cover"
    >
      <h4 className="font-bold text-white text-lg ">More Fashion Items</h4>
      <h2 className="font-bold text-white text-2xl py-[10px]">
        Up to <span className="text-[#FFA41C]">70% off</span> - All t-Shirts &
        Accessories
      </h2>
      <a
        href="/shop"
        className="text-sm font-semibold py-[15px] px-[30px] text-black bg-white rounded cursor-pointer border-0 outline-0 transition delay-[0.1s] ease-out hover:bg-[#088178] hover:text-white"
      >
        Explore More
      </a>
    </section>
  );
};

export default Banner1;
