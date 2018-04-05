import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bulma';
import './index.scss'
import Landing from '../components/landing'

const Index = () => (
  <div>
    <Helmet
      title="Google Developer Group Divinópolis"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
    <Landing.Header />
    <Landing.Intro />
    <Landing.About />
    <Landing.Team />
  </div>
)

export default Index
