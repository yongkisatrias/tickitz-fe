import { configureStore } from "@reduxjs/toolkit";
import MovieSlices from "./slices/movie";

export default configureStore({
  reducer: {
    movie: MovieSlices,
  },
});
