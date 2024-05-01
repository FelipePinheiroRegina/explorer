import { FiMail, FiLock } from "react-icons/fi"

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button} from "../../components/Button"
import { ButtonText} from "../../components/ButtonText"

export function SignIn() {
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
                />

                <Input 
                    type = 'password'
                    placeholder='Password' 
                    icon={FiLock}
                />

                <Button title='Enter'/>

                <ButtonText title="Don't you have an account? Sign Up"/>
            </Form>

            <Background/>
        </Container>
    )   
}