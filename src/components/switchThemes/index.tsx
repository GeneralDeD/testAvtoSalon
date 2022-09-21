import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { setTheme } from "../../store/reducers/themeSlice";
import { darkIcon, lightIcon } from "../icons";

const SwitchThemes = () => {
	const { theme } = useAppSelector((state) => state.theme),
		dispatch = useDispatch();

	return (
		<div className="flex items-center bg-gray-100 rounded-3xl p-1 px-2">
			<div
				className={`w-1/2 flex items-center justify-center p-1 rounded-3xl text-center cursor-pointer transition-all ${
					theme === "light" ? "bg-white" : ""
				}`}
				onClick={() => {
					dispatch(setTheme("light"));
					localStorage.setItem("theme", "light");
				}}
			>
				{lightIcon}
			</div>
			<div
				className={`w-1/2 flex items-center justify-center p-1 rounded-3xl text-center cursor-pointer transition-all ${
					theme === "dark" ? "bg-slate-800" : ""
				}`}
				onClick={() => {
					dispatch(setTheme("dark"));
					localStorage.setItem("theme", "dark");
				}}
			>
				{darkIcon}
			</div>
		</div>
	);
};

export default SwitchThemes;
