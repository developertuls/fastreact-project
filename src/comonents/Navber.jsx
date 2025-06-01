
import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
export const Navber = () => {

const [isOpen,setIsopen]=useState(false)


const togoole=()=>{
  setIsopen(!isOpen)
}

  return (

<nav className=" bg-green-600 text-white py-6 md:py-7 relative">
<div className="flex justify-between items-center container mx-auto">
  <h3>ReactProject</h3>
  {/* ============== mobileMenu ============ */}
  <div className="md:hidden ">
    <button onClick={togoole}>
      {
        isOpen?<IoCloseSharp />:<FaBars />
      }
    
     
    </button>
  </div>
  <ul className="hidden md:flex space-x-7 md:space-x-8">
    <li> <Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>contact</Link></li>
    <li><Link>blogs</Link></li>
    <li><Link>orderPage</Link></li>
  </ul>
  <button className="hidden md:block">Login</button>

  {/* =======================mobilecolasp============= */}
  <div className={`md:hidden w-full  absolute bg-green-600 top-full left-0 ${isOpen?'block':'hidden'}`}>
<ul className="flex flex-col items-center py-2">
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
    <li>blogs</li>
    <li>orderPage</li>
    <li> <button className="">Login</button></li>
  </ul>
  </div>
</div>
</nav>




  )
}
