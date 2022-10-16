import React from "react";

const Banner3 = () => {
  const banner = ({ bg, h2, h3 }) => {
    return (
      <div
        className={`banner-box flex flex-col justify-center items-start w-full lg:w-[32%] min-w-[30%] h-[30vh] bg-cover bg-left p-[20px] mb-[20px] shadow-product-sm hover:shadow-product-lg ${
          bg === 1 && "bg-home-banner-4"
        } ${bg === 2 && "bg-home-banner-5"} ${bg === 3 && "bg-home-banner-6"}`}
      >
        <h2 className="text-white text-2xl font-black py-2">{h2}</h2>
        <h3 className="font-extrabold text-base text-[#EC544E]">{h3}</h3>
      </div>
    );
  };

  return (
    <section
      id="banner3"
      className="flex justify-between flex-wrap px-5 md:px-[80px]"
    >
      {banner({
        bg: 1,
        h2: "SEASONAL SALE",
        h3: "Winter Collection - 50% OFF",
      })}
      {banner({
        bg: 2,
        h2: "NEW FOOTWEAR COLLECTION",
        h3: "Spring / Summer 2023",
      })}
      {banner({
        bg: 3,
        h2: "T-SHIRTS",
        h3: "New Trendy Prints",
      })}
    </section>
  );
};

export default Banner3;
