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

/* TRIP SUMMARY */

const summaryDestination = document.getElementById("summary-destination");
const summaryDays = document.getElementById("summary-days");
const summaryWeather = document.getElementById("summary-weather");
const summaryActivities = document.getElementById("summary-activities");

tripForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = destinationInput.value;
    const days = daysInput.value;

    const weather = document.querySelector(
        'input[name="weather"]:checked'
    );

    const activities = document.querySelectorAll(
        'input[name="activity"]:checked'
    );

    summaryDestination.textContent = destination;
    summaryDays.textContent = `${days} days`;
    summaryWeather.textContent = weather ? weather.value : "-";

    const selectedActivities = [];

    activities.forEach(function (activity) {
        selectedActivities.push(activity.value);
    });

    summaryActivities.textContent =
        selectedActivities.length > 0
            ? selectedActivities.join(", ")
            : "-";
});