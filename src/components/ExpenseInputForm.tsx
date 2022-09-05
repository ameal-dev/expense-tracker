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
	const initalInputState: Item = {
		description: "",
		price: "",
		date: new Date(),
	};
	const [showForm, setShowForm] = useState(false);
	const [input, setInput] = useState(initalInputState);

	// //TODO: Implement moemoization to reduce/remove unecessary renders.
	// console.log("render inputform...");

	const clearInput = () => {
		setInput({ ...initalInputState });
	};

	const handleShowForm = () => {
		setShowForm((formVisible) => !formVisible);
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

	return showForm ? (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<div className='input-label'>
						<label htmlFor='date'></label>
						<input
							type='date'
							id='date'
							onChange={handleChange}
							value={input.date.toString()}
							required
						/>
						<div className='input-shadow'></div>
					</div>
					<div className='input-label'>
						<label htmlFor='description'></label>
						<input
							type='text'
							id='description'
							placeholder='description'
							onChange={handleChange}
							value={input.description}
							required
						/>
						<div className='input-shadow'></div>
					</div>
					<div className='input-label'>
						<label htmlFor='price'></label>
						<input
							type='number'
							id='price'
							value={input.price}
							placeholder='Price'
							onChange={handleChange}
							required
						/>
						<div className='input-shadow'></div>
					</div>
				</div>
				<div className='button-container'>
					<button onClick={handleShowForm} className='button-56'>
						CANCEL
					</button>
					<button type='submit' className='button-56'>
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	) : (
		<div className='form-container'>
			<button className='button-56' onClick={handleShowForm}>
				ADD EXPENSE
			</button>
		</div>
	);
};

export default ExpenseInputForm;
