import { createBrowserRouter } from "react-router-dom";
import { Rot } from "../../rotpage/Rot";
import { Home } from "../../pages/Home";
import { Blog } from "../../pages/Blog";
import { About } from "../../pages/About";
import { Shop } from "../../pages/Shop";
import { Contactus } from "../../pages/Contactus";








const router=createBrowserRouter([
    {
        path:'/',
        Component:Rot,

        children:[
            {
            index: true,
            Component:Home
            },

            {
                path:'aboutus',
                Component:About
            },

            {
                path:'blogs',
                Component:Blog
            },
            {
                path:'shop',
                Component:Shop
            },
            
            {
                path:'contactus',
                Component:Contactus
            },
            {
                path:'logo',
                Component:Home
            }
        ]
    }
])


export default router;