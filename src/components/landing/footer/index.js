import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './../../common/ContentWrapper'
import Logo from './../../common/Logo'

const FooterWrapper = styled.footer`
  background-color: #fcfcfc;
  border-top: 1px solid #d2d2d2;
`

const Title = styled.li`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight:100;
  color: #586069;
`


const Link = styled.a`
  color: #afadad;

  :hover {
    color: var(--gdg);
  }
`
const footerLinkTitle = styled.li`
  font-weight:100;
  font-size:2em;
`


const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div className="columns">
          <div className="column">
            <Logo />
          </div>
          <div className="column is-3">
            <ul className="list-unstyled">
              <Title>Links</Title>
              <li>
                <Link href="https://github.com/gdgdivi/codigo-conduta">
                  Código de conduta
                </Link>
              </li>
              <li>
                <Link href="https://developers.google.com/">
                  Google Developers
                </Link>
              </li>
              <li>
                <Link href="https://developers.google.com/">Outros grupos</Link>
              </li>
            </ul>
          </div>
          <div className="column is-2">
            <ul className="list-unstyled">
              <Title>Contato</Title>
              <li>
                <Link href="mailto:gdgdivi@gmail.com">
                  gdgdivi@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/gdgdivi/">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.meetup.com/pt-BR/GDG-Divinopolis/">Meetup</Link>
              </li>
              <li>
                <Link href="https://twitter.com/gdgdivi">Twitter</Link>
              </li>
              <li>
                <Link href="https://github.com/gdgdivi">GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
