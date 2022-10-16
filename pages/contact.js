import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = (props) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Contact;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
