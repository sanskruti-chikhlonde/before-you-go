const tripForm = document.getElementById("trip-form");
const destinationInput = document.getElementById("destination");
const daysInput = document.getElementById("days");


/* THEME TOGGLE */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    if (document.body.dataset.theme === "dark") {
        document.body.dataset.theme = "";
        themeToggle.textContent = "☀️";
    } else {
        document.body.dataset.theme = "dark";
        themeToggle.textContent = "🌙";
    }
});