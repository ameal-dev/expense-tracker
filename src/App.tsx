import React, { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseInputForm from "./components/ExpenseInputForm";
import { Item } from "./types/Item.model";

const App: React.FC = () => {
	const [items, setItems] = useState<Item[]>([
		{
			id: Math.random(),
			description: "Car Insurance",
			price: "298$",
			date: new Date(2021, 12, 1),
		},
		{
			id: Math.random(),
			description: "Food",
			price: "150$",
			date: new Date(2021, 8, 5),
		},
		{
			id: Math.random(),
			description: "Games",
			price: "399$",
			date: new Date(2021, 6, 20),
		},
		{
			id: Math.random(),
			description: "Toys",
			price: "999$",
			date: new Date(2021, 4, 5),
		},
	]);

	return (
		<div className='App'>
			<ExpenseInputForm setItems={setItems} />
			{/*ExpenseOverview - should include filterByYear, ExpenseAsRatioPerMonth*/}
			<Expenses items={items} />
		</div>
	);
};

export default App;
