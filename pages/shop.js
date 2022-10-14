import React from "react";
import Header from "../components/Header";

const Shop = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Shop;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
