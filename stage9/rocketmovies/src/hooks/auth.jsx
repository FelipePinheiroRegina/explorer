import { createContext, useContext } from "react"

export const AuthContext = createContext({})

import { useState, useEffect } from "react"
import { api } from "../services/api"

function AuthProvider({children}) {
    const [ data, setData ] = useState({})

    async function signIn({email, password}) {
        try {
            const response = await api.post('session', {email, password})

            const {user, token } = response.data
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})

            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
            localStorage.setItem('@rocketmovies:token', token)
        
        } catch (error) {
            if(error.response) {
                return alert(error.response.data.message)
            } else {
                return alert('Unable to log')
            }
        }
    }

    async function updateProfile({user, avatarFile}) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)
                const response = await api.patch('/users/avatar', fileUploadForm)

                user.avatar = response.data.avatar
            }
            
        } catch (error) {
            if(error.response) {
                return alert(error.response.data.message)
            } else {
                return alert('Unable to update!')
            }
        }

        try {
            await api.put('/users', user)
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

            setData({user, token: data.token})
            alert('Update successfully!')
        } catch (error) {
            if(error.response) {
                return alert(error.response.data.message)
            } else {
                return alert('Unable to update!')
            }
        }
    }

    async function logOut() {
        localStorage.removeItem('@rocketmovies:user')
        localStorage.removeItem('@rocketmovies:token')

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem('@rocketmovies:user')
        const token = localStorage.getItem('@rocketmovies:token')

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider 
            value={{
                signIn,
                logOut,
                updateProfile,
                user: data.user 
            }}>

            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }