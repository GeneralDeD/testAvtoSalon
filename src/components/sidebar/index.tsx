import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { RouteNames } from "../../router";
import { setAuth } from "../../store/reducers/adminSlice";
import { announceIcon, homeIcon, logoutIcon, questionsIcon } from "../icons";
import SwitchThemes from "../switchThemes";
import styles from "./sidebar.module.scss";

interface ISidebar {
	isOpen: boolean;
	setIsOpen: (e: boolean) => void;
}

const Sidebar: FC<ISidebar> = ({ isOpen, setIsOpen }) => {
	const dispatch = useAppDispatch(),
		navigate = useNavigate(),
		links = [
			{
				title: "Asosiy",
				link: RouteNames.HOME,
				icon: homeIcon,
				func: () => {
					navigate(RouteNames.HOME);

					if (document.body.clientWidth <= 1000) setIsOpen(false);
				},
			},
			{
				title: "E’lonlar",
				link: "/support",
				icon: announceIcon,
			},
			{
				title: "Savollar",
				link: "/support",
				icon: questionsIcon,
			},
			{
				title: "Chiqish",
				link: "/logout",
				icon: logoutIcon,
				func: () => {
					localStorage.removeItem("token");
					dispatch(setAuth(""));
				},
			},
		];

	return (
		<div
			className={`${styles.sidebar} dark:bg-slate-700 ${!isOpen ? styles.sidebar__unactive : null}`}
		>
			<ul>
				{links.map((item, i) => (
					<li
						key={i}
						className={`${styles.sidebar__link} ${
							item.link === window.location.pathname ? styles.sidebar__link__active : ""
						}`}
						onClick={() => (item.func ? item.func() : null)}
					>
						{item.icon} {item.title}
					</li>
				))}
			</ul>
			<SwitchThemes />
		</div>
	);
};

export default Sidebar;
