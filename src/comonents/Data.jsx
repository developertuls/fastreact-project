
import React from 'react'

export const Data = ({singeldata}) => {
    const{name,image,price,speed,details}=singeldata;
    
  return (
    <div className='border bg-fuchsia-700/70 w-1/4'>
<h1>name:{name}</h1>
<img src={image} alt="jkkk" />
<span className='block'>speed:{speed}</span>
<button>button</button>


    </div>
  )
}
