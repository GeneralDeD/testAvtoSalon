import React, { FC } from "react";
import Loading from "../loading";

interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	btnType?: string;
}

const CustomButton: FC<ICustomButton> = ({
	type,
	title,
	isLoading,
	className,
	onClick,
	onSubmit,
}) => {
	return (
		<button type={type} className={className} onSubmit={onSubmit} onClick={onClick}>
			{title} {isLoading ? <Loading isButton={true} /> : null}
		</button>
	);
};

export default CustomButton;
