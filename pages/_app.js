import React from "react"

import GlobalStyle from "@utils/globals"
import "@utils/index.scss"

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
