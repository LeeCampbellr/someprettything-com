import React from "react";

import Navigation from "@organisms/navigation"
import Footer from "@organisms/footer"

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
