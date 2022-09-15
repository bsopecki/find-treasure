import { createSlice } from "@reduxjs/toolkit";


export const playerSlice = createSlice({
  name: "players",
  initialState: { value:'' },
  reducers: {
    addPlayer: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addPlayer } = playerSlice.actions;

export default playerSlice.reducer;
