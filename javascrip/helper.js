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
