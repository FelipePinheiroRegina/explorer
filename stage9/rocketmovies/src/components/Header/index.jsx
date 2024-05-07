import { FiSearch } from "react-icons/fi"

import { Container, Avatar } from "./styles"

import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <Container>
            <h1>Rocket Movies</h1>

            <Input placeholder="search title" icon={FiSearch}/>

            <Avatar>
                <div>
                    <strong>Felipe Pinheiro</strong>
                    <a href="#"> Log out</a>
                </div>

                <Link to="/profile">
                    <img src="https://www.github.com/FelipePinheiroRegina.png" alt="Photo User"/>
                </Link>
            </Avatar>
        </Container>
    )  
}