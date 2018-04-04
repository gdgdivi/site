import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import logo from "./gdgdivi-logo.png";
import logo2x from "./gdgdivi-logo@2x.png";
import logo3x from "./gdgdivi-logo@3x.png";
import logo4x from "./gdgdivi-logo@4x.png";

const Nav = styled.nav.attrs({ className: 'navbar' })`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  min-height: 5rem;
`

const Container = styled.div.attrs({ className: 'container' })``

const Burger = styled.div.attrs({ className: 'navbar-burger burger' })`
  min-height: 5rem;
`

const LogoImage = styled.img`
  height: 28px;
  width: 218px;
`

const Brand = () => (
  <div className='navbar-brand'>
    <Link className='navbar-item' to="/">
      <LogoImage
        src={logo}
        srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x, ${logo4x} 4x`}
        alt='Google Developer Group Divinópolis' />
    </Link>
    <Burger data-target='nav-menu'>
      <span></span>
      <span></span>
      <span></span>
    </Burger>
  </div>
)

const Header = () => (
  <Nav>
    <Container>
      <Brand/>
      <div id='nav-menu' className='navbar-menu navbar-end'>
        <Link className="navbar-item" to="/">O que fazemos</Link>
        <Link className="navbar-item" to="/">Equipe</Link>
        <Link className="navbar-item" to="/">Contato</Link>
      </div>
    </Container>
  </Nav>
)

export default Header
