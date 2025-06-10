import { createBrowserRouter } from "react-router-dom";
import Rot from '../layout/Rot'



import Home from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Blogs } from "../pages/Blogs";
import Orderpeg from '../pages/Orderpeg';
import { Logi } from "../auth/Logi";
import { Register } from "../auth/Register";




//===============All pathuse===================

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
  path:'logi',
  Component:Logi
},

{
 path:'register',
 Component:Register

}

   
  
  ]
}

]);

export default router;

