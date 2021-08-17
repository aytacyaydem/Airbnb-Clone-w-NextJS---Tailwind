import { Header, Footer } from "./";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
}

export { Layout };
