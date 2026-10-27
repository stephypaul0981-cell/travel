
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

// Hero slider
const slides = [
    {
        title: "TO TRAVEL IS TO LIVE",
        subtitle: "You Don't Need Magic to Disappear. All you need is a destination."
    },
    {
        title: "EXPLORE THE WORLD",
        subtitle: "Discover new places and create wonderful memories."
    },
    {
        title: "YOUR NEXT ADVENTURE",
        subtitle: "Your perfect holiday starts here."
    }
];

let currentSlide = 0;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    document.getElementById("hero-title").textContent =
        slides[currentSlide].title;

    document.getElementById("hero-subtitle").textContent =
        slides[currentSlide].subtitle;
}

document.querySelector(".previous").addEventListener("click", function () {
    showSlide(currentSlide - 1);
});

document.querySelector(".next").addEventListener("click", function () {
    showSlide(currentSlide + 1);
});

// Holiday search
document.getElementById("trip-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const date = document.getElementById("travel-date").value;

    document.getElementById("search-message").textContent =
        "Your search: " + destination + " on " + date;
});

// Holiday type selection
const descriptions = {
    "Cruise": "Cruise — enjoy the ocean and beautiful ports.",
    "City Breaks": "City Breaks — explore cities and culture.",
    "Honeymoon": "Honeymoon — make memories that last a lifetime.",
    "Adventure": "Adventure — discover exciting new experiences.",
    "Safari": "Safari — explore wildlife and nature.",
    "Beach": "Beach — relax beside the sea."
};

document.querySelectorAll(".type-item").forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelectorAll(".type-item").forEach(function (item) {
            item.classList.remove("active-type");
        });

        button.classList.add("active-type");

        const type = button.textContent.trim();

        document.getElementById("type-message").textContent =
            descriptions[type];
    });
});

// Newsletter
document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("newsletter-message").textContent =
        "Thank you for subscribing!";

    this.reset();
});

// Search icon
const searchButton = document.querySelector(".search-button");

if (searchButton) {
    searchButton.addEventListener("click", function () {
        document.getElementById("holiday-search").scrollIntoView({
            behavior: "smooth"
        });
    });
}
