import "./ExpensesOverview.css";
import React from "react";
import { Item } from "../types/Item.model";
import { sortYears } from "../utils/sortYears";

interface ExpensesOverviewProps {
	items: Item[];
	handleSelect: React.ChangeEventHandler<HTMLSelectElement>;
}

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

const ExpensesOverview: React.FC<ExpensesOverviewProps> = ({
	items,
	handleSelect,
}) => {
	const yearsWithExpenses = (itemsArray: Item[]) => {
		const uniqueYearsArray = sortYears(itemsArray);
		return uniqueYearsArray.map((year, idx) => (
			<option key={idx} value={year}>
				{year}
			</option>
		));
	};

	return (
		<div className='overview-container'>
			<select onChange={handleSelect}>{yearsWithExpenses(items)}</select>
			{months.map((month, idx) => {
				return (
					<div className='progress-container' key={idx}>
						<progress max='100' value='50' className='progress-bar'></progress>
						<div className='overview__month'>{month}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ExpensesOverview;
