import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  opacity: 0.5;
  transition-property: opacity, transform;
  width: 2rem;
  will-change: opacity, transform;

  :hover {
    color: ${({ color }) => `${color}`};
    opacity: 1;
    transition: color 0.1s;
  }

  :active {
    color: ${({ color }) => `${color}`};
    opacity: 1;
  }
`

export default function SocialIcon({ label, icon, url, color }) {
  return (
    <li>
      <Wrapper
        aria-label={label}
        color={color}
        href={url}
        target="_blank"
        rel="noopener"
      >
        <i className={`fab ${icon}`} />
      </Wrapper>
    </li>
  )
}
