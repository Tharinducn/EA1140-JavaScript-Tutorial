const fruits = ["Apple", "Banana", "Orange"];
const ul = document.getElementById("fruit-list");

fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
});
