
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaCarTunnel } from "react-icons/fa6";


const Nebver = () => {
const [isopen,setIsopen]=useState(false);
const togglemenu=()=>{
    setIsopen(!isopen)
}




  return (
    <div>
<nav className='bg-[#0c0e12] text relative text-white'>
<div className='container mx-auto flex justify-between items-center  py-5'>



<div className='flex items-center gap- '>
    
   <h1><FaCarTunnel  className='text-[#c4f131]'/></h1>
   <h2>LUxury</h2>
</div>

{/* <h3>Drive the Dream, Live the Luxury</h3> */}


{/* mobile menu button */}
<div className='md:hidden '>
    <button onClick={togglemenu}>
       {isopen?<IoMdClose />:<FaBars />} 
    </button>
</div>





<div className=''>
    <ul className='hidden md:flex space-x-4 md:space-x-6 '>
   
         <li>Home</li>
        <li>shop</li>
        <li>About us</li>
         <li>Blog</li>
       
        <li className='hover:bg-[#C4E538] font-medium cursor-pointer rounded-sm p-[5px] bg-[#c4f131] text-black justify-center items-center'>contact Us</li>
       

    </ul>


</div>
{/* mobilemenucollapsed */}
<div className={` md:hidden w-full absolute bg-green-800 top-full left-0 ${isopen?'transition-all block':'hidden'} `}>
  <ul className='flex flex-col items-center'>
        <li>Home</li>
        <li>shop</li>
        <li>About us</li>
        <li>contact Us</li>
        <li>Blog</li>
       
    </ul> 

</div>




</div>

</nav>

    </div>
  )
}

export default Nebver