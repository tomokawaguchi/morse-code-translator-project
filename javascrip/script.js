import { createAndAttachElement, addDefaultText, getEnteredValue } from "./dom.js";
import { convertToMorse } from "./helper.js";

const inputField = document.querySelector("#input-text-area");
const triggerBtn = document.querySelector("#trigger-btn");
const resetBtn = document.querySelector("#reset-btn");
const outputWrapper = document.querySelector("#output-wrapper");

let result = "";

// Show case the default text on load
addDefaultText();

// Handle the trigger button click event listener
triggerBtn.addEventListener("click", () => {
	const enteredValue = getEnteredValue();

	// Clear the default text
	outputWrapper.innerHTML = "";

	// Obtained the translation
	result = convertToMorse(enteredValue);

	// Showcase the result
	createAndAttachElement("p", "result", result, outputWrapper);
});

// Handle the reset button click event listener
resetBtn.addEventListener("click", () => {
	// Clear the input field
	inputField.value = "";

	// Clear the output filed and add default text
	outputWrapper.innerHTML = "";
	addDefaultText();
});
