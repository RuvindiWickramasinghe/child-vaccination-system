const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cardContainer = document.querySelector('.card-container');

let currentIndex = 0; // Index of the first visible card
const visibleCards = 3; // Number of visible cards
const cardWidth = cardContainer.firstElementChild.offsetWidth + 20; // Width of one card including gap
const totalCards = cardContainer.children.length;

// Function to update the slider with smooth transitions
function updateSlider() {
    const offset = -(currentIndex * cardWidth); // Calculate the translation value
    cardContainer.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    cardContainer.style.transform = `translateX(${offset}px)`;
}

// Move cards right (next)
function slideRight() {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateSlider();
}

// Move cards left (optional, for the left arrow button)
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - visibleCards; // Loop to the last set
    }
    updateSlider();
});

// Add event listener to the right arrow button
rightArrow.addEventListener('click', slideRight);

// Set auto-slide interval (e.g., every 3 seconds)
let autoSlideInterval = setInterval(slideRight, 3000);

// Optional: Pause auto-slide on mouseover and resume on mouseout
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
sliderContainer.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(slideRight, 3000);
});

