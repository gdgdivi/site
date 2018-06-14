import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({ className: 'column is-one-third' })`
  text-align: center;
  padding:10px;
`

const Icon = styled.img`
  height: 5.5rem;
  width: 5.5rem;
  -webkit-transition: -webkit-transform 0.5s ease-in-out;
    -webkit-transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
  :hover{
    transform:scale(0.85);
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    -webkit-transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
  }
`

const Headline = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  font-weight:400;
`

const Description = styled.p`
  font-weight: 300;
  text-align: left;
  font-size:15px;
  
`

const AboutItem = ({ item }) => (
  <Container>
    <Icon src={item.icon} alt={item.headline} />
    <Headline>{item.headline}</Headline>
    <Description>{item.description}.</Description>
  </Container>
)

export default AboutItem
