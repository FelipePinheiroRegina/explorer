import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'


export default function Home(){
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title='All' isActive/></li>
                <li><ButtonText title='ReactJs'/></li>
                <li><ButtonText title='NodeJs'/></li>
            </Menu>

            <Search>
                <Input placeholder='Search for title' icon={FiSearch}/>
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'Express'}
                            ]
                        }}/>
                </Section>
            </Content>

            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )  
}