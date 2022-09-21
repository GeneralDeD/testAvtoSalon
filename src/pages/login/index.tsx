import React, { FC, useState } from "react";
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import SwitchThemes from "../../components/switchThemes";
import { useAppDispatch } from "../../hooks/redux";
import { IAuth } from "../../models/IAuth";
import { useGetLoginMutation } from "../../services/authService";
import { setAuth } from "../../store/reducers/adminSlice";
import st from "./login.module.scss";

const Login: FC = () => {
	const dispatch = useAppDispatch();
	const [state, setState] = useState<IAuth>({ phoneNumber: "", password: "" });
	const [login, { isLoading, error }] = useGetLoginMutation();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const token = await login(state);

		if ("data" in token) {
			localStorage.setItem("token", token.data.token);
			dispatch(setAuth(token.data.token));
		}
	};

	const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
		setState((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={st.login}>
			<form className={st.login__block} onSubmit={onSubmit}>
				<h2>Sign in</h2>
				<div className={st.login__block__switcher}>
					<SwitchThemes />
				</div>
				<CustomInput
					name="phoneNumber"
					title="Phone number:"
					value={state.phoneNumber}
					onChange={handleChange}
					type="text"
					placeholder="+998991234567"
					required={true}
				/>
				<CustomInput
					name="password"
					title="Password:"
					type="password"
					placeholder="********"
					required={true}
					value={state.password}
					onChange={handleChange}
				/>
				{error ? <p className="text-red-600">Login or password error! GO AWAY!</p> : null}
				<CustomButton title="Sign in" type="submit" isLoading={isLoading} />
			</form>
		</div>
	);
};

export default Login;
