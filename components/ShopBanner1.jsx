import React from "react";
import Typewriter from "typewriter-effect";

const ShopBanner1 = () => {
  return (
    <section
      id="page-header"
      className="bg-shop-page-header w-full h-[40vh] bg-cover flex justify-center text-center flex-col p-[14px]"
    >
      <h2 className="font-bold text-4xl md:text-6xl pb-[15px] text-white">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: ["#stayhome"],
          }}
        />
      </h2>
      <p className="text-base md:text-xl font-medium text-white">
        Save more with coupon codes & up to 80% off!
      </p>
    </section>
  );
};

export default ShopBanner1;
