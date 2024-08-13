const slides = document.querySelectorAll(".feedback__slider");
const carousel = document.querySelectorAll(".carousel__img");
const leftArrow = document.querySelector(".left__arrow");
const rightArrow = document.querySelector(".right__arrow");

let currentSlide = 0,
    currentActive = 0,
    timer;

window.onload = function () {
    function showSlide(slide) {
        for (let i = 0; i < carousel.length; i++) {
            slides[i].classList.remove("active__slider");
            carousel[i].classList.remove("active__img");
        }

        if (slide < 0) {
            slide = currentSlide = slides.length - 1;
        }

        if (slide > slides.length - 1) {
            slide = currentSlide = 0;
        }

        slides[slide].classList.add("active__slider");
        carousel[slide].classList.add("active__img");

        currentActive = currentSlide;

        clearTimeout(timer);
        timer = setTimeout(function () {
            showSlide((currentSlide += 1));
        }, 3000);
    }

    leftArrow.addEventListener("click", function () {
        showSlide((currentSlide -= 1));
    });

    rightArrow.addEventListener("click", function () {
        showSlide((currentSlide += 1));
    });

    for (let index = 0; index < carousel.length; index++) {
        carousel[index].addEventListener("click", function () {
            showSlide((currentSlide = Array.from(carousel).indexOf(this)));
        });
    }

    showSlide(currentSlide);
};