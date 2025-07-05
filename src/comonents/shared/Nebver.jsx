
import  { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaCarTunnel } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Nev.css'

const Nebver = () => {
 



    // ====hoksgelary=============//

const [isopen,setIsopen]=useState(false);
const [activelink,setActivelink]=useState()




// ======funtiongelary========//
const togglemenu=()=>{
setIsopen(!isopen)
}


const activelinkcolor=(path)=>{
setActivelink(path)
}














  return (

//==============nevbercreat============= /// 
<nav className='bg-[#1f2635]/90  text-[#d4dee4]  fixed top-0 w-full z-10 '>
<div className='container mx-auto flex justify-between items-center py-5 md:py-6 '>


{/*=======logo=========*/}
 <div className='font-bold  text-white logo mx-auto md:ml-0 flex space-x-3 sm:space-x-1 items-center'><h1><Link to={'logo'}><FaCarTunnel className='text-[#c4f131] text-[25px] '/></Link></h1>
<h2>LUXU<span className='logo'>RyziP</span></h2></div>


{/* mobile menu button */}
<div className='md:hidden '>
    <button onClick={togglemenu}>
      {isopen?<IoMdClose />:<FaBars />} 
    </button>
</div>





<ul className='fontul hidden md:flex  gap-6 md:gap-7 mx-auto transition'>
   
<li> <Link to={'/'} className={`${activelink==='/' ? 'text-[#4cd137]'
 :'text-[#ff4757]'}`}
 onClick={()=>activelinkcolor('/')}>
  Home
  </Link></li>

<li> <Link to={'/shop'} className={`${activelink=== '/shop' ? 'text-[#4cd137]'
:'hover:text-[#4cd137]'}`}
 onClick={()=>activelinkcolor('/shop')}>
  Shop
  </Link></li>

<li> <Link to={'/aboutus'} className={`${activelink==='/aboutus' ? 'text-[#4cd137]'
 :'hover:text-[#4cd137]'}`}
 onClick={()=>activelinkcolor('/aboutus')}>
  About Us
  </Link></li>


<li> <Link to={'/blogs'} className={`${activelink==='/blogs'? 'text-[#4cd137]'
: 'hover:text-[#4cd137]'}`}
onClick={()=>activelinkcolor('/blogs')}>
  Blogs
  </Link></li>


    </ul>


<Link to={'/contactus'}>
<button
 onClick={()=>activelinkcolor('/contactus')} className={`${activelink=== '/contactus' ? 'bg-[#cdfe2a] ' :'bg-[#cdfe2a]   hover:bg-[#a1c138]'}
  fontbtn  bg-[#a8cf26] hidden md:block  text-black font-medium px-2 py-1 rounded-sm  transition`}>
  contact Us
  </button>

</Link>
</div>



{/* mobilemenucollapsed */}
<div className={`mx-auto justify-center items-center md:hidden w-full absolute bg-[#0c0e12] top-full left-0 ${isopen?'transition-all block':'hidden'} `}>
  <ul className='flex flex-col items-center'>
   <li> <Link to={'/'} className={`${activelink==='/' ? 'text-[#4cd137]'
 :'text-[#ff4757]'}`}
 onClick={()=>activelinkcolor('/')}>
  Home
  </Link></li>

<li> <Link to={'/shop'} className={`${activelink=== '/shop' ? 'text-[#4cd137]'
:'hover:text-[#4cd137]'}`}
 onClick={()=>activelinkcolor('/shop')}>
  shop
  </Link></li>

<li> <Link to={'/aboutus'} className={`${activelink==='/aboutus' ? 'text-[#4cd137]'
 :'hover:text-[#4cd137]'}`}
 onClick={()=>activelinkcolor('/aboutus')}>
  About Us
  </Link></li>


<li> <Link to={'/blogs'} className={`${activelink==='/blogs'? 'text-[#4cd137]'
: 'hover:text-[#4cd137]'}`}
onClick={()=>activelinkcolor('/blogs')}>
  Blogs
  </Link></li>     



 <Link><button
 onClick={()=>activelinkcolor('/contactus')} className={`${activelink=== '/contactus'?'bg-[#cdfe2a]':'hover:bg-[#a1c138]'}
  fontbtn bg-[#a8cf26] mb-5 mt-3 text-black font-medium px-2 py-1 rounded-sm  transition`}>
  contact Us
  </button>

</Link>
       
    </ul> 

</div>






</nav>

   
  )
}

export default Nebver