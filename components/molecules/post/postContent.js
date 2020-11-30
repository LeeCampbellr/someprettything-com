import React from "react"

import { fluidSize } from "@utils/fluid"

// Post Content Block Components
import styled from "styled-components"
import brandBlock from "@postBlocks/brandBlock"
import contentCenter from "@postBlocks/contentCenter"
import contentIntroIndex from "@postBlocks/contentIntroIndex"
import contentIntroShop from "@postBlocks/contentIntroShop"
import contentIntroSponsored from "@postBlocks/contentIntroSponsored"
import contentSplit from "@postBlocks/contentSplit"
import contentSplitImage from "@postBlocks/contentSplitImage"
import image from "@postBlocks/image"
import imageGallery from "@postBlocks/imageGallery"
import imageSplit from "@postBlocks/imageSplit"
import quote from "@postBlocks/quote"
import widget from "@postBlocks/widget"

const PostContent = ({ postBlocks }) => {
  const { postContent } = postBlocks
  const components = {
    brandBlock,
    contentCenter,
    contentIntroIndex,
    contentIntroShop,
    contentIntroSponsored,
    contentSplit,
    contentSplitImage,
    image,
    imageGallery,
    imageSplit,
    quote,
    widget,
  }

  return (
    <Content>
      {postContent.map((block, index) => {
        let BlockComponent = components[block.typeHandle]
        return <BlockComponent parts={block} key={index} />
      })}
    </Content>
  )
}

export default PostContent


const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: hidden;
  position: relative;

  p,
  ul,
  ol {
    ${fluidSize(2, 16, 18, "vw", "font-size") +
      fluidSize(3, 16, 24, "vw", "margin-bottom")}
  }

  ul,
  ol {
    padding-left: 1.5rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    ${fluidSize(3, 8, 12, "vw", "margin-bottom")}
  }

  hr {
    border: none;
    border-bottom: var(--borderBase);
    margin: var(--spacingSmall) auto;
    width: 50%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--headingColor);
    font-family: var(--headingFamily);
    font-weight: var(--headingWeight);
    line-height: 100%;
    text-decoration: none;
    text-transform: var(--headingTransform);
    transition: var(--transitionBase);
  }

  h1 {
    ${fluidSize(5, 40, 80, "vw", "font-size") +
      fluidSize(4, 16, 32, "vw", "margin-bottom") +
      fluidSize(4, 24, 40, "vw", "margin-top")}
  }
  h2 {
    ${fluidSize(3.5, 32, 48, "vw", "font-size") +
      fluidSize(4, 16, 24, "vw", "margin-bottom") +
      fluidSize(4, 24, 32, "vw", "margin-top")}
  }
  h3 {
    ${fluidSize(3, 24, 32, "vw", "font-size") +
      fluidSize(4, 16, 24, "vw", "margin-bottom") +
      fluidSize(4, 24, 32, "vw", "margin-top")}
  }
  h4 {
    ${fluidSize(2.5, 20, 24, "vw", "font-size") +
      fluidSize(4, 12, 16, "vw", "margin-bottom") +
      fluidSize(4, 16, 24, "vw", "margin-top")}
  }
  h5 {
    ${fluidSize(2, 18, 20, "vw", "font-size") +
      fluidSize(4, 8, 12, "vw", "margin-bottom") +
      fluidSize(4, 12, 16, "vw", "margin-top")}
  }
`
