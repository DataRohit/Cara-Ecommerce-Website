import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Product2 = () => {
  const product = ({
    imgPath = "products/f1.jpg",
    brand = "adidas",
    productTitle = "Cartoon Astronaut T-Shirts",
    price = "₹3499",
  }) => {
    return (
      <div className="pro w-full md:w-[23%] min-w-[250px] py-[10px] px-[12px] border-[1px] border-[#CCE7D0] rounded-3xl cursor-pointer shadow-product-sm m-[15px] lg:my-[15px] lg:mx-0 hover:shadow-product-lg transition delay-[0.01s] ease relative">
        <img src={imgPath} alt="product" className="w-full rounded-[20px]" />
        <div className="des text-start py-[10px]">
          <span className="text-[#606063] text-sm font-medium">{brand}</span>
          <h5 className="pt-[7px] text-[#1A1A1A] text-base font-semibold">
            {productTitle}
          </h5>
          <div className="star flex items-center justify-start">
            {[1, 2, 3, 4, 5].map((key, item) => (
              <StarIcon className="h-5 w-5 text-[#FFA41C]" key={key} />
            ))}
          </div>
          <h4 className="pt-[7px] text-lg font-semibold text-[#088178]">
            {price}
          </h4>
        </div>
        <Link href="#">
          <a className="absolute w-10 h-10 leading-[40px] rounded-[50px] bg-[#E8F6EA] font-medium text-[#088178] border-[1px] border-[#CCE7D0] bottom-[20px] right-[10px] flex items-center justify-center">
            <ShoppingCartIcon className="w-6 h-6" />
          </a>
        </Link>
      </div>
    );
  };

  return (
    <section id="product2" className="p-5 md:section-p1 text-center">
      <h2 className="font-bold">New Arrivals</h2>
      <p className="font-medium text-lg">Summer Collection New Modern Design</p>

      <div className="pro-container flex justify-center lg:justify-between pt-[20px] flex-wrap">
        {product({ imgPath: "/products/n1.jpg" })}
        {product({ imgPath: "/products/n2.jpg" })}
        {product({ imgPath: "/products/n3.jpg" })}
        {product({ imgPath: "/products/n4.jpg" })}

        {product({ imgPath: "/products/n5.jpg" })}
        {product({ imgPath: "/products/n6.jpg" })}
        {product({ imgPath: "/products/n7.jpg" })}
        {product({ imgPath: "/products/n8.jpg" })}
      </div>
    </section>
  );
};

export default Product2;
