import {configureStore} from '@reduxjs/toolkit'
import authServ from '../appwrite/auth-services';

const store = configureStore({
    reducer:{
        auth:authSlice
    }
});

export default store;

