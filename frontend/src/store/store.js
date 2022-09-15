import {configureStore} from '@reduxjs/toolkit';

import playerReducer from './Players'

 export const store = configureStore({
    reducer: {
        player: playerReducer
    }
})