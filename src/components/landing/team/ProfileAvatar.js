import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  height: ${({ size }) => `${size}rem`};
  margin-right: ${({ margin }) => `${margin}rem`};
  width: ${({ size }) => `${size}rem`};
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`

export default function ProfileAvatar({ imageUrl, size = 5, margin = 1 }) {
  imageUrl = withPrefix(imageUrl);

  return (
    <Wrapper size={size} margin={margin}>
      <Avatar
        size={size}
        src={imageUrl || ""}
        alt="Avatar image" />
    </Wrapper>
  )
}
