// Dom related functions
export const createAndAttachElement = (el, className, text, parent) => {
	const element = document.createElement(el);
	if (className) element.className = className;
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	parent.appendChild(element);
};

// Add default text to the output area
export const addDefaultText = () => {
	const defaultText = "No result yet  :(";
	const outputWrapper = document.querySelector("#output-wrapper");
	createAndAttachElement("p", "default", defaultText, outputWrapper);
};

// Obtain entered user value from the input
export const getEnteredValue = () => {
	const textInput = document.querySelector("#input-text-area");
	const enteredValue = textInput.value;

	return enteredValue;
};
