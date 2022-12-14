import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product2 = ({ shop = false }) => {
  const dispatch = useDispatch();

  const product = ({
    imgPath = "products/f1.jpg",
    brand = "adidas",
    productTitle = "Cartoon Astronaut T-Shirts",
    price = 3499,
    id,
  }) => {
    const addItemToBasket = () => {
      const product = {
        imgPath,
        brand,
        productTitle,
        price,
        id,
      };

      dispatch(addToBasket(product));
    };

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
            ₹{price}
          </h4>
        </div>
        <button
          className="absolute w-10 h-10 leading-[40px] rounded-[50px] bg-[#E8F6EA] font-medium text-[#088178] border-[1px] border-[#CCE7D0] bottom-[20px] right-[10px] flex items-center justify-center"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
      </div>
    );
  };

  return (
    <section
      id="product2"
      className={`text-center ${
        shop ? "py-0 px-5 md:px-[80px] md:py-0" : "p-5 md:section-p1"
      }`}
    >
      <h2 className={`font-bold ${!shop ? "block" : "hidden"}`}>
        New Arrivals
      </h2>
      <p className={`font-medium text-lg ${!shop ? "block" : "hidden"}`}>
        Summer Collection New Modern Design
      </p>

      <div className="pro-container flex justify-center lg:justify-between pt-[20px] flex-wrap">
        {product({
          imgPath: "https://i.postimg.cc/nrrZsnDk/n1.jpg",
          id: 9,
        })}
        {product({
          imgPath: "https://i.postimg.cc/j5gYYBFJ/n2.jpg",
          id: 10,
        })}
        {product({
          imgPath: "https://i.postimg.cc/jjTbHHfC/n3.jpg",
          id: 11,
        })}
        {product({
          imgPath: "https://i.postimg.cc/yNTzvDhj/n4.jpg",
          id: 12,
        })}

        {product({
          imgPath: "https://i.postimg.cc/Pxrncd2j/n5.jpg",
          id: 13,
        })}
        {product({
          imgPath: "https://i.postimg.cc/HnrDY3qv/n6.jpg",
          id: 14,
        })}
        {product({
          imgPath: "https://i.postimg.cc/6qFsynwW/n7.jpg",
          id: 15,
        })}
        {product({
          imgPath: "https://i.postimg.cc/440RLkcD/n8.jpg",
          id: 16,
        })}
      </div>
    </section>
  );
};

export default Product2;
