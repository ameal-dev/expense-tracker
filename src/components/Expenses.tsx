import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface Item {
	id: number;
	name: string;
	price: string;
	date: Date;
}

interface ExpensesProps {
	items: Item[];
}

const Expenses: React.FC<ExpensesProps> = (props) => {
	//map all of the expenseItem
	return (
		<ul>
			{props.items.map((item) => {
				return (
					<li>
						<ExpenseItem item={item} />
					</li>
				);
			})}
		</ul>
	);
};

export default Expenses;
