import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = (props) => {
  return (
    <>
      <Header />
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
