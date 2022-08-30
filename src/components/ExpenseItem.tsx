import React from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

interface Item {
	id?: number;
	description: string;
	price: string;
	date: Date;
}

interface ExpenseItemProps {
	item: Item;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item }) => {
	return (
		<div className='expense-item'>
			<ExpenseItemDate date={item.date} />
			<h2>{item.description}</h2>
			<div className='expense-item__price'>{item.price}</div>
		</div>
	);
};

export default ExpenseItem;
