import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '~/page/Home/Home'
import InforUser from './page/Manage/InforUser/InforUser'
import Manage from './page/Manage/Manage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/manage/infor-user' element={<Manage />}/>
      <Route path='/manage/hostel' element={<Manage />}/>
    </Routes>
  )
}
export default App
