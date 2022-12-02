import * as helperFunc from "../javascript/helper.js";

const { convertToMorse, isInList, convertToEnglish, invalidChar, emptySpace } = helperFunc;

describe("isInList() test - checks if a given value exists in the morse code array", () => {
	it("should return the alphabet or symbol when valid morse code is passed", () => {
		expect(isInList("....")).toBe("H");
		expect(isInList(".____")).toBe("1");
		expect(isInList("_.._.")).toBe("/");
	});
	it("should return undefined when invalid value is passed", () => {
		expect(isInList("ac")).toBe(undefined);
		expect(isInList("33")).toBe(undefined);
		expect(isInList(true)).toBe(undefined);
		expect(isInList("--...")).toBe(undefined);
	});
});
describe("convertToMorse() - converts english to morse code", () => {
	it("should return string value", () => {
		expect(typeof convertToMorse("hello")).toBe("string");
		expect(typeof convertToMorse("Please help me!")).toBe("string");
		expect(typeof convertToMorse("19897856")).toBe("string");
	});
	it("should return correct morse code", () => {
		expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
		expect(convertToMorse("I'm 99 years")).toBe(`.. .____. -- ${emptySpace} ____. ____. ${emptySpace} -.-- . .- .-. ...`);
		expect(convertToMorse("What's up?")).toBe(`.-- .... .- - .____. ... ${emptySpace} ..- .--. ..__..`);
	});
	it("should handle - and . properly", () => {
		expect(convertToMorse("-")).toBe(invalidChar);
		expect(convertToMorse(".")).toBe(invalidChar);
		expect(convertToMorse("-.-")).toBe(`${invalidChar} ${invalidChar} ${invalidChar}`);
	});
	it("should handle spacing properly", () => {
		expect(convertToMorse(" ")).toBe(emptySpace);
		expect(convertToMorse("   ")).toBe(`${emptySpace} ${emptySpace} ${emptySpace}`);
		expect(convertToMorse("hi there   what?")).toBe(
			`.... .. ${emptySpace} - .... . .-. . ${emptySpace} ${emptySpace} ${emptySpace} .-- .... .- - ..__..`
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
		expect(convertToEnglish(".__._.")).toBe("@");
	});
	it("should handle spacing properly", () => {
		expect(convertToEnglish("")).toBe(emptySpace);
		expect(convertToEnglish("--- -.-   ---")).toBe(`o k ${emptySpace} ${emptySpace} o`);
	});
	it("should return replacement character when passed values are morse code", () => {
		expect(convertToEnglish("eg")).toBe(invalidChar);
		expect(convertToEnglish("my name is?")).toBe(`${invalidChar} ${invalidChar} ${invalidChar}`);
		expect(convertToEnglish("22 90 @")).toBe(`${invalidChar} ${invalidChar} ${invalidChar}`);
		expect(convertToEnglish("あいう")).toBe(invalidChar);
	});
});
