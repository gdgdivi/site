import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({ className: 'column is-one-third' })`
  text-align: center;
`

const Icon = styled.img`
  height: 5.5rem;
  width: 5.5rem;
`

const Headline = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-weight: 300;
  text-align: left;
`

const AboutItem = ({ item }) => (
  <Container>
    <Icon src={item.icon} />
    <Headline>{item.headline}</Headline>
    <Description>{item.description}.</Description>
  </Container>
)

export default AboutItem
