import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './../../common/ContentWrapper'
import Profile from './profile'
import team from './team.json';

const Section = styled.section`
  background-color: #4285F4;
`

const Title = styled.h1`
  color: #FFF;
  font-size: 2.75rem;
  margin-bottom: 2rem;
`

const Team = () => (
  <Section id='team'>
    <ContentWrapper>
      <Title>Equipe</Title>
      <div className="columns is-multiline">
        {team.map((profile, index) => <Profile profile={profile} key={index} />)}
      </div>
    </ContentWrapper>
  </Section>
)

export default Team
