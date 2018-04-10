import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Logo from './../components/common/Logo'

const ContentWrapper = styled.div`
  align-items: center;
  background-color: #f7f7f7;
  min-height: 100vh;
  text-align: center;

  @media screen and (max-width: 799px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (min-width: 800px) {
    padding: 2rem;
  }
`

const Content = styled.div`
  align-items: center;
  text-align: center;
`

const ErrorCode = styled.h1`
  font-size: 5rem;
  font-weight: 100;
  color: #da4b43;
  margin-bottom: 1.5rem;
`

const Desription = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
`

const NotFoundPage = () => (
  <ContentWrapper>
    <Content>
      <ErrorCode>404</ErrorCode>
      <Desription>A página que você esta procurando não existe.</Desription>
      <Link to="/">
        <Logo />
      </Link>
    </Content>
  </ContentWrapper>
)

export default NotFoundPage
