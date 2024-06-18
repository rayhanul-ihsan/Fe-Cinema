import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./slices/movie"
import authReducer from "./slices/auth"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    auth: authReducer
  },
})