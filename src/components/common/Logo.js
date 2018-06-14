import React from 'react'
import { withPrefix } from 'gatsby-link'

export default function Logo() {
  const logo = withPrefix('images/gdgdivi-logo.png')
  const logo2x = withPrefix('images/gdgdivi-logo@2x.png')
  const logo3x = withPrefix('images/gdgdivi-logo@3x.png')
  const logo4x = withPrefix('images/gdgdivi-logo@4x.png')

  return (
    <img
      src={logo}
      srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x, ${logo4x} 4x`}
      alt="Logo GDG Divinópolis"
      title="GDG Divinópolis"
      height="28"
      width="218"
    />
  )
}
