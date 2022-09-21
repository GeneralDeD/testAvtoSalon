export interface IAuth {
	phoneNumber: string;
	password: string;
}

export interface IAuthResponse {
	_id: string;
	phoneNumber: string;
	fullName: string;
	token: string;
}
