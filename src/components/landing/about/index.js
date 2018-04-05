import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import InnerContent from './../inner-content'
import Item from './about-item'
import techIcon from './ic-tech.svg'
import communityIcon from './ic-community.svg'
import opportunitiesIcon from './ic-opportunities.svg'

const data = [
  {
    'icon': techIcon,
    'headline': 'Foco em Tecnologia',
    'description': 'A nossa missão é divulgar o que existe de mais moderno e relevante em tecnologia: nossos encontros são orientados à inovação e à disseminação do conhecimento que leva profissionais, produtos e empresas para o futuro.',
  },
  {
    'icon': communityIcon,
    'headline': 'Aproximando Pessoas',
    'description': 'As iniciativas são antes de tudo destinadas às pessoas; sejam elas desenvolvedores(as), empreendedores(as), designers ou mesmo entusiastas de tecnologia. Nossos encontros possuem um perfil heterôgeneo de profissionais, em um ambiente sempre enriquecedor!',
  }, 
  {
    'icon': opportunitiesIcon,
    'headline': 'Criando Oportunidades',
    'description': 'Os encontros promovem oportunidades de integração únicas na comunidade de tecnologia do Brasil. Aproximamos pessoas de interesses comuns, bem como de interesses complementares, e disso normalmente resultam encontros que transcendem nossos eventos!',
  }
]

const Content = styled.section`
  background-color: #FFFFFF;
`

const About = () => (
  <Content>
    <InnerContent>
      <div className='columns is-multiline'>
        {data.map((item, i) => <Item item={item} key={i} />)}
      </div>
    </InnerContent>
  </Content>
)

export default About
