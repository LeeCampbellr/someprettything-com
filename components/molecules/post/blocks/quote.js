import React from "react"

import { Container } from "@atoms/layout"
import { Heading } from "@atoms/typography"

const Quote = ({ parts }) => {
  return (
    <Container mg containerMedium section id={parts.sectionId}>
      <Heading html="h2" level="h2">
        <em>"{parts.quote}"</em>
      </Heading>
    </Container>
  )
}

export default Quote
