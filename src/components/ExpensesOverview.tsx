import "./ExpensesOverview.css";
import React from "react";
import { Item } from "../types/Item.model";

interface ExpensesOverviewProps {
	items: Item[];
	handleSelect: React.ChangeEventHandler<HTMLSelectElement>;
}

const sortedYearsArray = (itemsArray: Item[]) => {
	const yearsArray: number[] = [
		...new Set([
			...itemsArray
				.map((item) => item.date.getFullYear())
				.sort((a, b) => a + b),
		]),
	];

	return yearsArray;
};

const populateYearOptions = (itemsArray: Item[]) => {
	const uniqueYearsArray = sortedYearsArray(itemsArray);

	return uniqueYearsArray.map((year, idx) => (
		<option key={idx} value={year}>
			{year}
		</option>
	));
};

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
	// const [selectedYear, setSelectedYear] = useState<string>(
	// 	sortedYearsArray(items)[0].toString()
	// );
	// const [filteredExpenses, setFilteredExpenses] = useState(items);

	return (
		<div className='overview-container'>
			<select onChange={handleSelect}>{populateYearOptions(items)}</select>
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
