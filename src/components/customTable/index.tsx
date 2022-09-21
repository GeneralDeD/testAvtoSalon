import React, { FC } from "react";
import st from "./customTable.module.scss";

interface ICustomTable {
	table: JSX.Element;
}

const CustomTable: FC<ICustomTable> = ({ table }) => {
	return <div className={st.customTable}>{table}</div>;
};

export default CustomTable;
