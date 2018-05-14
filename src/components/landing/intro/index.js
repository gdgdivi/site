import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './../../common/ContentWrapper'
import logo from './logo.svg'

const Content = styled.section`
  background-color: #f7f7f7;
`
const IntroContentWrapper = styled(ContentWrapper)`
  display: flex;
  animation: fadeIN 10s;
  opacity: 1;

  @media screen and (max-width: 799px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes fadeIN {
    0% {
      background: #000;
      opacity: 0;
    }
    100% {
      background: #fff;
      opacity: 1;
    }
  }
`
const LogoContainer = styled.aside`
  @media screen and (min-width: 800px) {
    flex-grow: 0;
    flex-shrink: 0;
    order: 2;
  }
`
const DescriptionContainer = styled.div.attrs({ className: 'description' })`
  color: #676c71;
  font-size: 1.5rem;

  @media screen and (max-width: 799px) {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    margin-right: 3.5rem;
  }
`
const Intro = () => (
  <Content id="intro">
    <IntroContentWrapper>
      <LogoContainer>
        <figure>
          <img
            src={logo}
            alt="Logo of Google Developer Group"
            width="183"
            height="292"
          />
        </figure>
      </LogoContainer>
      <DescriptionContainer>
        <p>
          O Google Developers Group Divinópolis, tem como objetivo reunir
          pessoas com interesse em tecnologias da Google e trocar conhecimentos
          através de encontros, reuniões e eventos. Além de servir como ponte
          entre empreendedores e desenvolvedores.
        </p>
      </DescriptionContainer>
    </IntroContentWrapper>
  </Content>
)

export default Intro
