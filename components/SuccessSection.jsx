import Link from "next/link";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const SuccessSection = () => {
  return (
    <section className="my-10 lg:my-5 p-5 lg:section-p1 flex items-center justify-center flex-col">
      <div className="flex items-center justify-between">
        <BsPatchCheckFill className="w-10 h-10 text-green-500 mr-5" />
        <h3 className="text-lg font-semibold md:text-2xl">
          Thank you! Your Order Has Been Confirmed!
        </h3>
      </div>
      <div className="text-base mt-5 w-full md:w-4/5">
        <p>
          Thank you for shopping with us. We will send you a confirmation email
          once your item has shipped. If you would like to check the status of
          your order(s) please feel free to contact us. Thank you again for
          shopping with us.
        </p>
      </div>
      <Link href="/orders">
        <button className="text-sm font-semibold bg-[#088178] text-[#FFF] py-3 px-5 rounded-md w-full md:w-2/5">
          View Orders
        </button>
      </Link>
    </section>
  );
};

export default SuccessSection;
