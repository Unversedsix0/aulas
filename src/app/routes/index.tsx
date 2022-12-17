import { createBrowserRouter, Navigate } from "react-router-dom"
import { Dashboard } from "../pages"

export const Routes = createBrowserRouter([
    {
        path:'/pagina-inicial',
        element:<Dashboard/>
    },
    {
        path:'*',
        element: <Navigate to='/pagina-inicial'/>
    },
])



//     return(
//         <BrowserRouter>
//         <Switch>

//             <Routes path="/" element = {<Dashboard/>}/>

//         </Switch>
//         </BrowserRouter>

//     )
