export interface Item {
	id?: number | undefined;
	description: string;
	price: string;
	date: Date;
}

function wrapInArray<Type>(input: Type): Type[] {
	return [input];
}

wrapInArray(["test,", "test"]);

const wrapInArray2 = <Type>(input: Type): Type[] => {
	return [input];
};

wrapInArray2("test");
