import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICars, ICarsCreate, ICarsEdit } from "../models/ICars";
import { RootState } from "../store";

export const carsApi = createApi({
	reducerPath: "carsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cartestwebapp.herokuapp.com/car",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).admin.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["Cars"],
	endpoints: (build) => ({
		getCars: build.query<ICars, { limit: number; page: number }>({
			query({ limit, page }) {
				return `?limit=${limit}&page=${page}`;
			},
			transformResponse: (res: { data: ICars }) => res.data,
			providesTags: ["Cars"],
		}),
		createCar: build.mutation<any, ICarsCreate>({
			query(body) {
				return {
					url: "",
					method: "POST",
					body,
				};
			},
		}),
		updateCar: build.mutation<any, ICarsEdit>({
			query(body) {
				return {
					url: "",
					method: "PUT",
					body,
				};
			},
		}),
		deleteCar: build.mutation<any, string>({
			query(id) {
				return {
					url: `/${id}`,
					method: "DELETE",
				};
			},
			invalidatesTags: ["Cars"],
		}),
	}),
});

export const { useGetCarsQuery, useDeleteCarMutation } = carsApi;
