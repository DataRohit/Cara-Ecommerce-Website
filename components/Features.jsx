import React from "react";

const Features = () => {
  const feature = ({ imgPath, content, bg_color }) => {
    return (
      <div className="w-[155px] md:w-[180px] text-center py-[25px] px-[15px] border-[1px] border-[#CCE7D0] shadow-feature-lg rounded-md mb-4 md:m-4 lg:m-0 hover:shadow-feature-sm">
        <img src={imgPath} alt="feature" className="w-full mb-3" />
        <h6
          className={`pt-[9px] pr-2 pb-[6px] pl-2 leading-[1] rounded text-[#6275D9] inline-block ${bg_color}`}
        >
          {content}
        </h6>
      </div>
    );
  };

  return (
    <section
      id="features"
      className="p-5 md:p-10 lg:section-p1 flex items-center justify-between md:justify-center lg:justify-between flex-wrap"
    >
      {feature({
        imgPath: "/features/f1.png",
        content: "Online Order",
        bg_color: "bg-[#FDDDE4]",
      })}
      {feature({
        imgPath: "/features/f2.png",
        content: "Free Shipping",
        bg_color: "bg-[#CDEBBC]",
      })}
      {feature({
        imgPath: "/features/f3.png",
        content: "Save Money",
        bg_color: "bg-[#D1E8F2]",
      })}
      {feature({
        imgPath: "/features/f4.png",
        content: "Promotions",
        bg_color: "bg-[#CDD4F8]",
      })}
      {feature({
        imgPath: "/features/f5.png",
        content: "Happy Sell",
        bg_color: "bg-[#F6DBF6]",
      })}
      {feature({
        imgPath: "/features/f6.png",
        content: "F24/7 Support",
        bg_color: "bg-[#FFF2E5]",
      })}
    </section>
  );
};

export default Features;
