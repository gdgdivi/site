import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'




const Navbaritem = ({navitem}) =>(
  <Link className="navbar-item" to={navitem.url}>
    {navitem.name}
  </Link>
)
export default Navbaritem