import { FiClock, FiTrash } from "react-icons/fi"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Stars } from "../../components/Stars"
import { Tags } from "../../components/Tags"

import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function MoviePreview() {
    const { user } = useAuth()
    const [ data, setData ] = useState(null)
    const { id } = useParams()

    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    async function handleRemoveMovie(id) {
        await api.delete(`/movieNotes/${id}`)

        alert('Removed successfully!')
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDetails() {
            const response = await api.get(`/movieNotes/${id}`)

            setData(response.data)
        }

        fetchDetails()
    }, [])

    return (
        <Container>
            <Header/>


           { data &&
            <main> 
                    <Content>
                        <Link to="/">
                            <ButtonText title="Go back"/>
                        </Link>

                        <ButtonText 
                            title="Remove movie" 
                            icon={ FiTrash }
                            onClick={() => handleRemoveMovie(data.id)}
                        />
                        

                        <div className="details">
                            <div className="title">
                                <h1>{data.title}</h1>
                                <Stars size={20} rating={data.rating}/>
                            </div>

                            <div className="nameAndDate">       
                                <div className="name">
                                    <img src={avatarUrl} alt={user.name}/>
                                    <p>{user.name}</p>
                                </div>
                                
                                <div className="date">
                                    <FiClock/>
                                    <p>{data.created_at}</p>
                                </div>
                            </div>
                        </div>

                        <span className="tags">
                                {
                                    data.tags.map(tag => (
                                        <Tags 
                                            key={String(tag.id)}
                                            title={tag.name}
                                        />
                                    ))
                                }
                        </span>

                        <p>
                            {data.description}
                        </p>
                    </Content>
                </main>
            }
        </Container>
    )
}