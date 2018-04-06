import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'
import Logo from './../../common/logo'

const Nav = styled.nav.attrs({ className: 'navbar' })`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  min-height: 5rem;
`

const Container = styled.div.attrs({ className: 'container' })``

const Burger = styled.div.attrs({ className: 'navbar-burger burger' })`
  min-height: 5rem;
`

const Brand = () => {
  const logo = withPrefix('static/images/gdgdivi-logo.png');
  const logo2x = withPrefix('static/images/gdgdivi-logo@2x.png');
  const logo3x = withPrefix('static/images/gdgdivi-logo@3x.png');
  const logo4x = withPrefix('static/images/gdgdivi-logo@4x.png');

  return (
    <div className='navbar-brand'>
      <Link className='navbar-item' to='/'>
        <Logo height='28' width='218' />
      </Link>
      <Burger data-target='nav-menu'>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </div>
  )
}

const Header = () => (
  <Nav>
    <Container>
      <Brand/>
      <div id='nav-menu' className='navbar-menu navbar-end'>
        <a className='navbar-item' href='#intro'>O que fazemos</a>
        <a className='navbar-item' href='#team'>Equipe</a>
        <a className='navbar-item' href='#contact'>Contato</a>
      </div>
    </Container>
  </Nav>
)

export default Header
