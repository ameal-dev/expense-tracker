import React from "react";
import "./ExpenseItemDate.css";

interface ExpenseItemDateProps {
	date: Date;
}

const ExpenseItemDate: React.FC<ExpenseItemDateProps> = ({ date }) => {
	return (
		<div className='date-container'>
			<div className='month'>
				{date.toLocaleDateString("en-US", { month: "long" })}
			</div>
			<div className='year'>{date.getFullYear()}</div>
			<div className='day'>{date.getDate()}</div>
		</div>
	);
};

export default ExpenseItemDate;
