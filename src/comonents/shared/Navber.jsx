

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
export const Navber = () => {

const [isOpen,setIsopen]=useState(false)

const [active,setActive]=useState('/')

const location=useLocation()

useEffect(()=>{
setActive(location.pathname || '/')
},[location.pathname])

const togoole=()=>{
  setIsopen(!isOpen)
}

const activeLink=(path)=>{

setActive(path)


}









  return (

<nav className=" bg-black/40 text-white py-6 md:py-7 fixed w-full top-0  ">
<div className="flex justify-between items-center container mx-auto">
   <span className='block text-[#18dcff] text-2xl font-bold'><FaReact  className="cursor-pointer hover:text-[#25CCF7]"/></span>
 <h3 className='flex items-center md:ml-[-81px] text-lg'> <span className='flex items-center text-2xl md:text-3xl font-bold'>R</span>eactProject</h3>
  {/* ============== mobileMenu ============ */}
  <div className="md:hidden ml-auto">
    <button onClick={togoole}>
      {
        isOpen?<IoCloseSharp />:<FaBars />
      }
    
     
    </button>
  </div>
  <ul className="hidden md:flex space-x-7 md:space-x-8 transition">
    <li> <Link 
    to={'/'} 
  onClick={()=>activeLink('/')}
    className={`${active=== '/' ?'text-red-500':' rounded-lg  hover:text-black'}`}>
      
      Home
    </Link>
    </li>
    <li><Link
     to={'/about'}
  onClick={()=>activeLink('/about')}
      className={`${active=== '/about' ?'text-[#000]':' rounded-lg  hover:text-black'}`} >

      About
      </Link></li>

    <li><Link 
    to={'/contact'} 
   onClick={()=>activeLink('/contact')}
    className={`${active=== '/contact' ?'text-red-500':' rounded-lg  hover:text-black'}`} >
      contact
      </Link></li>
    <li><Link 
    to={'/blogs'} 
    onClick={()=>activeLink('/')}
    className={`${active=== '/blogs' ?'text-red-600':' rounded-lg hover:text-black'}`} >
      blogs
      </Link></li>
    <li><Link 
    to={'/orderpage'} 
      onClick={()=>activeLink('/orderpage')}
    className={`${active=== '/orderpage' ?'text-red-500':' hover:text-black '}`} >
      orderPage
      </Link></li>
  </ul>
<Link to={'/logi'}
onClick={()=>activeLink('/logi')}
>
 


  <button className={`${active=== '/logi' ?'bg-yellow-200 rounded-lg text-black px-3 py-1 font-medium':'hidden md:block font-medium hover:bg-yellow-200 bg-white text-black px-3 py-1 rounded-lg'}`}>Login</button>
</Link>




  {/* =======================mobilecolasp============= */}
  <div className={`md:hidden w-full  absolute bg-green-600 top-full left-0 ${isOpen?'block':'hidden'}`}>
<ul className="flex flex-col items-center py-2">
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
    <li>blogs</li>
    <li>orderPage</li>
    <li> <button className="bg-white text-black px-3 py-1 rounded-lg font-medium">Login</button></li>
  </ul>
  </div> 
</div>
</nav>




  )
}
