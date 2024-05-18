import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button} from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

export function SignUp() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigate = useNavigate()

    function handleCreate() {
        if(!name || !email || !password) {
            return alert('Fields required')
        }

        api.post('/users', {name, email, password})
            .then(() => {
                alert('User registered successfully')
                navigate('/')
            }).catch (error => {
                if(error.response) {
                    return alert(error.response.data.message)
                } else {
                    return alert('Unable to register!')
                }
            })
    }

    return (
        <Container>
            <Background/>

            <Form>
                <h1>Rocket Movies</h1>
                <p>Application to keep track of everything you watch</p>

                <h2>Sign Up</h2>

                <Input 
                    type = 'text'
                    placeholder='Name' 
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    type = 'text'
                    placeholder='Email' 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type = 'password'
                    placeholder='Password' 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Cadaster' onClick={handleCreate}/>

                <Link to="/">
                    <ButtonText title="You already have an account? Sign In"/>
                </Link>
            </Form>
        </Container>
    )   
}