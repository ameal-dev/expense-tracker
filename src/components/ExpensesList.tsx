import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import { Item } from "../types/Item.model";

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
