import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bulma';
import './index.scss'

const Index = ({ children }) => (
  <div>
    <Helmet
      title="Google Developer Group Divinópolis"
      meta={[
        { name: 'description', content: 'O Google Developers Group de Divinópolis é um grupo aberto de entusiastas em tecnologia que reune pessoas com interesse em tecnologias da Google para trocar conhecimentos através de encontros, reuniões e eventos. ' },
        { name: 'keywords', content: 'event, gdg, gde, devfest, google, programming, android, chrome, developers, web, cloud, androiddev, ios, iosdev, firebase, react, angular, vue, analytics, divinopolis, divi, mg, minas, minas gerais, comunidade, community' },
      ]}>
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
    </Helmet>
    {children()}
  </div>
)

export default Index
