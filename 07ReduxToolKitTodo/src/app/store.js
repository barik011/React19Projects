import {configureStore} from '@reduxjs/toolkit'

import todoRecducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer:todoRecducer
});