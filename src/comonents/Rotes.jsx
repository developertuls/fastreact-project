import { createBrowserRouter } from "react-router-dom";
import Rot from "./Rot";
import Home from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Blogs } from "./Blogs";
import Orderpeg from "./Orderpeg";
import Herosection from "./Herosection";
import { Logi } from "./Logi";



 const router=createBrowserRouter([

{
    path: '/',
  Component:Rot,
  children:[
    {
    index:true,
    Component:Home
    },
    {
      path:'about',
      Component:About
    },
    {
      path:'contact',
      Component:Contact
    },

    {
      path:'blogs',
      Component:Blogs
    },
    {
      path:'orderpage',
      Component:Orderpeg
    },

    {
      path:'login',
      Component:Logi
    }
  
  ]
}

]);

export default router;

