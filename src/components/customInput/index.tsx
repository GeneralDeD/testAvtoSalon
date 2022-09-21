import React, { FC } from "react";
import st from "./customInput.module.scss";

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput: FC<ICustomInput> = ({
	title,
	name,
	defaultValue,
	value,
	onChange,
	type,
	placeholder,
	className,
	required,
}) => {
	return (
		<table className={`${st.customInput} ${className}`}>
			<tbody>
				<tr>
					<td>{title}</td>
					<td>
						<input
							type={type}
							name={name}
							defaultValue={defaultValue}
							value={value}
							placeholder={placeholder}
							onChange={onChange}
							required={required}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default CustomInput;
