import { BrowserRouter } from "react-router-dom"

import { RoutesApp } from "./routes.app"
import { RoutesAuth } from "./routes.auth"

export function Routes() {
    return (
        <BrowserRouter>
            <RoutesAuth/>
        </BrowserRouter>
    )
}