
import { motion } from "motion/react"

export const Blogs = () => {
  return (
    <motion.div 
      initial={{opacity:0,scale:0,translateY:"100%"}}
     animate={{opacity:1,scale:1,translateY:0}}
     transition={{duration:0.8,delay:0.25}}
    className=' py-8 h-[69vh] mt-[92px]' style={{
       backgroundImage:"url('/src/assets/mkil.png')",
      
        backgroundPosition:'center'
    }}>Blogs
    
    </motion.div>
  )
}
