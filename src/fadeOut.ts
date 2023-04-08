const DefaultDuration = 200;
// const DefaultInterval = 10;

/**
 * Fades out an element over a specified duration.
 *
 * @param {HTMLElement} element - The element to fade out.
 * @param {number} [duration=DefaultDuration] - The duration of the fade-out animation in milliseconds.
 * @returns {Promise<void>} A promise that resolves when the animation is complete.
 *
 * @example
 * let el = document.getElementById("#button");
 *
 * fadeOut(el, 600)
 *     .then(() => {
 *         console.log("Fade out complete!");
 *     });
 *
 * @author Shahab Movahhedi
 * @see {@link https://shmovahhedi.com | Shahab Movahhedi's Website}
 * @see {@link https://github.com/movahhedi/Fading | Fading's Repository}
 *
 * @license MIT
 */
export const fadeOut = (element: HTMLElement, duration: number = DefaultDuration): Promise<void> =>
	new Promise<void>((resolve) => {
		element.style.opacity = "1";
		let start = performance.now();
		function tick(timestamp: number) {
			let runtime = timestamp - start;
			element.style.opacity = (1 - (runtime / duration)).toString();
			if (runtime < duration) {
				requestAnimationFrame(tick);
			} else {
				element.style.display = "none";
				element.style.opacity = "";
				resolve();
			}
		}
		requestAnimationFrame(tick);


		// `setInterval` style
		/*let opacity = 1,
			opacityStep = DefaultInterval / duration;

		let myInterval = setInterval(() => {
			opacity -= opacityStep;
			element.style.opacity = opacity.toString();
			if (opacity < 0) {
				element.style.display = "none";
				element.style.opacity = "";
				resolve();
				clearInterval(myInterval);
			}
		}, DefaultInterval);*/
	});
