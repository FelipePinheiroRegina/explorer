import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'


import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

import { Link } from 'react-router-dom'

export function Details(){
  const [ data, setData ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchDetails() {
      const response = await api.get(`/notes/${id}`)
      setData(response.data)
    }

    fetchDetails()
  }, [])

  return(
   <Container>
      <Header />
      { data &&
        <main>
        <Content>
          <ButtonText title='Delete Note'/>
          
          <h1>{data.title}</h1>

          <p>{data.description}</p>
          
          <Section title="Utils links">
            <Links>
                {
                  data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target='_blank'>
                          {link.url}                      
                      </a>
                    </li>
                  ))
                }
            </Links>                   
          </Section>

          <Section title="Markers">
            {
              data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.name}
                />
              ))
            }
            
            
          </Section>

          <Link to='/'>
            <Button title="Back"/>
          </Link>
        </Content>
      </main>
      }
   </Container>
  )
}