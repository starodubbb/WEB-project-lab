
//CAROUSEL
const slidesContainer = document.querySelector('.carousel');
const slides = slidesContainer.querySelectorAll('li');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const maxScrollWidth = slidesContainer.scrollWidth - slidesContainer.clientWidth;
let lengthAllSlides = slides.length * slides[0].clientWidth;
const oneMarginWidth = (slidesContainer.scrollWidth - lengthAllSlides) / slides.length / 2;

nextButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (slidesContainer.scrollLeft >= maxScrollWidth) {
        slidesContainer.scrollLeft = 0;
    } else {
        slidesContainer.scrollLeft += (slideWidth + 2 * oneMarginWidth);
    }
});

prevButton.addEventListener('click', () => {
    const slideWidth = slides[0].clientWidth;
    if (slidesContainer.scrollLeft <= 0) {
        slidesContainer.scrollLeft = maxScrollWidth;  
    } else {  
        slidesContainer.scrollLeft -= (slideWidth + 2 * oneMarginWidth);
    }
});

//POPUP
const openButton = document.querySelector('.info-panel .button');
const closeButton = document.querySelector('#close-popup');
const popupContainer = document.querySelector('.popup-container');

openButton.addEventListener('click', () => popupContainer.style.display = "block");
closeButton.addEventListener('click', () => popupContainer.style.display = "none");






