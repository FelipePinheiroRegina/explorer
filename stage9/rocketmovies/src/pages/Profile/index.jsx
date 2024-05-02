import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi"

import { Container, StyleRow, Form, Avatar } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function Profile() {
    return (
        <Container>
            <StyleRow>
                <ButtonText title="Go back" icon={FiArrowLeft}/>
            </StyleRow>

            <Form>
                <Avatar>
                    <img src="https://www.github.com/FelipePinheiroRegina.png" alt="Photo User" />

                    <label htmlFor="avatar"><FiCamera/></label>

                    <input type="file" id="avatar" />
                </Avatar>

                <Input 
                    type = "text"
                    placeholder="Name" 
                    icon={FiUser}
                />
                
                <Input 
                    type = "text"
                    placeholder="Email" 
                    icon={FiMail}
                />

                 <Input 
                    type = "password"
                    placeholder="Password" 
                    icon={FiLock}
                />

                 <Input 
                    type = "password"
                    placeholder="Password" 
                    icon={FiLock}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}