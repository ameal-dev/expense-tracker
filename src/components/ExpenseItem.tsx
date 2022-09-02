import React from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";
import { Item } from "../types/Item.model";

interface ExpenseItemProps {
	item: Item;
	removeItem: (itemId: number) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item, removeItem }) => {
	return (
		<div className='expense-item'>
			<img
				src='/images/icon_remove.svg'
				alt='remove expense'
				onClick={() => removeItem(item.id!)}
			></img>
			<ExpenseItemDate date={item.date} />
			<h2>{item.description}</h2>
			<div className='expense-item__price'>{item.price}$</div>
		</div>
	);
};

export default ExpenseItem;
