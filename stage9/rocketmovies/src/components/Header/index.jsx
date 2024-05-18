import { FiSearch } from "react-icons/fi"

import { Container, Avatar } from "./styles"

import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Header() {
    const { logOut, user } = useAuth()

    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        logOut()
    }

    return (
        <Container>
            <h1>Rocket Movies</h1>

            <Input placeholder="search title" icon={FiSearch}/>

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
                    <img src={user.avatar} alt={user.name}/>
                </Link>
            </Avatar>
        </Container>
    )  
}