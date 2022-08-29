import React from "react";

interface ExpenseItemDateProps {
	date: Date;
}

const ExpenseItemDate: React.FC<ExpenseItemDateProps> = (props) => {
	return (
		<div className='date-container'>
			<div>DAY</div>
			<div>MONTH</div>
			<div>YEAR</div>
		</div>
	);
};

export default ExpenseItemDate;
