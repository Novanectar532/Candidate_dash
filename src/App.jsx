import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Dashboard from './component/dashboard\'/Dashboard'
import Findjob from './component/findjob/Findjob'
import JobDetails from './component/findjob/JobDetails'
import MyApplications from './component/application/MyApplications'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Dashboard/>
        },{
          path:'/job',
          element:<Findjob/>
        },{
          path:'/job/detail',
          element:<JobDetails/>
        },{
          path:'/myapplication',
          element:<MyApplications/> }
        // },{
        //   path:'/message',
        //   element:<Mymessages/>
        // }
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
