import React, { Dispatch, SetStateAction, useState } from "react";
import { Item } from "../types/Item.model";
import "./ExpenseInputForm.css";

interface ExpenseInputFormProps {
	setItems: Dispatch<SetStateAction<Item[]>>;
}

const ExpenseInputForm: React.FC<ExpenseInputFormProps> = ({ setItems }) => {
	const initalState = {
		description: "",
		price: "",
		date: new Date().toISOString().split("T")[0],
	};

	const [input, setInput] = useState(initalState);

	const clearInput = () => {
		setInput({ ...initalState });
	};

	const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (event) => {
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
		clearInput();
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log(event.target);
		setInput({ ...input, [event.target.id]: event.target.value });
	};

	return (
		<div className='form-container'>
			<form onSubmit={submitHandler}>
				<label htmlFor='date'>DATE</label>
				<input
					type='date'
					id='date'
					onChange={handleChange}
					value={input.date}
					required
				/>
				<label htmlFor='description'>DESCRIPTION</label>
				<input
					type='text'
					id='description'
					onChange={handleChange}
					value={input.description}
					required
				/>
				{/*//TODO: Add validation*/}
				<label htmlFor='price'>PRICE [$]</label>
				<input
					type='text'
					id='price'
					value={input.price}
					onChange={handleChange}
					required
				/>
				<button type='submit'>SUBMIT</button>
			</form>
		</div>
	);
};

export default ExpenseInputForm;
