import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi"

import { Container, StyleRow, Form, Avatar } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Link } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { api } from "../../services/api"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)

    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ oldPassword, setOldPassword ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')

    function handleUpdate() {
        const DataUpdated = {
            name,
            email,
            oldPassword,
            newPassword
        }

        const userUpdated = Object.assign(user, DataUpdated)

        updateProfile({user: userUpdated, avatarFile}) 
    }
    
    function handleAvatarUpdate(event) {
        const File = event.target.files[0]
        setAvatarFile(File)

        const imagePreview = URL.createObjectURL(File)
        setAvatar(imagePreview)
    }
    
    return (
        <Container>
            <StyleRow>
                <Link to="/">
                    <ButtonText title="Go back" icon={FiArrowLeft}/>
                </Link>
            </StyleRow>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Photo User" />

                    <label htmlFor="avatar"><FiCamera/></label>

                    <input 
                        type="file" 
                        id="avatar"
                        onClick={(event) => handleAvatarUpdate(event)} 
                    />
                </Avatar>

                <Input 
                    type = "text"
                    placeholder="Name" 
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                
                <Input 
                    type = "text"
                    placeholder="Email" 
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                 <Input 
                    type = "password"
                    placeholder="Password" 
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                 <Input 
                    type = "password"
                    placeholder="New password" 
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}