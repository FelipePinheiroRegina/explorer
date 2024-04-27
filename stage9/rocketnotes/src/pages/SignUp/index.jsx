import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Form, Background } from './styles'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() { 
    return (
        <Container>
             <Background/>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Application to save your notes and useful links</p>

                <h2>Create your account</h2>

                <Input
                    placeholder='Name'
                    type='text'
                    icon={FiUser}
                />

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

                <Button title='Cadaster'/>

                <a href="#">
                    Already have an account? Sign In
                </a>
            </Form>
        </Container>
    )
}

