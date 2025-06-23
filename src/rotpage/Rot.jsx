
import React from 'react'
import Nebver from '../comonents/shared/Nebver'
import { Outlet } from 'react-router-dom'

export const Rot = () => {
  return (
    <div>
        <Nebver/>
          <Outlet/>
    </div>
  )
}
