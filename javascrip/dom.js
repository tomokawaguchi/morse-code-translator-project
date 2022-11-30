// Dom related functions
export const createElement = (el, className, text) => {
	const element = document.createElement(el);
	if (className) element.className = className;
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
};

// Add default text to the output area
export const addDefaultText = () => {
	const defaultText = "No result yet  :(";
	const para = createElement("p", "default", defaultText);
	return para;
};

// Obtain entered user value from the input
export const getEnteredValue = () => {
	const textInput = document.querySelector("#input-text-area");
	const enteredValue = textInput.value;

	return enteredValue;
};
