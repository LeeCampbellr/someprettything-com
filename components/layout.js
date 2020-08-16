import React from "react";

function Layout({ children }) {
  return (
    <React.Fragment>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
}

export default Layout;
