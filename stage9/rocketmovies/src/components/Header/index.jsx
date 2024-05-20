import { FiSearch } from "react-icons/fi"

import { Container, Avatar } from "./styles"

import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useState, useEffect } from "react"

export function Header() {
    const { logOut, user, searchTitle } = useAuth()
    const [ title, setTitle ] = useState('')

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        logOut()
    }

    useEffect(() => {
        searchTitle(title)
    }, [title])

    return (
        <Container>
            <h1>Rocket Movies</h1>

            <Input 
                placeholder="search title" icon={FiSearch}
                onChange={e => setTitle(e.target.value)}
            />

            <Avatar>
                <div>
                    <strong>{user.name}</strong>
                    <button
                        type="button"
                        onClick={handleLogOut}
                    >
                        Log out
                    </button> 
                </div>

                <Link to="/profile">
                    <img src={avatarUrl} alt={user.name}/>
                </Link>
            </Avatar>
        </Container>
    )  
}