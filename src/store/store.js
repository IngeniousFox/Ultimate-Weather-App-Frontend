import { configureStore } from '@reduxjs/toolkit'
import {weatherSlice} from "./weather";


export const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer
    }
})
