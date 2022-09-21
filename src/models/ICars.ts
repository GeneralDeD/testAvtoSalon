export interface IMarka {
	_id: string;
	name: string;
}

export interface ICarsData {
	_id: string;
	imgUrl: string;
	imgUrlInside: string;
	imgUrlAutside: string;
	price: number;
	year: number;
	description: string;
	tonirovka: string;
	motor: string;
	color: string;
	distance: string;
	gearbok: string;
	marka: IMarka;
}

export interface ICars {
	data: ICarsData[];
	total: number;
}

export interface ICarsCreate {
	imgUrl: string;
	imgUrlInside: string;
	imgUrlAutside: string;
	price: number;
	year: number;
	description: string;
	tonirovka: string;
	motor: string;
	color: string;
	distance: string;
	gearbok: string;
	categoryId: string;
}

export interface ICarsEdit {
	_id: string;
	imgUrl: string;
	imgUrlInside: string;
	imgUrlAutside: string;
	price: number;
	year: number;
	description: string;
	tonirovka: string;
	motor: string;
	color: string;
	distance: string;
	gearbok: string;
	categoryId: string;
}
