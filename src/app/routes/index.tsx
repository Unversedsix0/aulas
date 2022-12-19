import { createBrowserRouter, Navigate } from "react-router-dom"
import { Dashboard, Login } from "../pages"

export const Routes = createBrowserRouter([
    {
        path:'/pagina-inicial',
        element:<Dashboard/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element: <Navigate to='/pagina-inicial'/>
    },
])



