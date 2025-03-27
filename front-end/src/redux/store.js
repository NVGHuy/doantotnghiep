import { configureStore } from '@reduxjs/toolkit'
import { activeHostelReducer } from './activeHostel/activeHostelSlice'
export const store = configureStore({
  reducer:{
    activeHostel: activeHostelReducer
  }
})