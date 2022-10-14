import React from "react";
import Header from "../components/Header";

const Cart = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
