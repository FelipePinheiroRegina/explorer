import { FiPlus } from "react-icons/fi"

import {  Container, Content, MovieNote, Head, Title, Foot } from "./styles"

import { Header } from "../../components/Header"
import { Stars } from "../../components/Stars"
import { Tags } from "../../components/Tags"

import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Home() {
    const [ title, setTitle ] = useState('')
    const { searchResult } = useAuth()
    
    const navigate = useNavigate()

    function handleShowNote(id) {
        navigate(`/details/${id}`)
    }

    return (
        <Container>
            <Header />
            
            <Content>            
                <Head>
                    <h1>My Movies</h1>
                    <Link to="/create">
                        <button> 
                            <FiPlus size={16}/>
                            Add movie
                        </button>
                    </Link>
                </Head>
                
                <main>
                    { searchResult &&
                        searchResult.map(movie => (
                            <MovieNote
                                type="button" 
                                key={String(movie.id)}
                                onClick={() => handleShowNote(movie.id)}
                            >
                                <Title>
                                    <h1>{movie.title}</h1>
                                    <Stars size={20} rating={movie.rating}/>
                                </Title>
                                
                                <p>{movie.description.slice(0, 200) + "... Ler mais"}</p>

                                <Foot>
                                    {
                                        movie.tags.map(tag => (
                                            <Tags 
                                                key={String(tag.id)}
                                                title={tag.name}
                                            />
                                        ))
                                    }
                                </Foot>
                            
                            </MovieNote>
                        ))
                    }   
                </main>  
                
            </Content>
        </Container>
    )
}