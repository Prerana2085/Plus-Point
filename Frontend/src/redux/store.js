// Here we store all States
import {configureStore} from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userslice } from './features/userSlice';
export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user:userslice.reducer,
    }
})