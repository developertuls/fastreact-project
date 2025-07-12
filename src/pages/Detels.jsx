

import { Singelldat } from './Singelldat'


export const Detels = ({cart}) => {
   

  return (
    <div className='mt-[80px] h-[40vh]'>
        <h2>plecment</h2>

        {



cart.map(singelldata=><Singelldat
key={singelldata.id}
singelldata={singelldata}
></Singelldat>)




        }
    
    
    
    

    
   
    
    
    
    </div>





  )
}
