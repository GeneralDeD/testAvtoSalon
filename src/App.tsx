import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import st from "./app.module.scss";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useAppSelector } from "./hooks/redux";
import { privateRoutes, publicRoutes, RouteNames } from "./router";

function App() {
	const [isOpen, setIsOpen] = useState(true),
		{ token } = useAppSelector((state) => state.admin),
		{ theme } = useAppSelector((state) => state.theme);

	useEffect(() => {
		if (theme === "dark") document.body.classList.add("dark");
		else document.body.classList.remove("dark");
	}, [theme]);

	return (
		<div className="bg-gray-200 dark:bg-slate-800">
			{token ? (
				<div className={st.home}>
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className={`${st.home__right} ${!isOpen ? st.home__right__unactive : null}`}>
						<Header />
						<Routes>
							{privateRoutes.map((route) => (
								<Route {...route} key={route.path} element={<route.component />} />
							))}
							<Route path="*" element={<Navigate to={RouteNames.HOME} />} />
						</Routes>
					</div>
				</div>
			) : (
				<Routes>
					{publicRoutes.map((route) => (
						<Route {...route} key={route.path} element={<route.component />} />
					))}
					<Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
