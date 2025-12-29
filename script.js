document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility on button click
menuToggle.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    navLinks.classList.toggle('show');
});

// Close the menu if clicking anywhere outside
document.addEventListener('click', function () {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});



//menu bar click option
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  });
// JavaScript to shrink the navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});


// Countdown timer script
const eventDate = new Date("February 06, 2025 00:00:00").getTime();
const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
};

setInterval(countdown, 1000);

        // JavaScript for slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual control for next/prev buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function() {
    showSlidesManually(-1);
});

next.addEventListener("click", function() {
    showSlidesManually(1);
});

function showSlidesManually(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Manual control for dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index + 1;
        showSlidesManually(0); // Trigger manual slide show
    });
});

// Function to get the current date in a readable format
function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
}

// Update footer when a change is made
function updateFooter() {
    const lastUpdatedElement = document.getElementById('last-updated');
    lastUpdatedElement.textContent = getCurrentDate();
}

// Monitor changes in the document
document.addEventListener('input', updateFooter);
document.addEventListener('click', updateFooter);
