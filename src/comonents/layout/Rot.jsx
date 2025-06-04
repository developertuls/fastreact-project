

import { Navber } from '/src/comonents/shared/Navber.jsx';
import Fotet from '../shared/Fotet'
import { Outlet } from 'react-router-dom'




const Rot = () => {
  return (
    <div>
    <Navber></Navber>
    <Outlet></Outlet>
       <Fotet></Fotet>
       
    </div>
  )
}

export default Rot