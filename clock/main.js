document.addEventListener("DOMContentLoaded", () => {
	hours = document.querySelector(".hours");
	minutes = document.querySelector(".minutes");
	seconds = document.querySelector(".seconds");

	function setupClock() {
		let time = new Date();
		console.log(time);
		let secs = time.getSeconds();
		let mins = time.getMinutes() * 60;
		let hrs = time.getHours() * 3600;
		seconds.style.animationDelay = "-" + secs + "s";
		minutes.style.animationDelay = "-" + mins + "s";
		hours.style.animationDelay = "-" + hrs + "s";
	}
	setupClock();

})



