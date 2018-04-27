import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from './../../common/Logo'
import Navbaritem from './navbaritem.js'
import navgation from './navgation.json'

const Nav = styled.nav.attrs({ className: 'navbar' })`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  min-height: 5rem;
`

const Burger = styled.div.attrs({ className: 'navbar-burger burger' })`
  min-height: 5rem;
`

const Brand = () => (
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <Logo />
    </Link>
    <Burger data-target="nav-menu">
      <span />
      <span />
      <span />
    </Burger>
  </div>
)

const Header = () => (
  <Nav>
    <div className="container">
      <Brand />
      <div id="nav-menu" className="navbar-menu navbar-end">
        {navgation.map((navitem, index) => (
          <Navbaritem navitem={navitem} key={index}/>
        ))}
      </div>
    </div>
  </Nav>
)

export default Header
