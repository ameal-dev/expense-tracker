export const randomizeExpenseItems = (amount: number) => {
	let emptyArray = new Array(amount).fill(undefined);

	function generateRandomDate(start: Date, end: Date) {
		return new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime())
		);
	}

	const expenseArray = emptyArray.map((elem, idx) => {
		const randomPrice = Math.floor(Math.random() * 100 + 1).toString();
		const randomDate = generateRandomDate(
			new Date(2019, 0, 0),
			new Date(2022, 11, 30)
		);
		const item = {
			id: idx,
			description: "Random Expense Item",
			price: randomPrice,
			date: randomDate,
		};

		return item;
	});

	return expenseArray;
};
