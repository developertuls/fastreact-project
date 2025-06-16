import { createContext, useState } from "react"

 export const Profilecreat=createContext()

const Profilecontext = ({children}) => {
const [antry,setAntry]=useState('helllo maruf')
const alldata={age:'88', name:'maruf'}
const allinfo={alldata,antry}



  return (
    <Profilecreat.Provider value={allinfo}>
         {children}
    </Profilecreat.Provider>
  )
}

export default Profilecontext