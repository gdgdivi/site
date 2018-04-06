import React from 'react'
import Link from 'gatsby-link'
import Landing from '../components/landing'

const IndexPage = () => (
  <div>
    <Landing.Header />
    <Landing.Intro />
    <Landing.About />
    <Landing.Team />
  </div>
)

export default IndexPage
