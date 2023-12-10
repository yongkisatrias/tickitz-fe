import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  token: null,
};

export const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setToken } = counterSlice.actions;

export default counterSlice.reducer;
