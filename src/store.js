import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import MovieSlices from "./slices/movie";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  movie: MovieSlices,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persist = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persist,
});

export let persistor = persistStore(store);
