import React, { Dispatch, SetStateAction, useState } from "react";
import { Item } from "../types/Item.model";
import "./ExpenseInputForm.css";

interface ExpenseInputFormProps {
	setItems: Dispatch<SetStateAction<Item[]>>;
	setActiveYear: Dispatch<SetStateAction<string>>;
}

const ExpenseInputForm: React.FC<ExpenseInputFormProps> = ({
	setItems,
	setActiveYear,
}) => {
	const initalState: Item = {
		description: "",
		price: "",
		date: new Date(),
	};

	const [input, setInput] = useState(initalState);

	const clearInput = () => {
		setInput({ ...initalState });
	};

	const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		const newItem: Item = {
			id: Math.random(),
			description: input.description,
			price: input.price,
			date: new Date(input.date),
		};
		setItems((prevState) =>
			[...prevState, newItem].sort((a, b) => Number(b.date) - Number(a.date))
		);
		setActiveYear(newItem.date.getFullYear().toString());
		clearInput();
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setInput({ ...input, [event.target.id]: event.target.value });
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<div className='input-label'>
						<label htmlFor='date'>DATE</label>
						<input
							type='date'
							id='date'
							onChange={handleChange}
							value={input.date.toString()}
							required
						/>
					</div>
					<div className='input-label'>
						<label htmlFor='description'>DESCRIPTION</label>
						<input
							type='text'
							id='description'
							placeholder='description'
							onChange={handleChange}
							value={input.description}
							required
						/>
					</div>
					<div className='input-label'>
						<label htmlFor='price'>PRICE [$]</label>
						<input
							type='number'
							id='price'
							value={input.price}
							placeholder='Price'
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className='button-container'>
					<button type='submit'>SUBMIT</button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseInputForm;
