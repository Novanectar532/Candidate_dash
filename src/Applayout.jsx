import React from 'react'
import Dashboard from './component/dashboard\'/Dashboard'
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'

import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
} from "react-icons/fa";

function Applayout() {
  return (
    <div className='max-w-full flex flex-flex'>
        <div className='lg:w-3/12 lg:block hidden'><Sidebar/></div>
        <div className='flex lg:w-9/12 w-full  flex-col '>
          {<Header/>}
          {<Outlet/>}
          </div>
    </div>
  )
}

export default Applayout