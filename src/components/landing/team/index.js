import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import InnerContent from './../inner-content'
import Profile from './profile'
import team from './team.json';

const Content = styled.section`
  background-color: #4285F4;
`

const Title = styled.h1`
  color: #FFF;
  font-size: 2.75rem;
  margin-bottom: 2rem;
`

const Team = () => (
  <Content>
    <InnerContent>
      <Title>Equipe</Title>
      <div className="columns is-multiline">
        {team.map((profile, index) => <Profile profile={profile} key={index} />)}
      </div>
    </InnerContent>
  </Content>
)

export default Team
