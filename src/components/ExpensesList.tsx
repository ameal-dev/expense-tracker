import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import { Item } from "../types/Item.model";

interface ExpensesProps {
	filteredItems: Item[];
	removeItem: (itemId: number) => void;
}

const ExpensesList: React.FC<ExpensesProps> = ({
	filteredItems,
	removeItem,
}) => {
	//map all of the expenseItem
	return (
		<ul>
			{filteredItems
				? filteredItems.map((item) => {
						return (
							<li key={item.id}>
								<ExpenseItem item={item} removeItem={removeItem} />
							</li>
						);
				  })
				: "Loading..."}
		</ul>
	);
};

export default ExpensesList;
