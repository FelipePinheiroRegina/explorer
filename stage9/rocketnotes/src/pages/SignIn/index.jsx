import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from './styles'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function SignIn() { 
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Application to save your notes and useful links</p>

                <h2>Sign In</h2>

                <Input
                    placeholder='Email'
                    type='text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Password'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Enter'/>

                <Link to='/register'>
                    Don't have an account? Sign Up
                </Link>
            </Form>

            <Background/>
        </Container>
    )
}

