import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import postSliceReducer from './postSlice'



export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    post : postSliceReducer
  },
})