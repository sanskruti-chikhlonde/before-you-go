const tripForm = document.getElementById("trip-form");
const destinationInput = document.getElementById("destination");
const daysInput = document.getElementById("days");

const activityList = document.getElementById("activity-list");
const resetTrip = document.getElementById("reset-trip");

const outfitsList = document.getElementById("outfits-list");
const footwearList = document.getElementById("footwear-list");
const weatherList = document.getElementById("weather-list"); 
const travelList = document.getElementById("travel-list");
const electronicsList = document.getElementById("electronics-list");

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

/* PACKING LIST */

const outfits = [
    "T-shirts",
    "Casual outfits",
    "Sleepwear",
    "Underwear"
];

const footwear = [
    "Comfortable shoes",
    "Sandals"
];

const travelEssentials = [
    "ID / Documents",
    "Wallet",
    "Toiletries",
    "Water bottle"
];

const electronics = [
    "Phone charger",
    "Power bank",
    "Earphones"
];

/* WEATHER ITEMS */
    const weatherItems = [];

    if (weather) {

        if (weather.value === "sunny") {
            weatherItems.push("Sunglasses");
            weatherItems.push("Sunscreen");
            weatherItems.push("Cap");
        }

        if (weather.value === "rainy") {
            weatherItems.push("Umbrella");
            weatherItems.push("Raincoat");
        }

        if (weather.value === "cold") {
            weatherItems.push("Jacket");
            weatherItems.push("Warm clothes");
        }

    }

    /* Activity Items */        
    const activityItems = [];

    selectedActivities.forEach(function (activity) {
        if (activity === "beach") {
            activityItems.push("Swimwear");
            activityItems.push("Beach towel");
            activityItems.push("Flip-flops");
        }

        if (activity === "sightseeing") {
            activityItems.push("comfortable walking shoes");
            activityItems.push("sunglasses");
            activityItems.push("camera");
        }

        if (activity === "party") {
            activityItems.push("Party outfit");
        }

        if (activity === "hiking") {
            activityItems.push("Hiking shoes");
            activityItems.push("Backpack");
            activityItems.push("Water bottle");
        }

        if (activity === "culture") {
            activityItems.push("Comfortable shoes");
            activityItems.push("Modest outfit");
        }

        if (activity === "shopping") {
            activityItems.push("Extra bag");
        }

        if (activity === "wellness") {
            activityItems.push("Comfortable clothes");
            activityItems.push("Personal care items");
        }

        if (activity === "adventure") {
            activityItems.push("Sports shoes");
            activityItems.push("Small backpack");
        }

        if (activity === "roadtrip") {
            activityItems.push("Travel pillow");
            activityItems.push("Snacks");
            activityItems.push("Map or GPS device");
        }

        if (activity === "nightlife") {
            activityItems.push("Night-out outfit");
        }

        if (activity === "dining") {
            activityItems.push("Dinner outfit");
        }

        if (activity === "business") {
            activityItems.push("Formal outfit");
            activityItems.push("Notebook");
        }

        if (activity === "camping") {
            activityItems.push("Tent");
            activityItems.push("Sleeping bag");
        }
    });

outfitsList.innerHTML = outfits
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");

footwearList.innerHTML = footwear
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");

travelList.innerHTML = travelEssentials
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");

electronicsList.innerHTML = electronics
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");
weatherList.innerHTML = weatherItems
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");
activityList.innerHTML = activityItems
    .map(item => `<label><input type="checkbox"> ${item}</label>`)
    .join("");

/* PACKING PROGRESS - CHECKBOX EVENTS */
const checkboxes = document.querySelectorAll("#packing-list input");

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateProgress);
});

updateProgress();
});

/* packing progress */
const progressText = document.getElementById("progress-text");
        const progressPercentage = document.getElementById("progress-percentage");
        const progressFill = document.getElementById("progress-fill");

function updateProgress() {
    const checkboxes = document.querySelectorAll("#packing-list input");

    const total = checkboxes.length;
    const packed = document.querySelectorAll("#packing-list input:checked").length;
    
    const percentage = total
        ? Math.round((packed / total) * 100)
        : 0;

    progressText.textContent = `${packed} / ${total} items packed`;
    progressPercentage.textContent = `${percentage} %`;
    progressFill.style.width = `${percentage}%`;
}

/* custom item */
const customItemForm = document.getElementById ("custom-item-form");
const customItemInput = document.getElementById("custom-item-input");

customItemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = customItemInput.value.trim();

    if (item !== "") {

        const label = document.createElement("label");

        label.innerHTML = `<input type="checkbox"> ${item}`;

        activityList.appendChild(label);

        customItemInput.value = "";

        const newCheckbox = label.querySelector("input");

        newCheckbox.addEventListener("change", updateProgress);

        updateProgress();
    }
    
});

/* reset trip */
resetTrip.addEventListener("click", function() {

    tripForm.reset();

    summaryDestination.textContent= "-";
    summaryDays.textContent= "-";
    summaryWeather.textContent= "-";
    summaryActivities.textContent= "-";

    outfitsList.innerHTML = "";
    footwearList.innerHTML = "";
    travelList.innerHTML = "";
    electronicsList.innerHTML = "";
    weatherList.innerHTML = "";
    activityList.innerHTML = "";

    updateProgress();
});