const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    features: [
        { name: "Air Conditioning", isAvailable: true },
        { name: "GPS", isAvailable: true },
        { name: "Bluetooth", isAvailable: false }
    ]
};

const carInfo = document.getElementById("car-info");
const featuresList = document.getElementById("features-list");
const featureNameInput = document.getElementById("feature-name");
const featureAvailabilitySelect = document.getElementById("feature-availability");
const addFeatureButton = document.getElementById("add-feature");

// Display car info
carInfo.textContent = `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;

// Function to display features
function displayFeatures() {
    featuresList.innerHTML = ""; // Clear current list
    car.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = `${feature.name} - ${feature.isAvailable ? "Available" : "Not Available"}`;
        featuresList.appendChild(li);
    });
}

// Display initial features
displayFeatures();

// Add a new feature
addFeatureButton.addEventListener("click", () => {
    const featureName = featureNameInput.value.trim();
    const isAvailable = featureAvailabilitySelect.value === "true";

    if (featureName) {
        car.features.push({ name: featureName, isAvailable });
        displayFeatures(); // Refresh the feature list
        featureNameInput.value = ""; // Clear input field
    }
});
