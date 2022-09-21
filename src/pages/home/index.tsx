import { FC, useState } from "react";
import CustomButton from "../../components/customButton";
import CustomModal from "../../components/customModal";
import CustomTable from "../../components/customTable";
import { deleteIcon, editIcon, plusIcon } from "../../components/icons";
import Loading from "../../components/loading";
import { useDeleteCarMutation, useGetCarsQuery } from "../../services/carsService";
import styles from "./home.module.scss";

interface ICarsPage {
	levelsData: { title: string; value: string; mark: number }[];
	voice: string;
	image: string;
	modal: {
		show: boolean;
		type: "add" | "edit";
		// data?: IWord;
	};
	deleteModal: {
		show: boolean;
		id?: string;
	};
}

const Home: FC = () => {
	const [pagin, setPagin] = useState({ limit: 6, page: 1 }),
		defaultStateModal: ICarsPage["modal"] = {
			show: false,
			type: "add",
		},
		[modal, setModal] = useState<ICarsPage["modal"]>(defaultStateModal),
		[deleteModal, setDeleteModal] = useState<ICarsPage["deleteModal"]>({ show: false }),
		{ data, isLoading, isError } = useGetCarsQuery(pagin),
		[deleteCar, { isLoading: deleteLoading }] = useDeleteCarMutation();

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const handleDeleteCar = () => {
		if (deleteModal.id) {
			setDeleteModal({ show: false });
			deleteCar(deleteModal.id);
		}
	};

	if (isLoading || deleteLoading) return <Loading />;

	return (
		<div className={`${styles.home} dark:bg-slate-700`}>
			<div className={styles.home__header}>
				<div className={styles.home__header__title}>Mashinalar</div>
				<div className={styles.home__header__buttons}>
					<button className={styles.home__header__buttons__item}>
						{plusIcon} Kategoriya qo'shish
					</button>
					<button
						className={styles.home__header__buttons__item}
						onClick={() =>
							setModal({
								show: true,
								type: "add",
							})
						}
					>
						{plusIcon} Mashina qo'shish
					</button>
				</div>
			</div>
			<div className={styles.home__table}>
				<CustomTable
					table={
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>Markasi</th>
									<th>Uzatmalar qutisi</th>
									<th>Tanirovkasi</th>
									<th>Motor</th>
									<th>Yili</th>
									<th>Rangi</th>
									<th>Yurgan yo'li</th>
									<th>Boshqarish</th>
								</tr>
							</thead>
							<tbody>
								{data?.data?.map((item, i) => (
									<tr key={item._id}>
										<td>{i + 1}.</td>
										<th>{item?.marka?.name}</th>
										<th>{item.gearbok}</th>
										<th>{item.tonirovka}</th>
										<th>{item.motor}</th>
										<th>{item.year}</th>
										<th>{item.color}</th>
										<th>{item.distance}km</th>
										<th>
											<div>
												{editIcon}
												<span onClick={() => setDeleteModal({ show: true, id: item._id })}>
													{deleteIcon}
												</span>
											</div>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					}
				/>
			</div>

			<CustomModal title="Mashina qo’shish" show={modal.show} setShow={setModal} size="max-w-3xl">
				<form onSubmit={handleSubmit}>
					<div>
						<div>
							<label>Markasi</label>
							<select>
								<option>CHEVROLET</option>
							</select>
						</div>
						<div>
							<label>Motor</label>
							<input />
						</div>
						<div>
							<label>Rangi</label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
						<div>
							<label></label>
							<input />
						</div>
					</div>
					<div className="flex justify-end">
						<CustomButton
							type="button"
							title="Cancel"
							btnType="cancel"
							className="mr-4 flex items-center py-3 px-4 font-bold text-white bg-blue-600 rounded-xl"
							onClick={() => setModal(defaultStateModal)}
						/>
						<CustomButton
							type="submit"
							title="Delete"
							btnType="delete"
							className="flex items-center py-3 px-4 font-bold text-white bg-red-600 rounded-xl"
						/>
					</div>
				</form>
			</CustomModal>

			<CustomModal
				title="Ishonchingiz komilmi?"
				show={deleteModal.show}
				setShow={setDeleteModal}
				size="max-w-md"
			>
				<div className="flex justify-end">
					<CustomButton
						type="button"
						title="Bekor qilish"
						btnType="cancel"
						className="mr-4 flex items-center py-3 px-4 font-bold text-white bg-blue-600 rounded-xl"
						onClick={() => setDeleteModal({ show: false })}
					/>
					<CustomButton
						type="button"
						title="O'chirish"
						btnType="delete"
						className="flex items-center py-3 px-4 font-bold text-white bg-red-600 rounded-xl"
						onClick={handleDeleteCar}
					/>
				</div>
			</CustomModal>
		</div>
	);
};

export default Home;
