import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner1 from "../components/ContactBanner1";
import ContactDetails from "../components/ContactDetails";
import { getSession } from "next-auth/react";

const Contact = (props) => {
  return (
    <>
      <Header />
      <ContactBanner1 />
      <ContactDetails />
      <Footer />
    </>
  );
};

export default Contact;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
