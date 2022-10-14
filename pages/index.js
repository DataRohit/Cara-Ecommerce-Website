import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = (props) => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
