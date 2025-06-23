import React from 'react'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('user');
    alert('logout sucessfully');
    window.close()
  }
  return (
    <>
       <div  className="w-72 h-screen  shadow-md hidden lg:block fixed">
        <h1 className="text-2xl  font-bold text-blue-600 pl-6 pt-2">NextHire</h1>
        <nav className="mt-6 pb-10 text-lg   pl-5.5 border-r border-blue-200">
          <a onClick={()=>navigate('/')} className=" cursor-pointer block p-2 rounded ">
            Dashboard
          </a>
          <a onClick={()=>navigate('/job')} className=" cursor-pointer block p-2 rounded ">
            Finds Jobs
          </a>
          <a onClick={()=>navigate('/myapplication')} className=" cursor-pointer block p-2 rounded ">
            My Application
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Messages
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Saves Jobs
          </a>
        </nav>
     
        <nav className='border-r border-blue-200 pt-5 pb-6 text-lg pl-5.5 '>
        <a onClick={()=>navigate('/setting')} className=" cursor-pointer block p-2 rounded ">
            Setting
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Help Center
          </a>
          <a onClick={handleLogout} className=" cursor-pointer block p-2 rounded ">
            Logout
          </a>
        </nav>
      </div>
    </>
  )
}

export default Sidebar