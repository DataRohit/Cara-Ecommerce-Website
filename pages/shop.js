import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
import ShopBanner1 from "../components/ShopBanner1";

const Shop = (props) => {
  return (
    <>
      <Header />
      <ShopBanner1 />
      <Product1 shop={true} />
      <Product2 shop={true} />
      <Footer />
    </>
  );
};

export default Shop;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
