import {configureStore} from '@reduxjs/toolkit'
import ProfileSlice from './Features/ProfileSlice'

export const store = configureStore({

    reducer:{
        profile :ProfileSlice 
    },
    
})