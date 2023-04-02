const DefaultInterval = 10,
	DefaultDuration = 10;

/**
 * Fade in an HTML element.
 *
 ```js
 let el = document.getElementById("#button");

 fadeIn(el, 600)
     .then(() => {
         console.log("Fade in complete!");
     });
 ```
 * @param element The HTML element to fade
 * @param duration The duration of the fade in milliseconds
 * @param interval The fade animation to update each *n* milliseconds
 * @returns A Promise which resolves after the element fades (after the given duration)
 */

export const fadeIn = (
	element: HTMLElement,
	duration: number = DefaultDuration,
	interval: number = DefaultInterval
): Promise<any> =>
	new Promise((resolve) => {
		let opacity = 0,
			opacityStep = interval / duration;

		let myInterval = setInterval(() => {
			opacity += opacityStep;
			element.style.opacity = opacity.toString();
			if (opacity >= 1) {
				element.style.opacity = "";
				resolve(true);
				clearInterval(myInterval);
			}
		}, interval);
	});

/**
 * Fade out an HTML element.
 *
 ```js
 let el = document.getElementById("#button");

 fadeOut(el, 600)
     .then(() => {
         console.log("Fade out complete!");
     });
 ```
 * @param element The HTML element to fade
 * @param duration The duration of the fade in milliseconds
 * @param interval The fade animation to update each *n* milliseconds
 * @returns A Promise which resolves after the element fades (after the given duration)
 */
export const fadeOut = (
	element: HTMLElement,
	duration: number = DefaultDuration,
	interval: number = DefaultInterval
): Promise<any> =>
	new Promise((resolve) => {
		let opacity = 1,
			opacityStep = interval / duration;

		let myInterval = setInterval(() => {
			opacity -= opacityStep;
			element.style.opacity = opacity.toString();
			if (opacity < 0) {
				element.style.opacity = "";
				element.style.display = "none";
				resolve(true);
				clearInterval(myInterval);
			}
		}, interval);
	});
