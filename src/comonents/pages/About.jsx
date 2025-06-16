import { useContext } from "react"

import { Profilecreat } from "../context/Profilecontext"




export const About = () => {
 const{alldata,antry}=useContext(Profilecreat)






  return (
    <div className='bg-black text-white py-9 h-[69vh] mt-[88px]'>
      About
<h2>{alldata.age}</h2>
<h2>{antry}</h2>

    </div>
  )
}
