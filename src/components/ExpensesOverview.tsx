import "./ExpensesOverview.css";
import React from "react";
import { Item } from "../types/Item.model";

interface ExpensesOverviewProps {
	items: Item[];
}

const ExpensesOverview: React.FC<ExpensesOverviewProps> = ({ items }) => {
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	// const [year,setYear] = useState()

	return (
		<div className='overview-container'>
			<select>
				<option>2022</option>
				<option>2021</option>
				<option>2020</option>
				<option>2019</option>
			</select>
			{months.map((month) => {
				return (
					<div className='progress-container'>
						<progress max='100' value='50' className='progress-bar'></progress>
						<div className='overview__month'>{month}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ExpensesOverview;
