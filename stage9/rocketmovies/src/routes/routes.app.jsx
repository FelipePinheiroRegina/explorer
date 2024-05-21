import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { Profile } from "../pages/Profile"
import { CreateMovie } from "../pages/CreateMovie"

export function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<MoviePreview/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/create" element={<CreateMovie/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}