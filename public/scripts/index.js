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
		let sliderSectionFirst =
			document.querySelectorAll(".img_sliderSection")[0];
		slider.style.marginLeft = "-200%";
		slider.style.transition = " 800ms";
		setTimeout(()=>{
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
		setTimeout(()=>{
			slider.style.transition = "none";
			slider.insertAdjacentElement("afterbegin", sliderSectionLast);
			slider.style.marginLeft = "-100%";
		}, 800);
	}

	btnRight.addEventListener("click", function () {
		nextLeft();
	});
	btnLeft.addEventListener("click", function () {
		nextRight();
	});

	let play = setInterval(()=>{
		nextLeft();
	}, 5000);

	btnStop.addEventListener("click", function () {
		const id = btnStop.getAttribute("data-id");
		btnStop.classList.toggle("paused");
		clearInterval(play);

		if(btnStop.classList){

		}

		btnStop.innerText = "play_arrow";
	});

	/* ========================================================================= */
	/* 1Funcion para las flechas de desplazamiento delas cards */
	const rightBtnSliderCards = document.querySelectorAll("div#btnsCards-right");
	const leftBtnSliderCards = document.querySelectorAll("div#btnsCards-left");
	const containerCards = document.querySelectorAll("#div_cards--scrolling");

	console.log(rightBtnSliderCards);
	console.log(leftBtnSliderCards);
	console.log(containerCards);
	//scroll left
	rightBtnSliderCards.forEach(btn => {
		btn.addEventListener("click", () => {
			containerCards.forEach(container => {
				container.scrollLeft += 800;	
			})
		});
		
	});
	leftBtnSliderCards.forEach(btn => {
		btn.addEventListener("click", () => {
			containerCards.forEach(container => {
				container.scrollLeft -= 800;	
			})
		});
		
	});
	

	/* ========================================================================= */

	let dd1 = document.getElementById("dd-onclick-modalWindow1");
	let ddModalWindow1 = document.querySelector(".dd-modalWindow1");

	dd1.addEventListener("click", () => {
		ddModalWindowFunction();
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
});
