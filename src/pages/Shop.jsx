
import { useEffect } from "react"
import { useState } from "react"
import { Data } from "../comonents/Data"
import { motion } from "motion/react"








export const Shop = ({addtoCart}) => {
  
  
const [fakdata,setFakdata] = useState([])
useEffect(()=>{
  fetch('fakeData.json')
  .then(res=>res.json())
  .then(data=>setFakdata(data))  
},[])


//==== shopingcomponent=====//

  return (
    <motion.div

    
    initial={{transition:0,opacity:0,scaleX:0,radius:0}}
    animate={{opacity:1,scaleX:1,radius:600}}
    transition={{duration:1.3}}
    
     className= ' animet gap-2 md:gap-4 overflow-hidden mt-[90px]  text-black grid md:grid-cols-4 sm:grid-cols-2'>

    

        {
            fakdata.map(singeldata=><Data
            key={singeldata.id}
            singeldata={singeldata}
            addtoCart={addtoCart}
            ></Data>)
        }



        </motion.div>
  )
}

