document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".expand-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const nestedList = this.nextElementSibling;
            nestedList.style.display = nestedList.style.display === "block" ? "none" : "block";
        });
    });
});


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll(".slide");
    const offset = -currentSlide * 100;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${offset}%)`;
    }
}