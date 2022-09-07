import {configureStore} from '@reduxjs/toolkit';

import playerReducer from './user'

 export const store = configureStore({
    reducer: {
        player: playerReducer
    }
})