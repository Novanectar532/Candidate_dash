import { Link } from 'react-router-dom';
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
function Sidebar({close, containerStyle}) {
  const navigate = useNavigate();
  return (
    <>
      <aside className={`${containerStyle}`}>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl  font-bold text-blue-600 pl-6 pt-2">NextHire</h1>
          <IoClose onClick={close} className='mr-6 mt-2 cursor-pointer lg:hidden w-6 h-6'/>
        </div>

        <nav className="mt-6 pb-10 text-lg  pl-5.5 border-r border-blue-200">
          <Link to='/' onClick={close} className=" cursor-pointer block p-2 rounded ">
            Dashboard
          </Link>
          <Link to='/job' onClick={close} className=" cursor-pointer block p-2 rounded ">
            Finds Jobs
          </Link>
          <Link to='/myapplication' onClick={close} className=" cursor-pointer block p-2 rounded ">
            My Application
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Messages
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Saves Jobs
          </Link>
        </nav>
        <hr className='text-blue-200 mx-3 ' />
        <nav className='border-r border-blue-200 pt-5 pb-6 text-lg pl-5.5 '>
          <Link to='/setting' onClick={close} className=" cursor-pointer block p-2 rounded ">
            Setting
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Help Center
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Logout
          </Link>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar