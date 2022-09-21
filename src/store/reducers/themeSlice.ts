import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "../../models/ITheme";

const initialState: ITheme = {
	theme: localStorage.getItem("theme") ?? "light",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ITheme["theme"]>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
