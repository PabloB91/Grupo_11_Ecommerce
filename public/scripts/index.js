document.addEventListener("DOMContentLoaded", function () {
	const slider = document.querySelector("#slider--inner");
	if (!slider) {
		console.log("No se encontró el elemento #slider--inner en el DOM.");
		return; // salir de la función si el elemento no se encontró
	}

	let sliderSection = document.querySelectorAll(".img_sliderSection");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];

	const btnLeft = document.querySelector("#btn-left");
	const btnRight = document.querySelector("#btn-right");
	const btnStop = document.querySelector("#div__btn-pause-play span");

	slider.insertAdjacentElement("afterbegin", sliderSectionLast);
	function nextLeft() {
		let sliderSectionFirst = document.querySelectorAll(".img_sliderSection")[0];
		slider.style.marginLeft = "-200%";
		slider.style.transition = " 800ms";
		setTimeout(function () {
			slider.style.transition = "none";
			slider.insertAdjacentElement("beforeend", sliderSectionFirst);
			slider.style.marginLeft = "-100%";
		}, 800);
	}
	function nextRight() {
		let sliderSection = document.querySelectorAll(".img_sliderSection");
		let sliderSectionLast = sliderSection[sliderSection.length - 1];
		slider.style.marginLeft = "0";
		slider.style.transition = " 800ms";
		setTimeout(function () {
			slider.style.transition = "none";
			slider.insertAdjacentElement("afterbegin", sliderSectionLast);
			slider.style.marginLeft = "-100%";
		}, 800);
	}
	btnStop.addEventListener("click", function () {
		const id = btnStop.getAttribute("data-id");

		//llamar a un servcio
		//toggleLike(id)
		if (btnStop.classList.contains("paused")) {
			btnStop.classList.toggle("paused");
			btnStop.innerText = "play_arrow";
		} else {
			setInterval(nextLeft(), 5000);
			btnStop.classList.add("paused");
			btnStop.innerText = "pause";

		}
	});
	btnRight.addEventListener("click", function () {
		nextLeft();
	});
	btnLeft.addEventListener("click", function () {
		nextRight();
	});

	/* ========================================================================= */
	/* 1Funcion para las flechas de desplazamiento delas cards */
	const rightBtnSliderCards = document.querySelector("div#btnsCards-right");
	const leftBtnSliderCards = document.querySelector("div#btnsCards-left");
	const containerCards = document.querySelector("#div_cards--scrolling");
	//scroll left
	rightBtnSliderCards.addEventListener("click", () => {
		containerCards.scrollLeft += 800;
	});
	leftBtnSliderCards.addEventListener("click", () => {
		containerCards.scrollLeft -= 800;
	});

	/* ========================================================================= */

})


let dd1 = document.getElementById("dd-onclick-modalWindow1");
let ddModalWindow1 = document.querySelector(".dd-modalWindow1");

dd1.addEventListener("click", () => {
	ddModalWindowFunction()
});
function ddModalWindowFunction() {
	if (ddModalWindow1.style.display === "flex") {
		ddModalWindow1.style.display = "none";
		ddModalWindow1.style.animation = ".5s ddHideAnimation linear";
	} else {
		ddModalWindow1.style.display = "flex";
		ddModalWindow1.style.animation = ".5s ddAnimation linear";
	}
}