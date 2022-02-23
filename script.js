const quoteJSON =
	"https://raw.githubusercontent.com/11201010/quotes/main/universe-truth-quotes.json";
const quoteText = document.getElementById("text");
const quoteSrc = document.getElementById("src");
const quoteTitle = document.getElementById("title");
const fetchQuote = () => {
	fetch(quoteJSON)
		.then((data) => data.json())
		.then((item) => {
			let n = Math.floor(Math.random() * item.quotes.length);
			quoteText.innerHTML = item.quotes[n].quote;
			quoteSrc.innerHTML = item.quotes[n].src;
			quoteTitle.innerHTML = item.quotes[n].title;
		});
};
fetchQuote();
const bright = document.getElementById("bright");
const ut = document.getElementById("ut");
const insight = document.getElementById("insight");
const html = document.getElementsByTagName("html")[0];
const urlPathJSON =
	"https://raw.githubusercontent.com/11201010/quotes/main/universe-truth-urlPath.json";
const fetchRandomURL = () => {
	fetch(urlPathJSON)
		.then((data) => data.json())
		.then((obj) => {
			let getRandom = (n) => Math.floor(Math.random() * n);
			let nB = getRandom(obj.bPath.length);
			let nU = getRandom(obj.uPath.length);
			let nI = getRandom(obj.iPath.length);
			// console.log(nB + ", " + nU + ", " + nI);
			bright.href =
				"https://light-universe-truth.blogspot.com/2019/08/" +
				obj.bPath[nB] +
				".html";
			ut.href =
				"https://universe-truth-tw.blogspot.com/2021/01/" +
				obj.uPath[nU] +
				".html";
			insight.href =
				"https://insight-into-the-world-tw.blogspot.com/2021/06/" +
				obj.iPath[nI] +
				".html";
		});
};
const setToDefaultURL = () => {
	ut.href = "https://universe-truth-tw.blogspot.com/";
	bright.href = "https://light-universe-truth.blogspot.com/";
	insight.href = "https://insight-into-the-world-tw.blogspot.com/";
};
setToDefaultURL();
// fetchRandomURL();
html.onkeydown = function keycode(event) {
	var x = event.keyCode;
	// console.log(x)
	switch (x) {
		// enter = 13
		case 13:
			fetchQuote();
			break;
		// B = 66
		case 66:
			window.open(bright.href);
			break;
		// D = 68
		case 68:
			setToDefaultURL();
			break;
		// I = 73
		case 73:
			window.open(insight.href);
			break;
		// R = 82
		case 82:
			fetchRandomURL();
			break;
		// U = 85
		case 85:
			window.open(ut.href);
			break;
	}
};
