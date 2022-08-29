import React from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

interface Item {
	id: number;
	name: string;
	price: string;
	date: Date;
}

interface ExpenseItemProps {
	item: Item;
}

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
	return (
		<div className='expense-item'>
			<ExpenseItemDate date={props.item.date} />
			<h2>{props.item.name}</h2>
			<div className='expense-item__price'>{props.item.price}</div>
		</div>
	);
};

export default ExpenseItem;
