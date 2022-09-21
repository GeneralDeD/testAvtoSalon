interface ICustomModal {
	title: string;
	children: any;
	show: boolean;
	size: string;
	setShow: (e: any) => void;
}

export default function CustomModal({ title, show, setShow, size, children }: ICustomModal) {
	return (
		<div
			className={`fixed z-10 mx-auto left-0 right-0 bg-white dark:bg-slate-800 shadow-2xl p-5 rounded-md transition-all ${size} ${
				show ? "top-10 opacity-100 visible" : "top-0 opacity-0 invisible"
			}`}
		>
			<div className="flex justify-between items-center mb-5">
				<h4 className="text-2xl font-bold dark:text-white">{title}</h4>
				<svg
					className="w-4 fill-red-600 font-bold cursor-pointer"
					onClick={() => setShow((prev: any) => ({ ...prev, show: !show }))}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
				>
					<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
				</svg>
			</div>
			{children}
		</div>
	);
}
