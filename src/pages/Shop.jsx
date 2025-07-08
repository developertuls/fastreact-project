
import { useEffect } from "react"
import { useState } from "react"
import { Data } from "../comonents/Data"

export const Shop = () => {
  
const [fakdata,setFakdata] = useState([])
useEffect(()=>{
  fetch('fakeData.json')
  .then(res=>res.json())
  .then(data=>setFakdata(data))  
},[])






  return (
    <div className= 'bg- gap-2 md:gap-4 overflow-hidden mt-[90px]  text-black grid md:grid-cols-4 sm:grid-cols-2'>

        {/* <h1>datalenhgth:{fakdata.length}</h1> */}

        {
            fakdata.map(singeldata=><Data
            key={singeldata.id}
            singeldata={singeldata}
            ></Data>)
        }



        </div>
  )
}

