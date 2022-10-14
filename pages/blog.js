import React from "react";
import Header from "../components/Header";

const Blog = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
