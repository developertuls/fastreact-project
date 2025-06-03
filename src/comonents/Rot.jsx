

import { Navber } from './Navber'
import { Outlet } from 'react-router-dom'
import Fotet from './Fotet'
import Home from './Home'

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