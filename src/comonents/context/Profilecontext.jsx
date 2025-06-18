import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { createContext, useState } from "react"

 export const Profilecreat=createContext()

const Profilecontext = ({children}) => {
  const [userrProfile,setUserrProfile]=useState('')


const registerUser=(email,confrimPassword)=>{
 return createUserWithEmailAndPassword(getAuth(),email,confrimPassword)

}

const sevUserprfile=(profile)=>{

setUserrProfile(profile)

}


const userInformatin={registerUser,sevUserprfile,userrProfile}



  return (
    <Profilecreat.Provider value={userInformatin}>
         {children}
    </Profilecreat.Provider>
  )
}

export default Profilecontext