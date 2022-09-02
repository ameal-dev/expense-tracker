import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import { Item } from "../types/Item.model";

interface ExpensesProps {
	filteredItems: Item[];
}

const ExpensesList: React.FC<ExpensesProps> = ({ filteredItems }) => {
	//map all of the expenseItem
	return (
		<ul>
			{filteredItems
				? filteredItems.map((item) => {
						return (
							<li key={item.id}>
								<ExpenseItem item={item} />
							</li>
						);
				  })
				: "Loading..."}
		</ul>
	);
};

export default ExpensesList;
