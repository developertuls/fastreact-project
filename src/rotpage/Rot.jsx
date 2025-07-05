

import Nebver from '../comonents/shared/Nebver'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Foter'





export const Rot = () => {
  return (
    <div className=''>
        <Nebver/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
