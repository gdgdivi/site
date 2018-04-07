import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

export default function Logo({ width, height }) {
  const logo = withPrefix('static/images/gdgdivi-logo.png');
  const logo2x = withPrefix('static/images/gdgdivi-logo@2x.png');
  const logo3x = withPrefix('static/images/gdgdivi-logo@3x.png');
  const logo4x = withPrefix('static/images/gdgdivi-logo@4x.png');

  return (
    <img
      src={logo}
      srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x, ${logo4x} 4x`}
      alt="Logo of GDG Divinópolis" width={width} height={height} />
  )
}
