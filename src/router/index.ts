import React from "react";
import Login from "../pages/login";
import Home from "../pages/home";

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	LOGIN = "/login",
	HOME = "/",
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, exact: true, component: Login }];

export const privateRoutes: IRoute[] = [
	{
		path: RouteNames.HOME,
		exact: true,
		component: Home,
	},
];
