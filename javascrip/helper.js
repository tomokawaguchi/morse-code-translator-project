import { morseCode } from "./data.js";

const invalidChar = "\uFFFD";
const emptySpace = "\u00A0";

// Handle translation english to morse code
export const convertToMorse = (str) => {
	const morseArrWithSpace = str
		.toUpperCase()
		.split("")
		.map((el) => {
			if (el.toLowerCase() == "-" || el.toLowerCase() == ".") return invalidChar;
			if (el === " ") return emptySpace;
			if (morseCode[el]) return morseCode[el];
			return invalidChar;
		});
	return morseArrWithSpace.join(" ");
};

// Handle translation morse code to english
const entriesArr = Object.entries(morseCode);
const isInList = (value) => {
	const element = entriesArr.filter((entry) => {
		if (entry[1] === value) {
			return entry[0];
		}
	});
	return element.length > 0 ? element[0][0] : undefined;
};

export const convertToEnglish = (str) => {
	const sortedArr = [];
	const charArr = str.split(" ").map((each) => {
		if (isInList(each)) return isInList(each).toLowerCase();
		if (each === " ") return emptySpace;
		return invalidChar;
	});
	console.log({ charArr });
	return charArr.join(" ");
};
