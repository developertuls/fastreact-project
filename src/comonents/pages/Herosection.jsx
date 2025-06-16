import { motion } from "motion/react";





const Herosection = () => {



  return (

    <motion.div 
     initial={{opacity:0,scale:0,translateX:"100%"}}
     animate={{opacity:1,scale:1,translateX:0}}
     transition={{duration:0.8,delay:0.25}}
     className='  h-[100vh] flex flex-col justify-center text-white items-center px-5' style={{
        backgroundImage:"url('/src/assets/Best.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}>
<motion.h1

 animate={{opacity:1,scale:1}}
 initial={{opacity:0,scale:0.5}}
 transition={{duration:0.8}}
 


 className='text-4xl md:text-6xl text-red-500  font-medium'>welcome to my website</motion.h1>
<p className='text-red-500 text-3xl md:4xl font-bold'>Your journey start Here</p>




<button className= 'transition font-medium hover:bg-[#ff3838] bg-red-800 mt-3  text-lg px-3 py-1 rounded-lg'>purchase product</button>
    </motion.div>
  )
}

export default Herosection