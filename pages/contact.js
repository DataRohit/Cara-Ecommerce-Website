import React from "react";
import Header from "../components/Header";

const Contact = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Contact;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
