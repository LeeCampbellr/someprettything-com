import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    font-size: 1rem;
    font-family: var(--paragraphFamily);
    font-weight: var(--paragraphWeight);
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "liga" on;
    text-rendering: optimizeLegibility;
    -moz-font-feature-settings: "liga" on;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--red100);
  }
  
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .tl-edges {
    overflow: initial;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }


  .line {
    height: auto;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 100vw;
    z-index: -1;
  }
  
  .line.-top {
    top: 5%;
  }
  .line.-bottom {
    bottom: 0%;
  }
  .line.-center {
    top: 50%;
    transform: translateY(-100%);
  }

`

export default GlobalStyle
