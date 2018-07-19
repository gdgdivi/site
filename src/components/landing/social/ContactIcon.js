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
  transition-property: opacity, transform 0.5s;
  will-change: opacity, transform;
  :hover {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.86);
    transition: transform 0.5s;
  }

  :active {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transform: scale(0.71);
  }
`

export default function ContactIcon({ label, icon, url, color }) {
  return (
    <Wrapper
      aria-label={label}
      color={color}
      href={url}
      target="_blank"
      rel="noopener"
    >
      <i className={`fab ${icon}`} />
    </Wrapper>
  )
}
