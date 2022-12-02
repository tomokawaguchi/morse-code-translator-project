import { createElement, addDefaultText, getEnteredValue } from "./dom.js";
import { convertToMorse, convertToEnglish } from "./helper.js";

const inputField = document.querySelector("#input-text-area");
const triggerBtn = document.querySelector("#trigger-btn");
const resetBtn = document.querySelector("#reset-btn");
const outputWrapper = document.querySelector("#output-wrapper");
const swapBtn = document.querySelector("#swap-btn");
const textsArr = ["English", "Morse Code"];

let isTranslatedToMorse = true;
let result = "";

// Show case the default text on load
outputWrapper.appendChild(addDefaultText());

// Handle language swap click button
swapBtn.addEventListener("click", () => {
	const swapText = document.querySelector(".text-swap");
	const left = swapText.querySelector(".left-lang");
	const right = swapText.querySelector(".right-lang");
	const swapIcon = swapBtn.querySelector(".icon-exchange");

	left.innerHTML = "";
	right.innerHTML = "";
	outputWrapper.innerHTML = "";
	inputField.value = "";
	outputWrapper.appendChild(addDefaultText());

	if (isTranslatedToMorse) {
		isTranslatedToMorse = false;
		left.innerHTML = textsArr[1];
		right.innerHTML = textsArr[0];
		swapIcon.style.animation = "spin .8s ease-in-out";
	} else {
		isTranslatedToMorse = true;
		left.innerHTML = textsArr[0];
		right.innerHTML = textsArr[1];
		swapIcon.style.animation = "spinReverse .8s ease-in-out";
	}
});

// Handle the trigger button click event listener
triggerBtn.addEventListener("click", () => {
	const enteredValue = getEnteredValue();

	// Clear the default text
	outputWrapper.innerHTML = "";

	// Obtained the translation
	if (isTranslatedToMorse) {
		result = convertToMorse(enteredValue);
	} else {
		result = convertToEnglish(enteredValue);
	}

	// Showcase the result
	const resultEl = createElement("p", "result", result);
	outputWrapper.appendChild(resultEl);
});

// Handle the reset button click event listener
resetBtn.addEventListener("click", () => {
	// Clear the input field
	inputField.value = "";

	// Clear the output filed and add default text
	outputWrapper.innerHTML = "";
	outputWrapper.appendChild(addDefaultText());
});
