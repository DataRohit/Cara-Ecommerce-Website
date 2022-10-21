import { getSession } from "next-auth/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessSection from "../components/SuccessSection";

const Success = (props) => {
  return (
    <>
      <Header />
      <SuccessSection />
      <Footer />
    </>
  );
};

export default Success;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
