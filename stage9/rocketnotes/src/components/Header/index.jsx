import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header(){
   return (
    <Container>
        <Profile to='/profile'>
            <img src="https://github.com/FelipePinheiroRegina.png" alt="Foto do usuário" />

            <div>
                <span>Welcome</span>
                <strong>Felipe Pinheiro</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>
    </Container>
   ) 
}