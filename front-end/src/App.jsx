import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '~/page/Home/Home'
import InforUser from './page/Manage/InforUser/InforUser'
import Manage from './page/Manage/Manage'
import InforRoom from './page/Home/InforRoom/InforRoom'
import NotFound from './page/404/NotFound'
import Auth from './page/Auth/Auth'

import React from 'react';
import Profile from './page/Home/Personal-Page/Personal-Page';

import AccountVerification from './page/Auth/AccountVerification'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/hostel/67e35e0682e1a9ceb069ce6c" replace={true} />} />
      <Route path='/hostel/:hostelId' element={<Home />} />
      <Route path='/manage/infor-user' element={<Manage />} />
      <Route path='/manage/hostel' element={<Manage />} />
      <Route path='/infor-room' element={<InforRoom />} />
      <Route path='/profile' element={<Profile />} />
      
      {/** Authentication */}
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      {/** 404 not found page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default App
