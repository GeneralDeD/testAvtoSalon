import { FC } from "react";
import { loadingIcon } from "../icons";
import st from "./loading.module.scss";

interface ILoading {
	isTable?: boolean | undefined;
	isButton?: boolean | undefined;
}

const Loading: FC<ILoading> = ({ isTable, isButton }) => {
	return (
		<div
			className={`${st.loading} ${isTable ? st.loading__table : ""} ${
				isButton ? st.loading__button : ""
			}`}
		>
			<div role="status">
				{loadingIcon}
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
