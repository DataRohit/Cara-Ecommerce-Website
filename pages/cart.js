import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CartBanner1 from "../components/CartBanner1";
import CartSection from "../components/CartSection";
import CartTotal from "../components/CartTotal";

const Cart = (props) => {
  return (
    <>
      <Header />
      <CartBanner1 />
      <CartSection />
      <CartTotal />
      <Footer />
    </>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
