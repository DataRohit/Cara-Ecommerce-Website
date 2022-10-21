import React from "react";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CartSection = () => {
  const items = useSelector(selectItems);

  const dispatch = useDispatch();

  const CartProduct = ({ imgPath, brand, productTitle, price, id }) => {
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

    const removeItemToBasket = () => {
      dispatch(removeFromBasket({ id }));
    };

    return (
      <tr>
        <td className="text-center pt-[15px]">
          <FaTimesCircle
            className="cursor-pointer mx-auto text-red-400"
            onClick={removeItemToBasket}
          />
        </td>
        <td className="text-center pt-[15px]">
          <FaPlusCircle
            className="cursor-pointer mx-auto text-blue-400"
            onClick={addItemToBasket}
          />
        </td>
        <td className="text-center pt-[15px]">
          <img src={imgPath} alt="product" className="w-[70px] mx-auto" />
        </td>
        <td className="text-center pt-[15px]">
          {brand} - {productTitle}
        </td>
        <td className="text-center pt-[15px]">₹{price}</td>
      </tr>
    );
  };

  return (
    <section it="cart" className="p-10 lg:section-p1 overflow-x-auto">
      {items.length === 0 ? (
        <h3 className="font-semibold text-xl">You Basket is empty!</h3>
      ) : (
        <table
          width={"100%"}
          className="w-full border-collapse table-fixed whitespace-nowrap text-gray-600"
        >
          <thead className="border-[1px] border-solid border-[#E2E9E1] border-l-0 border-r-0">
            <tr className="font-bold text-base">
              <td className="w-[100px] text-center py-4">REMOVE</td>
              <td className="w-[100px] text-center py-4">ADD</td>
              <td className="w-[150px] text-center py-4">IMAGE</td>
              <td className="w-[300px] text-center py-4">PRODUCT</td>
              <td className="w-[150px] text-center py-4">PRICE</td>
            </tr>
          </thead>
          <tbody>
            {items.map(({ imgPath, brand, productTitle, price, id }) => (
              <CartProduct
                imgPath={imgPath}
                brand={brand}
                productTitle={productTitle}
                price={price}
                id={id}
                key={id}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CartSection;
