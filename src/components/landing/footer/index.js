import React from 'react'
import styled from 'styled-components'
import InnerContent from './../inner-content'
import Logo from './../../common/logo'

const FooterWrapper = styled.footer`
  background-color: #FCFCFC;
  border-top: 1px solid #EEEEEE;
`

const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

const Link = styled.a`
  color: #757575;

  :hover {
    color: var(--gdg);
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerContent>
        <div className='columns'>
          <div className='column'>
            <Logo width='218' height='28' />
          </div>
          <div className='column is-3'>
            <Title>Links</Title>
            <ul className='list-unstyled'>
              <li><Link href='mailto:gdgdivi@gmail.com'>Email</Link></li>
              <li><Link href='https://github.com/gdgdivi/codigo-conduta'>Código de conduta</Link></li>
              <li><Link href='https://developers.google.com/'>Google Developers</Link></li>
              <li><Link href='https://developers.google.com/'>Outros grupos</Link></li>
            </ul>
          </div>
        </div>
      </InnerContent>
    </FooterWrapper>
  )
}

export default Footer
