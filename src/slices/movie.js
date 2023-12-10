import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultNowShowing: [],
  resultUpcoming: [],
  resultDetail: [],
  resultCinema: [],
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
    setCinemaData: (state, action) => {
      state.resultCinema = {
        ...state.resultCinema,
        [action.payload.movieName]: action.payload.data,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setResultNowShowing,
  setResultUpcoming,
  setAllData,
  setDetailData,
  setCinemaData,
} = counterSlice.actions;

export default counterSlice.reducer;
