const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const line = document.querySelector(".line");
const squares = document.querySelectorAll(".squares");
const carouselSlide = document.querySelector(".carousel-slide");
const slides = document.querySelectorAll(".slide");

let counter = 1;
let slideCounter = 0;
let width = slides[0].clientWidth;

next.addEventListener('click', function() {
    if(slideCounter < 2) {
        carouselSlide.style.transition = `transform 0.4s ease-in-out`;
        slideCounter++;
        carouselSlide.style.transform = `translateX(${-width*slideCounter}px)`;
    }
    if(slideCounter == 2){
        next.style.display = "none";
    }
    if(slideCounter != 0) {
        prev.style.display = "block";
    }

    if(counter < 3) {
        counter++;
    } 
    if(counter === 2) {
        squares[0].style.transform = `scale(1, 1)`;
        squares[0].style.background = "greenyellow";
        squares[1].style.transform = `scale(1.4, 1.4)`;
        squares[1].style.background = "yellow";
        line.style.background = `linear-gradient(to right, greenyellow 0%, greenyellow 51%, white 51%,  white 100%)`;
    }
    if(counter === 3) {
        squares[1].style.transform = `scale(1, 1)`;
        squares[2].style.transform = `scale(1.4, 1.4)`;
        squares[1].style.background = "greenyellow";
        squares[2].style.background = "yellow";
        line.style.background = `linear-gradient(to right, greenyellow 0%, greenyellow 100%)`;
    }

})

prev.addEventListener('click', function() {
    if(slideCounter > 0) {
        carouselSlide.style.transition = `transform 0.4s ease-in-out`;
        slideCounter--;
        carouselSlide.style.transform = `translateX(${+(-width*slideCounter)}px)`;
    }
    if(slideCounter != 2){
        next.style.display = "block";
    }
    if(slideCounter == 0) {
        prev.style.display = "none";
    }

    if(counter > 1) {
        counter--;
    } 
    if(counter === 2) {
        squares[1].style.background = "yellow";
        squares[1].style.transform = `scale(1.4, 1.4)`;
        squares[2].style.transform = `scale(1, 1)`;
        squares[2].style.background = "white";
        line.style.background = `linear-gradient(to right, greenyellow 0%, greenyellow 51%, white 51%, white 100%)`;
    }
    if(counter === 1) {
        squares[0].style.transform = `scale(1.4, 1.4)`;
        squares[0].style.background = "yellow";
        squares[1].style.transform = `scale(1, 1)`;
        squares[1].style.background = "white";
        squares[2].style.background = "white";
        line.style.background = `linear-gradient(to right, white 0%, white 100%)`
    }
})