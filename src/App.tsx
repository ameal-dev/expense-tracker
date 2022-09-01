import React, { useState, useEffect } from "react";
import ExpensesList from "./components/ExpensesList";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ExpensesOverview from "./components/ExpensesOverview";
import { Item } from "./types/Item.model";

const App: React.FC = () => {
	//TODO: implement single-source-of-truth for state management

	//simulate a Fetch-operation of data
	const [items, setItems] = useState<Item[]>([
		{
			id: Math.random(),
			description: "Car Insurance",
			price: "298",
			date: new Date(2022, 11, 1),
		},
		{
			id: Math.random(),
			description: "Food",
			price: "150",
			date: new Date(2021, 8, 5),
		},
		{
			id: Math.random(),
			description: "Games",
			price: "399",
			date: new Date(2021, 6, 20),
		},
		{
			id: Math.random(),
			description: "Toys",
			price: "999",
			date: new Date(2021, 4, 5),
		},
	]);
	const initalFilteredItems = [...items];
	const [filteredItems, setFilteredItems] =
		useState<Item[]>(initalFilteredItems);
	const [activeYear, setActiveYear] = useState("2022");

	useEffect(() => {
		setFilteredItems(
			items.filter((item) => item.date.getFullYear().toString() === activeYear)
		);
	}, [activeYear, items]);

	const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setActiveYear(event.target.value);
		setFilteredItems(
			items.filter((item) => item.date.getFullYear().toString() === activeYear)
		);
	};

	return (
		<div className='App'>
			<ExpenseInputForm setItems={setItems} />
			<ExpensesOverview items={items} handleSelect={handleSelect} />
			<ExpensesList items={filteredItems} />
		</div>
	);
};

export default App;
