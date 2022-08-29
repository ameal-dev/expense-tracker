import React from "react";

interface ExpenseItemDateProps {
	date: Date;
}

const ExpenseItemDate: React.FC<ExpenseItemDateProps> = (props) => {
	return (
		<div className='date-container'>
			<div>{props.date.getDate()}</div>
			<div>{props.date.toLocaleDateString("en-US", { month: "long" })}</div>
			<div>{props.date.getFullYear()}</div>
		</div>
	);
};

export default ExpenseItemDate;
