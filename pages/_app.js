import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <NextNProgress color="#6275D9" stopDelayMs={200} height={4} />

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
        </Provider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
