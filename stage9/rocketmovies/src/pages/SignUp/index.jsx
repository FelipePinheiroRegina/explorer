import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button} from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
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
                />

                <Input 
                    type = 'text'
                    placeholder='Email' 
                    icon={FiMail}
                />

                <Input 
                    type = 'password'
                    placeholder='Password' 
                    icon={FiLock}
                />

                <Button title='Cadaster'/>

                <ButtonText title="You already have an account? Sign In"/>
            </Form>
        </Container>
    )   
}