import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultNowShowing: [],
  resultUpcoming: [],
  resultDetail: [],
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
    setDetailData: (state, action) => {
      state.resultDetail = [...state.resultDetail, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setResultNowShowing,
  setResultUpcoming,
  setAllData,
  setDetailData,
} = counterSlice.actions;

export default counterSlice.reducer;
