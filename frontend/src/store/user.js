import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'user',
    initialState: {value: {playerName:''}},
    reducers: {
         login: (state, action)=> {
            state.value = action.payload
         }
    }
});

export default playerSlice.reducer

