import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultNowShowing: [],
  resultUpcoming: [],
};

export const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setResultNowShowing: (state, action) => {
      state.resultNowShowing = action.payload;
    },
    setResultUpcoming: (state, action) => {
      state.resultUpcoming = action.payload;
    },
    setAllData: (state, action) => {
      state.resultNowShowing = action.payload.setResultNowShowing;
      state.resultUpcoming = action.payload.setResultUpcoming;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResultNowShowing, setResultUpcoming, setAllData } =
  counterSlice.actions;

export default counterSlice.reducer;
