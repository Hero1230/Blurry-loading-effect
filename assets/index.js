const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loadingPercent = 0;
let blurValue = 100;

const intervalLoading = setInterval(() => {
	loadingPercent++;
	loadText.textContent = loadingPercent + "%";
	bg.style.filter = `blur(${blurValue}px)`;
	blurValue--;
	if (loadingPercent === 100) {
		clearInterval(intervalLoading);
		loadText.style.opacity = 0;
	}
}, 30);
