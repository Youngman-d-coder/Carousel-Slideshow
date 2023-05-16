var currentIndex = 1;
var interval = 2000; // 2 seconds

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

currentIndex = 0;
function setSlides() {
    displaySlides(currentIndex += 1);
}

window.onload = function() {
    setInterval(setSlides, interval);
};
