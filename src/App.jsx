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
import ProtectedRoute from './component/ProtectedRoute'
import { AuthProvider } from './component/AuthContext' 
import Login from './component/Login'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:(
          <ProtectedRoute><Dashboard/></ProtectedRoute>
          )
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path:'/job',
          element:(
          <ProtectedRoute><Findjob/></ProtectedRoute>
          )
        },{
          path:'/job/detail',
          element:(<ProtectedRoute><JobDetails/></ProtectedRoute>)
        },{
          path:'/myapplication',
          element:(<ProtectedRoute><MyApplications/> </ProtectedRoute>)},
        // },{
        //   path:'/message',
        //   element:<Mymessages/>
        // }
        {
          path:'/profilePage',
          element:(<ProtectedRoute><ProfilePage/></ProtectedRoute>)
        },
        {
          path:'/profilesetting',
          element:(<ProtectedRoute><ProfileSettings/></ProtectedRoute>)
        },
        {
          path:'/educationskillsform',
          element:(<ProtectedRoute><EducationSkillsForm/></ProtectedRoute>)
        },
        {
          path:'/logindetails',
          element:(<ProtectedRoute><LoginDetails/></ProtectedRoute>)
        }
      ]
    }
  ])

  return (
  <AuthProvider>
  <RouterProvider router = {router}/>
  </AuthProvider>
  )
}

export default App
