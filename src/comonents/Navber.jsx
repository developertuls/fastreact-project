

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

<nav className=" bg-green-600 text-white py-6 md:py-7  sticky top-0 z-10 ">
<div className="flex justify-between items-center container mx-auto">
   <span className='block text-[#18dcff] text-2xl font-bold'><FaReact /></span>
 <h3 className='items-center md:ml-[-81px] text-lg'> <span className='text-2xl md:text-3xl font-bold'>R</span>eactProject</h3>
  {/* ============== mobileMenu ============ */}
  <div className="md:hidden ">
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
    className={`${active=== '/' ?'text-red-500':'hover:bg-black rounded-lg p-[3px]'}`}>
      
      Home
    </Link>
    </li>
    <li><Link
     to={'/about'}
  onClick={()=>activeLink('/about')}
      className={`${active=== '/about' ?'text-green-500':'hover:bg-black rounded-lg p-[3px]'}`} >

      About
      </Link></li>

    <li><Link 
    to={'/contact'} 
   onClick={()=>activeLink('/contact')}
    className={`${active=== '/contact' ?'text-green-500':'hover:bg-black rounded-lg p-[3px]'}`} >
      contact
      </Link></li>
    <li><Link 
    to={'/blogs'} 
    onClick={()=>activeLink('/')}
    className={`${active=== '/blogs' ?'text-red-600':'hover:bg-black rounded-lg p-[3px]'}`} >
      blogs
      </Link></li>
    <li><Link 
    to={'orderpage'} 
      onClick={()=>activeLink('orderpage')}
    className={`${active=== '/contact' ?'text-green-500':'hover:bg-black rounded-lg p-[3px]'}`} >
      orderPage
      </Link></li>
  </ul>
<Link to={'/login'}>
  <button className="hidden md:block font-medium hover:bg-yellow-200 bg-white text-black px-3 py-1 rounded-lg">Login</button>
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
