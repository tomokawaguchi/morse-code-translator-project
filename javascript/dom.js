// Dom related functions
export const createAndAttachElement = (el, className, text, parent) => {
	const element = document.createElement(el);
	if (className) element.classList.add(className);
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	parent.appendChild(element);
};

// Add default text to the output area
export const outputDefaultText = () => {
	const defaultText = "No result yet  :(";
	createAndAttachElement("p", "default", defaultText, document.querySelector("#output-wrapper"));
};

// Obtain entered user value from the input
export const getEnteredValue = () => {
	const textInput = document.querySelector("#input-text-area");
	const enteredValue = textInput.value;

	return enteredValue;
};

// Set innerHTML content
export const updateInnerHTML = (el, value) => {
	el.innerHTML = value;
};
