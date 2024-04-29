import { FiPlus } from "react-icons/fi"

import {  Container, Content, MovieNote, Head, Title, Foot } from "./styles"

import { Header } from "../../components/Header"
import { Stars } from "../../components/Stars"
import { Tags } from "../../components/Tags"


export function Home() {
    return (
        <Container>
            <Header />
            
            <Content>            
                <Head>
                    <h1>My Movies</h1>
                    <button>
                        <FiPlus size={16}/>
                        Add movie
                    </button>
                </Head>

                <main>
                    <MovieNote>
                        <Title>
                            <h1>Star Wars</h1>
                            <Stars size={12}/>
                        </Title>
                        
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius facilis officiis corporis reiciendis ducimus ut iusto modi? Maiores delectus fuga consequuntur sit perferendis consequatur itaque ipsam, temporibus et minus.</p>

                        <Foot>
                            <Tags title='Science fiction'/>
                            <Tags title='Science fiction'/>
                        </Foot>
                        
                    </MovieNote>

                    <MovieNote>
                        <Title>
                            <h1>Star Wars</h1>
                            <Stars size={12}/>
                        </Title>
                        
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius facilis officiis corporis reiciendis ducimus ut iusto modi? Maiores delectus fuga consequuntur sit perferendis consequatur itaque ipsam, temporibus et minus.</p>

                        <Foot>
                            <Tags title='Science fiction'/>
                            <Tags title='Science fiction'/>
                        </Foot>
                        
                    </MovieNote>

                    <MovieNote>
                        <Title>
                            <h1>Star Wars</h1>
                            <Stars size={12}/>
                        </Title>
                        
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius facilis officiis corporis reiciendis ducimus ut iusto modi? Maiores delectus fuga consequuntur sit perferendis consequatur itaque ipsam, temporibus et minus.</p>

                        <Foot>
                            <Tags title='Science fiction'/>
                            <Tags title='Science fiction'/>
                        </Foot>
                        
                    </MovieNote>

                    <MovieNote>
                        <Title>
                            <h1>Star Wars</h1>
                            <Stars size={12}/>
                        </Title>
                        
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius facilis officiis corporis reiciendis ducimus ut iusto modi? Maiores delectus fuga consequuntur sit perferendis consequatur itaque ipsam, temporibus et minus.</p>

                        <Foot>
                            <Tags title='Science fiction'/>
                            <Tags title='Science fiction'/>
                        </Foot>
                        
                    </MovieNote>
                </main>  
            </Content>
        </Container>
    )
}