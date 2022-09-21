import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import themeReducer from "./reducers/themeSlice";
import adminReducer from "./reducers/adminSlice";
import authApi from "../services/authService";
import { carsApi } from "../services/carsService";

const rootReducer = combineReducers({
	theme: themeReducer,
	admin: adminReducer,
	[authApi.reducerPath]: authApi.reducer,
	[carsApi.reducerPath]: carsApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware, carsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
