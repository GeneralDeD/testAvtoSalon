import { FC } from "react";
import { userIcon } from "../icons";
import styles from "./header.module.scss";

const Header: FC = () => {
	return (
		<div className={`${styles.header} dark:bg-slate-700`}>
			<button className={styles.header__button}>{userIcon} Asosiyga qaytish</button>
		</div>
	);
};

export default Header;
