import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color="#088178" stopDelayMs={200} height={4} />

      <Head>
        <title>Cara Ecommerce</title>
        <meta
          name="description"
          content="Cara Ecommerce Website using NextJS"
        />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
