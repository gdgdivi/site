import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby-link'

import InnerContent from './../inner-content'
import Avatar from './avatar'
import team from './team.json'

const Card = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 2px;
  display: flex;
  padding: 1rem;
  min-width: 8rem;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

const Name = styled.h2`
  font-size: 1.25rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`

const Job = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`

const SocialContainer = styled.ul`
  display: flex;
  margin-top: 0.5rem;
`

const Profile = ({ profile }) => (
  <div className="column is-6">
    <Card>
      <Avatar imageUrl={profile.image} />
      <div>
        <Name>{profile.name}</Name>
        <Job>{profile.job}</Job>
        <SocialContainer>
          <li><a><i className="fab fa-facebook is-facebook"></i></a></li>
          <li><a><i className="fab fa-github is-github"></i></a></li>
          <li><a><i className="fab fa-linkedin is-linkedin"></i></a></li>
          <li><a><i className="fab fa-twitter is-twitter"></i></a></li>
        </SocialContainer>
      </div>
    </Card>
  </div>
)

export default Profile
