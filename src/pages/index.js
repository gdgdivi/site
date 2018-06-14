import React from 'react'
import Landing,{scrollSuave} from '../components/landing'
import styled from 'styled-components';

const BodyG = styled.div`
  margin-top:74px;
`

const IndexPage = () => (
  <BodyG >  
    <Landing.Header />
    <Landing.Intro />
    <Landing.About />
    <Landing.Team />
    <Landing.Social />
    <Landing.Footer />
  </BodyG>
)

export default IndexPage
