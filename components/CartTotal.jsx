import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession, signIn } from "next-auth/react";

const CartTotal = () => {
  const items = useSelector(selectItems);
  const itemsTotal = useSelector(selectTotal);

  const { data: session } = useSession();

  return (
    <section id="cart-total" className="p-10 md:section-p1 w-full">
      {items.length !== 0 && (
        <div className="w-full md:w-2/3 lg:w-1/2 mb-8 border-[1px] border-solid border-[#E2E9E1] p-8">
          <h3 className="font-bold text-lg pb-4">Cart Total</h3>
          <table className="border-collapse w-full mb-5">
            <tbody>
              <tr>
                <td>Cart Items</td>
                <td>{items.length}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>₹{itemsTotal}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          {!session ? (
            <button
              className="text-sm font-semibold bg-[#6275D9] text-[#FFF] py-3 px-5 rounded-md"
              onClick={signIn}
            >
              SignIn to Checkout
            </button>
          ) : (
            <button className="text-sm font-semibold bg-[#088178] text-[#FFF] py-3 px-5 rounded-md">
              Proceed to Checkout
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default CartTotal;
