import React from "react";
import Head from 'next/head';

import Navigation from "@organisms/navigation"
import Footer from "@organisms/footer"

function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="/static/iframeresizer.js"></script>
      </Head>
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
