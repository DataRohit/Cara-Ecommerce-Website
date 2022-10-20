import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Cart = (props) => {
  const items = useSelector(selectItems);

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
