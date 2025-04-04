import { useState } from 'react'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Dashboard from './component/dashboard\'/Dashboard'
import Findjob from './component/findjob/Findjob'
import JobDetails from './component/findjob/JobDetails'
import MyApplications from './component/application/MyApplications'
import ProfilePage from './pages/ProfilePage'
import ProfileSettings from './pages/ProfileSetting'
import EducationSkillsForm from './pages/EducationSkillForm'
import LoginDetails from './pages/LoginDetails'

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
          element:<MyApplications/> },
        // },{
        //   path:'/message',
        //   element:<Mymessages/>
        // }
        {
          path:'/profilePage',
          element:<ProfilePage/>
        },
        {
          path:'/profilesetting',
          element:<ProfileSettings/>
        },
        {
          path:'/educationskillsform',
          element:<EducationSkillsForm/>
        },
        {
          path:'/logindetails',
          element:<LoginDetails/>
        }
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
