import Banner1 from "../components/Banner1";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Product1 />
      <Banner1 />
      <Product2 />
      <Banner2 />
      <Banner3 />
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
