import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button} from "../../components/Button"
import { ButtonText} from "../../components/ButtonText"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
export function SignIn() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { signIn } = useAuth()

    function handleLog() {
        signIn({email, password})
    }
    
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Application to keep track of everything you watch</p>

                <h2>Sign In</h2>

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

                <Button title='Enter' onClick={handleLog}/>

                <Link to="/register">
                    <ButtonText title="Don't you have an account? Sign Up"/>
                </Link>
            </Form>

            <Background/>
        </Container>
    )   
}