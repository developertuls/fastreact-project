
import  { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaCarTunnel } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Nev.css'

const Nebver = () => {
 



    // ====hoksgelary=============//

const [isopen,setIsopen]=useState(false);
const [btncolor,setBtncolor]=useState(false)





// ======funtiongelary========//
const togglemenu=()=>{
setIsopen(!isopen)
}

const btncolorsho=()=>{
setBtncolor(!btncolor)
}




  return (

//==============nevbercreat============= /// 
<nav className='bg-[#0c0e12]  text-white relative'>
<div className='container mx-auto flex justify-between items-center py-5 md:py-6 '>


{/*=======logo=========*/}
 <div className='logo mx-auto md:ml-0 flex space-x-3 sm:space-x-1 items-center'><h1><Link to={'logo'}><FaCarTunnel className='text-[#c4f131] text-[25px] '/></Link></h1>
<h2>LUXU<span className='logo'>RyZiP</span></h2></div>


{/* mobile menu button */}
<div className='md:hidden '>
    <button onClick={togglemenu}>
      {isopen?<IoMdClose />:<FaBars />} 
    </button>
</div>






    <ul className='hidden md:flex  gap-6 md:gap-7 mx-auto bg-blue-300'>
   
         <li> <Link to={'/'}>Home</Link></li>
         <li> <Link to={'/shop'}>shop</Link></li>
         <li> <Link to={'/aboutus'}>About Us</Link></li>
         <li> <Link to={'blogs'}>Blog</Link></li>
        
      
       

    </ul>
<Link to={'/contactus'}>
<button onClick={btncolorsho} className={`${btncolor?'bg-[#cdfe2a]':'hover:bg-[#a1c138]'} bg-[#a8cf26] hidden md:block  text-black font-medium px-2 py-1 rounded-sm  transition`}>contact Us</button>

</Link>
</div>

{/* mobilemenucollapsed */}
<div className={`mx-auto justify-center items-center md:hidden w-full absolute bg-[#0c0e12] top-full left-0 ${isopen?'transition-all block':'hidden'} `}>
  <ul className='flex flex-col items-center'>
         <li> <Link to={'/'}>Home</Link></li>
         <li> <Link to={'/shop'}>shop</Link></li>
         <li> <Link to={'/aboutus'}>About Us</Link></li>
         <li> <Link to={'/blogs'}>Blog</Link></li>
        
        <li><button className='mb-5 mt-3 bg-[#c4f131] text-black font-medium px-2 py-1 rounded-sm hover:bg-[#a1c138] transition'><Link to={'/contactus'}>contact Us</Link></button></li>
       
    </ul> 

</div>






</nav>

   
  )
}

export default Nebver