import Header from "../components/Header";

const Home = (props) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
