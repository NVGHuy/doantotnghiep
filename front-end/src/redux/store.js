import { configureStore } from '@reduxjs/toolkit'
import { activeHostelReducer } from './activeHostel/activeHostelSlice'
import { userReducer } from './user/userSlice'
export const store = configureStore({
  reducer:{
    activeHostel: activeHostelReducer,
    user: userReducer
  }
})