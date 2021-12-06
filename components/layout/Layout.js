import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "Best Holiday Hotels" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width = device-width"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
