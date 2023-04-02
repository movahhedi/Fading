# Fading
fadeIn & fadeOut HTML elements as a Promise, with ~500 bytes.

### fadeIn
```js
let el = document.getElementById("#button");

fadeIn(el, 600)
	.then(() => {
		console.log("Fade in complete!");
	});
```

### fadeOut
```js
let el = document.getElementById("#button");

fadeOut(el, 600)
	.then(() => {
		console.log("Fade out complete!");
	});
```
