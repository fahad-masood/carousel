const slides = document.getElementsByClassName("carousel-item");
let slideCount = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);
document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }
}

function moveToPrevSlide() {
  hideAllSlides();
  if (slideCount === 0) {
    slideCount = totalSlides - 1;
  } else {
    slideCount--;
  }
  slides[slideCount].classList.add("visible");
  console.log(slideCount);
}

function moveToNextSlide() {
  hideAllSlides();
  if (slideCount === totalSlides - 1) {
    slideCount = 0;
  } else {
    slideCount++;
  }
  slides[slideCount].classList.add("visible");
}
