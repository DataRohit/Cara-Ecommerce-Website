import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogBanner1 from "../components/BlogBanner1";
import BlogContainer from "../components/BlogContainer";
import { getSession } from "next-auth/react";

const Blog = (props) => {
  return (
    <>
      <Header />
      <BlogBanner1 />
      <BlogContainer />
      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
