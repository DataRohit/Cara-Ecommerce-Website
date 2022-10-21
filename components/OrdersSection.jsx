import React from "react";
import { useSession } from "next-auth/react";
import moment from "moment";

const OrdersSection = ({ orders }) => {
  const { data: session } = useSession();

  const Order = ({
    order: { id, amount, amountShipping, items, timestamp, images },
  }) => {
    return (
      <div className="relative border-2 rounded-md">
        <div className="flex items-center space-x-5 p-5 bg-gray-100 text-gray-600 w-full">
          <div>
            <p className="font-bold text-xs">DATE</p>
            <p className="font-medium text-xs">
              {moment.unix(timestamp).format("DD MMM YYYY")}
            </p>
          </div>
          <div>
            <p className="font-bold text-xs">TOTAL</p>
            <p className="font-medium text-xs">
              {" "}
              ₹{amount} - Next Day Delivery ₹{amountShipping}
            </p>
          </div>
          <p className="font-bold text-sm sm:text-base whitespace-nowrap self-end flex-1 text-right text-[#6275D9]">
            {items.length} items
          </p>
          <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap font-medium">
            ORDER # {id}
          </p>
        </div>
        <div className="px-5 py-3 sm:px-10">
          <div className="flex space-x-3 overflow-x-auto">
            {images.map((image, i) => (
              <img
                src={image}
                alt="product"
                key={i}
                className="h-20 object-contain sm:h-32 rounded-md border"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="p-5 md:section-p1">
      <h2 className="text-2xl font-semibold mb-5 border-b-2 pb-1 border-[#6275D9]">
        Your Orders
      </h2>
      <h3 className="text-base font-medium">
        {session
          ? `${orders.length} Orders`
          : "Please sign in to see your orders"}
      </h3>
      <div className="mt-5 space-y-4 overflow-x-auto">
        {session &&
          orders?.map((order) => <Order order={order} key={order.id} />)}
      </div>
    </section>
  );
};

export default OrdersSection;
