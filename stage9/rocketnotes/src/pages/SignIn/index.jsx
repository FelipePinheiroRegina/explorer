import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from './styles'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

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

                <a href="#">
                    Don't have an account? Sign Up
                </a>
            </Form>

            <Background/>
        </Container>
    )
}

