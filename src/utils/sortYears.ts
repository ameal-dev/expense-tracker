import { Item } from "../types/Item.model";

export const sortYears = (itemsArray: Item[]) => {
	const yearsArray: number[] = [
		...new Set([
			...itemsArray
				.map((item) => item.date.getFullYear())
				.sort((a, b) => b - a),
		]),
	];
	return yearsArray;
};
