import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuth, IAuthResponse } from "../models/IAuth";

const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cartestwebapp.herokuapp.com/employee/login",
	}),
	endpoints: (build) => ({
		getLogin: build.mutation<IAuthResponse, IAuth>({
			query: (body) => ({
				url: "",
				body,
				method: "POST",
			}),
			transformResponse: (res: { data: IAuthResponse }) => res.data,
		}),
	}),
});

export const { useGetLoginMutation } = authApi;
export default authApi;
