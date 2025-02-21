import { createBrowserRouter } from "react-router";
import MainLayout from './MainLayout'
import About from '../components/about'
import Experience from '../components/experience'
import Portofolio from "../components/portofolio";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <About/>
            },
            {
                path:'experience',
                element: <Experience/>
            },
            {
                path:'portofolio',
                element: <Portofolio/>
            },

        ]

    }
])

export default router;