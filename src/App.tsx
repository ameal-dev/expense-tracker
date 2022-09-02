import React, { useState, useEffect } from "react";
import ExpensesList from "./components/ExpensesList";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpensesOverview from "./components/ExpensesOverview";
import { Item } from "./types/Item.model";
import { randomizeExpenseItems } from "./utils/randomizeExpenseItems";
import { sortYears } from "./utils/sortYears";

function latestYear(items: Item[]) {
	return sortYears(items)[0].toString();
}

const App: React.FC = () => {
	const [items, setItems] = useState<Item[]>(randomizeExpenseItems(500));
	const [filteredItems, setFilteredItems] = useState<Item[]>();
	const [activeYear, setActiveYear] = useState(latestYear(items));

	useEffect(() => {
		setFilteredItems(
			items
				.filter((item) => item.date.getFullYear().toString() === activeYear)
				.sort((a, b) => b.date.getTime() - a.date.getTime())
		);
	}, [activeYear, items]);

	useEffect(() => {
		const monthArray = new Array(12).fill(0);
		if (filteredItems) {
			filteredItems.forEach((item) => {
				monthArray[item.date.getMonth()] =
					monthArray[item.date.getMonth()] + +item.price;
			});
		}
	}, [filteredItems]);

	const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setActiveYear(event.target.value);
	};

	return (
		<div className='App'>
			<ExpenseInputForm setItems={setItems} />
			<ExpensesOverview items={items} handleSelect={handleSelect} />
			<ExpensesList filteredItems={filteredItems ? filteredItems : []} />
		</div>
	);
};

export default App;
