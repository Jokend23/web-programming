var slideIndex = 0;
var slidesArray = Array.prototype.slice.call(document.querySelectorAll(".item"), 0);

function checkSliderButton() {
	var rightArrow = document.querySelector(".right-arrow");
	var leftArrow = document.querySelector(".left-arrow");

	if (slideIndex == 3) {
		rightArrow.style.display = "None";
	} else {
		rightArrow.style.display = "block";
	}

	if (slideIndex == 0) {
		leftArrow.style.display = "None";
	} else {
		leftArrow.style.display = "block";
	} 

}

// function appendSlider() {
// 	firstElement = slidesArray.shift();
// 	firstElement[0].style.left = (parseInt(firstElement[0].style.left.style.left || getComputedStyle(firstElement[0].style.left)['left']) + 765) + 'px';
// 	firstElement.style.left = '0';

// 	slidesArray.push(lastElement);
// 	document.querySelector(".slider").appendChild(firstElement);
// }

// function prependSlider() {
// 	lastElement = slidesArray.pop();
// 	// lastElement[slidesArray.lenght - 1].style.left = (parseInt(lastElement[slidesArray.lenght - 1].style.left || getComputedStyle(lastElement[slidesArray.lenght - 1].style.left['left']) + -765) + 'px';
// 	lastElement.style.left = '0';

// 	slidesArray.unshift(lastElement);
// 	document.querySelector(".slider").prependChild(lastElement);
// }

function plusSlide() {
    var i;

    for (slider of slidesArray) {
    	slider.style.left = (parseInt(slider.style.left || getComputedStyle(slider)['left']) + -765) + 'px';
    }
	slideIndex += 1;

	// setTimeout(appendSlider, 700);

	checkSliderButton();
}

function minusSlide() {
    var i;

	for (slider of slidesArray) {
    	slider.style.left = (parseInt(slider.style.left || getComputedStyle(slider)['left']) + 765) + 'px';
    }
	slideIndex -= 1;

	// setTimeout(prependSlider, 700);

	checkSliderButton();
}

checkSliderButton();