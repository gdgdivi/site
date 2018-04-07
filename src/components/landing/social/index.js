import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './../../common/ContentWrapper'
import ContactIcon from './ContactIcon'

const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 1rem;
`

const ContactItemsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

const Social = () => (
  <section>
    <ContentWrapper>
      <Title>Contato</Title>
      <ContactItemsWrapper>
        <ContactIcon
          icon="fa-facebook"
          url="https://www.facebook.com/gdgdivi"
          color="var(--facebook)"
        />
        <ContactIcon
          icon="fa-github"
          url="https://github.com/gdgdivi"
          color="var(--github)"
        />
        <ContactIcon
          icon="fa-meetup"
          url="https://www.meetup.com/pt-BR/GDG-Divinopolis/"
          color="var(--meetup)"
        />
        <ContactIcon
          icon="fa-twitter"
          url="https://twitter.com/gdgdivi"
          color="var(--twitter)"
        />
      </ContactItemsWrapper>
    </ContentWrapper>
  </section>
)

export default Social
