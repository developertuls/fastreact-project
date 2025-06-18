
import { motion } from "motion/react"
import { useContext } from "react"
import { Profilecreat } from "../context/Profilecontext"

export const Blogs = () => {
const {userrProfile}=useContext(Profilecreat)
  return (
    <motion.div 
      initial={{opacity:0,scale:0,translateY:"100%"}}
     animate={{opacity:1,scale:1,translateY:0}}
     transition={{duration:0.8,delay:0.25}}
    className=' py-8 h-[69vh] mt-[92px]' style={{
       backgroundImage:"url('/src/assets/mkil.png')",
      
        backgroundPosition:'center'
    }}>Blogs
<<<<<<< HEAD
    
<div>
  <h2>name:{userrProfile.name}</h2>
  <h2>name:{userrProfile.email}</h2>
  <h2>name:{userrProfile.uid}</h2>
</div>


=======
    h2
>>>>>>> 70978fcdd4f19a0563d8546a85999732a24f3586
    </motion.div>
  )
}
