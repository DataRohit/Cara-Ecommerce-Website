import React from "react";
import Header from "../components/Header";

const About = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default About;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
