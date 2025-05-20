// === Carousel logic ===
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

// Auto-slide every 10 seconds
let slideTimer = setInterval(nextSlide, 10000);

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 10000);
}

// Initialize the first slide
showSlide(currentIndex);
