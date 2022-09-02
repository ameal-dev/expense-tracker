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
				src='/images/icon_remove2.svg'
				alt='remove expense'
				//? Is there a better way to ensure that function is not declared for every item?
				onClick={() => removeItem(item.id!)}
			></img>
			<ExpenseItemDate date={item.date} />
			<h2>{item.description}</h2>
			<div className='expense-item__price'>{item.price}$</div>
		</div>
	);
};

export default ExpenseItem;
