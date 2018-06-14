import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from './../../common/Logo'
import $ from 'jquery'

const Nav = styled.nav.attrs({ className: 'navbar' })`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  min-height: 5rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
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





class Header extends Component {
  componentDidMount() {
      $(".navbar-item").click(function(event){        
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 600);
     });  

  }
  
  
  render(){
    return (
    <Nav>
    <div className="container">
      <Brand />
      <div id="nav-menu" className="navbar-menu navbar-end">
        <a className="navbar-item" href="#intro">
          O que fazemos
        </a>
        <a className="navbar-item" href="#team">
          Equipe
        </a>
        <a className="navbar-item" href="#contact">
          Contato
        </a>
      </div>
    </div>
  </Nav>)
  }
    

}



export default Header
