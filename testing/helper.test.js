import * as helperFunc from "../javascript/helper.js";

const { convertToMorse, convertToEnglish, invalidChar, emptySpace, separationSlash } = helperFunc;

describe("convertToMorse() - converts english to morse code", () => {
	it("should return string value", () => {
		expect(typeof convertToMorse("hello")).toBe("string");
		expect(typeof convertToMorse("Please help me!")).toBe("string");
		expect(typeof convertToMorse("19897856")).toBe("string");
	});
	it("should return correct morse code", () => {
		expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
		expect(convertToMorse("I'm 99 years")).toBe(`.. .____. -- ${separationSlash} ____. ____. ${separationSlash} -.-- . .- .-. ...`);
		expect(convertToMorse("What's up?")).toBe(`.-- .... .- - .____. ... ${separationSlash} ..- .--. ..__..`);
	});
	it("should handle - and . properly", () => {
		expect(convertToMorse("-")).toBe(invalidChar);
		expect(convertToMorse(".")).toBe(invalidChar);
		expect(convertToMorse("-.-")).toBe(`${invalidChar} ${invalidChar} ${invalidChar}`);
	});
	it("should handle spacing properly", () => {
		expect(convertToMorse(" ")).toBe(separationSlash);
		expect(convertToMorse("   ")).toBe(`${separationSlash} ${separationSlash} ${separationSlash}`);
		expect(convertToMorse("hi there   what?")).toBe(
			`.... .. ${separationSlash} - .... . .-. . ${separationSlash} ${separationSlash} ${separationSlash} .-- .... .- - ..__..`
		);
	});
	it("should handle invalid characters properly", () => {
		expect(convertToMorse("|")).toBe(invalidChar);
		expect(convertToMorse("あいう")).toBe(`${invalidChar} ${invalidChar} ${invalidChar}`);
	});
});
describe("convertToEnglish() - converts morse code to english", () => {
	it("should return string value", () => {
		expect(typeof convertToEnglish("--..")).toBe("string");
		expect(typeof convertToEnglish("_....")).toBe("string");
		expect(typeof convertToEnglish(".__._.")).toBe("string");
	});
	it("should return correct alphabet or symbol", () => {
		expect(convertToEnglish("--..")).toBe("z");
		expect(convertToEnglish("_....")).toBe("6");
		expect(convertToEnglish(".__._. --. -- .- .. .-..")).toBe("@gmail");
	});
	it("should handle spacing properly", () => {
		expect(convertToEnglish("")).toBe(emptySpace);
		expect(convertToEnglish("--- -.-   ---")).toBe(`ok${emptySpace}${emptySpace}o`);
	});
	it("should return replacement character when passed values are morse code", () => {
		expect(convertToEnglish("eg")).toBe(invalidChar);
		expect(convertToEnglish("my name is?")).toBe(`${invalidChar}${invalidChar}${invalidChar}`);
		expect(convertToEnglish("22 90 @")).toBe(`${invalidChar}${invalidChar}${invalidChar}`);
		expect(convertToEnglish("あいう")).toBe(invalidChar);
	});
});
