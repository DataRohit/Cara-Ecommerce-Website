import React from "react";

const Banner2 = () => {
  const banner = ({ bg, h4, h2, span, a }) => {
    return (
      <div
        className={`banner-box section-m1 flex flex-col justify-center items-start min-w-full lg:min-w-[672px] h-[30vh] lg:h-[50vh] bg-cover bg-left p-[30px] shadow-product-sm hover:shadow-product-lg ${
          bg === 1 && "bg-home-banner-2"
        } ${bg === 2 && "bg-home-banner-3"}`}
      >
        <h4 className="text-white text-xl md:text-2xl font-light">{h4}</h4>
        <h2 className="text-white text-2xl md:text-3xl font-extrabold py-2">
          {h2}
        </h2>
        <span className="text-white text-sm md:text-base font-semibold pb-[15px]">
          {span}
        </span>
        <a
          href="/shop"
          className="text-sm font-semibold py-[11px] px-[18px] text-white bg-transparent cursor-pointer border-2 border-white border-solid outline-none transition delay-[0.1s] ease-out hover:bg-[#088178] hover:border-2 hover:border-solid hover:border-[#088178]"
        >
          {a}
        </a>
      </div>
    );
  };

  return (
    <section
      id="banner2"
      className="p-5 md:section-p1 flex justify-center 2xl:justify-between flex-wrap"
    >
      {banner({
        bg: 1,
        h4: "crazy deals",
        h2: "buy 1 get 1 free",
        span: "The best classic dress is on sale at cara",
        a: "Learn More",
      })}
      {banner({
        bg: 2,
        h4: "spring / summer",
        h2: "upcomming season",
        span: "THe best classic dress is on sale at cara",
        a: "Collection",
      })}
    </section>
  );
};

export default Banner2;
