import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
  },
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
     },
    logout:(state)=>{
        state.login = null;
    }
  },
});

export default loginSlice.reducer;
export const { login ,logout} = loginSlice.actions;
