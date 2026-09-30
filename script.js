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
const packingSearch = document.getElementById("packing-search");

const tripPlanner = document.querySelector(".trip-planner");
const tripSummary = document.querySelector(".trip-summary");
const packingDashboard = document.querySelector(".packing-dashboard");
const resetTripSection = document.querySelector(".reset-trip");

function filterPackingItems(searchTerm) {
    const categories = document.querySelectorAll(".packing-category");

    categories.forEach(function (category) {
        const labels = category.querySelectorAll("label");

        labels.forEach(function (label) {
            label.classList.remove("search-first-match");

            const itemName = label.textContent
                .replace("×", "")
                .trim()
                .toLowerCase();

            label.style.display = itemName.includes(searchTerm)
                ? "flex"
                : "none";
        });

        const firstMatch = Array.from(labels).find(function (label) {
            const itemName = label.textContent
                .replace("×", "")
                .trim()
                .toLowerCase();

            return searchTerm !== "" && itemName.includes(searchTerm);
        });

        if (firstMatch) {
            firstMatch.classList.add("search-first-match");
        }
    });
}

packingSearch.addEventListener("input", function () {
    const searchTerm = packingSearch.value.trim().toLowerCase();

    filterPackingItems(searchTerm);
});

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

        const destination = destinationInput.value.trim();
    const days = Number(daysInput.value);

    const weather = document.querySelector(
        'input[name="weather"]:checked'
    );

    if (destination === "") {
        alert("Please enter your destination.");
        return;
    }

    if (!days || days < 1) {
        alert("Please enter a valid number of days.");
        return;
    }

    if (!weather) {
        alert("Please select the weather.");
        return;
    }

    /* SHOW OUTPUT SECTIONS */
    tripPlanner.style.display = "none";
    tripSummary.style.display = "block";
    packingDashboard.style.display = "block";
    resetTripSection.style.display = "block";

    const activities = document.querySelectorAll(
        'input[name="activity"]:checked'
    );

    summaryDestination.textContent = destination;
    summaryDays.textContent = `${days} days`;
    summaryWeather.textContent =
    weather.value.charAt(0).toUpperCase() + weather.value.slice(1);

    const selectedActivities = [];

    activities.forEach(function (activity) {
        selectedActivities.push(activity.value);
    });

    summaryActivities.textContent =
    selectedActivities.length > 0
        ? selectedActivities
            .map(activity => activity.charAt(0).toUpperCase() + activity.slice(1))
            .join(", ")
        : "-";

/* PACKING LIST */

const outfits = [
    days === 1 ? "1 T-shirt" : days <= 3 ? "2 T-shirts" : days <= 6 ? "4 T-shirts" : "5 T-shirts",
    days === 1 ? "1 Casual outfit" : days <= 3 ? "1 Casual outfit" : days <= 6 ? "2 Casual outfits" : "3 Casual outfits",
    days === 1 ? "1 Sleepwear" : days <= 3 ? "2 Sleepwear" : "Sleepwear",
    days === 1 ? "1 set of underwear" : days <= 3 ? "3 sets of underwear" : "Underwear"
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

    switch (weather.value) {

        case "sunny":
            weatherItems.push("Sunglasses");
            weatherItems.push("Sunscreen");
            weatherItems.push("Cap");
            break;

        case "rainy":
            weatherItems.push("Umbrella");
            weatherItems.push("Raincoat");
            break;

        case "cold":
            weatherItems.push("Jacket");
            weatherItems.push("Warm clothes");
            break;

        default:
            break;
    }
} 

/* Activity Items */ 
        
const activityItems = [];

if (selectedActivities.length > 0) {

    let i = 0;

    do {
        const activity = selectedActivities[i];

        if (activity === "beach") {
            activityItems.push("Swimwear");
            activityItems.push("Beach towel");
            activityItems.push("Flip-flops");

        } else if (activity === "sightseeing") {
            activityItems.push("comfortable walking shoes");
            activityItems.push("sunglasses");
            activityItems.push("camera");

        } else if (activity === "party") {
            activityItems.push("Party outfit");

        } else if (activity === "hiking") {
            activityItems.push("Hiking shoes");
            activityItems.push("Backpack");
            activityItems.push("Water bottle");

        } else if (activity === "culture") {
            activityItems.push("Comfortable shoes");
            activityItems.push("Modest outfit");

        } else if (activity === "shopping") {
            activityItems.push("Extra bag");

        } else if (activity === "wellness") {
            activityItems.push("Comfortable clothes");
            activityItems.push("Personal care items");

        } else if (activity === "adventure") {
            activityItems.push("Sports shoes");
            activityItems.push("Small backpack");

        } else if (activity === "roadtrip") {
            activityItems.push("Travel pillow");
            activityItems.push("Snacks");
            activityItems.push("Map or GPS device");

        } else if (activity === "nightlife") {
            activityItems.push("Night-out outfit");

        } else if (activity === "dining") {
            activityItems.push("Dinner outfit");

        } else if (activity === "business") {
            activityItems.push("Formal outfit");
            activityItems.push("Notebook");

        } else if (activity === "camping") {
            activityItems.push("Tent");
            activityItems.push("Sleeping bag");
        }
        i++;

    } while (i < selectedActivities.length);
}

const uniqueWeatherItems = [...new Set(weatherItems)];
const uniqueActivityItems = [...new Set(activityItems)];
  
uniqueWeatherItems.sort();
uniqueActivityItems.sort();

/* PACKING LIST */

function renderPackingItems(items, list) {
    list.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        const label = document.createElement("label");

        label.innerHTML = `<input type="checkbox"> ${items[i]}<button type="button" class="remove-item">×</button>`;

        list.appendChild(label);
    }
}
        
renderPackingItems(outfits, outfitsList);
renderPackingItems(footwear, footwearList);
renderPackingItems(travelEssentials, travelList);
renderPackingItems(electronics, electronicsList);
renderPackingItems(uniqueWeatherItems, weatherList);
renderPackingItems(uniqueActivityItems, activityList);

packingSearch.value = "";

/* PACKING PROGRESS - CHECKBOX EVENTS */
const checkboxes = document.querySelectorAll("#packing-list input");

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function() {
        updateProgress();
        saveTripData();
    });
});

updateProgress();
saveTripData();
});

/* packing progress */
    const progressText = document.getElementById("progress-text");
    const progressPercentage = document.getElementById("progress-percentage");
    const progressFill = document.getElementById("progress-fill");
    const totalItemsText = document.getElementById("total-items");
    const packedItemsText = document.getElementById("packed-items");
    const remainingItemsText = document.getElementById("remaining-items");

function updateProgress() {
    const checkboxes = document.querySelectorAll("#packing-list input");

    const total = checkboxes.length;
    
    let packed = 0;
    let i = 0;

    while (i < checkboxes.length) {
        if (checkboxes[i].checked) {
            packed++;
        }

        i++;
    }

    const percentage = total
        ? Math.min(100, Math.max(0, Math.round((packed / total) * 100)))
        : 0;

    progressText.textContent = 
    packed === total && total > 0
        ? "All items packed!"
        : `${packed} / ${total} ${total === 1 ? "item" : "items"} packed`;

    progressPercentage.textContent = `${percentage} %`;
    progressFill.style.width = `${percentage}%`;

    updatePackingStats();
}

function updatePackingStats() {
    const checkboxes = Array.from(
        document.querySelectorAll("#packing-list input")
    );

    const packed = checkboxes.reduce(function (count, checkbox) {
        return checkbox.checked ? count + 1 : count;
    }, 0);

    const total = checkboxes.length;
    const remaining = total - packed;

    totalItemsText.textContent = total;
    packedItemsText.textContent = packed;
    remainingItemsText.textContent = remaining;
}

/* ADD CUSTOM ITEM */
const addItemButton = document.getElementById("add-item-button");
const addItemForm = document.getElementById("add-item-form");
const addItemInput = document.getElementById("add-item-input");
const addItemCategory = document.getElementById("add-item-category");

addItemButton.addEventListener("click", function () {
    addItemForm.style.display = "flex";
    addItemCategory.value = "activity";
    addItemInput.focus();
});

addItemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = addItemInput.value.trim();

    if (item !== "") {

    const categoryLists = {
            outfits: outfitsList,
            footwear: footwearList,
            weather: weatherList,
            travel: travelList,
            electronics: electronicsList,
            activity: activityList
        };

        let alreadyExists = false;

        for (const [categoryName, categoryList] of Object.entries(categoryLists)) {

            if (categoryName === addItemCategory.value) {

                 const labels = categoryList.querySelectorAll("label");

               
                for (const label of labels) {
                    const existingItem = label.textContent
                        .replace("×", "")
                        .trim()
                        .toLowerCase();

                    if (existingItem === item.toLowerCase()) {
                        alreadyExists = true;
                        break;
                    }
                }

                 if (alreadyExists) {
                  break;
                }
        }
}

        if (alreadyExists) {
        alert("This item is already on your list.");
        return;
        }

        const label = document.createElement("label");

        label.innerHTML = `<input type="checkbox"> ${item}<button type="button" class="remove-item">×</button>`;

        categoryLists[addItemCategory.value].appendChild(label);

        const newCheckbox = label.querySelector("input");
        newCheckbox.addEventListener("change", function(){
             updateProgress();
             saveTripData();
        });

        addItemForm.reset();
        addItemForm.style.display = "none";

        updateProgress();
        saveTripData();
        filterPackingItems(packingSearch.value.trim().toLowerCase());
    }
});

document.getElementById("packing-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
        event.target.closest("label").remove();
        updateProgress();
        saveTripData();
        filterPackingItems(packingSearch.value.trim().toLowerCase());
    }
});

/* reset trip */
resetTrip.addEventListener("click", function() {
    tripForm.reset();

    localStorage.removeItem("tripData");

    /* HIDE OUTPUT SECTIONS */
    tripPlanner.style.display = "block";
    tripSummary.style.display = "none";
    packingDashboard.style.display = "none";
    resetTripSection.style.display = "none";

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

    addItemForm.reset();
    addItemForm.style.display = "none";
    packingSearch.value = "";

    updateProgress();
});

function saveTripData() {
    const tripData = {
        destination: summaryDestination.textContent,
        days: summaryDays.textContent,
        weather: summaryWeather.textContent,
        activities:summaryActivities.textContent,
        items: []
    };

    const packingItems = document.querySelectorAll("#packing-list label");

    packingItems.forEach(function (label) {
        const checkbox = label.querySelector("input");

        const itemName = Array.from(label.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent.trim())
            .join(" ");

        tripData.items.push({
            name: itemName,
            category: label.parentElement.id,
            checked: checkbox.checked
        });
    });

    localStorage.setItem("tripData", JSON.stringify(tripData));
}

/* load saved trip */
function loadTripData() {
    const savedData = localStorage.getItem("tripData");

    if (!savedData) {
        return;
    }

    const tripData = JSON.parse(savedData);

    tripPlanner.style.display = "none";
    tripSummary.style.display = "block";
    packingDashboard.style.display = "block";
    resetTripSection.style.display = "block";

    summaryDestination.textContent = tripData.destination;
    summaryDays.textContent = tripData.days;
    summaryWeather.textContent = tripData.weather;
    summaryActivities.textContent = tripData.activities;

    outfitsList.innerHTML = "";
    footwearList.innerHTML = "";
    weatherList.innerHTML = "";
    travelList.innerHTML = "";
    electronicsList.innerHTML = "";
    activityList.innerHTML = "";

    const categoryLists = {
        "outfits-list": outfitsList,
        "footwear-list": footwearList,
        "weather-list": weatherList,
        "travel-list": travelList,
        "electronics-list": electronicsList,
        "activity-list": activityList
    };

    tripData.items.forEach(function (item) {
        const label = document.createElement("label");

        label.innerHTML = `
            <input type="checkbox">
            ${item.name}
            <button type="button" class="remove-item">×</button>
        `;

        const checkbox = label.querySelector("input");
        checkbox.checked = item.checked;

        categoryLists[item.category].appendChild(label);

        checkbox.addEventListener("change", function () {
            updateProgress();
            saveTripData();
        });
    });

    updateProgress();
}

loadTripData();