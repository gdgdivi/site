import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  align-items: center;
  display: flex;
  font-size: 4rem;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  opacity: 0.5;
  transition-property: opacity, transform;
  will-change: opacity, transform;

  :hover {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.86);
  }

  :active {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.71);
  }
`

export default function ContactIcon({ icon, url, color }) {
  return (
    <Wrapper color={color} href={url} target="_blank">
      <i className={`fab ${icon}`}></i>
    </Wrapper>
  )
}
