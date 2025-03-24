import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '~/page/Home/Home'
import InforUser from './page/Manage/InforUser/InforUser'
import Manage from './page/Manage/Manage'
import InforRoom from './page/Home/InforRoom/InforRoom'
import NotFound from './page/404/NotFound'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/manage/infor-user' element={<Manage />}/>
      <Route path='/manage/hostel' element={<Manage />}/>
      <Route path='/infor-room' element={<InforRoom />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default App
