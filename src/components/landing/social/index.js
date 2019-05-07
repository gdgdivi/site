import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './../../common/ContentWrapper'
import ContactIcon from './ContactIcon'

const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 1rem;
  font-weight: 400;
`

const ContactItemsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

const Social = () => (
  <section id="contact">
    <ContentWrapper>
      <Title>Onde nos encontrar</Title>
      <ContactItemsWrapper>
        <ContactIcon
          label="Facebook"
          icon="fa-facebook"
          url="https://www.facebook.com/gdgdivi"
          color="var(--facebook)"
        />
        <ContactIcon
          label="Instagram"
          icon="fa-instagram"
          url="https://www.instagram.com/gdgdivi/"
          color="var(--instagram)"
        />
        <ContactIcon
          label="Github"
          icon="fa-github"
          url="https://github.com/gdgdivi"
          color="var(--github)"
        />
        <ContactIcon
          label="Meetup"
          icon="fa-meetup"
          url="https://www.meetup.com/pt-BR/GDG-Divinopolis/"
          color="var(--meetup)"
        />
        <ContactIcon
          label="Twitter"
          icon="fa-twitter"
          url="https://twitter.com/gdgdivi"
          color="var(--twitter)"
        />
      </ContactItemsWrapper>
    </ContentWrapper>
  </section>
)

export default Social
