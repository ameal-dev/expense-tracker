import React from "react";
import Expenses from "./components/Expenses";

const App: React.FC = () => {
	const items = [
		{
			id: Math.random(),
			name: "Car Insurance",
			price: "298$",
			date: new Date(2021, 12, 1),
		},
		{
			id: Math.random(),
			name: "Food",
			price: "150$",
			date: new Date(2021, 8, 5),
		},
		{
			id: Math.random(),
			name: "Games",
			price: "399$",
			date: new Date(2021, 6, 20),
		},
		{
			id: Math.random(),
			name: "Toys",
			price: "999$",
			date: new Date(2021, 4, 5),
		},
	];

	return (
		<div className='App'>
			{/*ExpenseInputForm*/}
			{/*ExpenseOverview*/}
			<Expenses items={items} />
		</div>
	);
};

export default App;
