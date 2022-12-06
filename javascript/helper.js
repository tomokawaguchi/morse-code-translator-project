import { morseCode as engDictionaryArr } from "./data.js";
const morseDictionaryArr = Object.entries(engDictionaryArr).reduce((acc, curr) => {
	const [key, value] = curr;
	acc[value] = key;
	return acc;
}, {});

export const invalidChar = "\uFFFD";
export const separationSlash = "/";
export const emptySpace = "\u00A0";

export const convertToMorse = (str) => {
	const result = str
		.toUpperCase()
		.split("")
		.map((el) => {
			if (el.toLowerCase() == "-" || el.toLowerCase() == ".") return invalidChar;
			if (el === " ") return separationSlash;
			if (engDictionaryArr[el]) return engDictionaryArr[el];
			return invalidChar;
		});

	return result.join(" ");
};

export const convertToEnglish = (str) => {
	const result = str.split(" ").map((el) => {
		if (morseDictionaryArr[el]) return morseDictionaryArr[el].toLowerCase();
		if (el === "") return emptySpace;

		return invalidChar;
	});

	return result.join("");
};
