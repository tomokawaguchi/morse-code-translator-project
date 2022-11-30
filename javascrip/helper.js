import { morseCode } from "./data.js";

// Handle translation english to morse code
export const convertToMorse = (str) => {
	return str
		.toUpperCase()
		.split("")
		.map((el) => {
			return morseCode[el] ? morseCode[el] : el;
		})
		.join(" ");
};

// Handle translation morse code english
const entriesArr = Object.entries(morseCode);

export const convertToEnglish = (str) => {
	const charArr = str
		.split(" ")
		.map((el) => {
			return entriesArr.filter((each) => {
				if (each[1] === el) {
					return each[0];
				}
			});
		})
		.map((each) => each[0][0].toLowerCase())
		.join("");
	console.log(charArr);
	return charArr;
};
