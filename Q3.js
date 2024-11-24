const car = { make: "Toyota", model: "Corolla", year: 2020 };
const carInfo = document.getElementById("car-info");

carInfo.textContent = `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
