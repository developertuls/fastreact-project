




import { useState } from "react"
import { Oneimges } from "./Oneimges"
import { Shop } from "./Shop"
import { Slider } from "./Slider"
import { Detels } from "./Detels"






export const Home = () => {
const [cart,setCart]=useState([])

const addtoCart=(plecment)=>{
const newcart=[...cart,plecment]
setCart(newcart)



}




  return (
    <div className="">
     <Slider/>
    <Oneimges/>
    
    <Shop addtoCart={addtoCart}/>
    <Detels cart={cart}></Detels>
 
  

    </div>
  )
}
