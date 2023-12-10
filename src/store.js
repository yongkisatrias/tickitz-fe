import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import MovieSlices from "./slices/movie";
import UserSlices from "./slices/user";

const reducers = combineReducers({
  movie: MovieSlices,
  user: UserSlices,
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
