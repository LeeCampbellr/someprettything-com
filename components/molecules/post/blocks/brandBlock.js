import React from "react"
import { Section, Container } from "@atoms/layout"

const BrandBlock = ({ parts }) => {
  return (
    <Section>
      <Container
        mg
        containerLarge
        grid
        gridFour
        align={parts.alignment}
        id={parts.sectionId}
      >
        {parts.brand.map((node, index) => (
          <a href={node.linkUrl}>
            <img src={node.image[0].url} />
          </a>
        ))}
      </Container>
    </Section>
  )
}

export default BrandBlock
