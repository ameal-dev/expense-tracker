import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface Item {
	id?: number;
	description: string;
	price: string;
	date: Date;
}

interface ExpensesProps {
	items: Item[];
}

const Expenses: React.FC<ExpensesProps> = ({ items }) => {
	//map all of the expenseItem
	return (
		<ul>
			{items.map((item) => {
				return (
					<li key={item.id}>
						<ExpenseItem item={item} />
					</li>
				);
			})}
		</ul>
	);
};

export default Expenses;
