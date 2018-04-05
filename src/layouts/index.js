import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bulma';
import './index.scss'

import { Header, Intro, About } from '../components/landing'

const Index = () => (
  <div>
    <Helmet
      title="Google Developer Group Divinópolis"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Intro />
    <About />
  </div>
)

export default Index
