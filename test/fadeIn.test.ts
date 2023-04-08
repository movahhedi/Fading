import { fadeIn } from "../src/fadeIn";

describe("fadeIn", () => {
	it("fades in an element over a specified duration", async () => {
		// Enable fake timers
		jest.useFakeTimers();

		// Create a mock element
		const element = document.createElement("div");
		element.style.opacity = "0";
		element.style.display = "none";
		document.body.appendChild(element);

		// Call the fadeIn function
		const fadeInPromise = fadeIn(element, 1000);

		// Advance the animation to 0.5 seconds
		jest.advanceTimersByTime(500);

		// Check that the element's opacity has been updated
		expect(+element.style.opacity).toBeCloseTo(0.5);

		// Advance the animation to completion
		jest.advanceTimersByTime(500);

		// Advance the timers by a small additional amount to ensure that the promise resolves
		jest.advanceTimersByTime(10);

		await fadeInPromise;

		// Check that the element's opacity and display properties have been updated
		expect(element.style.opacity).toBe("");
		expect(element.style.display).toBe("block");

		// Disable fake timers
		jest.useRealTimers();
	});
});
