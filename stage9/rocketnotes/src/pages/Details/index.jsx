import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details(){
  return(
   <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Delete Note'/>
          
          <h1>HELLO WORLD!</h1>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sint at hic quis culpa consequatur. Dicta deleniti impedit tenetur expedita at, deserunt in aperiam provident voluptate illo quas obcaecati. Voluptatum.</p>
          
          <Section title="Utils links">
            <Links>
              <li><a href="#">https://rocketseat.com.br/</a></li>
              <li><a href="#">https://rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Markers">
            <Tag title='Node.js'/>
            <Tag title='Express'/>
          </Section>

          <Button title="Back"/>
        </Content>
      </main>
   </Container>
  )
}